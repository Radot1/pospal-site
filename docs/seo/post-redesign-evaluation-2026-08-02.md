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
| 1. Measurement baseline | In progress | Matched GSC/GA4 periods, event inventory, and baseline scorecard |
| 2. Technical health | Complete with open field-data inputs | Live crawl recorded; GSC coverage/CWV remain N/A |
| 3. Search-performance diagnosis | In progress; top-line imported | Matched query/page comparison is still needed for brand/non-brand and intent-cluster deltas |
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

### Data availability audit — 2026-08-02

| Source | Status | Evidence / limitation |
| --- | --- | --- |
| Pre-launch GSC export | Available | Measured; export ends 2026-06-21 |
| Post-launch GSC export | Partially available | Measured; the 2026-08-02 three-month export supports a matched daily top-line, but not matched query/page deltas |
| GA4 implementation | Defective | Measured; the custom `gtag()` wrapper queues Arrays instead of the required `arguments` object, so no GA4 collection request is sent |
| GA4 report/export | N/A | No traffic or event export available locally |
| Download event | Implemented | Measured; explicit installer clicks emit `download_click` |
| Trial CTA event | Implemented | Measured; qualifying CTAs emit `trial_start_click` |
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
| Search visibility | Non-brand impressions by intent cluster | Top-line available; matched query comparison still required |
| Ranking | Position by cluster and landing page | Aggregate trend available; matched page/query comparison still required |
| Search appeal | CTR for queries in positions 3–15 | Aggregate trend available; matched query comparison still required |
| Acquisition | Organic landing-page sessions | Awaiting GA4 export |
| Product interest | `download_click` users and rate | Instrumented; awaiting GA4 export |
| Onboarding interest | Guide entry and progress events | Instrumented; awaiting GA4 export |
| Product activation | Completed installation / trial activation | Not instrumented on the website |

### Phase 1 open inputs

- Search Console: last 28 days vs previous 28 days; exports for Queries and Pages.
- Search Console: Indexing > Pages summary and Core Web Vitals report.
- GA4: organic landing pages with sessions, users, `download_click`, `trial_start_click`, and guide events for the same matched periods.
- Confirmation that GA4 key events and custom dimensions in `guides/internal/GA4_SETUP_CHECKLIST.md` were configured in the GA4 property, not only in code.

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

### Phase 2 open inputs

- GSC Indexing > Pages totals and reasons.
- GSC Core Web Vitals report for mobile and desktop.
- Optional URL Inspection for the three core PDA pages and the highest-value broken legacy URLs.
- Hosting/DNS ownership information needed to choose the real `301` implementation.

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

The unfiltered three-month export dated 2026-08-02 supports a matched 28-day site-level comparison around the redesign. It does not contain period-by-period query or page columns, so it cannot yet identify which intent clusters or landing pages caused the change.

| Period | Clicks | Impressions | CTR | Weighted position |
| --- | ---: | ---: | ---: | ---: |
| 2026-05-31 to 2026-06-27 | 45 | 1,780 | 2.53% | 9.08 |
| 2026-06-28 to 2026-07-25 | 50 | 1,998 | 2.50% | 14.34 |
| Change | +11.1% | +12.2% | -0.03 pp | -5.26 positions |

Interpretation: the redesign period gained visibility and clicks, but click efficiency did not improve. The weaker aggregate position can be produced by new impressions at lower ranks, so it is not sufficient evidence of a broad ranking loss. A matched query/page comparison is required before changing content.

The 2026-08-03 export is not suitable for the baseline because it is filtered to `Search appearance: Product snippets`; it records zero clicks and represents only that search feature.

Public search results confirm that current PDA, pricing, generic ordering, wireless ordering, download, and guide pages are discoverable and have been crawled recently, so total crawl exclusion is not the leading diagnosis.

Public results also continue to display some retired URLs that now return `404`. That strengthens the Phase 2 redirect priority.

The next GSC analysis must produce these tables:

1. site totals, matched 28-day periods;
2. brand vs non-brand totals;
3. intent-cluster deltas;
4. landing-page deltas;
5. query-by-page matrix for the three PDA pages;
6. device split, because the pre-launch baseline was 69% mobile impressions and 70% mobile clicks.

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

