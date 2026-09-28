# POSPal SEO decline audit

Audit date: 27 September 2026. Scope: repository, locally available Git history and live `pospal.gr`. Audit only: no website, configuration, redirect, copy, sitemap or Graphify files were changed. Only this audit package was created with permission. Existing uncommitted work was preserved.

## Finding

**The strongest repository-backed explanation to investigate first is a failed URL migration during the June redesign.** Commit `1615fbb` on June 26 deleted established commercial and support URLs and added `_redirects` rules. Merge `9cda0b5` brought the redesign into `main` on June 28. The site deploys to GitHub Pages, which does not execute this file; `README.md:10` explicitly acknowledges that. Live GET requests now find **25 of its 29 exact redirect sources returning 404 and the other four returning 200 meta-refresh shells. None returns the configured HTTP 301.** The additional `/s/*` 200 rewrite also does not execute: `/s/audit-check` returns 404.

This is a confirmed defect, temporally consistent with the supplied comparison windows. It is **not proof that it accounts for the entire decline**. The actual GSC exports, query-level changes, indexed/crawled versions and deployment logs were not supplied. No algorithmic penalty or manual action is established.

The surviving commercial pages are accessible and technically indexable today. The live sitemap is healthy at its current scope: **19/19 canonical URLs return 200, have a single matching canonical, and have no HTML or HTTP noindex directive.** None of the four reported old URLs remains in the live sitemap. Current site navigation is considerably healthier than the historical migration.

## Deliverables and evidence

- `indexable-marketing-urls.md` and `.csv`: complete 19-page live marketing, conversion and support table, including titles, H1s, status, canonical, sitemap membership and inlinks.
- `redirect-map.csv`: proposed dispositions, not active rules. Rows with status 404 and an empty destination mean **retain 404 pending relevance verification**, not redirect somewhere indiscriminately.
- `broken-links.csv`: distinguishes failed legacy redirect sources, unpublished local destinations/assets and unused CSS fallback references. It is not a list of 45 broken live navigation links.
- `duplicate-or-overlapping-pages.md`: URL aliases, search-intent overlap, thin-content and orphan assessment.
- `git-seo-changes.md`: dated migration/content/navigation findings and limitations.
- `current-url-inventory.csv`: all 41 local HTML routes plus the separately verified public Graphify HTML report.
- `all-static-publication-candidates.csv`: 373 existing repository file candidates, including assets/documents/configuration; no claim that every local or hidden file is deployed.
- `historical-url-inventory.csv`: 86 distinct historical HTML paths recovered from local Git refs, with current existence/status and redirect coverage.
- `url-references.csv`, `legacy-url-references.csv`: source locations for URL references in HTML, JS, CSS, JSON, XML, configuration, documentation and the existing graph. Documentation references are separated from executable/public navigation.
- `internal-links.csv`, `structured-data.csv` and JSON evidence files: reproducible measurements supporting the tables.

No screenshots, test installations, commits, pushes, deployments or new SEO pages were made. This package is local audit material and should not be published with the site's upload-everything workflow.

## Method and limits

The site is static HTML/CSS/JS, not a template-generated route application. `package.json` contains development dependencies, with no site build or sitemap-generation command. `.github/workflows/static.yml` uploads the repository root. We inspected `AGENTS.md`, `MARKETING_PLAN.md`, README, deployment scripts, source files and prior SEO records. The existing graph was used read-only for orientation, with vocabulary `redirect`, `sitemap`, `canonical`, `seo`, `deployment`, `pricing`; graph claims were checked against source and live responses. No graph rebuild, learning write or installation was run.

Live checks used direct GET requests with redirects disabled so 301/404/200 could not be confused with a final response. The initial crawl covered 70 routes; additional evidence covers 158 host/path/history variants, seven extra probes and 69 asset/link targets, with some overlap. Chromium rendered all 19 canonical marketing/support pages and representative client redirects. JSON-LD, microdata and RDFa were examined in the rendered DOM as well as source. We did not run Google's Rich Results Test, access Search Console, measure Core Web Vitals or inspect private server logs.

“Indexable” means the measured technical signals permit indexing; it does not mean Google has indexed or selected the declared canonical. Internal-link counts use literal anchors from the 19 live canonical pages, exclude self-links and count distinct referring pages separately. Legacy query routes remain distinct from their eventual destinations. Historical counts use the explicitly described Git snapshot corpus, not GSC or backlink counts.

