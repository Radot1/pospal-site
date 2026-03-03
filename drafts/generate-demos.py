import argparse
import json
import re
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent


SCRIPT_REPLACEMENTS = [
    ("Total: €", "Σύνολο: €"),
    ("Send Order", "Αποστολή"),
    ("Sending...", "Αποστολή..."),
    ("Quantity for:", "Ποσότητα για:"),
]

HTML_REPLACEMENTS = [
    (">Numpad<", ">Αριθμητικό<"),
    (">Done<", ">Έτοιμο<"),
    (">Sending...<", ">Αποστολή...<"),
    ("Quantity for:", "Ποσότητα για:"),
]

SCRIPT_TAG_PATTERNS = [
    r'<script[^>]+src="\.\/static\/pricing\.js"[^>]*><\/script>',
    r'<script[^>]+src="\.\/static\/js\/qrcode\.min\.js"[^>]*><\/script>',
    r'<script[^>]+src="\/assets\/desktop-support\.js"[^>]*><\/script>',
    r'<script[^>]+src="pospalCore\.js"[^>]*><\/script>',
    r'<script[^>]+src="i18n\.js"[^>]*><\/script>',
    r'<script[^>]+src="\.\/i18n\.js"[^>]*><\/script>',
]

CSS_LINK_PATTERNS = [
    r'<link[^>]+href="\/assets\/desktop-support\.css"[^>]*>',
]

HTML_BLOCK_PATTERNS = [
    r'<a[^>]*class="[^"]*\bui-select-link\b[^"]*"[^>]*>[\s\S]*?<\/a>',
]

ASSET_REWRITES = [
    ("./static/vendor/tailwindcdn.js", "../static/vendor/tailwindcdn.js"),
    ("./static/css/fonts.css", "../static/css/fonts.css"),
    ("./static/vendor/fontawesome/css/all.min.css", "../static/vendor/fontawesome/css/all.min.css"),
]

LINK_REWRITES = [
    ('href="UISelect.html"', 'href="POSPal_Demo_Index.html"'),
    ('href="legal/eula.html"', 'href="#"'),
    ('href="legal/privacy.html"', 'href="#"'),
]


def apply_replacements(text, replacements):
    for old, new in replacements:
        text = text.replace(old, new)
    return text


def replace_done_label(html):
    return re.sub(r">\s*Done\s*<", ">Έτοιμο<", html)


def strip_tags(html, patterns):
    for pattern in patterns:
        html = re.sub(pattern, "", html, flags=re.IGNORECASE)
    return html


def set_lang(html, lang):
    if re.search(r"<html[^>]*lang=", html, flags=re.IGNORECASE):
        html = re.sub(r"<html[^>]*lang=\"[^\"]*\"", f"<html lang=\"{lang}\"", html, count=1, flags=re.IGNORECASE)
    else:
        html = re.sub(r"<html", f"<html lang=\"{lang}\"", html, count=1, flags=re.IGNORECASE)
    return html


def set_title(html, title):
    if re.search(r"<title>.*?</title>", html, flags=re.IGNORECASE | re.DOTALL):
        html = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", html, count=1, flags=re.IGNORECASE | re.DOTALL)
    else:
        html = html.replace("</head>", f"<title>{title}</title>\n</head>")
    return html


def load_demo_script(script_path):
    content = script_path.read_text(encoding="utf-8")
    return apply_replacements(content, SCRIPT_REPLACEMENTS)


def build_i18n_script(locale_path):
    locale_data = json.loads(locale_path.read_text(encoding="utf-8-sig"))
    locale_json = json.dumps(locale_data, ensure_ascii=False)
    return f"""
    <script>
        (function () {{
            const I18N_DICT = {locale_json};
            const t = (key) => {{
                if (!key) return '';
                return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : null, I18N_DICT);
            }};

            function applyTranslations(root) {{
                const scope = root || document;
                scope.querySelectorAll('[data-i18n]').forEach((el) => {{
                    const key = el.getAttribute('data-i18n');
                    const value = t(key);
                    if (value !== null && value !== undefined) {{
                        el.textContent = value;
                    }}
                }});
                scope.querySelectorAll('[data-i18n-attr]').forEach((el) => {{
                    try {{
                        const mapping = JSON.parse(el.getAttribute('data-i18n-attr') || '{{}}');
                        Object.entries(mapping).forEach(([attr, key]) => {{
                            const value = t(key);
                            if (value !== null && value !== undefined) {{
                                el.setAttribute(attr, value);
                            }}
                        }});
                    }} catch (_) {{}}
                }});
            }}

            document.documentElement.lang = 'el';
            document.addEventListener('DOMContentLoaded', () => applyTranslations());
            window.applyPospalTranslations = applyTranslations;
        }})();
    </script>
    """


def build_no_api_script():
    return """
    <script>
        (function () {
            const realFetch = window.fetch ? window.fetch.bind(window) : null;
            window.fetch = (input, init) => {
                const url = (typeof input === 'string') ? input : (input && input.url) || '';
                if (/^\\/api\\//.test(url) || url.includes('workers.dev')) {
                    return Promise.reject(new Error('API calls disabled in demo'));
                }
                if (!realFetch) {
                    return Promise.reject(new Error('Fetch unavailable in demo'));
                }
                return realFetch(input, init);
            };
            window.EventSource = function () {
                return { close() {} };
            };
        })();
    </script>
    """


