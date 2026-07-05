# Graph Report - C:\Users\bzoum\Documents\GitHub\pospal-site  (2026-07-05)

## Corpus Check
- 52 files · ~50,005 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 216 nodes · 382 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_PDA SEO Pages|PDA SEO Pages]]
- [[_COMMUNITY_Download Funnel|Download Funnel]]
- [[_COMMUNITY_Guides And Onboarding|Guides And Onboarding]]
- [[_COMMUNITY_Pricing And Trial|Pricing And Trial]]
- [[_COMMUNITY_Guides And Onboarding 2|Guides And Onboarding 2]]
- [[_COMMUNITY_Download Funnel 2|Download Funnel 2]]
- [[_COMMUNITY_PDA SEO Pages 2|PDA SEO Pages 2]]
- [[_COMMUNITY_Guides And Onboarding 3|Guides And Onboarding 3]]
- [[_COMMUNITY_package json devDependencies axe|package json devDependencies axe]]
- [[_COMMUNITY_PDA SEO Pages 3|PDA SEO Pages 3]]
- [[_COMMUNITY_Agent Governance Locked Public|Agent Governance Locked Public]]
- [[_COMMUNITY_Repo Hygiene|Repo Hygiene]]
- [[_COMMUNITY_SEO Strategy|SEO Strategy]]

## God Nodes (most connected - your core abstractions)
1. `buildConsentUI()` - 13 edges
2. `Download-first Funnel` - 13 edges
3. `render()` - 11 edges
4. `closePanel()` - 10 edges
5. `setupCtaClickTracking()` - 10 edges
6. `render()` - 10 edges
7. `showBanner()` - 9 edges
8. `openSettingsPanel()` - 9 edges
9. `updateFloatingTriggerVisibility()` - 8 edges
10. `initializeConsentStore()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `POSPal Desktop Order Screenshot` --conceptually_related_to--> `Kitchen/order Workflow`  [INFERRED]
  static/img/pospal-desktop-order.png → CONTEXT.md
- `Video-first Guide Template` --semantically_similar_to--> `Simple Guides Surface`  [INFERRED] [semantically similar]
  guides/internal/SPECIALIST_GUIDE_TEMPLATE.md → docs/redesign/academy-plan.md
- `QR Menu Live Preview` --conceptually_related_to--> `QR Menu Launch Stance`  [INFERRED]
  static/qr-menu-live-preview.png → docs/redesign/search-console-intent-map-2026-06-23.md
- `Beach Bar Order-taking Page` --references--> `Greek Hospitality Audience`  [INFERRED]
  paraggelio-lipsia-gia-beach-bar.html → MARKETING_PLAN.md
- `Cafe PDA Page` --references--> `Greek Hospitality Audience`  [INFERRED]
  pda-gia-kafeteries.html → MARKETING_PLAN.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Download-led Conversion System** — marketing_plan, download_first_funnel, index_homepage, download_page, guides_page, ga4_key_events [INFERRED 0.95]
- **Repository Hygiene System** — agents_repository_hygiene_rule, agents_graphify_update_rule, gitignore_generated_artifact_rules, docs_capture_archive_cleanup [INFERRED 0.95]
- **Locked Launch Core** — agents_locked_pages_rule, locked_conversion_core, index_homepage, download_page, guides_page [INFERRED 0.95]
- **PDA SEO Acquisition Cluster** — search_console_intent_map, pda_education_cluster, waiter_service_cluster, pda_definition_page, waiter_pda_page, cafe_pda_page [INFERRED 0.85]
- **QR Menu Product Story** — qr_menu_included, static_qr_menu_live_code_image, static_qr_menu_live_preview_image, qr_menu_customer_categories, qr_menu_customer_prices [INFERRED 0.85]

## Communities (16 total, 3 thin omitted)

### Community 0 - "PDA SEO Pages"
Cohesion: 0.10
Nodes (42): acceptAllConsents(), applyConsentState(), applyTrackerGating(), bindGlobalKeyboardHandler(), buildConsentUI(), closeConsentUI(), closePanel(), ensureClarityLoaded() (+34 more)

### Community 1 - "Download Funnel"
Cohesion: 0.08
Nodes (31): Launch Inventory Freeze ADR, Beach Bar Order-taking Page, Cafe PDA Page, Discovery To First Shift Journey, Download-first Funnel, Download Page, Download Page Handoff, GA4 Key Events (+23 more)

### Community 2 - "Guides And Onboarding"
Cohesion: 0.15
Nodes (28): applyDevLockUi(), basePayload(), bindReset(), bindStepInteractions(), getSteps(), init(), isComplete(), isDevLockEnabled() (+20 more)

### Community 3 - "Pricing And Trial"
Cohesion: 0.10
Nodes (21): Desktop Menu Item Grid, Desktop Order Ticket Panel, Direct Subscription Model, Kitchen/order Workflow, Mobile Viewport Density Fix, Monthly Price 23.90 EUR, Not Fiscal POS Boundary, POSPal Product (+13 more)

### Community 4 - "Guides And Onboarding 2"
Cohesion: 0.19
Nodes (21): bindReset(), bindStepInteractions(), buildBasePayload(), getLevelBuckets(), getNextStep(), getSteps(), init(), levelComplete() (+13 more)

### Community 5 - "Download Funnel 2"
Cohesion: 0.27
Nodes (15): buildBasePayload(), classifyDownload(), classifyTrialStart(), findPricingTarget(), isDemoOrAppPath(), isMarketingPage(), normalizeForMatch(), normalizeJourneyLevel() (+7 more)

### Community 6 - "PDA SEO Pages 2"
Cohesion: 0.18
Nodes (11): Homepage Design Brief, Homepage Order Route Direction, Living Order Route Motion, stage, toggle, clearRouteTimers(), finishRoute(), handleMotionPreferenceChange() (+3 more)

### Community 7 - "Guides And Onboarding 3"
Cohesion: 0.29
Nodes (9): defaultState(), loadState(), markCompleted(), markStarted(), nowIso(), resetState(), safeParse(), saveState() (+1 more)

### Community 8 - "package json devDependencies axe"
Cohesion: 0.50
Nodes (3): devDependencies, @axe-core/playwright, playwright

### Community 9 - "PDA SEO Pages 3"
Cohesion: 0.67
Nodes (3): Graphify Update Rule, Repository Hygiene Rule, Generated Artifact Ignore Rules

## Knowledge Gaps
- **23 isolated node(s):** `@axe-core/playwright`, `playwright`, `stage`, `toggle`, `Agent Governance` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GA4 Key Events` connect `Download Funnel` to `PDA SEO Pages`, `Download Funnel 2`?**
  _High betweenness centrality (0.382) - this node is a cross-community bridge._
- **Why does `Search Console Intent Map` connect `Download Funnel` to `Pricing And Trial`?**
  _High betweenness centrality (0.268) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `Download-first Funnel` (e.g. with `Beach Bar Order-taking Page` and `Cafe PDA Page`) actually correct?**
  _`Download-first Funnel` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `@axe-core/playwright`, `playwright`, `stage` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `PDA SEO Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.1036077705827937 - nodes in this community are weakly interconnected._
- **Should `Download Funnel` be split into smaller, more focused modules?**
  _Cohesion score 0.08172043010752689 - nodes in this community are weakly interconnected._
- **Should `Pricing And Trial` be split into smaller, more focused modules?**
  _Cohesion score 0.09881422924901186 - nodes in this community are weakly interconnected._

## Latest Guide Video Update

Added semantic nodes for the 7 public POSPal YouTube guide videos now rendered by `static/js/academy.js` and `/guides/?guide=...`.
