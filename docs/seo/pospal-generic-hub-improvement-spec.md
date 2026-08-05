# POSPal Generic Search Hub Audit and Improvement Specification

Status: Audit complete; implementation scope superseded by the repository-backed website proposal
Audited source: `/systima-paraggeliolipsias.html` in the repository
Audit date: 2026-08-05
Primary search intent: commercial investigation
Primary query: `σύστημα παραγγελιοληψίας`
Secondary query set: `σύστημα παραγγελιοληψίας για εστίαση`, `πρόγραμμα παραγγελιοληψίας`, `παραγγελιοληψία για εστιατόριο`, `παραγγελιοληψία Windows`
Query source: estimated from the current page role and repository strategy; validate with Search Console before treating volumes or rankings as measured

## Decision

Keep `/systima-paraggeliolipsias.html` as the generic commercial hub. Do not create another page for the same broad intent and do not change its URL.

The next revision should improve exact query matching and make the page an evidence index: a visitor or answer engine should be able to distinguish product facts, controlled observations, customer evidence, and untested boundaries. The page must continue to answer the query quickly and lead primarily to the Windows download.

No website change is authorized by this document. The page should be revised only after the evidence gates below are met and the user approves implementation. The permanently locked homepage, download page, and guides page remain untouched.

Implementation note: the private application repository review completed on 2026-08-05 supplied controlled first-party evidence for narrow workflow, local-network, reconnect, printer-routing, QR-menu, and language facts. Use the [repository-backed website proposal](pospal-repository-backed-website-proposal.md) for the current implementation scope. Broad compatibility, customer, outcome, and independent-proof gates remain closed.

## Audit method and limits

The audit uses the on-page SEO scoring rubric against the UTF-8 repository source. It checks document structure, visible text, local link targets, image metadata, and markup. It does not claim live rankings, search volume, Core Web Vitals, or external-link health.

Repository measurements:

- title: 45 characters;
- meta description: 141 characters;
- approximately 586 visible words;
- one H1, seven H2 elements, and ten H3 elements;
- 22 links including navigation, footer, repeated calls to action, and the skip link;
- two images: a decorative brand icon and one descriptive product screenshot;
- self-referencing canonical;
- `FAQPage` structured data with four visible questions;
- all local link and asset targets referenced by the page exist in the repository.

## Weighted scorecard

| Area | Score | Maximum | Finding |
| --- | ---: | ---: | --- |
| Title tag | 13 | 15 | The primary phrase leads the title and intent is clear. At 45 characters it is shorter than the rubric's 50–60-character target, but truncation risk is low and the brand is last. |
| Meta description | 3 | 5 | Accurate and naturally includes the primary phrase, but it is 141 rather than 150–160 characters and lacks a direct action. |
| Header structure | 7 | 10 | Exactly one H1 and the hierarchy is sound. The H1 describes the workflow but does not contain the primary query; several H2s are evocative rather than explicit answers. |
| Content quality | 15 | 25 | Clear, readable, audience-appropriate Greek with a strong product boundary and practical flow. At about 586 words it is partial depth for commercial intent, and it contains no named customer evidence, independent verification, measured setup record, or source dates. |
| Keyword optimization | 10 | 15 | The primary phrase appears naturally in the title, meta, URL transliteration, early copy, and body at a reasonable approximate density. It is absent from the H1 and image alt, and the secondary term `πρόγραμμα παραγγελιοληψίας` is absent. |
| Links | 9 | 10 | Strong descriptive internal links connect the hub, use-case pages, pricing, entity page, guides, and download path. No authoritative independent source is available yet. |
| Images | 7 | 10 | The product screenshot has a descriptive filename, dimensions, and useful alt text; as the hero it correctly avoids lazy loading. Its 121,808-byte PNG is above the rubric's 100 KB screenshot target, and the 270,398-byte icon is heavy for an icon. |
| Page-level technical | 7 | 10 | Clean stable URL, viewport, canonical, and eligible FAQ markup are present. Live HTTPS, rendering, accessibility, and Core Web Vitals were not measured in this repository-only pass. |
| **Overall** | **71** | **100** | **Grade B: good foundation; evidence and query alignment are the main opportunities.** |

