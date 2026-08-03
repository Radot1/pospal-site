# POSPal Post-Redesign SEO Evaluation

Status: In progress  
Started: 2026-08-02  
Redesign launch: 2026-06-28  
Primary business outcome: downloads of `POSPal-win-Setup.exe`  
Secondary outcome: engagement with installation and setup guides

## Purpose

Determine what changed after the redesign, why Search Console has not shown a clear improvement, and what POSPal should do next. This is a living document: evidence, decisions, and phase status are updated as the evaluation proceeds.

Public-page constraints remain in force. `/`, `/download/`, and `/guides/` are evaluated here but are not edited. Recommendations affecting those locked pages require an explicit user decision that replaces the permanent lock. Existing ranking URLs are preserved unless measured evidence supports consolidation and a tested one-hop redirect.

## Evidence Rules

- **Measured:** directly observed in an export, API response, crawl, repository file, or field report.
- **User-provided:** reported by the user but not independently available in the workspace.
- **Estimated:** an evidence-based inference that still needs validation.
- Missing data is recorded as **N/A**, never invented.

## Skills and Order of Work

1. **Analytics** — baseline, event coverage, and funnel measurement.
2. **Technical SEO Checker** — crawlability, indexability, mobile, Core Web Vitals, redirects, sitemap, and schema.
3. **On-Page SEO Auditor** — query intent, titles, snippets, headings, page structure, and CTR opportunities.
4. **Site Architecture** — query-to-page ownership, cannibalization, internal links, and preserved URLs.
5. **Content Strategy** — evidence-led improvements and the SEO expansion gate.
6. **Copywriting and CRO** — applied only after the constraint is identified as CTR or conversion.
7. **Schema** — used where structured data supports a real page type.

Semrush is optional for competitor, backlink, keyword-volume, and SERP evidence. It is not required for the first-party baseline.

## Phase Status

| Phase | Status | Exit condition |
| --- | --- | --- |
| 1. Measurement baseline | GSC complete; GA4 accumulating | Matched GSC baseline imported; GA4 has collected trustworthy events only since 2026-08-03 |
| 2. Technical health | Complete; one URL under observation | Current sitemap coverage verified in GSC: 10 indexed, only the waiter page excluded; CWV has no field data |
| 3. Search-performance diagnosis | Matched export analyzed | Site, query, page, intent-cluster, search-appearance, country, and device deltas recorded; query-by-page confirmation remains |
| 4. Query-to-page mapping | Complete provisionally | Ownership and overlap risks recorded; GSC query-by-page confirmation pending |
| 5. On-page audits | Complete provisionally | Five priority pages scored; field data and exact SERP positions remain N/A |
| 6. Architecture and authority | Complete provisionally | Internal-link map recorded; backlink export remains N/A |
| 7. Action plan | Complete provisionally | Backlog and 90-day sequence recorded; exact page changes wait for fresh data/approval |

## Known Baselines

### Search Console before launch

Source: `docs/redesign/search-console-intent-map-2026-06-23.md`  
Range: 2026-03-22 through 2026-06-21.

| Metric | Baseline | Evidence |
| --- | ---: | --- |
| Clicks | 122 | Measured |
| Impressions | 3,981 | Measured |
| CTR | 3.06% | Measured |
| Weighted average position | 11.75 | Measured |

The baseline is useful for intent discovery but is not a valid direct comparison with a single post-launch month. The primary comparison must use complete, matched date ranges.

### Pre-launch intent clusters

| Cluster | Clicks | Impressions | CTR | Position | Existing decision |
| --- | ---: | ---: | ---: | ---: | --- |
| Brand | 39 | 58 | 67.24% | 2.88 | Protect |
| PDA meaning / how it works | 4 | 728 | 0.55% | 9.29 | Highest CTR opportunity |
| PDA hospitality / service | 12 | 629 | 1.91% | 5.91 | Best commercial non-brand signal |
| Generic order-taking systems | 0 | 416 | 0% | 41.85 | Long-term authority play |
| Wireless order-taking | 0 | 130 | 0% | 49.02 | Watch |
| Beach bar | 3 | 57 | 5.26% | 4.07 | Maintain lightly |

## Phase 1 — Measurement Baseline

### Required comparison periods

1. Last complete 28 days versus the previous complete 28 days.
2. Last complete 90 days versus the previous complete 90 days when enough post-launch time exists.
3. Search type `Web`, country `Greece`, with device split.
4. Queries and Pages exported separately.
5. Brand and non-brand results reported separately.

Do not compare a complete period against a partial current period.

### Data availability audit — 2026-08-03

| Source | Status | Evidence / limitation |
| --- | --- | --- |
| Pre-launch GSC export | Available | Measured; export ends 2026-06-21 |
| Post-launch GSC export | Available | Measured; the unfiltered 2026-08-03 comparison export contains last 28 days versus previous 28 days for Queries, Pages, Countries, Devices, and Search appearance |
| GA4 implementation | Fixed and live | Measured in Chrome Realtime; page views, sessions, enhanced-measurement events, and custom events now collect after preserving the `arguments` queue shape |
| GA4 report/export | Accumulating | Trustworthy collection begins 2026-08-03; no matched historical conversion period exists yet |
| Download event | Verified | Measured in GA4 Realtime; explicit installer clicks emit `download_click`, and the event is configured as a key event |
| Trial CTA event | Verified | Measured in GA4 Realtime; qualifying CTAs emit `trial_start_click`, and the event is configured as a key event |
| Guide entry/progress events | Implemented | Measured; guide journey and step events exist |
| Completed installation | N/A | Requires product-side telemetry; a website click does not prove installation |
| GitHub release asset counts | Available but limited | Counts are cumulative per release asset and reset with each release |

### GitHub installer evidence — 2026-08-02

- **Measured:** 231 cumulative downloads across all historical `POSPal-win-Setup.exe` release assets returned by the public GitHub Releases API.
- **Measured:** 30 downloads belong to installer assets on releases published on or after 2026-06-28.
- **Measured:** the newest `v0.6.2` installer asset had 1 download after publication on 2026-07-30.
- **Limitation:** these are asset totals, not download dates, unique users, referrers, successful installations, or subscriptions. They cannot establish redesign lift by themselves.

### Measurement funnel

| Funnel stage | Primary metric | Current availability |
| --- | --- | --- |
| Search visibility | Non-brand impressions by intent cluster | Matched visible-query comparison available; anonymized queries limit complete attribution |
| Ranking | Position by cluster and landing page | Matched query and page tables available; query-by-page mapping still required |
| Search appeal | CTR for queries in positions 3–15 | Matched query and page comparison available |
| Acquisition | Organic landing-page sessions | Awaiting GA4 export |
| Product interest | `download_click` users and rate | Instrumented; awaiting GA4 export |
| Onboarding interest | Guide entry and progress events | Instrumented; awaiting GA4 export |
| Product activation | Completed installation / trial activation | Not instrumented on the website |

