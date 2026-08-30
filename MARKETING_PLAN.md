## POSPal Marketing Plan (Working Draft)

### 1) Goals
- Primary goal: distribute `POSPal-win-Setup.exe` (Windows installer) from the public `pospal-artifacts` repo.
- Secondary goal: get interested visitors to invest time in setup/usage guides after or around the download.
- Demo is no longer a conversion goal. Keep any demo content small and proof-oriented only; do not build a dedicated demo funnel.
- Target conversion action: download `POSPal-win-Setup.exe`.
- Supporting conversion actions: open installation/setup guides, view pricing, and continue toward first use.
- Time horizon: TBD.

### 2) Audience (TBD)
- Primary segments: hospitality businesses in Greece (cafes, restaurants, beach bars, food trucks, seasonal venues).
- Business size / seasonality: all sizes, including seasonal operations.
- Decision makers: owners, managers, or operators who control tooling and budgets.
- Key pain points: distributor-led pricing/maintenance, fragmented tools, unclear costs, slow setup.

### 3) Positioning (TBD)
- One-sentence positioning: all-in-one kitchen order + QR menu tool with modern UI and a direct monthly subscription.
- Differentiators: transparent pricing, no middleman, all features included (table mode + simple mode + QR menu).
- Canonical PDA proposition: `Δεν πουλάμε PDA. Δεν χρεώνουμε ανά PDA. Το κινητό της ομάδας σου μπορεί να γίνει PDA.`
- PDA pricing truth: there is no additional charge per PDA. Suitable phones or tablets can open the staff order-taking page when they can reach the Windows computer on the venue's local network.
- Market framing (internal): not competing with big fiscal POS vendors; competing with "whatever barely works."
- Market insight: Greek F&B tech is compliance-driven, not user-driven; POSPal is the user-driven layer.
- Positioning rule: POSPal is a kitchen/order workflow tool that can run alongside existing compliance POS systems.
- Compliance clarity: POSPal does not handle the fiscal layer; it focuses on ordering + kitchen flow and can run alongside the fiscal POS.
- Competitive alternatives: distributor-sold PDA/POS tools with maintenance plans and opaque pricing.
- Proof points: screenshots, small embedded demo/proof section, guides, clear setup flow (no testimonials yet; early-stage startup).

### 3.1) Founder voice and page ethos
- The founder ad in Appendix A is the primary voice reference for owner-facing acquisition pages.
- The campaign line is `Παραγγελιοληψία χωρίς όλη την ιστορία.`
- The copy should recognise an actual shift problem before explaining features. For PDA pages, the central moment is `Ποιος έχει το PDA;` when too few dedicated devices are being shared.
- Use direct language, concrete situations and dry humour. A small number of memorable lines is stronger than filling every section with jokes.
- Preserve the ad's attitude without copying unsupported claims. `Χωρίς σήμα` means no mobile-network signal is required for local order-taking; it must never be rewritten as working without the venue's reachable local network.
- `Χρησιμοποίησε τους εκτυπωτές που ήδη έχεις` must always retain the compatibility boundary: the printer must be installed in Windows and verified with a real test print.
- Do not name competitors or claim that every vendor deliberately restricts devices. Describe the recognisable operational situation and state POSPal's own pricing and product policy clearly.

### 4) Offer & Pricing (TBD)
- Plan name(s): POSPal Subscription.
- Price point(s): EUR 23.90 / month.
- Trial details: 30-day free trial, no card and no personal information required.
- Cancellation terms: cancel anytime, just like common subscriptions (Netflix/Spotify).

### 5) Messaging Pillars (TBD)
- Pillar 1: all-in-one workflow (table mode, simple mode, QR menu included).
- Pillar 2: modern UI with clear, honest pricing.
- Pillar 3: direct subscription, no distributor or maintenance plan.

### 6) Funnel & CTA
- Top-of-funnel: home page + SEO.
- Mid-funnel: pricing, download page, and installation/setup guide.
- Bottom-of-funnel: download installer and start trial.
- Primary CTA: download `POSPal-win-Setup.exe`.
- Secondary CTA: open installation/setup guides.
- Demo CTA: not a primary or secondary CTA. Use demo only as lightweight proof/context if it helps confidence.
- Download URL: `https://github.com/Radot1/pospal-artifacts/releases/latest/download/POSPal-win-Setup.exe`

### 7) Website Plan

Current page-work record (2026-08-30): the founder-voice rewrite and new visuals for `/pda-gia-servitoro/` are implemented locally, not published. The maintained copy/visual brief is [WAITER_PDA_PAGE_COPY_DRAFT.md](docs/seo/WAITER_PDA_PAGE_COPY_DRAFT.md); checks and handoff are recorded in [PDA_IMPLEMENTATION_LOG.md](docs/seo/PDA_IMPLEMENTATION_LOG.md). The broader SEO roadmap remains paused while this page is reviewed.

- Key pages: Home, Download, Pricing, Guides/Installation, Support, SEO landing pages.
- Page order / nav: Home, Pricing, Guides, Support, Download.
- Required sections on home: what it is/is not (not a fiscal POS), features, pricing, 30-day trial, download, guides.
- Optional home proof: small embedded demo/screenshot section, only if it supports the download decision.
- SEO targets: Greek hospitality order management, QR menu, PDA ordering, kitchen workflow.
 - Above-the-fold feature labels (working): "Λειτουργία τραπεζιών", "Απλή λειτουργία (χωρίς τραπέζια)", "QR Μενού".

### 8) Assets & Proof (TBD)
- Testimonials / quotes: none yet.
- Screenshots / demos: app screenshots and small embedded proof/demo sections only; no dedicated demo funnel.
- Logos / badges: none yet.
- Case studies: none yet.