No page-type weight adjustment was applied, so this result remains comparable to the standard rubric.

## Fast E-E-A-T scan

### Experience

Present but controlled: the page uses a real POSPal screen and describes a plausible order path. Missing: a versioned test record, authentic kitchen output, named venue, and documented limitations.

### Expertise

Present in the accurate fiscal boundary and workflow vocabulary. Missing: an attributable product owner/reviewer link in the body, last-reviewed date, and technical setup details that have passed a controlled test.

### Authoritativeness

The entity page and internal topic cluster establish a consistent controlled source. There is no independently authored source, customer case, public review, or third-party reproduction to corroborate the product.

### Trustworthiness

Clear pricing, trial, download destination, and “not a fiscal POS/cash register” language are strengths. Trust is limited by the lack of evidence labels, test conditions, tested-device/printer boundaries, and update dates.

## Issues by priority

### Critical before adding stronger claims

1. Do not add compatibility, performance, reliability, setup-time, offline, printer-model, customer, or outcome claims until the relevant fact IDs have qualifying evidence.
2. Do not present POSPal-controlled observation as customer or independent evidence.
3. Keep the fiscal-POS boundary visible and consistent with the entity and pricing sources.

### High

1. Put `σύστημα παραγγελιοληψίας` naturally in the H1.
2. Add a compact “verified facts and limits” block with evidence links and review dates.
3. Replace broad device/network implications with the source-verified narrow architecture in the repository-backed proposal; continue to exclude OS/browser/router compatibility.
4. Add one approved named operational example only after `PRF-2026-002` reaches publishable status.

### Medium

1. Expand the meta description to a natural call to action without keyword stuffing.
2. Make H2s more explicit about selection questions: what it is, how it works, what is needed, what is verified, and what it does not replace.
3. Add `πρόγραμμα παραγγελιοληψίας` once in natural explanatory copy if Search Console confirms that variant matters.
4. Optimize the screenshot and icon only if visual comparison confirms no meaningful quality loss.
5. Re-run the page in a live technical audit for Core Web Vitals, keyboard focus, contrast, and schema parity.

## Proposed information architecture

The first screen should answer the generic query, define the product boundary, and expose the download action. Evidence should appear before use-case expansion.

1. Hero: exact category answer, concise product descriptor, download CTA, guide CTA, trial and price facts.
2. Verified facts: version/date-stamped facts with direct evidence links and explicit limitations.
3. How the workflow works: staff device → Windows host → kitchen/order handling, using only demonstrated steps.
4. What is required: tested Windows environment, local-network condition, device condition, and optional printing boundary.
5. Operational example: one named venue only after granular publication permission.
6. Use-case routing: cafeteria, restaurant, beach bar, food truck, PDA, and wireless pages without duplicating their narrower intent.
7. Product boundary: POSPal is not a fiscal POS and not a cash register.
8. FAQ: only visible, maintained answers that match the page and schema exactly.
9. Final download-led CTA.

## Draft metadata and opening copy

These strings are proposals, not approved public copy.

### Title

`Σύστημα παραγγελιοληψίας για εστίαση | POSPal`

Keep the existing title. Exact query match and clarity matter more than adding filler to reach an arbitrary character target.

### Meta description

`Σύστημα παραγγελιοληψίας για εστίαση σε Windows, με ροή κουζίνας και QR μενού. Δες τι χρειάζεται και κατέβασε το POSPal για 30 ημέρες δωρεάν χωρίς κάρτα.`

This proposal is 153 characters before HTML encoding. Recount at implementation and confirm the trial wording against the controlled fact checklist.

### H1

`Σύστημα παραγγελιοληψίας από τη σάλα μέχρι την κουζίνα`

### Lead

`Το POSPal είναι σύστημα παραγγελιοληψίας και ροής κουζίνας για επιχειρήσεις εστίασης. Εγκαθίσταται σε υπολογιστή Windows και λειτουργεί δίπλα στο υπάρχον φορολογικό σύστημα της επιχείρησης. Δεν είναι φορολογικό POS και δεν είναι ταμειακή.`