### Phase 1 open inputs

- Search Console: Indexing > Pages summary and Core Web Vitals report.
- Search Console: page-filtered query exports for the three PDA pages to confirm or reject cannibalization.
- GA4: organic landing pages with sessions, users, `download_click`, `trial_start_click`, and guide events for the same matched periods.
- Audit the unexpected `ads_conversion_Page_view_Page_load_pos_1` key event observed on page load so aggregate conversion reporting is not inflated.

### Product-truth check

- **Measured:** the public site, `MARKETING_PLAN.md`, `CONTEXT.md`, and current redesign documentation use **€23.90/month**.
- **Measured at audit start:** `.agents/product-marketing.md` said **€18.90/month**.
- **Resolved 2026-08-02:** the internal context now uses the verified public value of €23.90. This was not a public-site inconsistency.

## Phase 2 — Technical Health

Live audit date: 2026-08-02.

### Technical scorecard

| Area | Score | Evidence and interpretation |
| --- | ---: | --- |
| Current-page crawlability | 10/10 | Measured; all 11 sitemap URLs return `200`, and `robots.txt` allows crawling |
| Current-page indexability | 9/10 | Measured; self-canonicals, no `noindex`, one H1, Greek language, and viewport on all 11 URLs; GSC coverage remains N/A |
| Redirect / migration hygiene | 2/10 | Measured; all 28 testable rules in `_redirects` return `404` live instead of the declared `301` |
| Internal link integrity | 10/10 | Measured; all 11 unique internal page destinations found in sitemap-page anchors resolve directly to `200` |
| Mobile readiness | 8/10 provisional | Measured viewport/language parity; field mobile usability and CWV remain N/A |
| HTTPS and host normalization | 9/10 | Measured; HTTP, `www`, and missing trailing slash normalize with one `301`; HSTS is present |
| URL/canonical hygiene | 9/10 | Measured; current URLs are consistent and self-canonical; legacy redirect failure is scored separately |
| Structured data | 8/10 | Measured; eight acquisition pages contain parseable `FAQPage` JSON-LD; core pages contain no schema |
| Core Web Vitals | N/A | PageSpeed API returned HTTP `429`; Search Console field data is required |

Provisional technical score excluding unavailable Core Web Vitals: **8.1/10**. This strong average hides one high-impact migration weakness: failed legacy redirects.

### Reproducible crawl results

- **Measured:** `robots.txt` returns `200`, allows `/`, and names the sitemap.
- **Measured:** `sitemap.xml` returns `200` and contains 11 URLs.
- **Measured:** all 11 sitemap URLs return `200`.
- **Measured:** all 11 sitemap URLs have a self-referencing canonical, one H1, `lang="el"`, a viewport meta tag, and no robots `noindex` directive.
- **Measured:** HTTP to HTTPS, `www` to non-`www`, and the tested missing-trailing-slash routes redirect once with `301`.
- **Measured:** the 11 unique internal page destinations linked from sitemap pages all resolve directly to `200`; no broken current internal page link was found.
- **Measured:** eight acquisition pages contain syntactically valid `FAQPage` JSON-LD. `/`, `/download/`, and `/guides/` contain none.
- **Measured:** three priority PDA descriptions are longer than the skill's 150–160 character review range: definition 168, operation 179, and waiter 166. This is a snippet/CTR review item, not an indexation blocker or direct ranking diagnosis.
- **Measured:** HSTS is present. CSP, `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy` are not present on the homepage response. These are security-hardening opportunities, not a credible explanation for flat rankings.

### P1 — Legacy redirects are not live

The repository declares legacy redirects in `_redirects`, but the live server identifies as GitHub Pages and does not apply this file. All 28 non-wildcard rules tested returned `404`, including:

- `/times-systimatos-parageliolipsias/` → expected `/times.html`;
- `/menu-estiatoriou.html` → expected `/`;
- `/installation-guide.html` → expected `/guides/`;
- `/buy-license.html` → expected `/download/`;
- `/dwrean-dokimi-30-imeron/` → expected `/download/`;
- historical guide URLs → expected `/guides/` or a guide state.

Pre-launch Search Console evidence shows that legacy URLs represented at least **3 clicks and 303 impressions** in the 2026-03-22 through 2026-06-21 export. The old pricing URL alone had 2 clicks, 49 impressions, 4.08% CTR, and average position 2.63. The old menu page had 1 click and 24 impressions. Current public search results still surface legacy menu and free-trial URLs even though the live destinations now return `404`.

**Interpretation:** this does not block crawling of the new site, but it can discard accumulated URL signals, strand old search results, and lose referral traffic. It is a plausible contributor to weak post-redesign performance.

**Required fix:** implement real edge/server `301` redirects. Valid approaches include redirect rules at the proxied DNS/CDN layer or hosting on a platform that applies `_redirects`. Do not treat client-side JavaScript or meta refresh as the intended permanent solution. Test every rule for status and one-hop destination before deployment.

### Redirect implementation audit — 2026-08-03

- **Measured:** production is deployed by `.github/workflows/static.yml` to GitHub Pages. The workflow uploads the repository as static files and provides no request-time redirect layer.
- **Measured:** `pospal.gr` resolves directly to the four GitHub Pages IPv4 addresses. Its authoritative nameservers are `dns1.papaki.gr` and `dns2.papaki.gr`; traffic is not currently proxied through Cloudflare.
- **Measured:** all 28 exact legacy sources in `_redirects` still return `404`, while all 28 declared destinations resolve to a final `200` response.
- **Measured:** the repository README explicitly notes that GitHub Pages ignores `_redirects`. Editing that file alone cannot repair the live responses.
- **Decision — 2026-08-03:** do not add a CDN, proxy, or new hosting tool solely to recover these redirects. The retired files are already deleted, absent from the sitemap, and not used by current internal links, so their `404` responses are acceptable. Treat the lost legacy signals as accepted SEO debt rather than a blocker for current-page growth.

The mapping itself needs a short relevance review before import:

- `/buy-license.html` described the POSPal subscription and price, so `/times.html` is a closer equivalent than `/download/`.
- `/privacy.html` has no honest current equivalent. Redirecting it to `/guides/` is semantically incorrect; either restore an approved privacy page or let the retired URL remain unavailable rather than create a soft-404-style redirect.
- `/menu-estiatoriou.html` and `/paraggelies-gia-estiash.html` should be checked against the current ordering-system hub instead of automatically sending both to `/`.
- Trial, corrected-slug, demo, and retired-guide mappings have clear current equivalents, subject to final one-hop testing.

