# Duplicate access and overlapping search intent

Measured 27 September 2026. Findings distinguish identical URL aliases from distinct pages discussing related topics. No pages were rewritten, removed or merged.

## Current intent clusters

| Pages | Relationship | Assessment and next evidence |
|---|---|---|
| `/systima-paraggeliolipsias.html`, `/asyrmati-paraggeliolipsia.html`, `/pda-gia-servitoro/` | Ordering system, wireless implementation and phone/tablet waiter device share product/network/pricing explanations | Highest commercial overlap. Preserve system page as primary broad-commercial destination; inspect GSC query-to-page switching before deciding any change. Wireless and waiter-device sub-intents can legitimately remain separate. |
| `/times.html`, `/systima-paraggeliolipsias.html` | Both discuss the complete system and price | Pricing currently has a longer buyer/cost discussion; the system page is a product/workflow evaluation. Shared price content is not by itself cannibalization. |
| `/`, `/systima-paraggeliolipsias.html` | Brand/product overview versus non-brand commercial acquisition | Expected overlap. Homepage is permanently locked. Do not infer a need to redesign or cross-canonicalize it. |
| `/pda-ti-einai.html`, `/pda-pos-leitourgei.html`, `/pda-gia-servitoro/` | Definition, workflow explanation and choosing/using a staff device | Related vocabulary, distinct stages. The waiter page is substantially commercial/mixed even though the user's reporting groups it with informational pages. Do not merge successful educational pages into sales copy. |
| `/pda-gia-kafeteries.html`, `/paraggelio-lipsia-gia-beach-bar.html` | Venue-specific versions of the same product proposition | Most similar pair by a simple five-word-shingle screen, but cafe counter/table work and beach-bar setting provide different contexts. Two pages do not establish a scaled doorway network. |
| `/guides/app-tour/`, `/guides/settings/`, `/guides/troubleshooting/` | Staff-device setup appears in all three | Different support tasks: first use, configuration and fault diagnosis. Duplication of necessary prerequisites is reasonable. |

All 19 canonical marketing/support pages have unique titles, one nonempty H1 and distinct self-canonicals. There is no conflicting canonical that sends one of these separate pages to another. Neither shared wording nor multiple pages appearing for a query proves harmful cannibalization; GSC page/query changes are needed.

## Exact duplicate URL forms

The seven root `.html` acquisition/pricing pages also serve at their extensionless path with status 200: system, pricing, wireless, PDA definition, PDA how-to, cafe and beach-bar. Each alias declares the `.html` URL as canonical. Adding a slash to the `.html` path or its extensionless version returns 404 in the tested cases.

`/index.html` and eleven directory `index.html` marketing/support aliases return 200 and canonicalize to `/` or their directory form. Slashless existing directories return 301 to slash form. The site therefore has duplicate access, but the HTML canonical signals are consistent. Recommend low-priority server consolidation, not URL renaming.

Guide query routes initially serve the same guide-hub HTML with its canonical, then JavaScript redirects recognized queries to the requested static guide. This is a client-side routing bridge, not a new indexable guide page with its own initial metadata. Five system-page anchors and one download-page anchor still use it. The download file is locked.

The four legal refresh shells share canonical targets with their successors and are `noindex,follow`; their successors are currently `noindex,nofollow`. Those duplicate canonical targets should not be confused with duplicate marketing canonicals.

## Historical overlap and consolidation

Before the June merge, pricing existed at both `/times.html` and `/times-systimatos-parageliolipsias/`; cafes at `/pda-gia-kafeteries.html` and `/pda-gia-kafeteria/`; wireless at `/asyrmati-paraggeliolipsia.html` and `/asyrmati-parageliolipsia-estiasi/`. QR/menu intent appeared at `/qr-menu-estiasis/`, `/qr-menu-gia-estiash.html` and `/menu-estiatoriou.html`.

Consolidating some of these could be reasonable. The defect is that the selected old URLs were deleted while the replacement redirect configuration was not executed by the serving host. Repairing relevant redirects is different from restoring every former page. Some QR/menu acquisition intent is not fully replaced by today's QR setup guide; those map rows require a relevance decision and are not automatically redirected to the homepage.

## Page volume and similarity

The live intended inventory is 19 canonical marketing/conversion/support URLs, including seven individual guides. There is no SEO route generator in package scripts or deployment; pages are stored as static HTML. Historical snapshots show small keyword/audience clusters and shared layouts, not evidence of hundreds or thousands of generated doorway pages.

A supplementary five-word-shingle Jaccard comparison of rendered `main` text (body fallback where necessary) found a maximum similarity of 0.071 between cafe and beach-bar. This is a lexical screening measure, not a Google metric or a measure of semantic intent; hidden accordion answers and boilerplate treatment affect it. It argues against claiming wholesale identical page bodies, not against all possible intent overlap. No minimum-word-count ranking rule was applied. The short download and guide-hub pages have clear utility and should not be called low-value solely because they are short.

## Link depth and orphans

No canonical marketing/support URL has zero incoming links from the measured canonical corpus. All are reachable from the homepage through the measured navigation, with the guide hub supplying the support hierarchy.

Weakest source-page counts are two each for beach-bar, account, app-tour, settings and troubleshooting. PDA how-to and several setup guides have three. The primary commercial page has nine; pricing eight; wireless five; waiter PDA seven; the definition article eight. These count distinct source pages, not repeated links in a footer and main body. See `internal-links.csv` for exact sources.

An internal Graphify page is publicly accessible at `/graphify-out/graph.html`, has no indexing restriction or canonical, and is outside the marketing link graph. This is an accidental public document, not another intended SEO landing page. `/prototype/pda-article/` is also public but explicitly noindex. The new `/arthra/` exists only locally and is live 404; do not label it a live orphan or merge it into the live metrics.

## Disposition

No immediate page merges, cross-canonicals, deletions, copy rewrites or new pages are recommended on this evidence alone. Repair confirmed migration failures first, preserve the currently ranking URL forms, and use exact GSC query/page data to decide whether any surviving commercial overlap is actually harmful.
