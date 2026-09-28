# Final production redirect map

Prepared 27 September 2026. **Specification only: no website, copy, DNS, hosting rules or deployments were changed.** This package supersedes the preliminary audit redirect CSV for implementation decisions. “Approved” below means included in the final recommended set; it is not deployment authorization.

## Counts

| Disposition | Exact source URLs |
|---|---:|
| Permanent 301s | **87** |
| Static path 301s | **45** |
| Query-dependent guide 301s | **42** |
| Retain 404 | **48** |
| Change to 410 | **0** |
| Questionable URLs excluded from 301s pending human review | **11**, already included in the 48 retained 404s |

Counts are HTTPS apex source URLs, before multiplying host/protocol variants. The 45 static entries represent 23 underlying historical resources, including explicit slashless and `index.html` directory counterparts. The 42 query entries represent 14 `guide`/`lesson` selectors across three hub forms: `/guides/`, `/guides`, `/guides/index.html`. These additional counterparts are identified as alias coverage, not claims that each independently received Google impressions.

`cloudflare-bulk-redirects.csv` contains **90 headerless rows**: the 45 static paths for each of `pospal.gr` and `www.pospal.gr`. Scheme-less sources cover HTTP and HTTPS directly, so an HTTP or www request need not bounce through the old apex URL first. The 42 query-dependent rows are deliberately **not** in the Bulk CSV.

## Files

- `production-redirect-map.csv`: only the 87 selected 301s; exact requested columns. Notes classify A (clear equivalent) or B (reasonable successor with the difference explained). Confidence is high for A and medium for B.
- `redirects-to-retain-as-404.csv`: 48 exact URLs with no approved equivalent. `no_equivalent_found=true` means no sufficiently equivalent current resource was established, not that no loosely related page exists. Preserve current 404 responses; do not create a 410 migration in this work.
- `cloudflare-bulk-redirects.csv`: static import file, no header and no BOM. Only selected A/B static redirects.
- `existing-rules-review.csv`: final disposition for every one of the **30** lines in repository `_redirects`, including the non-redirect wildcard rewrite.
- `historical-content-review.json`: deeper review of substantive historical content, looking behind later generic “page moved” shells.
- `live-verification.json`: fresh direct HTTP checks for every listed source and every target, with target canonical/title/content evidence. Automatic HTTP redirect following was disabled.

## Required mappings confirmed

| Historical source | Final canonical target |
|---|---|
| `/times-systimatos-parageliolipsias/` | `/times.html` |
| `/times-systimatos-parageliolipsias` | `/times.html` |
| `/dwrean-dokimi-30-imeron/` | `/download/` |
| `/dwrean-dokimi-30-imeron` | `/download/` |
| `/buy-license.html` | `/times.html` |
| `/installation-guide.html` | `/guides/windows-installation/` |

Explicit historical directory `index.html` aliases are covered too. Existing `.html` canonical destinations are preserved. Healthy extensionless/index aliases of current canonical pages from the preliminary audit are omitted from this migration package: they are a separate optional normalization task, not missing historical content.

## Decisions refined after deeper history review

- **Printer:** `/guides/stisimo-ektypoti/` → `/guides/printer-setup/` is A. Full-history inspection recovered Guide 0's Windows printer preparation and test-print task at `7f2de2c7`; the initial audit had left this unresolved.
- **QR:** `/qr-menu-estiasis/`, `/qr-menu-gia-estiash.html` and `/guides/qr-menu-best-practices.html` → `/guides/qr-menu/` are B. The current guide retains the same POSPal feature, preparing the customer menu, appearance/product information, publication and checking the result. The old commercial presentation and all generic advice are not reproduced; these are reasonable successors, not exact copies. `/guides/proto-menou-kai-qr/` also maps there, with catalogue-entry prerequisites acknowledged.
- **Beach bar:** `/guides/beach-bar-setup.html` → `/paraggelio-lipsia-gia-beach-bar.html` is B. Both discuss pre-season setup, service distances, clear order notes and pre-opening tests. The new page is broader product content but retains those concrete tasks. This does not justify sending every seasonal or cafe guide there.
- **Support:** `/support.html` → `/guides/` is B, consistent with the repository's current support destination and current troubleshooting navigation. The old direct-email presentation is not retained on the hub, so the match is explicitly not class A. This is the only old standalone support contact route mapped to the hub; specialized tasks go to their relevant guides.
- **Homepage prototype:** `/prototype/homepage-v3/` → `/` is A because June's production promotion replaced the root with that homepage direction while deleting the prototype. This and its slashless/index aliases are the only homepage-target family. Other unrelated drafts are not sent to home.
- **Browser demos:** the preliminary audit's demo → download suggestions are **withdrawn from the production set**. An interactive browser demo, especially the mobile version, is not the same visitor experience as a Windows installer. No present canonical interactive replacement was verified. Historical demo chains therefore remain retired rather than being collapsed to an unrelated conversion target.

## Questionable mappings requiring human review

All of these remain 404 and are absent from the Bulk CSV. No review is needed to use the already selected A/B set; this review would be needed only to expand it.