The working tree was already dirty on `main`. In particular, `/arthra/` and its assets exist locally but are not live. Local edits cannot be assumed to have caused live ranking changes. The August “local only” note in MARKETING_PLAN is also not deployment proof: current live commercial content includes later changes. Git is not shallow, but absent remote/deleted branches or external host routes cannot be recovered from these local refs alone. “Every URL” here means all discoverable static pages, referenced routes and historical HTML paths in that evidence, not infinitely many arbitrary query-string combinations or unknown externally linked URLs.

## Prioritized findings

### CRITICAL — configured migration redirects do not execute

Evidence: `_redirects:1-29`, `README.md:10`, GitHub Pages workflow, live `Server: GitHub.com` responses, and `crawl-evidence.json`. All four user-reported failures are confirmed. Their proposed replacements are also confirmed from archived content and current destination content:

| Old URL | Current status | Recommended target | Why |
|---|---:|---|---|
| `/times-systimatos-parageliolipsias/` | 404 | `/times.html` | Old and new subscription/pricing intent |
| `/dwrean-dokimi-30-imeron/` | 404 | `/download/` | Current entry to the Windows trial |
| `/buy-license.html` | 404 | `/times.html` | Archived purchase/subscription content; closer than configured download target |
| `/installation-guide.html` | 404 | `/guides/windows-installation/` | Archived canonical and refresh explicitly named this guide |

The old directory pages also declared slashless canonicals. Those slashless pricing/trial/cafe/wireless URLs currently return 404 and need direct treatment, not just slash-form rules. Old demo aliases once redirected through other demo aliases; the recommended map collapses those to the current trial entry where relevance is established.

Impact: visitors and crawlers reaching previously ranked URLs receive errors instead of successors; the intended migration signal is absent. Recommendation, after approval: implement real one-hop permanent redirects at a serving layer capable of executing them and test production responses. Editing `_redirects` alone on the current GitHub Pages deployment will not repair this. Choosing/configuring that serving layer is a separate implementation decision; do not move hosting in this audit. Google recommends relevant permanent redirects when moving URLs, rather than sending unrelated pages to the homepage. [Google migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)

### HIGH — some proposed legacy destinations are too broad

The current configuration sends installation to the guide hub, purchase to download, and several ordering/QR pages to home. `/installation-guide.html` and `/buy-license.html` have clearer replacements above. The ordering-workflow page can map to the commercial system page. Current app-tour, account and QR guides cover several retired support tasks more precisely than the generic hub.

Not every removed specialist, QR acquisition or menu-demo page has a demonstrated equivalent. `redirect-map.csv` deliberately retains 404 for unresolved cases instead of pretending the homepage or a tutorial fully replaces their intent. Verify any such consolidation against archived content and GSC before activation. A deleted page with no replacement can legitimately return 404; the confirmed migration defect concerns pages with relevant successors, particularly the four identified by the user.

### HIGH — commercial intent and internal linking changed at the same time

The June merge changed the system-page H1 from `Σύστημα παραγγελιοληψίας για εστίαση` to `Η παραγγελία από τη σάλα μέχρι την κουζίνα.` Pricing changed from `Σύστημα παραγγελιοληψίας τιμές για εστίαση` to `Μία καθαρή τιμή για όλη τη ροή.` The titles retained commercial terms; these changes are not proof of a relevance loss by themselves. Later August/September revisions changed both pages again.

In normalized source-anchor counts across the compared non-prototype HTML snapshots, pricing fell from 16 referring pages before the merge to 5 after it; the system page fell from 10 to 8. Current counts from the 19 live canonical marketing/support pages are 8 and 9 respectively. Counts are not PageRank estimates, but they establish a changed internal-link structure. Six current links still target guide query aliases: five from the system page and one from the locked download page.

Recommendation: first repair the migration; then compare the exact query/page pairs across the June 28 break and later revisions. Do not rewrite headings or merge functioning pages based on overlap alone. The permanently locked homepage, download and guides hub require explicit replacement of that lock before any future file edits.

### MEDIUM — browser redirects remain in the active funnel

`/guides/?guide=windows-installation` and `/guides/?lesson=0` initially return 200 with a canonical to `/guides/`. Rendered Chromium navigation then moves to the static installation/printer guide via `static/js/academy.js:81-132`. Seven `guide` values and seven numbered `lesson` values are mapped in that script. The static guide URLs themselves return canonical 200 responses.

