# POSPal SEO Proof Measurement Protocol

Status: Active for live `RB-2026-01`; dated observation checkpoints registered
Created: 2026-08-05
Primary business outcome: qualified downloads of `POSPal-win-Setup.exe`
Secondary outcome: useful engagement with installation/setup guidance
Related baseline: [AI-discovery measurement proposal](ai-discovery-measurement-proposal.md) and [benchmark runbook](ai-discovery-benchmark/RUNBOOK.md)

## Decision this protocol supports

For each released proof or content batch, determine which of these statements is best supported:

1. search engines discovered and surfaced the intended page for the intended query;
2. answer engines retrieved, cited, and accurately represented POSPal more often;
3. the new visibility produced qualified visits and installer-download actions;
4. the release created no detectable change yet and needs more time or stronger evidence;
5. the release harmed query ownership, recommendation accuracy, or funnel behavior and should be corrected or reversed.

The protocol does not promise causal attribution. It records the release, concurrent changes, discovery state, exposure, citations, referrals, and actions so a decision can be made with visible limitations.

## Measurement principles

- Start with a decision question, not a dashboard.
- Use one release batch ID across the change log, Search Console export, AI benchmark snapshot, and GA4 note.
- Separate measured facts, observations, estimates, and hypotheses.
- Keep counts beside rates; small denominators must remain visible.
- Do not call a result an SEO or AI-discovery win from one prompt, one referral, one download, or one short date range.
- Preserve the frozen AI prompt wording within a benchmark version.
- Preserve consent: analytics describes only consented traffic and must not be inflated to total traffic.
- Do not store prompts, screenshots, URLs, logs, or customer reports containing personal information in Git.
- Do not add website instrumentation merely for this protocol. Existing events are sufficient for the next batch.

## Release batch register

Create one row before any approved public change. Documentation-only work is not a public release batch.

| Field | Required value |
| --- | --- |
| Batch ID | `RB-YYYY-NN` |
| Public release timestamp | ISO timestamp with timezone |
| Git reference/deployment reference | Commit or deployment identifier after approval; never create one merely to fill this field |
| Changed public URLs | Exact list |
| Evidence IDs used | Fact and proof IDs supporting the change |
| Search intent | Primary query and buyer question per URL |
| Change class | Metadata, copy, evidence, schema, internal links, independent source, or mixed |
| Primary hypothesis | One falsifiable expected effect |
| Guardrail | Fit accuracy, non-fit exclusion, conversion clarity, or cannibalization risk |
| Concurrent changes | Releases, pricing, tracking, major external mentions, seasonality, or `none observed` |
| Crawl/index state | Discovery, crawl, canonical, and indexing checkpoints |
| Earliest evaluation date | Based on a complete comparison window and reporting delay |
| Decision | Continue, hold, iterate, reverse, or insufficient evidence |

### Registered batch: `RB-2026-01`

| Field | Value |
| --- | --- |
| Batch ID | `RB-2026-01` |
| Public release timestamp | `2026-08-05T14:04:21+03:00` |
| Git reference/deployment reference | Commit `e678480`; successful GitHub Actions run `30999951234` |
| Changed public URLs | `/systima-paraggeliolipsias.html`; `/asyrmati-paraggeliolipsia.html` |
| Evidence IDs used | `FAC-BND-001`, `FAC-BND-002`, `FAC-CAP-001`, `FAC-OFR-001`, `FAC-OFR-002`, `FAC-WIN-001`–`FAC-WIN-005`, `FAC-DEV-001`–`FAC-DEV-003`, `FAC-NET-001`–`FAC-NET-008`, `FAC-PRN-001`–`FAC-PRN-007`, `FAC-WRK-001`–`FAC-WRK-003`, `FAC-QR-001` |
| Search intent | Generic ordering-system evaluation; wireless/local-network behavior and reconnect limits |
| Change class | Metadata, copy, controlled evidence, FAQ schema, internal links, and page-specific design |
| Primary hypothesis | Source-specific workflow and connection information will improve non-brand relevance, AI retrieval accuracy, and qualified download intent for the two intended page owners |
| Guardrail | No broad compatibility, independent proof, customer outcome, integration, or fiscal claim; no PDA-experiment contamination |
| Concurrent changes | Proof-system documentation and graph refresh; 2026-08-06 sitemap `lastmod` correction for the two released URLs; no pricing, tracking, locked-page, PDA-page, or public page-content change |
| Crawl/index state | Both URLs are live, return `200`, expose the intended self-canonical content, and were submitted to Google Search Console and Bing Webmaster Tools on 2026-08-05; indexing and ranking remain unconfirmed |
| Earliest evaluation date | 2026-09-05, subject to successful deployment, crawlability, complete windows, and reporting delay |
| Decision | Hold for exposure and the registered observation checkpoints |

### Registered observation checkpoints

The dates below are collection points, not promises of indexing or ranking movement. Record zeroes and unavailable data rather than leaving a checkpoint ambiguous.