**Decision:** separate the definition and process promises more clearly, but wait for the GSC query-by-page matrix before choosing between differentiation and consolidation.

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
| Validate GA4 property configuration and live events | Event code exists, but property-side key events/dimensions and actual collection are not evidenced | `download_click`, trial CTA, guide entry, and page context appear once in DebugView and matched reports |
| Obtain matched GSC and GA4 exports | Without them, “no improvement” cannot be decomposed into visibility, CTR, traffic, or conversion | Required 28-day tables are stored and the Phase 3 delta is complete |

These become true P0 incidents only if tracking is absent/duplicated or important pages are excluded from Google. No current P0 ranking blocker is confirmed.

#### P1 — High impact

| Priority | Action | Evidence | Owner type |
| ---: | --- | --- | --- |
| 1 | Implement all legacy mappings as real one-hop `301` redirects | 28/28 tested rules currently return `404`; old URLs had at least 303 impressions and 3 clicks | Hosting/DNS |
| 2 | Recalculate brand/non-brand and intent-cluster performance | Current diagnosis lacks post-launch first-party data | Measurement |
| 3 | Confirm or reject PDA definition/process cannibalization | Titles overlap and main content shares 21.4% normalized trigrams | SEO/content |
| 4 | Differentiate the definition, process, and waiter pages using genuinely distinct information | Current pages are structurally sound but templated and evidence-light | Product/content |
| 5 | Add contextual links to pricing from relevant unlocked acquisition pages | Pricing has zero main-content inbound links | SEO/content |
| 6 | Support the beach-bar URL contextually if fresh GSC confirms value | Only one non-self inbound link, not contextual; historical position was strong | SEO/content |

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
| 2026-08-03 | Three-month GSC export imported | Measured | Top-line post-launch clicks and impressions increased about 11% and 12%; request one matched comparison export to identify the responsible queries and pages |
| 2026-08-03 | Product-snippet-filtered GSC export is unsuitable for the main baseline | Measured | Exclude it from overall growth conclusions |
| 2026-08-03 | GA4 collection failure isolated to the custom `gtag()` queue wrapper | Measured A/B test | Replace Array queue entries with `arguments`, then verify Realtime before using GA4 for conversion strategy |
| 2026-08-02 | GitHub asset totals cannot measure redesign lift alone | Measured | Use only as supporting download evidence, not attribution |
| 2026-08-02 | €18.90 existed only in stale internal product context | Measured | Resolved: internal context corrected to verified €23.90 |
| 2026-08-02 | Core pages are permanently locked | Repository rule | Diagnose them, but target unlocked acquisition pages unless the user explicitly replaces the lock |
| 2026-08-02 | All current sitemap URLs are technically crawlable and internally linked | Measured | No current-page crawl blocker; obtain GSC coverage/CWV field data |
| 2026-08-02 | All 28 declared legacy redirects tested return `404` | Measured | P1: implement real one-hop `301` redirects at the host/edge and verify |
| 2026-08-02 | Legacy URLs had at least 3 clicks and 303 impressions before launch | Measured | Prioritize pricing, menu, download/trial, and guide redirect mappings |
| 2026-08-02 | PDA definition/process content has 21.4% trigram overlap | Measured | Confirm query cannibalization in GSC before differentiation or consolidation |
| 2026-08-02 | Pricing has zero contextual inbound links | Measured | Add natural pricing links from relevant unlocked acquisition pages |
| 2026-08-02 | Beach-bar page has one non-self inbound link and no contextual link | Measured | Retain and support only if fresh performance remains useful |
| 2026-08-02 | Internal product-marketing price was stale | Measured | Corrected internal context from €18.90 to €23.90 on 2026-08-02 |

## Next Update

Obtain one unfiltered Search Console comparison export for the last complete 28 days versus the previous 28 days, including Queries and Pages. Use it to complete the intent-cluster and landing-page deltas before selecting the first content change. Repair and verify GA4 separately before conversion conclusions are drawn.
