# POSPal ChatGPT and AI Discovery Work Plan

Status: In progress — controlled evidence and Release 1 implementation complete; live measurement is next
Last updated: 2026-08-05
Planning model: dependency-ordered steps, not a calendar roadmap
Primary outcome: POSPal is independently discovered and accurately recommended for relevant Greek hospitality ordering queries
Primary conversion: download `POSPal-win-Setup.exe`

## Scope and rules

This plan covers the public surfaces currently associated with POSPal:

- `https://pospal.gr/` and the 12 URLs in its sitemap;
- external sources that can help an answer engine verify POSPal independently.

Repository rules remain in force:

- Public copy is Greek-only.
- Download is the primary CTA; installation/setup guides are secondary.
- POSPal is not a fiscal POS or cash register.
- Do not name competitors in public marketing copy.
- Do not fabricate customers, reviews, usage figures, integrations, or outcomes.
- Preserve ranking URLs unless measured evidence supports a change.
- `index.html`, `download/index.html`, and `guides/index.html` remain permanently locked unless the user explicitly replaces that rule.

Related internal sources:

- [`AGENTS.md`](../../AGENTS.md)
- [`MARKETING_PLAN.md`](../../MARKETING_PLAN.md)
- [Product marketing context](../../.agents/product-marketing.md)
- [Post-redesign SEO evaluation](post-redesign-evaluation-2026-08-02.md)
- [Launch inventory and SEO expansion ADR](../adr/0001-freeze-launch-inventory-and-gate-seo-expansion.md)

## Live review summary

### What is already working

- **Measured at baseline:** all 11 original `pospal.gr` sitemap URLs returned `200` to an `OAI-SearchBot` user agent.
- **Measured at baseline:** all 11 original URLs had a title, one H1, and a self-referencing canonical.
- **Verified after the entity release:** the sitemap now contains 12 URLs, including the live `/sxetika-me-to-pospal/` page with a title, one H1, and a self-referencing canonical.
- **Measured:** `robots.txt` permits crawling and declares the marketing sitemap.
- **Measured:** current HTML is served as UTF-8.
- **Measured:** the marketing site explains Windows installation, ordinary phones/tablets, pricing, the trial, kitchen flow, QR menu, and the fiscal-POS boundary.
- **Measured:** `/guides/` currently advertises seven videos, contains no `σύντομα` labels in the live HTML, and no longer has the unfinished-guide state seen in older search caches.
- **Measured:** the generic category page already exists at `/systima-paraggeliolipsias.html`; another generic URL is not needed.

Conclusion: crawlability is not the main reason POSPal is absent from generic recommendations.

### Gap 1: POSPal is relevant but not sufficiently verifiable

- **Measured:** the site has no approved testimonials, customer logos, case studies, or quantified customer outcomes.
- **Measured:** the marketing site uses real application screens and guides, but the acquisition pages largely repeat the same product explanation.
- **Measured at baseline:** the core pages did not expose `Organization`, `WebSite`, or `SoftwareApplication` JSON-LD. Eight acquisition pages exposed only `FAQPage` schema.
- **Delivered in Step 2:** `/sxetika-me-to-pospal/` now provides a dedicated public entity home with approved identity, ownership, location, support, product, pricing, and official-profile facts.
- **Delivered in Step 2:** the entity page exposes supported `Organization`, `SoftwareApplication`, `WebPage`, and `BreadcrumbList` JSON-LD. `WebSite` schema remains deferred while the homepage is locked.
- **Still open:** POSPal lacks independently authored customer proof, reviews, case studies, and third-party verification.

### Gap 2: generic-query authority is weak

- **Measured:** current generic searches for Greek ordering software surface several established alternatives before POSPal.
- **Measured:** exact-domain and Greek brand searches primarily surface POSPal-owned pages, not independent Greek reviews, customer references, or partner pages.
- **Measured:** the existing international Pospal product dominates broad English brand searches and has a much larger public footprint.
- **Measured from the current SEO evaluation:** generic ordering queries produced impressions but no clicks; non-brand growth is roughly flat.

### Gap 3: the broad category hub is too light to be a definitive source

`/systima-paraggeliolipsias.html` correctly owns the generic category, but it currently provides mostly:

- a short product definition;
- the three-step workflow;
- venue summaries;
- equipment requirements;
- the fiscal-POS boundary;
- four FAQ answers.