If redirect-capable hosting is adopted for another reason in the future, do not import the current `_redirects` list unchanged. Relevance-review the map first. No redirect infrastructure work is active now.

### Search Console indexing coverage — 2026-08-03

- **Measured in Search Console; report last updated 2026-07-24:** the unfiltered property view contains 14 indexed URLs and 20 excluded URLs. This includes historical, deleted, redirected, and alternate URL variants, so it is not the correct measure of current-site coverage.
- **Measured with the current `sitemap.xml` filter:** 10 of the 11 submitted URLs are indexed. The only submitted exclusion is one `Discovered – currently not indexed` URL: the already-known `/pda-gia-servitoro/` page. Submitted `Crawled – currently not indexed` count is zero.
- **Measured:** the four URLs in the unfiltered `Crawled – currently not indexed` group are historical guide URLs. Three now return `404`; `/guides/index.html` returns `200` but correctly canonicalizes to `/guides/`. None is in the current sitemap.
- **Measured:** Core Web Vitals reports `No data` for both mobile and desktop. This is N/A rather than a pass or failure. The HTTPS summary reports 11 HTTPS URLs and zero non-HTTPS URLs.

**Conclusion:** there is no site-wide indexing failure. Current sitemap coverage is 90.9%, with one isolated crawl-prioritization case already under observation. No technical site change or validation request is justified now.

### Phase 2 monitoring

- Recheck `/pda-gia-servitoro/` in URL Inspection between 2026-08-10 and 2026-08-17.
- Keep Core Web Vitals marked N/A until Google has sufficient field data.
- No hosting input is required; legacy `404` responses remain accepted by decision on 2026-08-03.

## Phase 3 — Search-Performance Diagnosis

For each intent cluster, record impressions, clicks, CTR, average position, ranking pages, change versus baseline, and commercial relevance.

Decision rules:

| Evidence | Likely response |
| --- | --- |
| Impressions fall and pages leave the index | Technical/indexing repair |
| Position improves but CTR remains weak | Title/snippet and intent-promise work |
| Several URLs alternate for the same queries | Differentiate or consolidate after confirmation |
| Position and impressions remain flat | Relevance, content usefulness, and authority work |
| Organic sessions rise but download clicks do not | CRO and offer-clarity work |
| Download clicks rise while Search Console is flat | Redesign helped conversion rather than SEO |
| No meaningful demand appears | Do not create a new page |

### Keyword-quality validation gate

GSC impressions are evidence that Google associates POSPal with a query, not proof that the query attracts a suitable buyer. A keyword or intent cluster must be tested on five dimensions before it becomes a growth target:

| Dimension | Question | Evidence |
| --- | --- | --- |
| Product fit | Can POSPal truthfully satisfy the intent without implying fiscal-POS capabilities? | Product scope and actual features |
| Buyer fit | Is the searcher plausibly a Greek hospitality owner, manager, or operator? | SERP intent and real customer language |
| Demand | Does the cluster produce repeat impressions rather than isolated variants? | Matched GSC periods; optional third-party volume estimate |
| Attainability | Are relevant product pages ranking, or is the SERP dominated by a different intent/category? | Current Greek SERP composition and ranking trend |
| Business response | Does the landing page lead to pricing, guides, or installer interest? | GA4 landing-page and funnel events after tracking is repaired |

Initial hypotheses, not final keyword decisions:

- `pda σερβιτόρου`: strong product and buyer fit; validate download/guide response.
- `σύστημα παραγγελιοληψίας`: commercially relevant but broad; validate whether searchers expect fiscal POS, delivery, or online ordering that POSPal does not provide.
- `ασύρματη παραγγελιοληψία` and price variants: commercially promising; validate demand and attainable SERP position.
- `pda τι είναι` and `pda πώς λειτουργεί`: informational acquisition terms; judge them by assisted movement toward product pages, not direct downloads alone.
- Brand terms: protect and monitor, but do not count them as non-brand SEO growth.

The first test batch will select one commercial cluster and one informational cluster. Each cluster receives one intended landing page, a written intent hypothesis, and a 28-day observation window. Success is evaluated through impressions, position, CTR, landing-page engagement, and download/guide actions. New pages are not justified by search volume alone.

### Current status

Source: `pospal.gr-Performance-on-Search-2026-08-03 (1).zip`, unfiltered Web search comparison for the last 28 days versus the previous 28 days.

| Metric | Last 28 days | Previous 28 days | Change |
| --- | ---: | ---: | ---: |
| Clicks | 51 | 44 | +7 / +15.9% |
| Impressions | 2,088 | 1,888 | +200 / +10.6% |
| CTR | 2.44% | 2.33% | +0.11 pp |

Site totals use the mutually exclusive Device and Country dimensions, which both sum to 51/44 clicks and 2,088/1,888 impressions. The Pages dimension sums to 51/45 clicks and 2,536/2,136 impressions because page-grouped Search Console rows are not safely additive at property level; page rows are used only for individual landing-page deltas.

The site gained clicks, impressions, and a small amount of CTR, but the visible-query table shows that growth was predominantly branded. Visible brand queries produced 18 clicks versus 10, while all visible non-brand queries produced 12 clicks versus 11. Search Console suppressed or anonymized the remaining queries: the visible query table accounts for 30 of 51 current clicks and 21 of 44 previous clicks. Brand/non-brand attribution is therefore directional rather than complete.

### Matched intent-cluster deltas — visible queries

| Cluster | Clicks now / before | Impressions now / before | CTR now / before | Weighted position now / before | Interpretation |
| --- | ---: | ---: | ---: | ---: | --- |
| Brand | 18 / 10 | 29 / 14 | 62.07% / 71.43% | 2.79 / 1.71 | Main source of visible click growth; protect, but do not count as non-brand SEO growth |
| PDA meaning/process | 3 / 3 | 552 / 450 | 0.54% / 0.67% | 6.30 / 7.65 | Visibility and position improved; clicks stayed flat |
| PDA generic/other | 2 / 1 | 350 / 116 | 0.57% / 0.86% | 10.19 / 12.79 | Strong expansion led by generic `pda`, but mostly near the bottom of page one |
| PDA hospitality/use-case | 7 / 7 | 197 / 211 | 3.55% / 3.32% | 4.28 / 3.12 | Commercial non-brand clicks held flat; position weakened slightly |
| Generic order-taking | 0 / 0 | 286 / 240 | 0% / 0% | 63.83 / 37.34 | More impressions but materially weaker rankings and no response |

### Landing-page deltas