| Sources | Count | Unresolved choice |
|---|---:|---|
| `/POSPalDesktop.html`, `/POSPal_Demo.html`, `/POSPal_Demo_Desktop.html`, `/POSPal_Demo_Index.html`, `/managementComponent.html`, `/pospal-demo-desktop.html`, `/pospal-demo-mobile.html`, `/pospal-demo-coffee-desktop.html`, `/pospal-demo-coffee-mobile.html` | 9 | Whether to accept an intentional browser-demo → installed Windows trial transition. A general download-first business goal does not establish content equivalence. |
| `/qr-menu-demo.html` | 1 | No verified maintained public example menu. The owner-facing QR tutorial is not a customer-facing sample. |
| `/menu-estiatoriou.html` | 1 | Generic menu/price-list structure is only partially covered by the current QR publication tutorial. No sufficiently complete successor selected. |

Other C decisions are firm on the current content: food-truck operational routines, first-week optimization, seasonal organization and cafe service-time measurement have no equivalent retained guide. The remaining retired drafts/prototypes do not have a demonstrated supported public successor. Do not revive their generic hub redirects merely because their last archived version was a redirect shell.

## Cloudflare import semantics

The headerless columns are:

`source_url,target_url,status_code,preserve_query_string,include_subdomains,subpath_matching,preserve_path_suffix`

All rows use status `301` and explicitly set all four booleans to `FALSE`. Consequently:

- Only the exact listed paths match; no descendants are swept into the rule.
- Only apex and explicit www hosts are covered; `menu.pospal.gr` and other subdomains are not implicitly matched.
- Queries are dropped, including tracking parameters. This is deliberate to land directly on the canonical target and avoid passing a retired routing selector into a guide page and triggering another browser redirect. Preserving selected tracking parameters would require a separately reviewed query-aware implementation.
- Targets are full `https://pospal.gr/...` canonical URLs. No target is an old alias or another source in this map.

This matches Cloudflare's documented CSV layout and no-header requirement. Bulk Redirect source URLs cannot contain query strings. Sources without a scheme match both HTTP and HTTPS. [Cloudflare CSV format](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/csv-file-format/), [supported URL components](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/url-components/), [redirect parameters](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/parameters/).

The file is import-ready data, not a deployed rule. At implementation time, the traffic-serving edge must actually evaluate it, and existing normalization rules must not first redirect a request back to an old URL. This report changes no DNS, proxy state or rule order.

## Query-aware guide rules: separate implementation specification

For hosts `pospal.gr` and `www.pospal.gr`, on either HTTP or HTTPS, handle these **three exact paths**: `/guides`, `/guides/`, `/guides/index.html`. Match selectors, not a raw full-query-string equality, so parameter order or an extra tracking parameter does not bypass the mapping.

1. Read query values with the existing script's `URLSearchParams.get` semantics: case-sensitive names/values, decoded values, first occurrence for repeated keys.
2. If `lesson` is one of `0`–`6`, use its mapped target. A valid `lesson` takes precedence over `guide`, as in current `academy.js`.
3. Otherwise, if `guide` is one of the seven recognized slugs, use that target.
4. Return one 301 directly to the HTTPS non-www static canonical guide and remove the query string.
5. Unknown values and requests with neither selector are not matched by these migration rules. The ordinary guide hub must never be blanket-redirected to an individual guide. Do not include a static Bulk Redirect for `/guides/`.

| lesson | guide | Target |
|---|---|---|
| 0 | printer-setup | `/guides/printer-setup/` |
| 1 | windows-installation | `/guides/windows-installation/` |
| 2 | app-tour | `/guides/app-tour/` |
| 3 | settings | `/guides/settings/` |
| 4 | qr-menu | `/guides/qr-menu/` |
| 5 | account | `/guides/account/` |
| 6 | troubleshooting | `/guides/troubleshooting/` |

Apply these before any general slash, index-file, protocol or www normalization that would add a hop. The rows describe fixed outcomes; Cloudflare Single Redirects, a Worker or another query-aware server mechanism can implement them later. Nothing is implemented here.

## Chain and exclusion checks

Every chosen target was freshly verified to return 200 and declare itself canonical. The legal successors remain noindex intentionally; that does not invalidate their legal migration redirects. No target is itself a source in this package, and no current canonical route is reassigned.

Known old support/installation/account/menu aliases now point straight to the current relevant page, bypassing their historical guide-hub or query intermediary. `/prototype/homepage-v3` currently performs a slash redirect to a missing prototype; the final map takes it straight to `/`. For demo-to-demo chains, there is no verified current equivalent to terminate at, so each retired alias is explicitly retained as 404 instead of redirecting to another retired alias.

The `_redirects` `/s/* → /index.html 200` line is a rewrite, not a historical permanent redirect. It has no demonstrated per-path content mapping and is excluded. Unknown `/s/...` requests keep their current error behavior; `/s/audit-check` was only an audit probe, not an invented production redirect row.

The local-only `/arthra/` and prototype proposal are unpublished work, not deleted historical pages. They are outside this migration map. The public noindex PDA prototype is also outside the requested 404/client-redirect scope. No changes to current canonical pages, their copy, or their URLs are proposed.
