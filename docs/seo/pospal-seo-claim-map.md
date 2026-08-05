# POSPal SEO Claim-to-Query Map

Status: Complete for Step 1; update when evidence changes
Last reviewed: 2026-08-05
Execution tracker: [POSPal SEO Proof Execution Tracker](pospal-seo-proof-execution-tracker.md)
Fact register: [POSPal Product-Fact Checklist](pospal-product-fact-checklist.md)
Proof process: [POSPal Proof System](pospal-proof-system.md)

## Purpose

Connect each useful POSPal fact to a real search or buyer question, one intended page owner, an evidence threshold, the download-led funnel, and a release hypothesis.

The target queries below are inferred from existing page intent, repository Search Console analysis, and the frozen AI-discovery prompt bank. No search volume is claimed here. Validate future prioritization against current page-filtered Search Console data.

## Evidence-to-SEO rules

- `C1` controlled facts can support consistent identity, offer, scope, and product-boundary answers.
- `C2` reproducible observations are required for compatibility, installation, networking, offline behavior, printer behavior, and other technical specifics.
- `C3` customer-approved evidence is required for named venue experience, quotations, or customer results.
- `C4` independent corroboration is required before describing a source as independent verification.
- A claim belongs to one primary page. Other pages may link to it or summarize it without reproducing the full answer.
- The CTA path is category or use case → `/download/` → relevant guide. Proof must not create a competing demo or contact funnel.

## Priority claim map

| Priority | Claim IDs | Buyer/search question | Intended owner | Required evidence | Public role after approval | CTA and measurement hypothesis |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | `FAC-POS-001`, `FAC-CAP-001`, `FAC-BND-001`, `FAC-BND-002` | Τι είναι ένα σύστημα παραγγελιοληψίας και τι καλύπτει το POSPal; | `/systima-paraggeliolipsias.html` | `C1`; retain the explicit non-integration boundary | Answer-first definition, included workflow, fit/non-fit | Primary `/download/`; expect stronger accurate retrieval for generic and exact-fit prompts |
| P1 | `FAC-WIN-001`–`FAC-WIN-008`, `FAC-REL-001`–`FAC-REL-007` | Τι Windows και τι υπολογιστή χρειάζεται; Μπορώ να το εγκαταστήσω μόνος μου; | `/systima-paraggeliolipsias.html` | `C2` for every precise version, prerequisite, permission, update, or recovery statement | Scoped requirements and installation evidence | Primary `/download/`, secondary Windows guide; expect improved decision-query usefulness and fewer compatibility exclusions |
| P1 | `FAC-DEV-001`–`FAC-DEV-007` | Ποια κινητά, tablet και browser λειτουργούν; | `/systima-paraggeliolipsias.html`; PDA pages may summarize after their experiment | `C2` device/browser matrix | Tested combinations and explicit untested scope | Primary `/download/`; measure device/PDA query ownership after the existing metadata experiment closes |
| P1 | `FAC-NET-001`–`FAC-NET-009` | Πώς λειτουργεί στο τοπικό Wi-Fi; Τι γίνεται εκτός Wi-Fi ή χωρίς internet; | `/asyrmati-paraggeliolipsia.html` | `C2` disconnect, reconnect, routing, firewall, outage, and failure tests | Network prerequisites, observable workflow, limitations | Primary `/download/`, secondary relevant guide; expect more precise wireless-intent rankings and accurate AI fit answers |
| P1 | `FAC-PRN-001`–`FAC-PRN-008` | Ποιος θερμικός εκτυπωτής λειτουργεί και πώς συνδέεται; | `/systima-paraggeliolipsias.html` | `C2` per exact model/interface plus authentic output | Tested-printer table and print-failure limitations | Primary `/download/`, secondary equipment guide; expect stronger high-intent equipment answers and reviewer usefulness |
| P1 | `FAC-SUP-001`–`FAC-SUP-009` | Τι υποστήριξη υπάρχει αν το στήσιμο αποτύχει; | `/sxetika-me-to-pospal/` for channel; generic hub for buyer-relevant boundaries | `C1` for channel and exclusions; explicit policy for any new promise | Support channel, what help covers, what it does not cover, what evidence to send | Secondary guide/support path; reduce unsupported SLA assumptions and setup anxiety |
| P1 | `FAC-OFR-001`–`FAC-OFR-004` | Πόσο κοστίζει, τι περιλαμβάνει και πώς ακυρώνεται; | `/times.html` | `C1`, with owner confirmation for VAT treatment | Canonical offer answer; other pages link rather than duplicate the full ledger | Primary `/download/`; measure pricing-to-download behavior |
| P2 | `FAC-WRK-001`–`FAC-WRK-003` | Μπορώ να δω μία πραγματική παραγγελία από τη συσκευή μέχρι την κουζίνα; | `/systima-paraggeliolipsias.html` | `C2` end-to-end trace and authentic endpoint/output | Annotated proof sequence with exact tested environment | Primary `/download/`; expect higher information gain and answer-engine citation eligibility |
| P2 | `FAC-CUS-001`–`FAC-CUS-004` | Πώς χρησιμοποιείται σε πραγματική επιχείρηση εστίασης; | Relevant existing venue page or a future case-study page only if the expansion gate passes | `C3` granular permission and approved record | Named operational example with limitations, not a generic testimonial | Primary `/download/`; measure venue-query engagement and assisted downloads |
| P2 | `FAC-OUT-001`–`FAC-OUT-003` | Τι αποτέλεσμα είχε η χρήση; | Same owner as the approved customer proof | `C3` plus reproducible measurement; aggregate claims require a documented dataset | Exact observed result with method, sample, period, and limitations | No claim until evidence exists; measure trust and conversion without treating correlation as causation |
| P2 | `FAC-IND-001` | Υπάρχει ανεξάρτητη πηγή που έχει ελέγξει ή περιγράψει το POSPal; | External source; owned pages may link only when contextually useful | `C4` independently authored corroboration | Customer, partner, directory, or reviewer description in its own words | Measure referring domains, independent-source citations, qualified referrals, and downloads |