| Page | Click delta | Impression delta | CTR delta | Ranking movement (positive = better) | Decision signal |
| --- | ---: | ---: | ---: | ---: | --- |
| `/` | +15 | +25 | +9.54 pp | -27.88 positions | Homepage growth is consistent with stronger brand activity; the mixed query set makes average position misleading |
| `/pda-ti-einai.html` | -1 | +372 | -0.49 pp | +0.06 positions | Largest visibility gain, stable ranking, but no click growth; query mix and snippet promise need page-filtered review |
| `/pda-pos-leitourgei.html` | -5 | -28 | -2.05 pp | -3.82 positions | Clearest priority-page decline; confirm its exact lost queries before editing |
| `/systima-paraggeliolipsias.html` | -1 | +27 | -0.32 pp | -36.58 positions | Broad visibility is low quality and non-converting; do not expand this topic without SERP and query mapping evidence |
| `/download/` | 0 | +29 | 0 pp | +7.64 positions | Discoverability improved strongly, but the locked page received no search clicks in this period |
| `/guides/` | 0 | +22 | 0 pp | +0.26 positions | More high-ranking impressions, but no search clicks; keep as an onboarding destination rather than a primary acquisition bet |
| `/times-systimatos-parageliolipsias/` | -1 | -6 | -5.00 pp | -0.09 positions | Retired URL still received 14 impressions around position 2.79, strengthening the redirect priority |

### Device and search-appearance deltas

- **Mobile:** 29 clicks versus 36, despite impressions rising from 1,320 to 1,469. CTR fell from 2.73% to 1.97%, and average position weakened from 5.94 to 7.15.
- **Desktop:** 22 clicks versus 7, with impressions rising only from 557 to 604. CTR improved from 1.26% to 3.64%. The entire net click gain came from desktop.
- **Product snippets:** 349 impressions versus 85, but zero clicks in both periods. The +264 product-snippet impressions exceed the site's net +200-impression increase; search-appearance dimensions are not additive, but this still shows that rich-result exposure grew while producing no traffic.

### Mobile-filtered diagnosis — 2026-08-03

Source: live Search Console report filtered to `Device: Mobile`, comparing the last 28 days with the previous 28 days.

| Metric | Last 28 days | Previous 28 days | Change |
| --- | ---: | ---: | ---: |
| Clicks | 29 | 36 | -7 / -19.4% |
| Impressions | 1,469 | 1,320 | +149 / +11.3% |
| CTR | 1.97% | 2.73% | -0.76 pp |
| Average position | 7.15 | 5.94 | 1.21 positions worse |

Search Console's visible mobile query rows contain 15 clicks in each period. Therefore, all seven net lost clicks belong to privacy-suppressed query rows and cannot be attributed honestly to a named keyword. The visible page table contains 15 versus 16 clicks, so only one of the seven lost clicks can be assigned to a displayed landing-page row; six remain suppressed at page level.

| Visible mobile row | Clicks now / before | Impressions now / before | Position now / before | Diagnosis |
| --- | ---: | ---: | ---: | --- |
| `/pda-ti-einai.html` | 8 / 8 | 889 / 614 | 6.6 / 6.8 | Visibility expanded strongly and rank improved slightly; lower CTR is dilution from 275 additional impressions, not a page-ranking loss |
| `/` | 7 / 4 | 17 / 14 | 18.7 / 12.1 | Clicks and CTR improved; mixed branded query composition makes average position misleading |
| `/pda-pos-leitourgei.html` | 0 / 1 | 24 / 22 | 6.0 / 3.8 | Small real decline already covered by the live definition/process metadata test |
| `/systima-paraggeliolipsias.html` | 0 / 1 | 41 / 41 | 44.0 / 10.4 | Average-position collapse is mainly query-mix expansion into weak or irrelevant terms, not a uniform loss across its intended query |
| `pda σερβιτορου` | 4 / 6 | 33 / 138 | 2.1 / 2.2 | Ranking and CTR improved, but impressions fell by 105; the two-click loss is exposure/demand loss rather than worse ranking |
| `pda εστιαση` | 2 / 0 | 136 / 45 | 4.7 / 5.2 | Healthy non-brand visibility and click growth |
| `pda τι ειναι` | 1 / 1 | 395 / 318 | 6.8 / 8.0 | More impressions and a better position, with clicks flat |
| `pda` | 1 / 0 | 223 / 39 | 9.0 / 15.9 | Large new generic-query exposure and materially better ranking, but still low CTR |
| `pda πωσ λειτουργει` | 0 / 1 | 21 / 22 | 3.8 / 3.6 | Stable exposure with a one-click fluctuation; the metadata differentiation test is the appropriate bounded response |

The ordering-system page drilldown shows why its average position looks alarming: new mobile impressions came from `παραγγελιοληψια` around position 79.5 and the irrelevant `συστημα αναμονης πελατων` around position 63.1. Its visible intended query `συστημα παραγγελιοληψιασ` had only three current impressions around position 29.7 versus four around 16.8. With one page-level click lost and the click-producing query suppressed, this is insufficient evidence for another content change.

**Measured conclusion:** there is no evidence of a site-wide mobile technical failure or broad ranking loss. The CTR decline is primarily consistent with expansion into generic, informational, and lower-click-propensity impressions. Visible-query clicks were flat, and the entire seven-click net decline is hidden by Search Console privacy thresholds. Keep the active metadata test isolated; do not launch a separate mobile rewrite from this dataset.

Interpretation: the redesign did not fail, but it has not yet produced meaningful non-brand click growth. It expanded informational PDA visibility and improved branded/desktop response while mobile acquisition weakened. No new keyword page is justified from this export alone.

The earlier 2026-08-03 export without `(1)` is still excluded because it was filtered to `Search appearance: Product snippets`. The `(1)` export is the valid unfiltered comparison.

Public search results confirm that current PDA, pricing, generic ordering, wireless ordering, download, and guide pages are discoverable and have been crawled recently, so total crawl exclusion is not the leading diagnosis.

Public results also continue to display some retired URLs that now return `404`. Their lost signals remain accepted SEO debt under the 2026-08-03 hosting decision.

The site totals, visible brand/non-brand split, intent-cluster deltas, landing-page deltas, device diagnosis, and PDA query-by-page matrix are now complete. Search Console cannot expose the privacy-suppressed mobile queries responsible for the remaining click loss, so no further segmentation can recover that attribution from this report.

## Phase 4 — Query-to-Page Mapping

| Page | Intended primary job | Validation question |
| --- | --- | --- |
| `/pda-ti-einai.html` | Define PDA in hospitality | Does it own definition queries? |
| `/pda-pos-leitourgei.html` | Explain how the workflow operates | Does it attract process queries without competing with the definition page? |
| `/pda-gia-servitoro/` | Commercial waiter/service use case | Does it attract hospitality buyers and lead toward download? |
| `/pda-gia-kafeteries.html` | Cafeteria-specific use case | Is its demand distinct enough to justify a separate URL? |
| `/systima-paraggeliolipsias.html` | Broad category hub | Is broad topical authority improving over time? |
| `/asyrmati-paraggeliolipsia.html` | Wireless-ordering support | Is there enough demand to invest further? |
| `/paraggelio-lipsia-gia-beach-bar.html` | Seasonal venue fit | Does the niche page retain its strong position and useful traffic? |
| `/times.html` | Price and trial reassurance | Does commercial traffic proceed to download? |

