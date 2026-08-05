# POSPal AI-Discovery Scorecard

Snapshot: `B0`
Prompt-bank version: `1.0`
Status: Lean baseline complete; forced-Search repetitions `S2` and `S3` deferred
Run window: Completed 2026-08-04
Reviewer: Codex

## Environment

| Setting | Recorded value |
| --- | --- |
| Account type | Signed out; no account |
| Displayed model | Not displayed |
| Browser/device | Incognito browser; exact browser/device not recorded |
| Interface language | Greek |
| Country | Greece |
| Precise device location | Not observed |
| Memory | Not applicable; signed out with no account |

## Data-quality check

| Check | Expected | Actual | Pass |
| --- | ---: | ---: | --- |
| Unique conversations | 26 lean / 52 full | 26 | Lean scope complete |
| Unique response records | 28 lean / 56 full | 28 | Lean scope complete |
| Forced-Search core responses | 12 lean / 36 full | 12 | Lean scope complete |
| Default-mode core responses | 12 | 12 | Complete |
| `R01` response records | 4 lean / 8 full | 4 | Lean scope complete |
| Rows missing required fields | 0 | 0 | Pass |
| Rows with unconfirmed environment fields | 0 | 0 | Pass |
| Ambiguous/off-target prompt interpretations | 0 | 3 | Report separately |
| PII or committed captures | 0 | 0 | Pass |

The lean scorecard can be used for diagnosis. Claims about repetition stability remain deferred until `S2` and `S3` are run.

## Forced-Search S1 checkpoint

This is the completed lean forced-Search pass. It is not a repetition-stability result.

| Observation | S1 result |
| --- | ---: |
| Conversations completed | 13 / 13 |
| Response records completed | 14 / 14 |
| Valid software-intent core responses | 8 / 10 |
| POSPal mentions in valid core responses | 0 / 8 |
| `pospal.gr` retrievals in valid core responses | 0 / 8 |
| Ambiguous/off-target core responses | 2 / 10 |
| Correct non-fit controls | 2 / 2 |
| Non-fit false positives | 0 / 2 |
| Exact `R01` turns mentioning POSPal | 0 / 2 |

Interpretation: ChatGPT understood several close-fit POSPal workflows but did not retrieve POSPal as a candidate or source in forced-Search `S1`. Default mode later proved that the POSPal pricing page is retrievable for one highly specific trial query.

## Primary forced-Search results

Planned denominator: 30 responses across `B01`–`F04`. The final valid denominator excludes documented non-software interpretations. Non-fit controls and `R01` are excluded.

| Metric | Numerator | Denominator | Result |
| --- | ---: | ---: | ---: |
| Mention rate | 0 | 8 valid S1 responses | 0% |
| Top-three rate | 0 | 8 valid S1 responses | 0% |
| Owned-source citation rate | 0 | 8 valid S1 responses | 0% |
| Independent-source citation rate | 0 | 8 valid S1 responses | 0% |
| Retrieved-but-not-recommended rate | 0 | 8 valid S1 responses | 0% |
| Conditional average position | N/A | 0 mentioned responses | N/A |

### Stability by prompt

Stable means POSPal is mentioned in at least two of three forced-Search repetitions.

| Prompt | S1 | S2 | S3 | Stable | Best position | Repeated source pattern |
| --- | --- | --- | --- | --- | ---: | --- |
| `B01` | No | N/A | N/A | Pending | N/A | `gestpos.gr`, `ordio.gr`, `serviro.gr` in S1 |
| `B02` | No | N/A | N/A | Pending | N/A | `ordio.gr`, `gestpos.gr`, `simple.com.gr` in S1 |
| `B03` | No | N/A | N/A | Pending | N/A | `bario.gr`, `gestpos.gr`, `bringfood.gr`, `laveone.gr`, `qr.gr`, `webmenu.gr` in S1 |
| `C01` | No | N/A | N/A | Pending | N/A | No visible sources in S1; panel status pending |
| `C02` | No | N/A | N/A | Pending | N/A | `laveone.gr`, `spevdo.gr`, `platofork.com`, `restrosuite.app`, `tabres.com` in S1 |
| `C03` | No — interpreted as physical equipment | N/A | N/A | Pending validity | N/A | No visible sources in S1 |
| `F01` | No | N/A | N/A | Pending | N/A | No visible sources in S1 |
| `F02` | No | N/A | N/A | Pending | N/A | No product sources in S1; intent correctly understood |
| `F03` | No — interpreted as general ERP/order management | N/A | N/A | Pending validity | N/A | Seven non-hospitality/general-POS sources in S1 |
| `F04` | No | N/A | N/A | Pending | N/A | No product sources in S1; exact workflow correctly understood |
| **Stable mention rate** |  | Deferred | Deferred | **Not measured** |  |  |

