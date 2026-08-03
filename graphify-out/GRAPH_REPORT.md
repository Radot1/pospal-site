# Graph Report - C:\Users\bzoum\Documents\GitHub\pospal-site  (2026-08-02)

## Corpus Check
- 53 files · ~55,471 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 229 nodes · 392 edges · 18 communities (15 shown, 3 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 39 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Test Dependencies|Test Dependencies]]
- [[_COMMUNITY_Homepage Motion Design|Homepage Motion Design]]
- [[_COMMUNITY_Academy Progress|Academy Progress]]
- [[_COMMUNITY_Consent Analytics|Consent Analytics]]
- [[_COMMUNITY_Analytics Events|Analytics Events]]
- [[_COMMUNITY_Guide Curriculum|Guide Curriculum]]
- [[_COMMUNITY_Guide Journey|Guide Journey]]
- [[_COMMUNITY_Product Pricing Model|Product Pricing Model]]
- [[_COMMUNITY_Agent Governance|Agent Governance]]
- [[_COMMUNITY_Repository Hygiene|Repository Hygiene]]
- [[_COMMUNITY_Public Asset Hygiene|Public Asset Hygiene]]
- [[_COMMUNITY_SEO Marketing Funnel|SEO Marketing Funnel]]
- [[_COMMUNITY_Technical SEO Baseline|Technical SEO Baseline]]
- [[_COMMUNITY_Product Positioning|Product Positioning]]
- [[_COMMUNITY_Post-Redesign SEO Audit|Post-Redesign SEO Audit]]

## God Nodes (most connected - your core abstractions)
1. `buildConsentUI()` - 13 edges
2. `render()` - 11 edges
3. `Download-first Funnel` - 11 edges
4. `closePanel()` - 10 edges
5. `setupCtaClickTracking()` - 10 edges
6. `render()` - 10 edges
7. `showBanner()` - 9 edges
8. `openSettingsPanel()` - 9 edges
9. `updateFloatingTriggerVisibility()` - 8 edges
10. `initializeConsentStore()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Kitchen/order Workflow` --conceptually_related_to--> `POSPal Desktop Order Screenshot`  [INFERRED]
  CONTEXT.md → static/img/pospal-desktop-order.png
- `Simple Guides Surface` --semantically_similar_to--> `Video-first Guide Template`  [INFERRED] [semantically similar]
  docs/redesign/academy-plan.md → guides/internal/SPECIALIST_GUIDE_TEMPLATE.md
- `QR Menu Launch Stance` --conceptually_related_to--> `QR Menu Live Preview`  [INFERRED]
  docs/redesign/search-console-intent-map-2026-06-23.md → static/qr-menu-live-preview.png
- `Greek Hospitality Audience` --references--> `Beach Bar Order-taking Page`  [INFERRED]
  MARKETING_PLAN.md → paraggelio-lipsia-gia-beach-bar.html
- `Greek Hospitality Audience` --references--> `Cafe PDA Page`  [INFERRED]
  MARKETING_PLAN.md → pda-gia-kafeteries.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Post-Redesign Evaluation Constraints** — docs_seo_post_redesign_evaluation_2026_08_02_evidence_rules, docs_seo_post_redesign_evaluation_2026_08_02_locked_conversion_core, docs_seo_post_redesign_evaluation_2026_08_02_seo_expansion_gate [EXTRACTED 1.00]
- **Locked Download-Led Surfaces** — index_homepage_conversion_surface, download_index_installer_handoff, guides_index_onboarding_hub [EXTRACTED 1.00]
- **Download-led Conversion System** — marketing_plan, download_first_funnel, index_homepage, download_page, guides_page, ga4_key_events [INFERRED 0.95]
- **Repository Hygiene System** — agents_repository_hygiene_rule, agents_graphify_update_rule, gitignore_generated_artifact_rules, docs_capture_archive_cleanup [INFERRED 0.95]
- **Locked Launch Core** — agents_locked_pages_rule, locked_conversion_core, index_homepage, download_page, guides_page [INFERRED 0.95]
- **PDA SEO Acquisition Cluster** — search_console_intent_map, pda_education_cluster, waiter_service_cluster, pda_definition_page, waiter_pda_page, cafe_pda_page [INFERRED 0.85]
- **QR Menu Product Story** — qr_menu_included, static_qr_menu_live_code_image, static_qr_menu_live_preview_image, qr_menu_customer_categories, qr_menu_customer_prices [INFERRED 0.85]