The lead uses only controlled category and boundary facts. Exact technical conditions should appear only after the verification record is complete.

## Evidence-module contract

Each public proof item should use the same compact structure:

| Field | Requirement |
| --- | --- |
| Claim | One narrow fact stated without extrapolation |
| Evidence class | Controlled fact, controlled observation, customer evidence, or independent evidence |
| Environment | Relevant POSPal version, operating system, device, network, and printer details |
| Observation date | ISO date |
| Evidence link | Public durable source or a public-safe proof record |
| Limitation | What the evidence does not establish |
| Review trigger | Release, pricing, hardware, workflow, or policy change that requires revalidation |

Example shell, not a factual claim:

> **Επαληθευμένο σε συγκεκριμένη δοκιμή**
> [Narrow observed result]. Δοκιμή: [date], POSPal [version], [environment]. [Evidence link]. Δεν αποτελεί δήλωση συμβατότητας με κάθε [device/network/printer].

## Fact gates for each section

| Proposed section | Required facts or records | Gate |
| --- | --- | --- |
| Hero category and boundary | Controlled descriptor, `FAC-PLT-001`, fiscal-POS boundary, trial and price facts | Available, but recheck at implementation |
| Tested installation facts | `PRF-2026-001` completed through install and first launch; relevant platform IDs updated | Blocked by unexecuted installer test |
| Device and local-network facts | Completed device/network checkpoints in `PRF-2026-001` | Blocked by unexecuted workflow test |
| Printer facts | Exact tested model/interface and authentic output under `FAC-PRN-*` | Blocked; no printer evidence |
| Offline behavior | Completed disconnect/reconnect and internet-outage checks under `FAC-NET-*` | Blocked; no reproducible record |
| Named operational example | Publishable `PRF-2026-002` with granular permission | Blocked; no approved customer |
| Quantified outcome | Defined method, baseline, units, period, limitations, and approval under `FAC-OUT-*` | Blocked; no measured outcome |
| Independent corroboration | `FAC-IND-001` with a source that controls its own conclusion | Blocked; no independent publication |

## Structured-data policy

- Keep `FAQPage` only while every question and answer remains visibly present and textually consistent.
- Do not add `Review`, `AggregateRating`, customer, compatibility, or outcome properties without qualifying public evidence.
- Do not use schema to introduce facts that are absent from visible copy.
- Link to the existing entity page for publisher identity; avoid duplicating unsupported organization properties on this page.

## Internal-link plan

Keep the existing hub-and-spoke pattern:

- price questions → `/times.html`;
- identity and publisher questions → `/sxetika-me-to-pospal/`;
- PDA definition → `/pda-ti-einai.html`;
- waiter workflow → `/pda-gia-servitoro/`;
- cafeteria use → `/pda-gia-kafeteries.html`;
- wireless workflow → `/asyrmati-paraggeliolipsia.html`;
- primary action → `/download/`;
- secondary setup action → `/guides/`.

Add evidence-record links only when their public form is durable, privacy-safe, and useful to a buyer. Do not expose internal-only records or raw evidence containing personal or operational data.

## Measurement hypotheses

Treat all expected effects as hypotheses:

1. Exact H1/category alignment may improve query relevance for the generic hub.
2. A dated evidence block may increase accurate AI citation and reduce unsupported answer-engine inference.
3. A named, permissioned operational example may improve trust and qualified download engagement.
4. Clear limitations may reduce low-fit downloads without harming qualified conversion.

Use the shared measurement protocol to compare Search Console query/page data, AI benchmark results, and consented GA4 download events by release batch. Do not attribute movement to this page without recording concurrent changes.

## Implementation acceptance criteria

- user approval is explicit;
- no locked file or shared rendering dependency is changed;
- every added product claim maps to a controlled fact ID and qualifying evidence;
- public copy is natural monotonic Greek;
- the primary CTA remains the Windows installer flow and the secondary CTA remains setup guidance;
- no competitor, invented proof, unsupported compatibility, or outcome claim is introduced;
- visible FAQ and structured data match;
- local links and assets resolve;
- page passes HTML, accessibility, schema, and live performance checks;
- the release batch is recorded in the measurement log.