### 9) Metrics
- North-star metric: installer downloads.
- Supporting metrics: download page visits, `download_click`, `trial_start_click`, installation guide views, pricing page views, Search Console CTR on commercial/non-brand queries.
- Baselines (if any): none yet.

### 9.1) Product Opportunities (Internal, Not Promised)
- Pre-order + messaging POS: orders via Messenger/Viber/WhatsApp, auto-parsed and queued, fiscalized later.
- Back-of-house clarity: kitchen-only views, bottleneck detection, re-fire logic, staff accountability via UID.
- Owner-centric dashboards: focus on truth (who cancels, who delays, where the kitchen blocks).
- Offline-first workflow: stable operation when internet is flaky or down.

### 10) Risks & Open Questions
- [ ] Pricing phrasing and trial messaging
- [ ] CTA destination and flow
- [ ] Proof points (data, testimonials)
- [ ] Visual direction
- [ ] Clear "not a legal POS" explanation without hurting conversion
- [x] Hosting location for `POSPal-win-Setup.exe` (pospal-artifacts public repo)
- [x] `POSPal-win-Setup.exe` public URL confirmed
- [ ] Old/dead demo URLs need a download-led redirect plan
- [ ] Retired guide URLs need real HTTP redirects instead of meta-refresh pages

### 11) Next Actions
- Finalize positioning statement
- Update repo instructions and marketing plan to download-first
- Remove demo-first assumptions from site copy, nav, sitemap, and redirects where they remain
- Add or keep homepage note: not a fiscal POS (FAQ + pricing footnote + footer)
- Update site copy + CTAs toward download-first flow
- Rewrite SEO titles/meta for stronger download/trial CTR on existing ranking pages
- Fix asset/link integrity + sitemap

## Appendix A — Founder ad and voice source

Founder-provided campaign script. Formatting and obvious spelling have been cleaned up for internal readability; the campaign argument and tone are unchanged.

### 0:00–0:08

> Γεια, είμαι ο Robert. Ιδρυτής της POSPal.
>
> Τι είναι η POSPal;
>
> Με 23,9 το μήνα σου παρέχουμε πλήρες πρόγραμμα παραγγελιοληψίας.

### 0:08–0:16

> Ναι, με 23,9.
>
> Καλά άκουσες.
>
> Και οι πρώτες 30 μέρες δωρεάν.

### 0:16–0:22

> Είναι καλό το πρόγραμμα;

Beat.

> Όχι.
>
> Το πρόγραμμα γαμάει.

Keep walking.

### 0:22–0:31

Waiter enters order from a normal phone. Printer fires. Customer scans QR.

> Στέλνεις τις παραγγελίες απευθείας από το κινητό σου, ακόμα και αν δεν έχεις σήμα.
>
> Και έχεις και QR menu.
>
> Δωρεάν.
>
> Ακόμα και η γιαγιά σου θα το μάθει.

### 0:31–0:43

Leave BBQ area. Enter construction zone.

> Και τέλος πάντων, σου αρέσει να πληρώνεις μια περιουσία για επώνυμα λογισμικά που σου εγκαθιστά ο μεσάζοντάς τους;

John goes around and around with a screwdriver.

> Όλοι πληρώνονται από εσένα.
>
> Εκτός από εσένα.

Keep walking.

### 0:43–0:54

> Και νομίζεις λοιπόν πως χρειάζεσαι PDA που διπλώνει, με περιστρεφόμενη οθόνη, φακό, GPS και τέσσερις κάμερες; Τι ακριβώς κάνουμε εδώ;

Pan away to an AI shot of a missile.

> Παίρνουμε παραγγελία ή εκτοξεύουμε πύραυλο;

Beat.

### 0:54–1:01

Walk past several completely different thermal printers. One prints as you pass.

> Και οι εκτυπωτές που ήδη έχεις;
>
> Χρησιμοποίησέ τους κι αυτούς.
>
> Δεν χρειάζεται να αγοράσεις τον δικό μας.

An absurdly long receipt starts coming out behind Robert. Ignore it.

### 1:01–1:13

Step into a bulldozer bucket. It begins lowering Robert.

> Σταμάτα να πληρώνεις για εξοπλισμό που δεν χρειάζεσαι.

Lower.

> Και για έξτρα υπηρεσίες όπως QR menu.

Lower.

> Και σταμάτα να υπογράφεις συμβόλαια πριν καν δοκιμάσεις το πρόγραμμα.

Step off the bucket.

### 1:13–1:23

Someone is going mental with a sledgehammer in the background.

> Κατεβάζεις το POSPal.
>
> Μόνος σου.
>
> Το δοκιμάζεις για 30 μέρες.

SMASH.

> Αν σου κάνει, συνεχίζεις.

SMASH.

> Αν όχι;
>
> Το διαγράφεις.

### 1:23–1:31

Walk toward a bad car or industrial vehicle.

> Σταμάτα λοιπόν να είσαι το θύμα και ξεκίνα να σκέφτεσαι πού θα βάλεις όλα τα χρήματα που θα σου εξοικονομώ.

Get in.

### 1:31–1:37

The car does not start. Try again. Nothing. Look at camera.

> Ευτυχώς το POSPal στήνεται πιο εύκολα από αυτό.

The engine starts. Drive away.

### End card

> POSPal
>
> Παραγγελιοληψία χωρίς όλη την ιστορία.
>
> 30 μέρες δωρεάν · Χωρίς κάρτα · 23,90 €/μήνα
>
> pospal.gr