### Performance by intent group

| Group | Responses | Mention rate | Top-three rate | Owned citation rate | Independent citation rate |
| --- | ---: | ---: | ---: | ---: | ---: |
| Broad category `B` | 3 valid S1 | 0% | 0% | 0% | 0% |
| Commercial constraints `C` | 2 valid S1 | 0% | 0% | 0% | 0% |
| Exact fit `F` | 3 valid S1 | 0% | 0% | 0% | 0% |

## Default-mode controls

| Metric | Result |
| --- | ---: |
| Responses without automatic Search | 6 / 9 completed relevant responses |
| Responses with automatic Search | 3 / 9 completed relevant responses |
| POSPal mention rate | 1 / 9 completed relevant responses |
| Top-three rate | 1 / 9 completed relevant responses |
| Owned-source citation rate | 1 / 9 completed relevant responses |
| Independent-source citation rate | 0 / 9 completed relevant responses |

Do not combine these results with forced Search.

## Non-fit accuracy

Lean denominator: two forced-Search responses across `N01` and `N02`. The full benchmark denominator of six is deferred.

| Prompt | Correct non-fit | Incorrect recommendation | Notes |
| --- | ---: | ---: | --- |
| `N01` | 1 / 1 | 0 / 1 | S1 correctly excluded POSPal and cited AADE |
| `N02` | 1 / 1 | 0 / 1 | S1 correctly excluded POSPal and cited cloud/fiscal alternatives |
| **False-positive rate** |  | **0 / 2 (0%)** |  |

## Exact reported-scenario reproduction

`R01` is reported separately and does not affect the primary aggregate.

| Mode/run | Turn 1 mention and position | Turn 2 mention and position | Sources involving POSPal | Outcome |
| --- | --- | --- | --- | --- |
| Forced Search S1 | Absent | Absent | `qr.gr`, `dishy.gr` in turn 2; no POSPal source | Exact reported failure fully reproduced |
| Default D1 | Absent | Absent | `dishy.gr`, `qr.gr` in turn 2; no POSPal source | Exact reported failure fully reproduced |
| Forced Search S2 | N/A | N/A | N/A | N/A |
| Forced Search S3 | N/A | N/A | N/A | N/A |

## Recurring cited domains

| Domain | Responses citing domain | Mentions supported | Owned/independent/other | Observation |
| --- | ---: | ---: | --- | --- |
| `gestpos.gr` | 5 | 0 | Other | Most frequently retrieved product domain |
| `ordio.gr` | 5 | 0 | Other | Most frequently retrieved product domain |
| `qr.gr` | 4 | 0 | Other | Recurred in price, QR, and cheaper/simpler results |
| `serviro.gr` | 3 | 0 | Other | Recurred across broad and trial queries |
| `aade.gr` | 2 | 0 | Other | Authoritative fiscal source in non-fit controls |
| `bario.gr` | 2 | 0 | Other | Recurred in public-price results |
| `cloudpos.gr` | 2 | 0 | Other | Recurred in fiscal/cloud results |
| `dishy.gr` | 2 | 0 | Other | Appeared in both exact cheaper/simpler follow-ups |
| `laveone.gr` | 2 | 0 | Other | Recurred in trial and price results |
| `timologic.gr` | 2 | 0 | Other | Recurred in fiscal results |
| `pospal.gr` | 1 | 1 | Owned | Retrieved only for default-mode `C02`; POSPal ranked first |