No page will be merged or redirected before a query-by-page export confirms overlap.

### Page-filtered query evidence — 2026-08-03

Sources: `gsc-pda-ti-einai.zip.zip` and `gsc-pda-pos-leitourgei.zip`, each filtered to the exact page and comparing the last 28 days with the previous 28 days.

| Query and page | Clicks now / before | Impressions now / before | Position now / before | Interpretation |
| --- | ---: | ---: | ---: | --- |
| `pda τι ειναι` — definition page | 2 / 1 | 448 / 361 | 6.71 / 7.82 | Correct ownership and improving visibility |
| `pda πωσ λειτουργει` — definition page | 1 / 0 | 18 / 8 | 5.28 / 6.50 | Definition page is expanding into the process intent |
| `pda πωσ λειτουργει` — process page | 0 / 1 | 19 / 21 | 6.21 / 3.95 | Dedicated process page lost its click and 2.26 ranking positions |
| `pda σερβιτορου` — definition page | 5 / 7 | 40 / 145 | 2.27 / 2.12 | Google strongly selects the definition page for waiter intent |
| `pda σερβιτορου` — process page | 0 / 0 | 5 / 0 | 7.40 / N/A | Minor additional overlap |

Full page totals remain the most reliable page-level numbers because Search Console suppresses or anonymizes some query and device rows:

- Definition page: 23 versus 24 clicks; 1,652 versus 1,280 impressions; 1.39% versus 1.88% CTR; position 6.05 versus 6.11.
- Process page: 3 versus 8 clicks; 194 versus 222 impressions; 1.55% versus 3.60% CTR; position 9.57 versus 5.75.

**Measured conclusion:** definition/process cannibalization is now confirmed for `pda πωσ λειτουργει`. The two pages received almost equal current impressions for the exact process query, but the definition page ranked better and received the click. The definition title explicitly claims both “τι είναι” and “πώς δουλεύει,” while the process page is dedicated to “πώς λειτουργεί.” The first content test should therefore differentiate their search promises rather than add another page.

The waiter page produced no page-filtered Search Console data and is absent from the unfiltered Pages export. Technically it is live: `200`, self-canonical, indexable in its delivered HTML, included in `sitemap.xml`, and internally linked from the homepage and several acquisition pages. Public exact-URL search did not surface it.

Search Console URL Inspection on 2026-08-03 confirms: **URL is not on Google — Discovered, currently not indexed**. Google discovered it through `https://pospal.gr/sitemap.xml`, detected no referring page, and has never crawled it; last crawl, page fetch, crawl permission, indexing permission, and both canonical fields are therefore N/A. This is a single-page crawl-prioritization/indexing issue, not evidence of a robots, canonical, or server-response block. The user requested indexing once on 2026-08-03. Do not resubmit repeatedly; recheck URL Inspection after 7–14 days.

### Ownership assessment — 2026-08-02

| Page | Current ownership assessment | Risk | Proposed direction, not yet approved copy |
| --- | --- | --- | --- |
| `/pda-ti-einai.html` | Clear definition H1 and direct opening answer | Title also claims “πώς δουλεύει,” overlapping the process page | Restrict title/snippet promise to definition and terminology if GSC confirms overlap |
| `/pda-pos-leitourgei.html` | Clear process/flow ownership | Reuses much of the same requirements, workflow, FAQ, image, and layout as the definition page | Deepen practical process details and keep definition content short |
| `/pda-gia-servitoro/` | Clear staff/use-case ownership | Generic workflow sections still overlap the process page | Add real waiter scenarios, device decisions, shift checks, and verified operational detail |
| `/pda-gia-kafeteries.html` | Venue-specific ownership | Distinct demand has not been revalidated | Retain while measured; do not expand adjacent venue pages by default |
| `/systima-paraggeliolipsias.html` | Correct broad hub role | H1 does not use the broad category phrase; page is short for a competitive generic term | Improve the hub only after GSC confirms impressions/position and the useful missing questions |
| `/asyrmati-paraggeliolipsia.html` | Supporting wireless concept | Historically very weak position | Watch; avoid expansion without demand movement |
| `/paraggelio-lipsia-gia-beach-bar.html` | Distinct seasonal use case | Very weak internal support | Preserve and add relevant contextual support if the traffic remains useful |
| `/times.html` | Correct pricing/reassurance role | No contextual main-content inbound links from the current page set | Link to pricing naturally from relevant unlocked acquisition pages |

### Measured overlap evidence

- The definition page title is `PDA τι είναι και πώς δουλεύει στην εστίαση | POSPal`, while a separate page targets `PDA πώς λειτουργεί στην εστίαση | POSPal`.
- Definition and process pages have 21.4% Jaccard overlap across normalized three-word sequences in their main content. This is meaningful template/content reuse, but it is not proof of Google cannibalization.
- All three PDA pages reuse the same product screenshot and a closely matched five-section structure.
- Each page does provide a different H1 and direct opening answer, so consolidation is not automatic.

**Decision:** the query-by-page matrix now supports differentiation. Restrict the definition page's title/snippet promise to “τι είναι” and make the process page the unambiguous owner of “πώς λειτουργεί.” Do not consolidate yet: the process page still has 194 impressions and three page-level clicks, although those clicks are hidden in the visible query table. Check the waiter URL in Search Console URL Inspection before deciding whether to retain, strengthen, or retire that page.

### First metadata test — deployed and verified on 2026-08-03

| Page | Element | Current | Proposed |
| --- | --- | --- | --- |
| `/pda-ti-einai.html` | Title, 51 → 52 characters | `PDA τι είναι και πώς δουλεύει στην εστίαση \| POSPal` | `PDA τι είναι: έννοια και χρήση στην εστίαση \| POSPal` |
| `/pda-ti-einai.html` | Description, 168 → 156 characters | Current definition/process description | `Τι είναι το PDA στην εστίαση, ποια συσκευή χρησιμοποιεί ο σερβιτόρος και τι χρειάζεται για ασύρματη παραγγελιοληψία με το POSPal σε Windows. Μάθε τα βασικά.` |
| `/pda-pos-leitourgei.html` | Title, 40 → 50 characters | `PDA πώς λειτουργεί στην εστίαση \| POSPal` | `PDA πώς λειτουργεί: 3 βήματα στην εστίαση \| POSPal` |
| `/pda-pos-leitourgei.html` | Description, 179 → 151 characters | Current overlong process description | `Δες πώς λειτουργεί το PDA σε 3 βήματα: παραγγελία από κινητό ή tablet, τοπικό δίκτυο και συνέχεια στο POSPal για Windows. Δοκίμασέ το 30 ημέρες δωρεάν.` |

