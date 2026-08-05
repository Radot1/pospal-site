# POSPal ChatGPT and AI Discovery Work Plan

Status: Ready to execute
Planning model: dependency-ordered steps, not a calendar roadmap
Primary outcome: POSPal is independently discovered and accurately recommended for relevant Greek hospitality ordering queries
Primary conversion: download `POSPal-win-Setup.exe`

## Scope and rules

This plan covers the public surfaces currently associated with POSPal:

- `https://pospal.gr/` and the 11 URLs in its sitemap;
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

- **Measured:** all 11 `pospal.gr` sitemap URLs return `200` to an `OAI-SearchBot` user agent.
- **Measured:** all 11 URLs have a title, one H1, and a self-referencing canonical.
- **Measured:** `robots.txt` permits crawling and declares the marketing sitemap.
- **Measured:** current HTML is served as UTF-8.
- **Measured:** the marketing site explains Windows installation, ordinary phones/tablets, pricing, the trial, kitchen flow, QR menu, and the fiscal-POS boundary.
- **Measured:** `/guides/` currently advertises seven videos, contains no `σύντομα` labels in the live HTML, and no longer has the unfinished-guide state seen in older search caches.
- **Measured:** the generic category page already exists at `/systima-paraggeliolipsias.html`; another generic URL is not needed.

Conclusion: crawlability is not the main reason POSPal is absent from generic recommendations.

### Gap 1: POSPal is relevant but not sufficiently verifiable

- **Measured:** the site has no approved testimonials, customer logos, case studies, or quantified customer outcomes.
- **Measured:** the marketing site uses real application screens and guides, but the acquisition pages largely repeat the same product explanation.
- **Measured:** the core pages do not expose `Organization`, `WebSite`, or `SoftwareApplication` JSON-LD. Eight acquisition pages expose only `FAQPage` schema.
- **Estimated:** there is no strong public entity home containing verified company identity, product ownership, official profiles, and support facts.

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

The site already has GA4 download events, but it still needs:

- a ChatGPT/AI referral report;
- a repeatable generic-prompt benchmark;
- saved citation/source observations;
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

Tasks:

- [ ] Approve one consistent descriptor, for example `POSPal.gr — Παραγγελιοληψία για εστίαση στην Ελλάδα`.
- [ ] Confirm the legal/company details that may be published: legal name, trading name, location, support email, telephone if applicable, launch date, and official profiles.
- [ ] Create a truthful public entity/company page if it passes the SEO expansion gate and has a distinct trust job.
- [ ] Define stable JSON-LD identifiers such as `https://pospal.gr/#organization`, `#website`, and `#software`.
- [ ] Add `Organization`, `WebSite`, and `SoftwareApplication` schema only where visible page content supports every property.
- [ ] Add `sameAs` only for real official profiles controlled by POSPal.
- [ ] Keep price, operating system, publisher, and product description consistent across schema and visible content.
- [ ] Do not add `aggregateRating` until genuine public reviews exist.
- [ ] Review trademark/name-collision risk separately before adopting a new permanent trading label.

Lock note:

The strongest site-wide entity placement would normally include the homepage. That work remains blocked by the permanent homepage lock until the user explicitly replaces it. Entity work can begin on a new approved entity page and unlocked acquisition pages.

Exit criteria:

- The same entity name, product definition, URL, price, and official profiles appear consistently across controlled sources.
- Search engines can distinguish the Greek ordering product from the unrelated international Pospal product.

### Step 3: build a reusable proof system

Required inputs:

- a customer willing to be named;
- permission to use the business name, images, and verified figures;
- verified equipment and printer information;
- real installation and usage evidence.

Tasks:

- [ ] Create a case-study evidence template: venue, problem, equipment, setup, workflow, verified result, limitations, customer approval, and review date.
- [ ] Record one complete installation and first test order.
- [ ] Build a verified compatibility table for Windows versions, devices, network requirements, and tested printer models.
- [ ] Document what works locally, what happens outside Wi-Fi, and what requires internet.
- [ ] Record support channels and actual support boundaries.
- [ ] Publish the first named, customer-approved operational example.
- [ ] Publish aggregate product data only after the collection method is documented and the figures are reproducible.

Exit criteria:

- At least one public proof asset can be independently checked.
- Every number has a source, owner, measurement method, and customer approval where required.
- The proof asset contains honest limitations, not only positive claims.

### Step 4: make the existing generic hub the definitive POSPal source

Target URL: `/systima-paraggeliolipsias.html`

Do not create a replacement URL.

Tasks:

- [ ] Make the category and intended buyer explicit in the H1 and opening answer.
- [ ] Explain clearly who should choose this type of workflow and who needs a fiscal POS, managed hardware, delivery suite, or other product type instead.
- [ ] Add exact equipment and network requirements.
- [ ] Add the real phone/tablet → Windows → kitchen/printer workflow.
- [ ] Explain local/offline behavior using only verified product facts.
- [ ] Include current price, trial, cancellation, and whether VAT is included.
- [ ] Add verified printer compatibility and setup evidence.
- [ ] Add the first approved case study or operational proof asset.
- [ ] Add a factual limitations section.
- [ ] Add an answer-first FAQ based on real buyer and support questions.
- [ ] Add a category-choice section without naming competitors publicly.
- [ ] Keep download primary and installation guides secondary.
- [ ] Add only schema types supported by the visible page.
- [ ] Add contextual links from relevant unlocked pages and to `/times.html` where price is part of the decision.

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
| 1 | Create the fixed AI prompt benchmark and results format | Ready | None |
| 2 | Create the GA4 AI-referral report | Ready | GA4 access |
| 3 | Approve the canonical POSPal entity descriptor | Pending | Brand decision |
| 4 | Gather publishable company/entity facts | Pending | User input |
| 5 | Prepare the proof/case-study evidence template | Ready | None |
| 6 | Select the first customer-approved proof source | Pending | Customer permission |
| 7 | Draft the generic-hub improvement specification | Pending | Verified proof and product facts |
| 8 | Implement the generic-hub batch | Pending | Explicit website-edit approval |
| 9 | Begin independent outreach | Pending | Entity and proof packs complete |

## Inputs needed as work progresses

- Whether €23.90 includes VAT.
- Verified Windows, network, printer, and offline-behavior details.
- Public legal/company identity details.
- Official social and video profiles.
- Support channels and real operating boundaries.
- A first customer who can approve a named example.
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
