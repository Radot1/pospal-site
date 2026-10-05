# Mobile homepage V4

Delivered 2026-10-05 as an isolated local review prototype. Nothing published.

## Preview

Serve the repository root: `python -m http.server 8765 --bind 127.0.0.1`.

- Main: http://127.0.0.1:8765/prototype/homepage-mobile-v4/
- Alternate opening: http://127.0.0.1:8765/prototype/homepage-mobile-v4/opening-proof-first.html

The alternate is intentionally only an opening comparison, followed by a link to the complete main page. Its copy/offer matches the main opening. Keep these manually authored HTML versions synchronized if revising that copy.

## Decisions

- Impeccable craft/audit, Design Taste, POSPal Voice and SEO Audit applied against the approved plan and prior council findings. Brand retained; no new identity or automatic motion.
- Main sequence: compact product and offer, real staff screenshot, concise workflow plus expandable offline boundary, equipment/no-per-PDA proposition, QR proof, pricing, setup, FAQ and closing action.
- Static real images open in a native modal dialog. Escape/close restores focus; Tab remains on the close control. Normal image links work without JavaScript.
- Root-relative Inter font URLs replace broken prototype-relative loading. Lightweight existing logo. No generated imagery or added asset copies.
- Main retains offer visibility before proof. Alternate exposes the screenshot earlier. Recommendation remains the main sequence for transparent pricing; actual owner comprehension should decide any later switch. No conversion uplift is claimed.
- Desktop screenshot is explicitly a separate example, not the same order as the staff screenshot.
- Mobile handoff points into the existing download page's copy/share area. No new funnel or tracking.

## Isolation and SEO

Only this directory and a targeted graph inventory addition change. Existing homepage, download, guides, older prototypes, shared CSS/JS, robots, sitemap and redirects are untouched.

Both pages have `noindex, nofollow`, production canonical, Greek metadata and one H1. Prototype routes are not linked from the public navigation or sitemap. All important content is static HTML. The seven substantive FAQ topics and fiscal boundaries are retained.

Analytics and consent scripts deliberately do not run in this local review. The footer links to the existing cookie page, where settings are available; its old `#cookie-settings` link was not copied because it is not a real document anchor. This is not a production consent implementation. Promotion would require separate authorization, replacement of the homepage lock, correct indexability, and scoped analytics/consent integration without the floating overlap. Live font fixes, sitemap dates and other production audit findings remain untouched.

## Verification

- Browser checked both routes at 320, 360, 390, 430, 768 and 1280px: no horizontal document overflow. Also inspected a 390×667 short viewport.
- Main at 390px: approximately 7,397px total height versus the audit's 9,681px, about 24% shorter. Browser reserves 15px for its scrollbar. This measures page length, not conversion.
- At 390px proof starts around y=708 in main and y=353 in alternate. These are not universal above-the-fold guarantees.
- Enlarged root text to 200% at 390px: corrected grid min-content overflow and allowed header wrapping; confirmed document width equals client width. Temporary test styles removed.
- Verified image opening, Tab containment, Escape and focus restoration; menu open/Escape; FAQ expansion. Native menu also verified with JavaScript disabled. Static content and download links remain present without JS.
- Reduced-motion emulation checked; page has no automatic motion. Restored emulation, cache and viewport overrides after testing.
- 31 unique local route/asset requests succeeded, including three font files. One H1 per document, no duplicate IDs. Direct installation, printer, QR guide and handoff anchors validated. Cookie destination intentionally uses the page root.
- No browser console warnings/errors in the inspected session. `git diff --check` passed.
- Impeccable detector reviewed: reported pale text against an assumed light background although those elements are on forest panels; spacing warnings ignore child shells; Inter is intentionally retained; empty hidden dialog image obtains its source before opening. These were reviewed in context, not treated as measured failures.
- Screenshots for handoff are outside the repository under the conversation visualization directory. No screenshot archives or temporary test scripts added to Git.

## Limits

No field Core Web Vitals score, screen-reader certification or physical iOS/Android device coverage claimed. Prior PSI request was quota-limited. Real-device review and owner comprehension remain appropriate before any separately authorized release.

## Graph inventory

Added five document/code nodes and six observed load/link/documentation edges to `graphify-out/graph.json`. Preserved the historical graph rather than replacing semantic context with a code-only rebuild. This is a targeted inventory addition, not a full refresh of the older graph's clusters.