def build_post_demo_script():
    return """
    <script>
        (function () {
            if (typeof window.showToast === 'function') {
                window.showToast = () => {};
            }
            if (typeof window.openDeviceSettingsQuickModal === 'function') {
                window.openDeviceSettingsQuickModal = () => {};
            }
        })();
    </script>
    """


def extract_handlers(html):
    handlers = set()
    for attr in ("onclick", "onchange", "oninput", "onsubmit", "onkeydown", "onkeyup"):
        for match in re.findall(rf"{attr}=\"([^\"]+)\"", html):
            token = match.strip().split("(")[0].strip()
            if token:
                handlers.add(token)
    return handlers


def extract_functions(html):
    scripts = re.findall(r"<script>([\s\S]*?)</script>", html)
    script_text = "\n".join(scripts)
    names = set(re.findall(r"\bfunction\s+([a-zA-Z_][\w]*)\s*\(", script_text))
    names.update(re.findall(r"window\.([a-zA-Z_][\w]*)\s*=", script_text))
    return names


def build_stub_script(missing):
    if not missing:
        return ""
    lines = [
        "<script>",
        "    (function () {",
        "        const stubs = [",
    ]
    for name in sorted(missing):
        lines.append(f"            '{name}',")
    lines += [
        "        ];",
        "        stubs.forEach((name) => {",
        "            if (name.includes('.')) {",
        "                const parts = name.split('.');",
        "                const root = parts[0];",
        "                const method = parts[1];",
        "                if (!window[root]) {",
        "                    window[root] = {};",
        "                }",
        "                if (typeof window[root][method] !== 'function') {",
        "                    window[root][method] = () => {};",
        "                }",
        "                return;",
        "            }",
        "            if (typeof window[name] !== 'function') {",
        "                window[name] = () => {};",
        "            }",
        "        });",
        "    })();",
        "</script>",
    ]
    return "\n".join(lines) + "\n"


def insert_before_body(html, injection):
    marker = "</body>"
    if marker not in html:
        raise ValueError("Missing </body> tag")
    return html.replace(marker, f"{injection}\n{marker}")


def maybe_rewrite_assets(html, out_path):
    out_parent = Path(out_path).resolve().parent
    if out_parent == SCRIPT_DIR:
        return apply_replacements(html, ASSET_REWRITES)
    return html


def build_demo_html(src_path, demo_script_path, locale_path, title, out_path):
    html = src_path.read_text(encoding="utf-8")
    html = set_lang(html, "el")
    html = set_title(html, title)
    html = maybe_rewrite_assets(html, out_path)
    html = strip_tags(html, HTML_BLOCK_PATTERNS)
    html = strip_tags(html, SCRIPT_TAG_PATTERNS)
    html = strip_tags(html, CSS_LINK_PATTERNS)
    html = apply_replacements(html, LINK_REWRITES)
    html = apply_replacements(html, HTML_REPLACEMENTS)
    html = replace_done_label(html)

    demo_script = load_demo_script(demo_script_path)
    injections = []
    injections.append(build_no_api_script())
    injections.append(f"<script>\n{demo_script}\n</script>")
    injections.append(build_i18n_script(locale_path))
    injections.append(build_post_demo_script())
    html = insert_before_body(html, "\n".join(injections))

    handlers = extract_handlers(html)
    functions = extract_functions(html)
    missing = {h for h in handlers if h not in functions and h != "event.stopPropagation"}
    stub_script = build_stub_script(missing)
    if stub_script:
        html = insert_before_body(html, stub_script)

    out_path.write_text(html, encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description="Generate static POSPal demos (desktop + mobile).")
    parser.add_argument("--app-root", default=r"C:\\Users\\bzoum\\Documents\\GitHub\\pospal-app-private")
    parser.add_argument("--out-dir", default=str(Path(__file__).resolve().parent))
    args = parser.parse_args()

    app_root = Path(args.app_root)
    out_dir = Path(args.out_dir)
    desktop_src = app_root / "POSPalDesktop.html"
    mobile_src = app_root / "POSPal.html"
    locale_path = app_root / "locales" / "el.json"

    demo_scripts = Path(__file__).resolve().parent / "demo-scripts"
    desktop_script = demo_scripts / "desktop.js"
    mobile_script = demo_scripts / "mobile.js"

    if not desktop_src.exists() or not mobile_src.exists():
        raise SystemExit("Missing POSPalDesktop.html or POSPal.html in app root.")
    if not desktop_script.exists() or not mobile_script.exists():
        raise SystemExit("Missing demo-scripts/desktop.js or demo-scripts/mobile.js in pospal-site.")
    if not locale_path.exists():
        raise SystemExit("Missing locales/el.json in app root.")

    out_dir.mkdir(parents=True, exist_ok=True)
    build_demo_html(
        desktop_src,
        desktop_script,
        locale_path,
        "POSPal - Επιτραπέζιο",
        out_dir / "pospal-demo-desktop.html"
    )
    build_demo_html(
        mobile_src,
        mobile_script,
        locale_path,
        "POSPal - Κινητό",
        out_dir / "pospal-demo-mobile.html"
    )

    print("Generated:", out_dir / "pospal-demo-desktop.html")
    print("Generated:", out_dir / "pospal-demo-mobile.html")


if __name__ == "__main__":
    main()