It lacks the evidence an answer engine needs when comparing candidates:

- verified printer and device compatibility;
- a complete annotated workflow;
- real installation evidence;
- support facts;
- explicit fit and non-fit criteria;
- customer-approved operational proof;
- verifiable product or usage data.

### Gap 4: measurement is not yet a controlled AI-discovery system

One or two fresh ChatGPT conversations are not a valid trend. Results can vary by search mode, model, memory, locale, prompt wording, and source availability.

The site already has GA4 download events and a repeatable prompt benchmark, but it still needs:

- a ChatGPT/AI referral report;
- post-release benchmark reruns after each released batch is crawlable;
- exact customer conversations from people who report discovering POSPal through ChatGPT.

## What we will not do

- Do not create a second generic ordering-system hub.
- Do not create many thin pages for keyword variants.
- Do not publish named-competitor comparison pages under the current public-copy rules.
- Do not treat an explicit `OAI-SearchBot` block in `robots.txt` as a priority fix; the current wildcard policy already allows it and the bot receives `200` responses.
- Do not chase non-search model memory as if it were a conventional ranking system.
- Do not set arbitrary backlink, review, or case-study quotas.
- Do not edit the locked homepage, download page, or guides page without an explicit replacement of the permanent lock.
- Do not change the PDA definition/process pages while their current metadata experiment is still awaiting its predefined measurement sample.

## Execution order

### Step 1: create the measurement baseline

Detailed proposal: [AI-discovery measurement baseline](ai-discovery-measurement-proposal.md)

Lean baseline outcome: [B0 scorecard](ai-discovery-benchmark/SCORECARD.md) — 26 conversations and 28 responses completed; `S2` and `S3` deferred until after the first evidence/entity improvement batch.

Tasks:

- [x] Create a fixed bank of Greek prompts covering broad category, commercial constraints, exact POSPal product fit, and deliberate non-fit controls.
- [x] Define a clean test protocol: fresh isolated chats, a fixed signed-out incognito environment for `B0`, and forced-Search results recorded separately from default-mode results.
- [x] Define the results schema for POSPal mention, position, cited domains and URLs, product types, fit accuracy, and exclusion reason.
- [ ] Create a GA4 exploration for ChatGPT and other AI referrals using session source and `utm_source=chatgpt.com`.
- [ ] Report AI-referred sessions together with `download_click`, `trial_start_click`, guide entry, and download rate.
- [x] Create a privacy-safe intake process for customers who report finding POSPal through ChatGPT.
- [ ] Export Search Console Links data before setting an external-authority target.

Exit criteria:

- The same benchmark can be rerun without changing its rules.
- Search and non-search results are kept separate.
- AI referrals can be connected to the installer-download funnel.

### Step 2: establish one unambiguous POSPal entity

Detailed proposal: [POSPal entity foundation](pospal-entity-foundation-proposal.md)