Test scope: change only these four metadata values. Keep both URLs, H1s, body content, internal links, schema, and layout stable so the query-ownership effect can be evaluated cleanly. Baseline metrics are the page-filtered 2026-08-03 exports. Evaluate after one complete 28-day period; monitor the exact `pda πωσ λειτουργει` query on both URLs.

Implementation note: the four approved `<title>` and meta-description values were deployed and verified live on 2026-08-03. Both URLs returned `200`, exposed the exact test metadata, retained their self-canonicals, had no meta or HTTP `X-Robots-Tag` indexing block, and remained present in `sitemap.xml`. No URL, H1, body-copy, internal-link, schema, or layout changes were included.

Measurement window: use the 28 complete days from **2026-08-04 through 2026-08-31**. Review the result on **2026-09-02 or later** to allow for Search Console reporting delay. Keep both test pages stable during this period.

## Phase 5 — On-Page Audit Order

1. `/pda-ti-einai.html`
2. `/pda-pos-leitourgei.html`
3. `/pda-gia-servitoro/`
4. `/times.html`
5. `/systima-paraggeliolipsias.html`

Each audit will score title, meta description, H1/H2 structure, answer speed, intent match, internal links, images, schema, product boundary, and conversion path. Metrics will be marked Measured, User-provided, Estimated, or N/A.

### Provisional scorecard — 2026-08-02

Scores are **Estimated** from the installed skill's structural rubric and current HTML. Exact rankings, competitor metrics, CWV, and post-launch CTR are N/A, so these scores are prioritization aids rather than ranking predictions.

| Page | Score | Grade | Strongest elements | Main weakness |
| --- | ---: | --- | --- | --- |
| `/pda-ti-einai.html` | 76/100 | B | Exact-intent H1, direct answer, FAQ schema, descriptive links | Title crosses into the process intent; only 454 main-content words and little original evidence |
| `/pda-pos-leitourgei.html` | 77/100 | B | Clear process H1, three-step explanation, FAQ, cluster links | 179-character description and significant reuse from definition page |
| `/pda-gia-servitoro/` | 75/100 | B | Clear commercial use case and keyword placement | 35-character title, limited waiter-specific proof/scenarios, reused template |
| `/times.html` | 78/100 | B | Price, trial terms, product boundary, and CTA are unusually clear | Target concept absent from H1 and no contextual main-content inbound links |
| `/systima-paraggeliolipsias.html` | 72/100 | B | Correct hub relationships, clean metadata, useful product boundary | Broad target absent from H1; 536 words provide limited authority for the generic category |

### Shared measured strengths

- Exactly one H1 per page and logical H2/H3 hierarchy.
- Direct introductory answer or commercial promise.
- Self-canonical URL, HTTPS, Greek language, viewport, and valid FAQ JSON-LD.
- Seven or eight main-content internal links on each audited page, using descriptive anchors.
- Clear download and guide paths.
- Correct statement that POSPal is not a fiscal POS or cash register.
- No broken current internal page links.

### Shared measured weaknesses

- The three priority PDA descriptions are 166–179 characters and may be truncated or rewritten; this is primarily a CTR issue.
- Four audited informational/use-case pages contain roughly 440–536 words. They answer quickly, which is good, but provide limited distinct evidence beyond product explanation.
- The same 1280×900 PNG screenshot is used across the content cluster. It is 119 KB, has descriptive alt text, and is eager-loaded on PDA pages. This is acceptable but visually and evidentially repetitive.
- No audited page links to an external authoritative source. This is not inherently wrong for product landing pages, but the informational definition/process pages provide no citations or independent context.
- No author identity, first-person operational experience, case study, or verified customer outcome is available. New proof must be real; do not fabricate testimonials or results.

### Priority recommendations from the on-page pass

1. **P1 pending GSC confirmation:** separate the definition and process page title/snippet promises.
2. **P1:** add genuinely distinct operational value to the waiter and process pages instead of adding generic word count.
3. **P1:** give the broad system page a clearer category-level H1 and deeper buyer questions if GSC shows the generic cluster is moving.
4. **P1:** add contextual links to `/times.html` from relevant unlocked acquisition pages.
5. **P2:** shorten and differentiate PDA meta descriptions after reviewing actual query CTR.
6. **P2:** add new screenshots, annotated flows, setup evidence, or real customer examples only when first-party evidence exists.

## Phase 6 — Architecture and Authority

### Current hierarchy

```text
Homepage (/)
├── Download (/download/)
├── Guides (/guides/)
├── Pricing (/times.html)
└── Ordering-system hub (/systima-paraggeliolipsias.html)
    ├── PDA definition (/pda-ti-einai.html)
    ├── PDA process (/pda-pos-leitourgei.html)
    ├── Waiter use case (/pda-gia-servitoro/)
    ├── Cafeteria use case (/pda-gia-kafeteries.html)
    ├── Wireless ordering (/asyrmati-paraggeliolipsia.html)
    └── Beach-bar use case (/paraggelio-lipsia-gia-beach-bar.html)
```

The conceptual hierarchy is sound, but the actual contextual-link distribution does not fully express it.

### Measured inbound internal links

Self-links are excluded. “Contextual” means an anchor inside `<main>` rather than header/footer navigation.

| Target | Inbound links | Distinct source pages | Contextual links | Contextual source pages |
| --- | ---: | ---: | ---: | ---: |
| `/download/` | 44 | 10 | 25 | 10 |
| `/guides/` | 45 | 10 | 23 | 10 |
| `/systima-paraggeliolipsias.html` | 18 | 8 | 6 | 6 |
| `/pda-ti-einai.html` | 12 | 7 | 5 | 5 |
| `/pda-gia-servitoro/` | 12 | 7 | 5 | 5 |
| `/times.html` | 9 | 5 | 0 | 0 |
| `/pda-gia-kafeteries.html` | 8 | 5 | 2 | 2 |
| `/pda-pos-leitourgei.html` | 6 | 4 | 3 | 3 |
| `/asyrmati-paraggeliolipsia.html` | 4 | 3 | 2 | 2 |
| `/paraggelio-lipsia-gia-beach-bar.html` | 1 | 1 | 0 | 0 |

### Architecture findings

1. **Conversion paths are strong.** Every other current page links to download and guides, usually contextually.
2. **The homepage main content links only to download and guides.** Acquisition pages receive homepage support through navigation/footer at most. The homepage is locked, so this is recorded rather than changed.
3. **The broad ordering-system page acts as the practical SEO hub.** It has the strongest contextual support among acquisition pages and links to specific uses.
4. **Pricing lacks contextual authority.** `/times.html` has nine inbound links, but all are in headers or footers. Relevant unlocked pages should link to it where readers consider price or trial terms.
5. **The beach-bar page is near-orphaned.** It has one inbound link from one source, and it is not contextual. If fresh GSC shows the niche still performs, link to it from a genuinely related venue/use-case section.
6. **No current broken internal page destination was found.** The structural weakness is prioritization, not crawlability.