## Communities (18 total, 3 thin omitted)

### Community 9 - "Test Dependencies"
Cohesion: 0.50
Nodes (3): devDependencies, @axe-core/playwright, playwright

### Community 6 - "Homepage Motion Design"
Cohesion: 0.18
Nodes (11): stage, toggle, clearRouteTimers(), setStage(), finishRoute(), runRoute(), handleMotionPreferenceChange(), Homepage Design Brief (+3 more)

### Community 8 - "Academy Progress"
Cohesion: 0.29
Nodes (9): safeParse(), nowIso(), defaultState(), loadState(), saveState(), markStarted(), markCompleted(), setLessonChecks() (+1 more)

### Community 0 - "Consent Analytics"
Cohesion: 0.10
Nodes (42): getConsentValue(), ensureDataLayer(), isAnyTrackingAllowed(), onDomReady(), isElementVisible(), lockBodyScroll(), getFocusableElements(), trapFocus() (+34 more)

### Community 5 - "Analytics Events"
Cohesion: 0.27
Nodes (15): normalizeText(), normalizeForMatch(), toUrl(), normalizePathname(), isDemoOrAppPath(), isMarketingPage(), buildBasePayload(), sendEvent() (+7 more)

### Community 1 - "Guide Curriculum"
Cohesion: 0.13
Nodes (31): isDevLockEnabled(), lockAnchor(), lockButton(), shouldKeepOriginalLabel(), lockStepItems(), applyDevLockUi(), parseJson(), loadState() (+23 more)

### Community 2 - "Guide Journey"
Cohesion: 0.17
Nodes (23): safeJsonParse(), loadState(), saveState(), getSteps(), getLevelBuckets(), levelComplete(), getNextStep(), updateProgress() (+15 more)

### Community 4 - "Product Pricing Model"
Cohesion: 0.10
Nodes (21): guessCurrencySymbol(), normalizePricingPayload(), fetchPricing(), ensurePricingLoaded(), POSPal Product, Monthly Price 23.90 EUR, Not Fiscal POS Boundary, Kitchen/order Workflow (+13 more)

### Community 10 - "Repository Hygiene"
Cohesion: 0.67
Nodes (3): Repository Hygiene Rule, Graphify Update Rule, Generated Artifact Ignore Rules

### Community 3 - "SEO Marketing Funnel"
Cohesion: 0.12
Nodes (23): Download-led Marketing Plan, Greek Hospitality Audience, Download-first Funnel, Windows Installer Download, pospal-artifacts Download Host, 30-day No-card Trial, Wireless Order-taking Page, Beach Bar Order-taking Page (+15 more)

### Community 11 - "Product Positioning"
Cohesion: 0.67
Nodes (3): POSPal Product Positioning, Not a Fiscal POS Boundary, Greek Hospitality Audience

### Community 7 - "Post-Redesign SEO Audit"
Cohesion: 0.17
Nodes (13): Download-First Funnel, Verified EUR 23.90 Offer, Post-Redesign Measurement Baseline, Legacy Redirect Failure, PDA Definition and Process Intent Overlap, Internal Link Authority Imbalance, Measured User-Provided Estimated Evidence Rules, SEO Expansion Gate (+5 more)

## Knowledge Gaps
- **28 isolated node(s):** `@axe-core/playwright`, `playwright`, `stage`, `toggle`, `Agent Governance` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GA4 Key Events` connect `SEO Marketing Funnel` to `Consent Analytics`, `Analytics Events`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **Why does `Search Console Intent Map` connect `SEO Marketing Funnel` to `Product Pricing Model`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `Download-first Funnel` (e.g. with `Beach Bar Order-taking Page` and `Cafe PDA Page`) actually correct?**
  _`Download-first Funnel` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `@axe-core/playwright`, `playwright`, `stage` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Consent Analytics` be split into smaller, more focused modules?**
  _Cohesion score 0.1036077705827937 - nodes in this community are weakly interconnected._
- **Should `Guide Curriculum` be split into smaller, more focused modules?**
  _Cohesion score 0.13257575757575757 - nodes in this community are weakly interconnected._
- **Should `Product Pricing Model` be split into smaller, more focused modules?**
  _Cohesion score 0.09881422924901186 - nodes in this community are weakly interconnected._