Release outcome: [`/sxetika-me-to-pospal/`](https://pospal.gr/sxetika-me-to-pospal/) is live, included in the sitemap, and uses the approved public identity and structured-data graph.

Tasks:

- [x] Approve the canonical descriptor: `POSPal.gr — σύστημα παραγγελιοληψίας και ροής κουζίνας για καφέ και εστιατόρια στην Ελλάδα`.
- [x] Confirm the public business facts that may be published: business form, trading name, founder/owner display name, location, support email, public-phone decision, launch date, and official profiles.
- [x] Create a truthful public entity page with a distinct identity and trust job.
- [x] Define stable JSON-LD identifiers for `https://pospal.gr/#organization`, `https://pospal.gr/#software`, and the entity page.
- [x] Add supported `Organization` and `SoftwareApplication` schema together with `WebPage` and `BreadcrumbList`; defer `WebSite` schema while the homepage remains locked.
- [x] Add `sameAs` only for verified official profiles controlled by POSPal.
- [x] Keep price, VAT treatment, operating system, publisher, and product description consistent across structured data and visible content.
- [x] Do not add `aggregateRating` until genuine public reviews exist.
- [ ] Review trademark/name-collision risk separately before adopting a new permanent trading label.

Privacy decision:

- The owner's official legal name is private and must not appear in public copy, structured data, or current repository documentation.
- Use `Robert Airey` in Latin characters as the public founder/owner identity.

Lock note:

The strongest site-wide entity placement would normally include the homepage. That work remains blocked by the permanent homepage lock until the user explicitly replaces it. The entity page was released without changing the locked homepage, download page, or guides page.

Exit criteria:

- **Achieved for controlled sources:** the same entity name, product definition, URL, price, VAT treatment, and official profiles appear consistently on the released entity page and its structured data.
- **Awaiting measurement:** search engines and answer engines distinguish the Greek ordering product from the unrelated international Pospal product after the page is crawled.

### Step 3: build a reusable proof system

Repository-evidence decision: on 2026-08-05 the owner directed that the application not be installed for this SEO phase. Current private application source, maintained product contracts, and maintained tests may establish narrow controlled first-party facts. They do not establish independent proof, broad compatibility, customer outcomes, or authentic model-specific hardware evidence.

Delivered artifacts:

- [POSPal proof system](pospal-proof-system.md);
- [product-fact checklist](pospal-product-fact-checklist.md);
- [SEO claim-to-query map](pospal-seo-claim-map.md);
- [proof execution tracker](pospal-seo-proof-execution-tracker.md);
- [controlled artifact record](proof-records/PRF-2026-001.md);
- [blank customer-proof template](proof-records/PRF-2026-002.md);
- [independent verification fact pack](pospal-independent-verification-fact-pack.md);
- [repository-backed website proposal](pospal-repository-backed-website-proposal.md).

Tasks:

- [x] Create a case-study evidence template: venue, problem, equipment, setup, workflow, verified result, limitations, customer approval, and review date.
- [x] Record installer identity/integrity without executing it; close installation as unnecessary for the current website proposal.
- [x] Build a source-backed fact register for Windows packaging, staff-device access, local-network requirements, narrow reconnect behavior, and printer routing.
- [x] Document what works locally, the same-device reconnect boundary, and the functions with separate internet dependencies.
- [x] Record support channels and actual support boundaries.
- [ ] Publish the first named, customer-approved operational example.
- [ ] Publish aggregate product data only after the collection method is documented and the figures are reproducible.

Exit criteria for controlled repository evidence:

- **Achieved:** every proposed website fact maps to a controlled source and an explicit limitation.
- **Achieved:** unsupported compatibility, customer, integration, figure, and outcome claims remain excluded.
- **Still open as a separate authority layer:** a named customer or independent author publishes a checkable real-world account under its own control.

### Step 4: make the existing generic hub the definitive POSPal source

Target URL: `/systima-paraggeliolipsias.html`

Do not create a replacement URL.

Tasks:

- [x] Make the category and intended buyer explicit in the H1 and opening answer.
- [x] Explain the intended workflow and the fiscal/non-integration product boundary.
- [x] Add the source-verified equipment and reachable-local-network requirements without claiming broad compatibility.
- [x] Add the implemented phone/tablet → Windows → kitchen/printer workflow.
- [x] Explain the narrow same-device reconnect behavior and separate internet dependencies using source-verified facts.
- [x] Include current price, trial, cancellation, and whether VAT is included.
- [x] Add Windows-installed printer requirements, roles, category routing, and the setup test-print boundary; exclude model compatibility.
- [x] Reserve named customer or independent operational proof for a later authority layer; do not block the controlled-fact release on it.
- [x] Add a factual limitations section.
- [x] Add an answer-first FAQ based on real buyer and support questions.
- [x] Add category/use-case routing without naming competitors publicly.
- [x] Keep download primary and installation guides secondary.
- [x] Add only schema types supported by the visible page.
- [x] Add contextual links from relevant unlocked pages and to `/times.html` where price is part of the decision.

Exit criteria:

- The hub answers the generic buyer question without requiring another POSPal page.
- The page contains unique evidence, not additional generic word count.
- It is meaningfully different from the PDA definition, process, and venue pages.
- Every product claim is traceable to the product context or an approved proof source.

### Step 5: clarify the supporting content cluster

Tasks:

- [ ] Keep the existing PDA metadata experiment isolated until its predefined sample is complete.
- [ ] Re-evaluate query ownership using page-filtered Search Console data.
- [ ] Give each retained page one distinct job: definition, process, staff use case, venue use case, wireless behavior, or category hub.
- [ ] Remove duplicated explanations when they do not add a distinct scenario or piece of evidence.
- [ ] Consolidate only when query overlap and redirect capability support the decision.
- [ ] Add contextual internal links based on buyer progression, not merely keyword anchors.
- [ ] Create a new page only when the SEO expansion gate is satisfied: real intent, distinct funnel job, quality evidence, and measurable batch.

Exit criteria:

- Each priority query cluster has one intended owner.
- No retained page exists only as a keyword variation.
- Internal links express the category → use case → price/download journey.

### Step 6: earn independent verification

Priority source types:

- customer websites and customer social profiles;
- Greek hospitality publications and communities;
- restaurant-equipment and thermal-printer partners;
- relevant Greek software directories;
- independent Greek YouTube walkthroughs;
- local business and entrepreneurship organizations where the relationship is genuine.

Tasks:

- [ ] Create an outreach fact pack with the canonical entity name, verified description, price, trial, screenshots, limitations, and download URL.
- [ ] Ask named customers to describe the real setup in their own channels.
- [ ] Offer working software and evidence to reviewers without controlling their conclusion.
- [ ] Publish Greek video transcripts so the workflow is crawlable as text.
- [ ] Track the referring page, entity wording, target URL, and whether the mention is independently authored.
- [ ] Reject paid fabricated reviews, bulk directories, link exchanges, and irrelevant backlink packages.

Exit criteria:

- Generic and exact-brand searches surface legitimate third-party references.
- External descriptions use the same entity identity and accurate product boundary.
- At least one answer-engine citation can come from a source POSPal does not control.

### Step 7: measure every released batch

Tasks:

- [ ] Rerun the fixed prompt benchmark only after a released batch is crawlable.
- [ ] Compare mention rate, top-three mention rate, citation share, independent-source citation rate, and exclusion reasons.
- [ ] Compare AI referral sessions and installer-download rate.
- [ ] Compare Search Console non-brand query clusters and intended landing pages.
- [ ] Keep, revise, or roll back each change according to its own hypothesis.
- [ ] Start the next batch only after the previous one has a readable result.

Success is not a single flattering ChatGPT answer. Success is sustained discovery across repeated product-fit prompts, reliable citations, and measurable movement toward downloads.

## Initial work queue

Work starts at the first unchecked item whose dependencies are available.

| Order | Item | Status | Dependency |
| ---: | --- | --- | --- |
| 1 | Create the fixed AI prompt benchmark and results format | Complete | None |
| 2 | Create the GA4 AI-referral report | Ready | GA4 access |
| 3 | Approve the canonical POSPal entity descriptor | Complete | Brand decision |
| 4 | Gather publishable company/entity facts | Complete | User input |
| 5 | Prepare the proof/case-study evidence template | Complete | None |
| 6 | Select the first customer-approved proof source | Pending | Customer permission |
| 7 | Draft the generic-hub improvement specification | Complete | Repository-backed product facts |
| 8 | Implement the generic-hub and wireless batch | Complete | Explicit website-edit approval received 2026-08-05 |
| 9 | Begin independent outreach | Pending | Entity and proof packs complete |

## Inputs needed as work progresses

- A first customer only when POSPal is ready to add a named independent authority layer.
- Search Console Links export.
- Access to GA4 reports for AI-referral measurement.

## Skill stack

Skills used to produce this plan:

- `find-skills`: searched the skill ecosystem and checked source quality.
- `technical-seo-checker`: separated crawl/indexing issues from authority problems.
- `on-page-seo-auditor`: reviewed titles, H1s, canonicals, schema, page roles, and content gaps.
- `content-strategy`: limited new content to searchable, evidence-backed assets with a distinct funnel job.
- `graphify`: confirmed the repository's locked conversion core and SEO expansion gate.
- `browser:control-in-app-browser`: selected for live inspection; the browser connection failed before opening a page, so current live responses were verified through direct web and HTTP inspection instead.

Recommended additional skill:

- `kostja94/marketing-skills@generative-engine-optimization`
  - Skills directory: `https://skills.sh/kostja94/marketing-skills/generative-engine-optimization`
  - Observed installs: 934
  - Source repository: 848 GitHub stars, active, not archived
  - Install command: `npx skills add kostja94/marketing-skills@generative-engine-optimization -g -y`

Use it for execution support around citable answer blocks, entity consistency, distribution, and AI-source measurement. Verify any numerical marketing claims in that external skill against primary sources before acting on them.