## Page ownership boundaries

### `/systima-paraggeliolipsias.html`

Owns the generic category decision. It should eventually contain the complete verified fit answer: product definition, required setup, tested compatibility, workflow, limitations, offer summary, customer proof, and download path. It must not become a collection of unsupported feature claims.

### `/asyrmati-paraggeliolipsia.html`

Owns local-network and wireless behavior. It should contain the detailed answer for Wi-Fi coverage, local connectivity, outside-Wi-Fi storage/reconnection, internet dependencies, and network limitations after those facts reach `C2`.

### Existing PDA pages

Own definition, process, staff, or venue-specific intent according to the existing query map. Do not change their current metadata or page ownership until the active experiment reaches its predefined sample. Later additions should summarize verified device evidence and link to the complete owner rather than duplicate the full matrix.

### `/times.html`

Owns the complete commercial answer: price, VAT, trial, included product, cancellation, and current absence of separate installation/maintenance fees.

### `/sxetika-me-to-pospal/`

Owns entity, publisher, official profiles, location, and public support identity. It should not become a second generic product hub or case-study archive.

### Locked conversion pages

`/`, `/download/`, and `/guides/` remain unchanged. Evidence work must strengthen unlocked acquisition pages and external sources without altering their rendering.

## Content cluster map

```text
Generic category decision
└── /systima-paraggeliolipsias.html
    ├── Requirements and Windows installation evidence
    ├── Device/browser compatibility
    ├── Printer compatibility and authentic output
    ├── End-to-end operational proof
    ├── Fit, non-fit, and limitations
    ├── Link to /asyrmati-paraggeliolipsia.html for network depth
    ├── Link to /times.html for the complete offer
    └── Primary path to /download/

Wireless behavior
└── /asyrmati-paraggeliolipsia.html
    ├── Local-network requirements
    ├── Outside-Wi-Fi and reconnection test
    ├── Internet dependencies and failure states
    └── Primary path to /download/

Trust and corroboration
├── /sxetika-me-to-pospal/ for controlled entity facts
├── Named customer source for C3 experience
└── Independent reviewer/partner/directory source for C4 corroboration
```

## Release hypotheses

| Hypothesis | Minimum release | Primary measures | Decision rule |
| --- | --- | --- | --- |
| Verified requirements improve generic fit discovery | Generic hub receives scoped `C2` requirements and limitations | Page-filtered non-brand queries, AI exact-fit mention/accuracy, citations | Keep only if retrieval/engagement improves without rising non-fit recommendations |
| Verified wireless behavior improves long-tail ownership | Wireless page receives reproducible network/offline facts | Wireless query impressions/clicks, intended-page ownership, AI fit accuracy | Revise if another page captures the queries or facts produce repeated confusion |
| Named operational proof increases trust | One approved `C3` example is visible and crawlable | Engagement, assisted downloads, cited URLs, customer/referrer traffic | Keep if it adds unique evidence; remove or revise unverifiable outcome wording |
| Independent corroboration improves citation diversity | One legitimate independently authored source is crawlable | Independent-source citation rate, referring page quality, qualified downloads | Continue the source type only when descriptions remain accurate and referrals are relevant |

No hypothesis promises rankings or ChatGPT recommendations. Each is tested after the released batch is crawlable.