### External authority and brand evidence

- **Estimated:** exact-domain web searches did not surface obvious third-party references to `pospal.gr`. This is not a backlink audit; Search Console Links or Semrush data is required.
- **Measured public-result observation:** searches for the POSPal name are heavily occupied by an unrelated international POSPAL product and its app/distributor properties.
- **Interpretation:** weak external authority and brand ambiguity are plausible secondary headwinds. Greek hospitality intent should remain the main acquisition focus rather than attempting to win global brand/entity searches.
- **Required evidence:** export Search Console > Links and, optionally, obtain Semrush referring-domain and authority data.

### Authority-building rule

New public pages must pass the existing SEO expansion gate: a real intent cluster, a distinct funnel job, a quality implementation, and a small measurable batch. Authority should first come from useful first-party material: real setup lessons, annotated product workflows, verified support questions, customer-approved examples, and genuinely useful installation guidance. Do not fabricate proof or publish generic keyword pages.

## Phase 7 — Backlog and 90-Day Roadmap

Severity model:

- **P0:** indexing, tracking, broken conversion, or incorrect product truth.
- **P1:** confirmed intent overlap, weak CTR on ranking queries, missing contextual links, or important conversion gaps.
- **P2:** content depth, original evidence, schema opportunities, and validated new content.
- **Watch:** low-volume topics without sufficient evidence.

The final roadmap will use small batches and a 28-day measurement cadence:

1. improve an existing page;
2. improve its snippet, first-screen answer, or internal links;
3. create a new page only when an existing page cannot serve the measured intent cleanly.

### Prioritized backlog

#### P0 — Verify before changes

| Action | Why | Done when |
| --- | --- | --- |
| Accumulate the first trustworthy GA4 comparison period | Collection was repaired on 2026-08-03, so historical conversion reporting is unavailable | Organic landing sessions and primary funnel events can be compared over one complete period |
| Audit the automatic Google Ads page-load conversion | `ads_conversion_Page_view_Page_load_pos_1` appeared as a key event during live QA and may inflate aggregate conversion totals | Intended conversion purpose is confirmed or the event is removed from conversion reporting |

Completed on 2026-08-03: GA4 Realtime received page views, `download_click`, and `trial_start_click`; both custom events appeared as key events. The matched GSC comparison export was also imported and analyzed.

These become true P0 incidents only if tracking is absent/duplicated or important pages are excluded from Google. No current P0 ranking blocker is confirmed.

#### P1 — High impact

| Priority | Action | Evidence | Owner type |
| ---: | --- | --- | --- |
| 1 | Hold the definition/process metadata test stable through 2026-08-31 | The approved four-field test is live and needs an uncontaminated 28-day window | Measurement |
| 2 | Validate keyword demand and competitor coverage before proposing another page | GSC validates current demand but cannot show total market demand or competitor gaps | Research |
| 3 | Recheck waiter-page indexing between 2026-08-10 and 2026-08-17 | It is the only current sitemap URL not indexed; one indexing request was made on 2026-08-03 | Measurement |
| 4 | Hold mobile pages stable and remeasure after the metadata test | Visible mobile-query clicks were flat; all seven net lost clicks are privacy-suppressed, and visibility expansion diluted CTR | Measurement |
| 5 | Add contextual links to pricing only after target-query validation | Pricing has zero main-content inbound links, but anchor and source-page choices should follow validated commercial demand | SEO/content |
| 6 | Support the beach-bar URL only if keyword validation confirms useful demand | It retained 20 impressions around position 8.65 but still produced no clicks | SEO/content |

#### P2 — Supporting improvements

| Action | Gate |
| --- | --- |
| Rewrite the three PDA descriptions for sharper, shorter promises | Use query and CTR evidence first |
| Improve the generic ordering-system H1 and useful content depth | Only if the broad cluster shows impressions or position movement |
| Add annotated screenshots, workflow examples, and setup evidence | Assets and claims must be real and verified |
| Gather customer-approved examples or case studies | No invented testimonials, logos, or quantified outcomes |
| Export backlink/referring-domain evidence and pursue relevant Greek hospitality mentions | Use Search Console Links or Semrush before setting targets |
| Add applicable schema beyond FAQ | Only where the page visibly supports the schema type |
| Add missing security headers | Security hygiene; do not present as an SEO growth fix |

#### Watch — Do not expand yet

- QR/menu acquisition pages;
- additional venue/location pages;
- wireless-ordering variants;
- generic keyword fragments;
- competitor-comparison pages.

### 90-day execution sequence

#### Days 0–7 — Restore measurement and URL equity

1. Export GSC Queries, Pages, Links, Indexing summary, and Core Web Vitals.
2. Export matched GA4 organic landing and funnel-event reports.
3. Validate GA4 DebugView and key-event configuration.
4. Select the hosting/edge mechanism for real redirects.
5. Implement and test the 28 legacy rules: `301`, one hop, correct final canonical, no chains.
6. Request validation or URL inspection for the highest-value repaired legacy URLs where appropriate.

#### Days 8–14 — Make the first evidence-led SEO decisions

1. Complete the brand/non-brand and intent-cluster delta.
2. Build the PDA query-by-page matrix.
3. Choose one of three outcomes for definition/process pages: keep and differentiate, consolidate with `301`, or leave unchanged.
4. Select no more than three unlocked-page improvements for the first batch.
5. Record the exact hypothesis and baseline for every change.

#### Days 15–42 — First improvement batch

Likely candidates, subject to the data gate:

- separate the definition/process snippet promises;
- deepen process and waiter content with real operational evidence;
- clarify the generic hub H1 if its cluster merits investment;
- add contextual pricing and relevant niche links from unlocked pages;
- refine overlong PDA descriptions.

Do not edit `/`, `/download/`, or `/guides/` without an explicit replacement of their permanent lock.

#### Days 43–70 — Build first-party authority

1. Mine real setup/support questions for content gaps.
2. Produce one strong proof asset: an annotated workflow, verified setup walkthrough, or customer-approved operational example.
3. Improve the relevant existing page before considering a new URL.
4. Seek a small number of genuinely relevant Greek hospitality/software mentions or partnerships; avoid low-quality link acquisition.

#### Days 71–90 — Measure and choose the next batch

1. Export the next complete matched 28-day GSC and GA4 periods.
2. Compare cluster visibility, ranking, CTR, landing traffic, and download-click rate.
3. Keep, revise, or roll back each hypothesis based on its own metric.
4. Approve at most one focused improvement pass or one to two new pages that pass the expansion gate.