All one-off domains remain available in [RESULTS.csv](RESULTS.csv).

## GA4 AI-referral funnel

Use data beginning 2026-08-03. Report counts even when no ChatGPT sessions are present.

| Segment | Sessions | Engaged sessions | Users | `download_click` | `trial_start_click` | Guide entries | Session key-event rate |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ChatGPT referrals | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| Other referrals | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| Organic | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

## Diagnosis

### What is measured

- The lean baseline contains 26 isolated signed-out incognito conversations and 28 response records.
- Forced Search mentioned POSPal in 0 of 8 valid product-intent responses and retrieved `pospal.gr` in 0 of 8.
- Default mode mentioned POSPal in 1 of 9 valid product-intent responses. It ranked POSPal first only for the exact no-card trial query `C02`.
- The successful answer cited `https://pospal.gr/times.html` and accurately reported the 30-day trial without a card or personal information.
- The exact reported two-turn scenario omitted POSPal in all four measured answers: two forced-Search turns and two default-mode turns.
- Default mode without Search recalled POSPal in 0 of 6 valid responses.
- No response cited an independent source describing POSPal.
- All four completed non-fit responses—two forced Search and two default mode—correctly omitted POSPal.
- `C03` is invalid because both modes interpreted it as physical equipment. Forced-Search `F03` was off-target, while default mode interpreted it correctly.

### What is inferred

- POSPal is technically retrievable; a universal crawl or indexing block is unlikely because ChatGPT successfully retrieved the pricing page.
- The product has a strong association with its distinctive no-card trial when that requirement is stated explicitly.
- The association between POSPal and the broader Greek ordering-software category is weak.
- The association between POSPal and its core workflows—existing cash register, Windows host, existing phones, local Wi-Fi, and kitchen flow—is also weak even when ChatGPT understands those requirements correctly.
- The complete absence of independent POSPal citations is consistent with an authority and corroboration gap.

### Primary constraint

Weak category/entity association supported by too little independent and operational evidence. The immediate problem is not that ChatGPT can never access POSPal; it is that POSPal rarely enters the candidate set outside one highly distinctive offer query.

### Evidence for the constraint

- `pospal.gr` appeared once, proving retrievability, but did not appear for any broad or workflow-specific Search prompt.
- ChatGPT repeatedly described POSPal-compatible workflows without attaching the POSPal name to them.
- GEST and Ordio were each cited five times, QR.gr four times, and Serviro three times; `pospal.gr` was cited once.
- The only POSPal evidence used was POSPal's own pricing page. Independent citation count was zero.
- The original cheaper/simpler conversation was reproduced in both modes and selected Dishy/QR.gr instead.

### Recommended next batch

1. Approve one unambiguous Greek POSPal entity descriptor and the publishable company/product facts behind it.
2. Draft an entity-foundation specification for an unlocked public page and supported `Organization`, `WebSite`, and `SoftwareApplication` schema. Do not add unsupported properties or ratings.
3. Build a verified evidence pack covering Windows installation, existing-phone use, local-network behavior, kitchen/printer routing, product limitations, price, and trial terms.
4. Use that evidence to strengthen the existing generic hub at `/systima-paraggeliolipsias.html`; do not create a competing generic URL.
5. Obtain at least one real, independently checkable customer or partner reference before treating external authority as solved.
6. Replace `C03` and clarify `F03` in prompt-bank version `1.1`, but retain version `1.0` results unchanged.
7. Defer `S2` and `S3` until the first released evidence/entity batch is crawlable; use them to measure change rather than consume more manual effort now.

### What would falsify this diagnosis

- Future forced-Search repetitions retrieve and recommend POSPal broadly without any entity, evidence, or authority improvements.
- Search answers repeatedly retrieve `pospal.gr` but exclude POSPal for explicit, accurate product-fit reasons; that would shift the primary constraint from retrieval/association to product capability or comparative fit.
- Independent POSPal sources already exist and are cited once exposed by a complete backlink/source audit.