`/privacy.html`, `/eula.html`, `/legal/privacy.html` and `/legal/eula.html` return 200, `noindex,follow`, canonical to their legal successor and immediate meta refresh. These are confirmed soft/client redirects, not HTTP 301s. They are not evidence of Google-classified soft 404s. Google can process immediate meta refresh and JavaScript redirects, but this audit distinguishes them from server redirects. [Google redirect guidance](https://developers.google.com/search/docs/crawling-indexing/301-redirects)

Recommendation: direct canonical guide links in editable files and query-aware permanent redirects at the serving layer. The locked download-page link remains a documented exception, not permission to edit it. Replace legal refresh shells with real redirects when implementing migration infrastructure.

### MEDIUM — internal material is publicly accessible

`/graphify-out/graph.html` returns 200 with title `graphify - graphify-out\graph.html`, no canonical and no robots meta. `/graphify-out/GRAPH_REPORT.md` and `/README.md` also return 200. This matches the workflow's whole-repository upload. These are not marketing pages, so they are separated from the 19-page table. The graph HTML is technically indexable and has no incoming links from the measured canonical marketing corpus; actual Google indexing is unknown.

Recommendation: after approval, restrict the deployment artifact to intended public files or apply appropriate exclusion/index controls. Do not block crawlers as a substitute for removing an already indexed URL. The public `/prototype/pda-article/` is different: it explicitly has `noindex,nofollow`, so it is not an unqualified indexable duplicate.

### MEDIUM — local sitemap/publication drift must not be misdiagnosed as live failure

Live sitemap: 19 URLs, all passing canonical/status/noindex checks. Local sitemap: 20 URLs, adding `/arthra/`, currently live 404 but present as an untracked local page. Six existing local marketing files link to that hub; those links are absent from their live counterparts. Local article illustrations/CSS/JS also have unpublished URLs. These are publication dependencies, not confirmed broken links on the live site today.

Sitemap is manually maintained. No generator was found. Several `lastmod` values are old relative to later changes; for example the homepage still says June 28 despite a September animation change. Not every visual change requires a new `lastmod`; the issue is that the process does not establish date accuracy. Recommend a future publication check that sitemap URLs exist in the deployed artifact and return canonical indexable 200s, and that dates reflect substantive changes. Do not deploy this local sitemap alone.

### LOW — duplicate URL forms are accessible but canonicals mitigate them

All tested HTTP/www variants of the 19 canonical live pages redirect directly to HTTPS non-www. Current directories without their slash return 301 to their slash form. However `/index.html`, directory `/index.html` forms, and extensionless versions of seven `.html` marketing pages return 200 with the correct canonical. None creates a conflicting canonical between distinct current marketing pages.

There is a measured normalization chain: `http://www.pospal.gr/download` → `https://pospal.gr/download` → `https://pospal.gr/download/` → 200. The already canonical slash URL requires only one host/protocol redirect. No redirect loops were found in tested paths. Query-guide routes add a browser navigation; the configured legacy rules do not currently form HTTP chains because they fail as 404s.

Recommendation: optional consolidation to one-hop canonical destinations at the same serving layer used for migration fixes. Keep ranking `.html` URLs; do not rename them for aesthetics.

### LOW — structured data has eligibility limitations, not a demonstrated Product problem

All 10 rendered JSON-LD blocks across nine canonical pages parse successfully. No Product type, microdata Product or RDFa Product was found on any of the 19 rendered canonical pages. `SoftwareApplication` with `Offer` exists on pricing and the about page. Their EUR 23.90 offer agrees with visible current pricing. They use different software `@id` values (`/times.html#software` versus `/#software`), an entity-consistency improvement opportunity rather than a page-canonical conflict.

Both SoftwareApplication objects lack `review`/`aggregateRating`, so they do not satisfy Google's documented software-app rich-result requirements. This does not make their JSON invalid and is not evidence of ranking suppression. Never invent ratings to satisfy eligibility. [Google software-app requirements](https://developers.google.com/search/docs/appearance/structured-data/software-app)

**Irrelevant Product rich-result impressions cannot be confirmed from markup alone.** Current evidence does not support an active Product-markup explanation. Request the GSC Search appearance breakdown, affected URLs/queries and indexed-page HTML before attributing impressions to stale markup or another source. The compared June snapshots contain FAQ markup on the main commercial pages, not Product schema.

Google's current changelog says FAQ rich results stopped appearing on May 7, 2026, and the documentation was removed June 15. Retaining valid FAQ content/markup is not a repair for those discontinued enhancements. This predates the stated comparison break and is not evidence of an algorithm penalty or the commercial decline's cause. [Google documentation changelog](https://developers.google.com/search/updates)

### LOW — minor unused asset references

Four Font Awesome TTF fallback files referenced by `static/vendor/fontawesome/css/all.min.css` return 404 and are absent locally. The corresponding WOFF2 assets exist, and no current HTML references that stylesheet. These are repository cleanup findings, not an observed live rendering or ranking failure. Checked currently referenced live HTML/schema image/script/style targets returned 200. Unpublished local assets are labeled separately in the CSV.

## Full checklist disposition

| Requested check | Result |
|---|---|
| 1. Every generated URL | Static file inventory and HTML route inventory supplied; no route generator found |
| 2. Historical references across sources | URL reference CSVs plus 86-path Git inventory; code/config separated from docs and graph |
| 3. Broken internal links | No current live canonical page-navigation 4xx found; failed legacy sources and local-only mismatches recorded |
| 4. Links to legacy URLs | Six live links to guide query aliases; no live marketing anchors to the deleted `_redirects` source URLs |
| 5. Existing redirect rules | 29 exact 301 rules and one wildcard 200 rewrite; none observed executing as configured |
| 6. Chains | Host/protocol plus slash example confirmed; client guide navigation and historical demo chains documented |
| 7. Soft redirects | Four legal HTTP-200 refresh shells and guide-query JavaScript routes |
| 8–9. Canonicals and duplicate targets | 19/19 canonical marketing routes pass; alias and legal-shell duplicate targets are intentional and separately listed |
| 10–11. Robots and noindex | Live robots allows all and names sitemap; no marketing noindex. Legal pages and PDA prototype explicitly noindex |
| 12–14. Sitemap | Manual; 19 live canonical indexable 200s; no deleted URLs; local unpublished 20th entry distinguished |
| 15–16. Host/slash/duplicate access | HTTPS non-www normalization works; 200 extensionless/index aliases remain with correct canonicals |
| 17. Titles/H1s | All 19 have unique titles and one nonempty H1; full values preserved in table, no rewrites |
| 18. Intent overlap | Wireless/waiter/system and pricing/system clusters warrant query-level validation; no proven cannibalization |
| 19. Orphans/weak links | No orphan among 19 canonical pages; beach-bar and four guide pages have only two referring canonical pages |
| 20. Broken schema | No JSON syntax errors; app rich-result requirements incomplete; no completed Google validator run |
| 21. Product impressions | No active Product type found; GSC attribution unverified |
| 22. June Git changes | Deletions June 26, main merge June 28, heading/nav/sitemap changes, July 4 price changes documented |
| 23. Programmatic/doorway volume | No current large-scale generated SEO-page system found; small overlapping clusters, not proof of abuse |
| 24. Penalty assumption | None made; manual actions, indexing and performance data are not available |

## What would establish causation more precisely

Obtain page and query exports for **25 Mar–24 Jun** and **25 Jun–24 Sep 2026**, using identical country/device/search-type filters, plus daily data across June 15–July 10. Join exact queries to landing pages and separate brand, ordering-system, price, wireless, PDA definition/how-to and seasonal terms. Compare aggregate old+replacement URL performance, not only the surviving page. A change in query mix can change average position without every query losing rank.

Inspect the four old URLs and their replacements in GSC for crawl dates, last crawled HTML, Google-selected canonical and indexing state. Check Search appearance for Product/software results, Manual actions, and the deployment run for the June 28 merge. Later August/September rewrites are additional comparison points. Do not attribute seasonality, competitors, Core Web Vitals or an algorithm update without corresponding evidence.

## Issue ranking and repair order

1. **CRITICAL:** restore working permanent redirects for established URLs with confirmed successors; test the actual production host, including historically canonical slashless forms.
2. **HIGH:** correct semantic destinations before activating rules; analyze commercial content/internal-link changes against daily query/page data.
3. **MEDIUM:** replace active client-side guide detours where editable, keep audit/graph artifacts out of public deployment, and prevent local/live sitemap publication drift.
4. **LOW:** consolidate canonicalized aliases and mixed normalization chains, clarify structured-data eligibility/entity identity, and remove unused missing font fallbacks during an approved cleanup.

No repair is implemented by this report. The next concrete implementation proposal should be limited to the verified migration defects and their hosting mechanism; no redesign or new SEO pages is justified by this audit.
