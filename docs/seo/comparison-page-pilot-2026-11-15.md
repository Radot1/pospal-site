# Comparison pages: architecture and first implementation

Date: 15 November 2026
Status: publication explicitly authorized by the user on 15 November 2026. This release publishes the existing four-product café guide and its supporting links; no dedicated competitor page is included. The independent local draft and unrelated work remain outside the release.

## Implemented scope and validation

- Expanded `/pos-na-dialexeis-paraggeliolipsia.html` with POSPal, Dishy, Serviro and Anima Menu; source checks dated 15 November 2026. Retained the common-order test, original section IDs and café audience. Moved the comparison ahead of the detailed checklist so readers can answer the search question quickly.
- Updated the existing `/arthra/` entry, including supplier names that its current search can find. Updated the café page's existing inbound anchors and the three affected sitemap dates. Did not add a competing generic guide or a separate competitor URL.
- Added dedicated `buyer-comparison.css` and `buyer-comparison-tokens.css`; changed no shared rendering dependency. Used the requested Design Taste, Hallmark, POSPal Voice and On-page SEO Auditor skills. No skill installation or skill changes were needed.
- Verified local links and anchors, article filters/search, keyboard skip and section links, cookie dismissal/settings, installer destination, and layouts at 320–1920px. Automated axe checks found no WCAG A/AA violations in the checked guide. Independent hero and finish reviews led to an earlier billing summary, lower article navigation, restored equipment navigation and an explicit instruction to perform one's own trial (not a claim we tested competitors).
- Local Lighthouse checks: mobile performance 96, desktop 100; accessibility, best practices and automated SEO 100 on both. Mobile simulated LCP was 2.8s, desktop 0.6s, CLS 0 and TBT 0ms. These are local lab results, not field Core Web Vitals or a ranking prediction.
- On-page rubric estimate: **8.9/10** (88.5/100 before rounding). Keyword intent remains a research hypothesis; no current Search Console baseline, live indexing verification or ranking gain is claimed. Detailed transient verification output is kept outside Git; no generated captures or audit dumps belong in this repo.
- Separate concurrent work added directory footer badges across the site, including locked files. Those changes were preserved and are outside this task. This task did not edit the locked homepage, download or guides index. The publication worktree also preserves the newer controlled POSPal test example already present on main, with its equipment and unpublished-build limitations intact.

### Final on-page audit

Status: DONE_WITH_CONCERNS. Target keyword inferred from content: `προγράμματα παραγγελιοληψίας`, qualified by the small-café comparison intent. Secondary topics: cost, equipment and installation/support. Validate the query mix with Search Console after release; no missing keyword metrics were treated as proof of zero demand.

The requested On-page SEO Auditor alias routes to On-page SEO Checker. Its unchanged weighted rubric gives this preliminary estimate:

| Area | Estimate /10 | Weighted /100 | Evidence or remaining limit |
| --- | ---: | ---: | --- |
| Title | 9.5 | 14.25 | 56 characters, primary phrase first, café comparison intent, brand last |
| Description | 10 | 5 | 158 characters, scope, supplier names and trial action; matches the article |
| Headings | 9.5 | 9.5 | One H1, descriptive H2/H3 hierarchy; preserved practical questions |
| Content structure | 8.5 | 21.25 | About 1,780 article words, dated first-party evidence, four options, fit guidance and common-order test; no independent comparative product testing |
| Keyword use | 8 | 12 | Natural placement in title/H1/opening/meta; legacy URL retained, functional portrait alt retained, search demand not validated |
| Links | 10 | 10 | 24/24 previous link destinations retained; all checked internal destinations/anchors resolve; hub and café links work; supplier links identify sources |
| Images | 8 | 8 | Existing 13KB founder JPEG with dimensions and useful alt; local lightweight brand asset; existing generic WebP sharing image, no new comparison-specific image |
| Page tags and rendering | 8.5 | 8.5 | Original canonical, Article and BreadcrumbList JSON-LD, mobile layouts; simulated mobile LCP 2.8s, live HTTPS/indexing/field data not assessed |
| **Total** | **8.9 rounded** | **88.5** | **An estimated structural score, not Google's score or a ranking forecast** |