| Date | Checkpoint | Required evidence | Decision boundary |
| --- | --- | --- | --- |
| 2026-08-12 | 7-day observation | GSC URL Inspection or coverage state, sitemap processing, selected canonical, Bing crawl/index state, first known crawl if available | Discovery check only; do not judge ranking or copy performance |
| 2026-08-19 | 14-day observation | Updated crawl/index state, visible query impressions, page ownership, search-snippet freshness, Bing state | Directional note only; hold when exposure or volume is incomplete |
| 2026-09-02 | 28-day observation and PDA experiment review | GSC and Bing observation, consented GA4 counts since 2026-08-03, PDA experiment evidence, AI benchmark readiness | Capture the observation; rerun the frozen AI benchmark only if the released pages are crawl-refreshed |
| 2026-09-05 or later | Release 1 decision | Complete equal-duration GSC windows with reporting delay, available GA4 funnel data, AI benchmark when eligible, independent-source state | Continue, hold, iterate, reverse, or insufficient evidence |

## Batch boundaries

### Active experiment protection

The PDA definition/process metadata test is frozen from 2026-08-04 through 2026-08-31 and is reviewed on 2026-09-02 or later. Do not mix a proof-driven body, H1, metadata, URL, or linking change into those two experimental pages before that decision.

### Next proof batch

The next proof release should be the smallest coherent public batch. Prefer one page owner and one evidence job. If the generic hub is approved, record its evidence module, query-aligned H1/opening, and any related schema/link change as one batch; do not silently bundle unrelated site cleanup.

### Evaluation clock

Start the exposure window only after the changed URL is live, returns the intended content, and is eligible for indexing. Record first known crawl when available. For Search Console, compare complete equal-duration windows and allow reporting delay. A standard decision window is 28 complete days before versus 28 complete days after; retain daily data for context.

If a page is not crawled or indexed, diagnose discovery first. Do not judge copy performance from an exposure window that never occurred.

## Search Console protocol

### Required exports

Export unfiltered Web search data for the property and page-filtered data for every changed URL:

- Queries;
- Pages;
- Countries;
- Devices;
- Search appearance.

Use the same Search type, filters, comparison periods, and timezone. Preserve the raw export outside Git if it contains sensitive or bulky data; record a privacy-safe summary and filename/checksum in the decision log.

### Page-query record

| Field | Purpose |
| --- | --- |
| Batch ID | Connects the result to the release |
| Page | Canonical URL |
| Query | Exact GSC query text or privacy-safe cluster label |
| Query class | Brand, generic category, use case, constraint, price, setup, or non-fit |
| Before clicks/impressions/CTR/position | Equal complete baseline window |
| After clicks/impressions/CTR/position | Equal complete exposure window |
| Index/crawl note | Determines whether exposure was possible |
| Confounders | Seasonality, release, SERP change, concurrent edit, low volume |
| Interpretation | Measured movement plus limitations |

### Search success and guardrails

- Success signal: the intended URL gains impressions/clicks or stronger average position for its assigned non-brand query set without another POSPal URL losing the same query ownership.
- Cannibalization guardrail: compare the same query across all current POSPal pages before crediting a page-level gain.
- CTR diagnosis: impressions/position improve but clicks do not → inspect title, description, intent match, and SERP features.
- Exposure diagnosis: no impressions and no crawl/index evidence → investigate discovery rather than rewriting copy.
- Brand/non-brand rule: report brand and visible non-brand results separately. Do not describe brand-led growth as broad category growth.
- Privacy-suppressed rows: reconcile property totals with visible rows and state the gap; do not assign suppressed movement to a query.

## AI-discovery benchmark protocol

Use benchmark version `1.0` exactly as defined in `docs/seo/ai-discovery-benchmark/`. Create the next snapshot only after the public batch is crawlable. Do not alter prompts to favor the released page.

Record and compare:

- POSPal mention rate;
- stable mention rate across repetitions;
- top-three recommendation rate and conditional position;
- exact-fit and broad-category coverage;
- `pospal.gr` citation rate and cited URLs;
- independent-source citation rate and cited URLs;
- retrieved-but-not-recommended rate;
- fit accuracy;
- non-fit false-positive rate.

### AI decision rules

| Pattern | Interpretation | Next action |
| --- | --- | --- |
| No POSPal source retrieved | Discovery/authority remains the likely constraint | Check crawl/index state and pursue qualifying independent evidence |
| POSPal source retrieved but not recommended | Evidence or fit explanation remains weak | Inspect cited page, missing buyer facts, and proof class |
| Exact-fit improves; broad stays flat | Product fit is clearer but category authority remains weak | Strengthen the generic hub and external corroboration without broadening claims |
| Mentions rise and non-fit accuracy holds | Positive directional discovery signal | Confirm citations, referrals, and GSC exposure before declaring success |
| Mentions rise but non-fit errors rise | Boundary clarity regressed | Correct fiscal/cloud/product-scope ambiguity |
| Independent citation appears | External source may be contributing | Validate that the source actually describes POSPal.gr and controls its conclusion |

Because answer-engine output is variable, report raw response counts and each run condition. Never present a benchmark as a permanent rank.

## GA4 referral and funnel protocol

The trustworthy GA4 baseline begins 2026-08-03. Do not mix earlier data into conversion conclusions.