### Success criteria

| Area | Success criterion |
| --- | --- |
| Redirect integrity | 100% of approved legacy mappings return one-hop `301` to a `200` canonical destination |
| Measurement | GSC and GA4 matched-period scorecard can be reproduced every 28 days |
| Event quality | No missing or duplicate primary download events in QA |
| Intent ownership | Each priority PDA query cluster has one clearly dominant intended URL |
| Internal architecture | Pricing and every retained niche page have at least one relevant contextual inbound link |
| Content quality | Each changed page adds distinct usefulness or proof, not merely more words |
| Business outcome | Organic landing sessions are evaluated together with download-click rate, not Search Console alone |

Numeric SEO growth targets will be set after the current post-launch baseline is imported. Setting them now would manufacture precision.

## Working Findings and Decisions

| Date | Finding | Evidence | Decision / next step |
| --- | --- | --- | --- |
| 2026-08-03 | Current sitemap indexing coverage is 10 of 11 URLs | Measured in GSC with the `sitemap.xml` filter; the waiter page is the only exclusion | Treat indexing as healthy overall; monitor the waiter URL without changing the site |
| 2026-08-03 | Definition/process metadata differentiation deployed and verified live | Measured live: both URLs `200`, exact metadata present, self-canonical, indexable, and in sitemap | Hold both pages stable from 2026-08-04 through 2026-08-31; evaluate on 2026-09-02 or later |
| 2026-08-03 | Page-filtered GSC data confirms definition/process overlap | Measured | Differentiate the definition and process search promises; do not add or consolidate pages yet |
| 2026-08-03 | Waiter page is live but has no GSC performance row | Measured live technical checks; indexing N/A | Use URL Inspection to determine whether it is indexed before changing or retiring it |
| 2026-08-03 | Waiter page is discovered but has never been crawled or indexed | User-provided Search Console URL Inspection | Run Test Live URL; if eligible, request indexing once and monitor for 7–14 days |
| 2026-08-03 | Indexing requested for the waiter page | User-provided Search Console action | Do not repeat the request; recheck URL Inspection after 7–14 days |
| 2026-08-03 | Redirect recovery would require additional hosting/proxy infrastructure | Measured, plus user preference | Keep the retired pages deleted and accept their `404` responses; remove redirect deployment from the active growth plan |
| 2026-08-03 | GitHub Pages cannot execute the declared path redirects | Measured from deployment workflow, README, DNS, and live HTTP responses | Accepted; current deleted pages remain `404` rather than adding another infrastructure layer |
| 2026-08-03 | Current DNS bypasses Cloudflare | Measured; apex resolves to GitHub Pages and nameservers remain at Papaki | No action; keep the existing simple hosting arrangement |
| 2026-08-03 | The redirect map contains relevance problems | Measured against archived page titles/H1s and current destinations | Preserve this review only if redirect-capable hosting is adopted later |
| 2026-08-03 | Matched unfiltered GSC comparison imported | Measured | Property totals increased from 44 to 51 clicks and from 1,888 to 2,088 impressions; CTR improved from 2.33% to 2.44% |
| 2026-08-03 | Visible non-brand click growth was effectively flat | Measured; visible-query rows only | Brand clicks rose from 10 to 18, while visible non-brand clicks rose from 11 to 12; do not describe the result as broad SEO growth |
| 2026-08-03 | Product-snippet exposure grew without clicks | Measured | Product-snippet impressions rose by 264, exceeding the property's net +200-impression gain, while clicks remained zero; audit query/page source before treating schema visibility as useful growth |
| 2026-08-03 | Mobile decline is concentrated in privacy-suppressed data, not a visible broad ranking loss | Measured with a mobile-filtered matched GSC comparison | Visible-query clicks were flat at 15 versus 15; do not launch a mobile rewrite, and remeasure after the active metadata test |
| 2026-08-03 | GA4 collection and primary click events verified live | Measured in Chrome Realtime | Start the trustworthy conversion baseline on 2026-08-03; audit the unexpected Google Ads page-load key event separately |
| 2026-08-03 | Three-month GSC export imported | Measured | Top-line post-launch clicks and impressions increased about 11% and 12%; request one matched comparison export to identify the responsible queries and pages |
| 2026-08-03 | Product-snippet-filtered GSC export is unsuitable for the main baseline | Measured | Exclude it from overall growth conclusions |
| 2026-08-03 | GA4 collection failure isolated to the custom `gtag()` queue wrapper | Measured A/B test | Replace Array queue entries with `arguments`, then verify Realtime before using GA4 for conversion strategy |
| 2026-08-02 | GitHub asset totals cannot measure redesign lift alone | Measured | Use only as supporting download evidence, not attribution |
| 2026-08-02 | €18.90 existed only in stale internal product context | Measured | Resolved: internal context corrected to verified €23.90 |
| 2026-08-02 | Core pages are permanently locked | Repository rule | Diagnose them, but target unlocked acquisition pages unless the user explicitly replaces the lock |
| 2026-08-02 | All current sitemap URLs are technically crawlable and internally linked | Measured | No current-page crawl blocker; obtain GSC coverage/CWV field data |
| 2026-08-02 | All 28 declared legacy redirects tested return `404` | Measured | Closed as accepted debt on 2026-08-03; keep hosting simple and leave retired pages deleted |
| 2026-08-02 | Legacy URLs had at least 3 clicks and 303 impressions before launch | Measured | Prioritize pricing, menu, download/trial, and guide redirect mappings |
| 2026-08-02 | PDA definition/process content has 21.4% trigram overlap | Measured | Confirm query cannibalization in GSC before differentiation or consolidation |
| 2026-08-02 | Pricing has zero contextual inbound links | Measured | Add natural pricing links from relevant unlocked acquisition pages |
| 2026-08-02 | Beach-bar page has one non-self inbound link and no contextual link | Measured | Retain and support only if fresh performance remains useful |
| 2026-08-02 | Internal product-marketing price was stale | Measured | Corrected internal context from €18.90 to €23.90 on 2026-08-02 |

## Next Update

The mobile-decline diagnosis is closed without a new website change: visible mobile-query clicks were flat, while the seven-click net loss sits entirely in privacy-suppressed rows. The definition/process metadata test remains live; freeze both test pages through 2026-08-31 and evaluate them on 2026-09-02 or later against the page-filtered 2026-08-03 baseline. The next scheduled checkpoint is narrower and earlier: recheck the waiter page's URL Inspection status between 2026-08-10 and 2026-08-17, 7–14 days after its indexing request. Do not request indexing again before that checkpoint. Independent keyword-demand and competitor validation can proceed meanwhile, but it must produce evidence before any new page is proposed.