CORE-EEAT quick scan (flags only, not a publication verdict): 14/17 pass. C01, C02, C10, O01, O02, O03, O05, O06, R01, R06, R08, R10, Ept01 and T04 pass. C09 is partial because useful buyer questions are covered without a standalone FAQ; R02 is partial because supplier-authored facts do not provide three independent source types; Exp01 is partial because the author's own product experience does not establish hands-on testing of competitors. Do not invent experience or add irrelevant citations to raise these counts.

No blocking on-page issue remains in the checked scope. Remaining follow-up: reverify prices before publication, establish the live Search Console/query baseline, measure real mobile performance and guide-to-download actions after release. Search results and completed installations were not measured by the local checks.

The original proposal and optional later copy follow for editorial context. Where their future tense differs from the implementation record above, this record takes precedence. Supplier terms were reverified against the three official sites immediately before this approved release on 15 November 2026. Confirm publication through the Pages run and live HTTP checks.

## Recommendation

Revised recommendation after the architecture review: start with one multi-product comparison inside the existing small-cafe buyer guide, /pos-na-dialexeis-paraggeliolipsia.html. Keep its audience and URL. Use distinct, source-backed options and recommend by need. Do not publish a new generic "best programs" page beside it or automatically create one URL per competitor. Do not claim POSPal is universally cheaper, easier, more reliable or more complete.

The separate Dishy copy proof below is retained as optional later material, not the first SEO release. Its self-managed versus assisted-setup distinction is useful, but observed product fit is not evidence of the strongest search demand. This revision supersedes the earlier Dishy-first and no-names recommendations.

## Architecture decision and first draft scope

The existing Competitors, SEO Audit and Content Strategy skills already cover this work; no additional skill installation or duplicated skill folder is needed. The five-advisor council independently favored a guide first, with selective dedicated comparisons later. Peer review challenged a shared assumption: an existing URL is convenient, but its current query mix and usefulness must still support the proposed audience. Consensus is judgment, not measured ranking evidence.

| Search intent | Page owner | First action |
| --- | --- | --- |
| Choosing ordering software for a small cafe; comparing practical options | /pos-na-dialexeis-paraggeliolipsia.html | Add a useful named comparison without replacing the existing trial/checklist guidance |
| POSPal's ordering system and product fit | /systima-paraggeliolipsias.html | Retain product/category role |
| POSPal cost, inclusions and billing | /times.html | Retain pricing role |
| A specific competitor versus POSPal, or a specific alternative decision | One optional dedicated URL per distinct decision | Add only when the deeper content and buying evidence justify it |

Using some related terms on these pages is normal. The risk is duplicate search promises and interchangeable content, not merely sharing words. Several genuine, detailed competitor pages can be useful; page count itself is neither a ranking benefit nor a spam verdict.

### Proposed title and structure for the existing cafe guide

Proposed title: `Προγράμματα παραγγελιοληψίας για καφέ: σύγκριση | POSPal`.

Proposed H1: `Προγράμματα παραγγελιοληψίας για μικρή καφετέρια: πώς συγκρίνονται;`.

Keep the current opening answer and practical test. Add a compact comparison immediately after the existing scope explanation, followed by short decision paragraphs. Preserve useful section IDs, contextual links and the publisher disclosure. The title change is conditional on retaining cafe intent; do not broaden this page into every restaurant, retailer, fiscal suite or delivery business.

Proposed section sequence:

1. What the cafe needs: ordering workflow, or a broader system. Make POSPal's non-fiscal boundary clear.
2. How options were selected and checked: relevant Greek products, current first-party sources, explicit unknowns and POSPal as publisher. No claim of exhaustive market coverage or hands-on testing of competitors.
3. A compact matrix covering POSPal and three different alternatives: Dishy, Serviro and Anima Menu. Their roles are outlined below. Add more only when they contribute a materially different buying decision.
4. When each operating model makes sense, including where POSPal is unsuitable.
5. The existing same-order trial, equipment, cost and support checklist, tightened only where a new paragraph repeats it.
6. POSPal trial/download and setup guidance for owners who match its requirements.