Analytics is consent-gated, so metrics describe measured consenting sessions only. Existing events are sufficient:

- `download_click`;
- `trial_start_click`;
- `guide_journey_start`.

### AI-referral exploration

Use `utm_source=chatgpt.com` as the required direct ChatGPT signal and retain raw source/medium values for validation. Do not merge every AI-looking referrer into one channel until each pattern is observed and verified.

Dimensions:

- session source/medium;
- landing page plus query string;
- device category;
- country;
- date;
- CTA variant where available.

Metrics:

- sessions;
- engaged sessions;
- total users;
- `download_click` count and sessions containing it;
- `trial_start_click` count and sessions containing it;
- `guide_journey_start` count and sessions containing it;
- session key-event rate.

Compare AI-referral sessions with organic-search and other-referral sessions, but keep counts visible and avoid performance claims when the segment is too small for a stable conclusion.

### Landing-page funnel interpretation

| Observation | Likely question |
| --- | --- |
| AI citations rise; no referral sessions | Does the answer satisfy the user without a click, or is the cited link not the relevant landing page? |
| Referral sessions rise; no download/trial action | Does the landing page answer the cited promise and make Windows/trial requirements clear? |
| Download actions rise; guide starts do not | Are visitors prepared to self-install, or is setup guidance insufficiently visible? |
| Guide starts rise; downloads do not | Has guidance displaced the primary download action or attracted research-only traffic? |
| Non-fit traffic/actions rise | Did public wording or AI summaries obscure the fiscal-POS boundary? |

## Link attribution and UTM rules

- Do not require an independent publisher to add tracking parameters to a natural editorial citation.
- A POSPal-supplied outreach link may use `utm_source={source_slug}&utm_medium=earned_outreach&utm_campaign={proof_or_batch_id}` only when disclosure and source naming are appropriate.
- Do not use personal names, customer contacts, venue-private identifiers, or free-text personal data in UTM values.
- Keep parameter values lowercase ASCII with underscores.
- Never infer an endorsement or source impact solely from a UTM session.

## Supporting download evidence

GitHub release asset download counts can show that installer assets were downloaded, but they cannot identify traffic source, consent, unique users, successful installation, or causation. Record them as supporting totals only:

| Field | Value |
| --- | --- |
| Observation timestamp |  |
| Release tag and asset |  |
| Published timestamp |  |
| Cumulative download count |  |
| Change since prior observation |  |
| Relevant releases/site batches |  |
| Limitations | Cumulative asset count; no source or installation attribution |

## Customer-reported discovery

When a customer says ChatGPT or another answer engine led them to POSPal, record—with permission—only what is needed:

- engine/surface and approximate date;
- exact prompt, shared conversation, or redacted screenshot if voluntarily supplied;
- cited POSPal or independent URLs;
- landing page remembered or observed;
- whether the installer was downloaded;
- permission scope for internal analysis or public use.

Keep personal contact details and raw correspondence outside Git. A customer report is qualitative discovery evidence, not a replacement for referral or benchmark measurement.

## Release scorecard

Complete one scorecard per batch:

| Layer | Before | After | Evidence | Result | Limitation |
| --- | --- | --- | --- | --- | --- |
| Crawl/index state |  |  | URL Inspection or GSC |  |  |
| Assigned GSC queries |  |  | Page/query export |  |  |
| Other POSPal pages for same queries |  |  | Query/page comparison |  |  |
| AI mention/position |  |  | Frozen benchmark snapshot |  |  |
| Owned citations |  |  | Benchmark source records |  |  |
| Independent citations |  |  | Benchmark source records |  |  |
| Fit/non-fit accuracy |  |  | Benchmark scoring |  |  |
| AI referral sessions |  |  | Consented GA4 Exploration |  |  |
| Download/trial actions |  |  | Consented GA4 events |  |  |
| Guide starts |  |  | Consented GA4 events |  |  |
| Installer asset count |  |  | GitHub release metadata |  |  |
| Customer-reported discovery |  |  | Permissioned intake |  |  |

## Decision gate

Use the smallest defensible conclusion:

- **Continue:** intended query/citation/funnel signals move in a consistent positive direction and accuracy guardrails hold.
- **Hold:** exposure is incomplete, volume is too small, or signals conflict; keep the batch stable and collect another complete window.
- **Iterate:** the intended page is exposed but the query, citation, or funnel diagnosis identifies a specific correctable weakness.
- **Reverse:** a measured change causes clear query-ownership loss, material expectation mismatch, or increased non-fit recommendation.
- **Insufficient evidence:** no conclusion can be separated from missing crawl, missing consented data, seasonality, or concurrent changes.

Do not calculate a single composite “SEO score.” Search exposure, answer-engine visibility, accuracy, referrals, and downloads answer different questions and should remain separate.

## Completion criteria

This planning step is complete when:

- the next approved release receives a batch ID before implementation;
- changed URLs, evidence IDs, hypothesis, guardrail, and concurrent changes are logged;
- GSC, AI benchmark, GA4, asset, and customer-report fields use the definitions above;
- the active PDA test remains uncontaminated;
- no tracking or locked-page change is introduced solely for measurement.