### Editorial comparison matrix for the next copy draft

This is an internal structure, not approved public wording. Product observations come from the centralized evidence register and current supplier pages checked on 15 November. The fit column is our interpretation; site claims are not independently tested performance.

| Option | Source-backed distinction | Buyer decision to explain | Open checks before publication |
| --- | --- | --- | --- |
| POSPal | Windows self-installation; ordering/kitchen workflow and QR; monthly direct trial path | Owner wants control and can manage the setup; does not need a fiscal replacement or onsite service | Recheck current product terms and live links |
| Dishy | Local mini server, assisted installation/training; QR listed in Pro | Owner wants installation help rather than managing initial setup alone | Geographic availability, minimum term, equipment quote |
| Serviro | Upfront software offer plus annual maintenance; cloud and staff Android application; installation/training advertised | Owner considering an upfront cost structure and assisted setup | Maintenance due date, full quote, specific requirements |
| Anima Menu | Broader suite with advertised integrations; base six-month agreement and advertised monthly option | Owner needs a wider suite; POSPal may not cover the required job | Appropriate plan scope, VAT, optional costs and monthly terms |

ΣερβιΤΩΡΑ remains a strong research candidate, but unclear starting figures and plan comparability must be resolved before a price-led recommendation. Butler remains a broader-scope candidate with pricing unestablished. Omitting them from the first compact draft is an editorial scope choice, not a claim that they are worse.

### Why use a comparison headline rather than an automatic “best” list?

“Best” is allowed when the page provides evidence and explicit criteria. We currently have supplier-page checks and controlled POSPal evidence, not comparative hands-on tests that establish a best-overall winner. Use "σύγκριση" and "πότε ταιριάζει" now. A numbered list or the word "best" has no established ranking advantage for POSPal from the data collected.

Google's [review guidance](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews) recommends user-relevant decision factors, original evidence, drawbacks and support for best-use recommendations. Apply those quality principles without claiming that a particular review-ranking system necessarily covers Greek content or that changing format guarantees a ranking improvement.

### Gate for a dedicated competitor page

Open a dedicated page when a relevant buying question is evidenced by search results/queries, real prospects, referrals or support/sales conversations, AND it needs substantial distinct material beyond the guide. Missing keyword-tool volume does not veto useful content. Conversely, brand searches or keyword variants alone do not justify a new URL.

Normally use one coherent page for a given competitor decision; do not publish separate templated "/alternative" and "/vs" copies without genuinely different intent. If a plural "alternatives to X" page promises several options, it must actually compare real alternatives rather than deliver only a POSPal pitch. A genuinely different later intent can get its own URL, with deliberate linking and query ownership.

Before approving the guide expansion, recheck the current live version and page-filtered query baseline. Earlier data showed one impression for the existing guide in the latest 28 days, so it is not an established comparison funnel. Existing buyer utility and avoiding a duplicate URL justify trying it first; they do not prove demand. The previously saved evidence can inform the draft while a fresh baseline is unavailable.

After an approved release, record the actual date, index/crawl state and observable guide-to-download actions. Distinguish download-page visits, download_click events and completed installations; do not infer the last from the first two. Use existing consented reporting and note sparse samples. Review discovery and useful engagement during winter and spring, ahead of the approximate May reopening; assess demand with comparable seasonal periods. Do not postpone every check until May or treat one winter zero as a failed page.

## What the supplied list establishes

The pasted analysis supplies target names and research hypotheses. Its own limitation says the prices were not reverified. It does not authorize publication of claims or supersede repository product truth.

The first five listed companies were checked against their own sites. The centralized [evidence register](competitor-comparison-evidence-2026-11-15.yaml) records observed facts, unknowns, dates and sources. The other supplied brands remain unverified. No claim of market share, customer satisfaction, comparative speed or compatibility is established.

Key corrections to the original price normalization:

- An advertised annual or semiannual price divided by 12 or six is an arithmetic equivalent, not monthly billing or permission to cancel monthly.
- ΣερβιΤΩΡΑ's lowest table column is not enough to establish an equivalent multi-user ordering package. Its homepage and pricing page also show different starting figures; clarify before using a headline price.
- Anima advertises a monthly option. A universal claim that competitors require a long contract would be false.
- Serviro's upfront offer and annual maintenance are separate. The first maintenance due date was not established; do not publish 485 euros as a confirmed first-year bill.
- POSPal's 286.80-euro annualization describes 12 paid months at today's price. It is not an annual commitment, a first-year trial-inclusive bill, or a total including new equipment.

These observations are supported by [ΣερβιΤΩΡΑ pricing](https://www.servitwra.gr/pricing), [Anima Menu](https://www.animamenu.gr/) and [Serviro](https://serviro.gr/), checked 15 November 2026. They explain why the original monthly-equivalent league table should not be published as a like-for-like ranking.

## Search-demand check

OpenSEO project: POSPal, domain pospal.gr. Existing project context/research log were checked before research; both were empty. Calls explicitly used Greece (2300) and Greek (el), overriding the project's unrelated default market. [DataForSEO documents Greece's code and language support](https://dataforseo.com/update/english-for-greece-in-dataforseo-labs-api).

The 25-keyword batch covered the first five brands, pricing phrases, Greek and English alternative phrases, and POSPal-vs-brand phrases. Two brand terms returned average monthly estimates of 140 each: σερβιτωρα and anima menu. The former can be ambiguous. The remaining 23 phrases returned no reported metrics. The latest supplied trend observations were August and September respectively; they are not November counts.

No explicitly tested alternative or comparison phrase returned a volume estimate. Do not call this zero demand, and do not assign the brand terms' 140 searches to an alternative page. The three sampled mobile SERPs included unrelated entities and did not establish a clean comparison-results market. Brand specificity, spelling, data coverage and small demand remain limitations.

Implication: one page could help an owner already evaluating these options, but it is not yet a justified SEO scaling program. A searcher comparing products is evaluating options; the query alone does not establish that they have decided to buy.

For seasonal venues, prepare useful evidence during winter and recheck competitor facts before any approved publication ahead of approximately May 2027. November demand alone does not determine the opportunity. No future ranking or download lift is promised.

## Proposed pilot specification

- Primary decision: do I want to set up ordering myself on my Windows computer, or buy an assisted installation service?
- Conditional route: /sygkriseis/dishy/. This route is a proposal only and must not enter the site or sitemap without approval.
- Conditional title: Εναλλακτική του Dishy με αυτοεγκατάσταση | POSPal
- Conditional description: POSPal και Dishy: κόστος, εξοπλισμός και ποιος αναλαμβάνει το στήσιμο. Δες πότε ταιριάζει η αυτοεγκατάσταση και πότε χρειάζεσαι βοήθεια.
- Scope: distinguish setup, host hardware, price/tax presentation, QR inclusion, support expectations, product limits and a trial using the venue's real equipment.
- No fake switcher quotes, fabricated feature crosses, migration promises, star ratings or unsupported “best alternative” claims.
- Show publisher identity: this is written by POSPal, not an independent review site.

## Conditional Greek copy proof

The named draft below is retained as an internal review proof for a possible later focused comparison. AGENTS.md now permits factual named comparisons. The copy still needs editorial and publication review; the naming policy is no longer a blocker. It is intentionally focused rather than an exhaustive feature catalogue.

### Ψάχνεις εναλλακτική του Dishy;

Το POSPal είναι μια επιλογή αν θέλεις να κατεβάσεις το πρόγραμμα παραγγελιοληψίας, να το εγκαταστήσεις στον υπολογιστή Windows του μαγαζιού και να το δοκιμάσεις με την ομάδα σου. Αν χρειάζεσαι κάποιον να αναλάβει το στήσιμο και την εκπαίδευση, το Dishy διαφημίζει αυτή την υπηρεσία. Η απόφαση περιλαμβάνει την τιμή, τον εξοπλισμό και ποιος θα κάνει τη δουλειά της εγκατάστασης.

#### Τι συγκρίνουμε

| Απόφαση | POSPal | Dishy |
| --- | --- | --- |
| Συνδρομή | 23,90 €/μήνα, τελική τιμή. Δεν προστίθεται ΦΠΑ. Ακυρώνεις όποτε θέλεις. | Basic 15 €/μήνα + ΦΠΑ, Pro 25 €/μήνα + ΦΠΑ. Επιβεβαίωσε τη δέσμευση πριν συμφωνήσεις. |
| Κεντρικό σύστημα | Το εγκαθιστάς σε υπολογιστή Windows x64 του καταστήματος. | Τοπικός μικροϋπολογιστής που φιλοξενεί την εφαρμογή. |
| Αρχικό στήσιμο | Αυτοεγκατάσταση με τους οδηγούς. | Διαφημίζονται εγκατάσταση και εκπαίδευση. |
| QR μενού | Περιλαμβάνεται στη συνδρομή. | Αναφέρεται στο Pro. |
| Εξοπλισμός | Δοκιμάζεις τον δικό σου κατάλληλο εξοπλισμό. Τυχόν αγορές είναι ξεχωριστό κόστος. | Δεν περιλαμβάνεται στις αναγραφόμενες τιμές. |

Οι όροι του Dishy προέρχονται από την [επίσημη σελίδα του](https://dishy.gr/), με έλεγχο στις 15 Νοεμβρίου 2026. Ζήτησε επιβεβαίωση για διαθεσιμότητα εγκατάστασης στον χώρο σου και την τελική προσφορά.

#### Αν θέλεις να το στήσεις μόνος σου

Έχεις υπολογιστή Windows, κατάλληλα κινητά ή tablet και τοπικό δίκτυο που επιτρέπει στις συσκευές να επικοινωνούν; Μπορείς να δοκιμάσεις το POSPal πριν αποφασίσεις για νέα αγορά εξοπλισμού.

Ο σερβιτόρος ανοίγει την παραγγελιοληψία στον browser του κινητού ή του tablet. Το κεντρικό πρόγραμμα παραμένει στον υπολογιστή Windows. Η συνδρομή περιλαμβάνει τραπέζια, απλή λειτουργία χωρίς τραπέζια, ροή κουζίνας και QR μενού.

Δεν πουλάμε PDA. Δεν χρεώνουμε ανά PDA. Το κινητό της ομάδας σου μπορεί να γίνει PDA.

Αυτό προϋποθέτει κατάλληλη συσκευή και πρόσβαση στον υπολογιστή μέσα από το τοπικό δίκτυο. Ο πρακτικός αριθμός συσκευών εξαρτάται από τον εξοπλισμό και το στήσιμο. Κάνε τη δοκιμή με την ομάδα σου.

#### Πότε το POSPal δεν σου ταιριάζει

Αν θέλεις εγκατάσταση στον χώρο, εκπαίδευση από τεχνικό ή ένα πακέτο εξοπλισμού που θα αναλάβει άλλος να στήσει, χρειάζεσαι υπηρεσία που να τα περιλαμβάνει. Το POSPal βασίζεται στην αυτοεγκατάσταση. Η βοήθεια δίνεται απομακρυσμένα, από το support@pospal.gr και τους οδηγούς. Δεν υπάρχει υπόσχεση συγκεκριμένου χρόνου απόκρισης ή τηλεφωνικής υποστήριξης.

Επίσης, το POSPal χρειάζεται υπολογιστή Windows. Δεν είναι φορολογικό POS ή ταμειακή και δεν αντικαθιστά το υπάρχον φορολογικό σου σύστημα. Το ότι λειτουργεί δίπλα του δεν σημαίνει ότι υπάρχει διασύνδεση.

#### Δοκίμασε την ίδια βάρδια, με τον ίδιο εξοπλισμό

Πριν αποφασίσεις, πέρασε μια δοκιμαστική παραγγελία με τραπέζι, προϊόντα και σημειώσεις. Έλεγξε ότι φτάνει στη σωστή ροή. Αν χρησιμοποιείς θερμικό εκτυπωτή, πρέπει να είναι εγκατεστημένος στα Windows και να δοκιμάσεις το πραγματικό χαρτί. Δεν αρκεί να εμφανίζεται στη λίστα.

Αν αλλάζεις πρόγραμμα, επιβεβαίωσε ξεχωριστά πώς θα περάσεις τον κατάλογο και τις ρυθμίσεις σου. Μην θεωρήσεις ότι μεταφέρονται αυτόματα. Κάνε την πρώτη δοκιμή πριν βασιστείς στο νέο στήσιμο για κανονική εξυπηρέτηση.

#### Κατέβασέ το και κρίνε το στο μαγαζί σου

Έχεις 30 ημέρες δωρεάν, χωρίς όνομα, email, λογαριασμό ή στοιχεία κάρτας. Αν σου κάνει, συνεχίζεις με 23,90 € τον μήνα. Δεν προστίθεται ΦΠΑ. Ακυρώνεις όποτε θέλεις.

[Κατέβασε για Windows](https://github.com/Radot1/pospal-artifacts/releases/latest/download/POSPal-win-Setup.exe) · [Δες την εγκατάσταση](https://pospal.gr/guides/windows-installation/)

Η σύγκριση γράφτηκε από το POSPal. Δεν είναι ανεξάρτητη αξιολόγηση. Οι αναγραφόμενες συνδρομές δεν αποτελούν συνολικό κόστος εγκατάστασης και εξοπλισμού.

## Review and release boundary

Before implementation, approve the selected copy and page scope. Competitor naming is already authorized under AGENTS.md; do not request another naming exception. Homepage, download and guides remain locked, including shared rendering dependencies.

Reverify every competitor fact before publishing, particularly if held until early 2027. Verify cancellation, support coverage and the exact equipment quote before extending the table. No public row may convert “not checked” into “not available.”

If approved, implement the guide expansion first on a branch containing the current live changes; retain its existing canonical URL and sitemap entry and update its genuine modification date. Any later approved standalone comparison needs its own self-canonical, visible publisher/date/source note, relevant contextual links from unlocked pages and sitemap entry. Use only existing real product proof. Do not add review-rating schema or fictional switching testimonials. Push and deployment require separate authorization.

Measure indexed exposure, exact comparison queries, relevant referrals, download_click actions and useful setup-guide engagement using available consented reporting. Brand impressions alone do not validate an alternative-page funnel. If no relevant search exposure develops over a comparable seasonal observation window, keep its buyer-help value separate from claims of SEO success.

## Evidence files

Raw snapshots and OpenSEO responses are outside Git under C:/Users/bzoum/Downloads/pospal-competitor-research-2026-11-15/raw/. Files: initial-sources.json, pricing-sources.json, keyword-metrics.json, comparison-serps.json and serviro-faq.json. No raw screenshot, archive or generated capture was added to this repository.

POSPal claims use MARKETING_PLAN.md, .agents/product-marketing.md and the controlled fact checklist. The voice skill's old VAT-inclusive reference is superseded by the repository's 30 September correction: no VAT is added.


## Publication scope — 15 November 2026

The user chose to release the multi-product guide and put a separate Anima Menu page on hold. The release is based on main `3f6d040`, preserves the newer café content and controlled proof, and updates only the guide, two dedicated stylesheets, the existing articles title, one café related-link label, three sitemap dates and the associated policy/evidence documents. Download and guides pages, homepage, shared styles and scripts remain identical to the release base. No competitor hands-on test, automatic migration support or ranking outcome is claimed.
