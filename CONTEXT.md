# POSPal Context

## Glossary

### Brand identity

The stable recognition layer of POSPal: its name, logo, app icon, and primary green. The website redesign preserves these elements rather than treating the project as a full rebrand.

### Landing-page design

The homepage's layout, typography, visual language, copy hierarchy, imagery, and motion. These elements may be replaced completely while the POSPal brand identity remains recognizable.

### Website redesign

The redesign of POSPal's marketing experience, beginning with the landing page. It may make substantial visual and structural departures, but it does not imply a brand redesign.

### Switcher

An owner, manager, or operator of a Greek hospitality business who already understands or uses ordering software and wants a direct, affordable alternative. The homepage addresses this audience first while remaining understandable to first-time buyers.

### Direct relationship

The commercial model in which the customer downloads and subscribes to POSPal without a reseller or middleman. The subscription runs month to month and the customer can cancel it without entering a fixed-term service contract. This is the homepage's primary differentiator; it does not imply unsupported technical ownership claims.

### Self-setup model

The operating model in which the customer installs and configures POSPal using the published onboarding material. POSPal currently charges no installation or maintenance fee and does not sell setup or maintenance as additional services.

### Subscription cancellation

Cancellation stops the next scheduled monthly renewal. The customer retains access through the remainder of the current paid billing period; access does not end at the moment of cancellation.

### Included product

The single subscription includes all current POSPal modes and workflow capabilities: tables, simple mode, kitchen workflow, and QR menu. These are not sold as separately priced modules. This definition does not promise that every future feature will be included.

### Support model

Published guides are the primary setup and troubleshooting path. Practical help is also available through `support@pospal.gr`, but POSPal promises neither a response-time SLA nor a done-for-you installation or configuration service.

### Fiscal boundary

POSPal runs alongside the customer's fiscal system. It is neither a cash register nor a fiscal POS. The homepage states this boundary in the fit strip beneath the hero, the pricing footnote, the FAQ, and the footer rather than using it as the headline.

### Download handoff

Homepage, pricing, guide, and SEO download calls to action lead to `/download/`, not directly to the installer artifact. The download page is an installer handoff page: it provides the explicit installer click, requirements, expected filename, mobile guidance, and the next onboarding step without repeating the full sales argument or adding a complicated post-click state.

### Evidence strategy

The homepage earns trust through readable real product screens, exact commercial terms, explicit product boundaries, and complete onboarding material. It does not reserve space for unverified testimonials, customer logos, ratings, or usage numbers.

### Visual tone

The homepage combines Craft-like tactile depth and disciplined composition with a smaller amount of SayBriefly-like directness, bold voice, and warm energy. It avoids luxury-editorial softness, doodles, childish illustration, and generic SaaS styling.

### Canvas

The homepage is predominantly warm and light for clarity and trust. Deep forest sections create controlled contrast around key workflow, pricing, and final-action moments. POSPal green remains the primary action color rather than a general decorative fill.

### Generated imagery

AI-generated imagery may supply abstract tactile backgrounds or isolated decorative props. It must not depict POSPal interfaces, customers, venues, printers, or any scene that could be mistaken for verified real-world product evidence.

### Product capture

An authentic screenshot taken from a runnable POSPal product state. Design probes may use clearly labelled neutral placeholders, but the production homepage requires product captures for the Windows main screen, staff-device flow, and kitchen or order output.

### Capture dataset

A controlled fictional Greek cafe dataset used consistently across product captures. It contains no real customer or personal data and shows the same representative order across desktop, staff device, and kitchen output.

### Included QR menu

The customer-facing QR menu included in the POSPal subscription without an additional module fee. Products and QR-menu presentation are managed from POSPal, including appearance customization. Public copy does not claim automatic synchronization until that behavior has shipped and been verified.

### Live QR proof

A small, real product demonstration inside the homepage's QR-menu beat: a scannable QR code, phone preview, and link to the capture dataset's published menu. It supports trust but is not promoted in primary navigation or treated as a separate demo funnel.

### Onboarding preview

The homepage summary of four outcome-led stages: equipment, installation, menu and QR, and first shift. It links to complete published guides rather than reproducing full instructions or advertising unfinished destinations.

### Customer guides

The customer education surface for POSPal. It includes setup, daily operation, QR menu, staff devices, equipment, troubleshooting, and owner/admin topics over time, while keeping the first-use path visibly first.

### Guides hub

The public customer-guides entry point at `/guides/`, labelled `Οδηγοί` in navigation. It opens directly into the first available setup video guide with a small selector for the currently published guide videos. It is not a course platform, blog archive, or separate marketing landing page. The site does not create a competing `/academy/` route while this URL has search and product continuity.

### Guide URL

A stable public URL for one customer guide under `/guides/`. Each Guide URL renders the same simple video guide surface with that guide selected. Guide URLs support search, sharing, support replies, and direct links from homepage, download, pricing, and support pages.

### Video-led guide

The initial customer guide format. The video carries the teaching, while surrounding text stays minimal and supports orientation and the next action.

### Confidence-first guides

The customer guides' first success measure is customer confidence to keep learning and reach first use. The guides are not an account-based learning management system and do not use progress, scoring, or completion mechanics.

### Simple video guide surface

The canonical `/guides/` interface shape. It uses a quiet support-page layout: compact POSPal header, short guide title, a small selector for the two published setup videos, one large video, and one or two next actions. It does not use a sidebar, course outline, manual completion, progress state, supporting panel, quizzes, forums, discussions, or LMS-style mechanics.

### Guide interaction boundary

The guides never include quizzes, forums, comments, discussions, certificates, scores, progress bars, manual completion, or social learning features. They are a guided video-learning and setup-confidence surface, not a learning management system or community product.

### Start Here path

The required guide path that takes a customer from download to one successful test order before the first live shift. It is the critical onboarding route inside the broader customer guides.

### Guides launch scope

The first production guides launch includes only real published setup guides. Broader guide topics are not shown as navigation items and are not published as indexable URLs until their content exists.

### Active redesign pair

The active redesign work is the pair of `prototype/homepage-v3/` for the main landing page and `/guides/` for the simple video guide surface. Earlier prototype folders are design evidence only unless the user explicitly reopens them.

### Guide-completion gate

The redesigned homepage may be prototyped before the onboarding curriculum is finished, but it does not launch until all four guides linked by the onboarding preview are complete and published at stable URLs.

### Design probes

Three throwaway desktop-and-mobile homepage studies using the same approved content and product facts: `Tactile Counter`, `Operator Editorial`, and `Living Order Route`. They test genuinely different composition and hierarchy before one direction is promoted into production code.

### Probe scorecard

The ordered criteria for selecting a design probe: five-second product comprehension, unmistakable download action, readable real interface, credible direct-relationship model, memorable QR-menu value, approachable onboarding, and mobile accessibility and performance. Visual excitement breaks ties rather than overriding clarity.

### Probe boundary

Design probes live under `/prototype/`, carry `noindex`, remain outside the sitemap, and do not modify the production homepage. `prototype/homepage-v3/` is the selected active homepage prototype. Earlier prototype folders were deleted after selection; only screenshots and notes in `docs/redesign/` remain as historical design evidence.

### Primary navigation

The compact site header: POSPal logo linking home, `Τιμές`, `Οδηγοί`, `Υποστήριξη`, and the visually dominant `Κατέβασε για Windows` action. It excludes demo, feature, customer, about, and contact destinations unless a future content need justifies them.

### Public voice

Natural monotonic Greek written consistently in the second-person singular. Copy uses short active sentences and avoids corporate plural, English SaaS jargon, keyword stuffing, and exaggerated claims.

### Shared hero promise

The fixed content used by every design probe: `Η παραγγελιοληψία σου. Χωρίς μεσάζοντα.` It describes table mode, simple mode, kitchen workflow, customizable QR menu, Windows installation, guided self-setup, the early-adopter price, and the 30-day trial without card or personal information. Its primary action is `Κατέβασε για Windows`.

### Hero setup action

The hero's secondary action, `Δες τι χρειάζεσαι για το στήσιμο`, links to the equipment-preparation guide. It remains visually subordinate to the download action and is used only when that guide is complete.

### Basic equipment fit

POSPal installs on the business's Windows computer. Staff phones or tablets connect through the same local network. A thermal printer is optional and is needed only when the business wants printed kitchen or order tickets.

### Offline order capture

When a staff phone or tablet temporarily leaves the local network's Wi-Fi range, the operator can continue entering orders. Those orders are stored on that device and synchronized when it reconnects to the local network. This does not mean the main Windows computer can operate indefinitely without internet access.

### Windows-installed

A verified product statement meaning that POSPal is installed on a Windows computer. Public copy uses this term instead of `self-hosted`, which would imply an unverified architecture and level of independence from POSPal services.

### Product proof

A real POSPal interface shown at a readable size and in a verified state. In the homepage hero, product proof is the dominant visual; tactile order and kitchen objects provide context without replacing it with fabricated UI or stock lifestyle imagery.

### Signature motion

The homepage's single prominent animation: a staff device records an order beyond Wi-Fi range, stores it locally, reconnects to the venue network, synchronizes it to POSPal, and routes it to the kitchen. It never implies cellular or cloud transmission while the device is out of range. Other motion is limited to restrained interaction feedback, and the complete experience has a reduced-motion equivalent.

### Hosting platform

The marketing site is published as static files on GitHub Pages at `pospal.gr`. Designs must work without server-side rendering, application servers, runtime environment variables, or platform-specific redirect rules. Core content, download, navigation, and guides remain usable without JavaScript.

### Static-first architecture

The implementation model for the marketing site: plain HTML and CSS provide the complete content and actions, while small local JavaScript modules progressively add motion and interaction. The redesign does not require a frontend framework or runtime CDN dependency.

### Homepage journey

The ordered landing-page story: hero, fit requirements, real order flow, table and simple modes, a dedicated QR-menu beat, onboarding path, price, FAQ, and final download. Onboarding follows product value so that strong guidance builds confidence without making the product appear difficult at first contact.

### Conversion core

The set of primary site pages whose job is to turn qualified visitors into Windows downloads: homepage, download, pricing, support, and guides. These pages share the same download-first hierarchy and must make the next step clear without creating a demo or sales-call funnel.

### Onboarding core

The set of guide pages that help a customer move from download to first useful operation. These pages make self-setup credible through real published instructions and must not advertise unfinished guide destinations as if they were complete.

### SEO acquisition layer

The set of search-intent pages that answer specific Greek hospitality queries before routing visitors toward download, pricing, or a relevant guide. Existing ranking URLs are improved and preserved before new pages are added.

### Early-adopter price

The EUR 18.90 monthly subscription price offered to customers who subscribe during the early-adopter period. A customer keeps this monthly price for as long as that subscription remains active. Future public pricing may increase, but an unconfirmed future amount is not advertised.

### Honest urgency

Commercial urgency based only on a real, defined condition. The early-adopter price may be identified as such, but the site does not use countdowns, limited-slot claims, or deadlines unless a genuine limit has been set.

### Subscription ledger

The pricing presentation showing one early-adopter monthly price, the included product, the absence of setup, maintenance, and module fees, and subscription cancellation. It uses a clean commercial layout rather than a receipt or order-ticket metaphor that could imply fiscal functionality.

## Relationships

- The website redesign changes the landing-page design.
- The landing-page design uses the existing brand identity as an anchor.
- The homepage targets the switcher first.
- The switcher's direct relationship is expressed by the promise `Η παραγγελιοληψία σου. Χωρίς μεσάζοντα.`
- The direct relationship is evidenced by direct download, a public month-to-month price, and cancellation without a fixed-term service contract.
- The direct relationship uses subscription cancellation rather than immediate termination.
- The self-setup model requires strong onboarding rather than a paid setup service.
- The early-adopter price purchases the included product without module fees.
- The self-setup model is supported by the support model.
- Product-fit communication includes the fiscal boundary.
- The homepage journey converts through the download handoff.
- Product proof and the support model implement the evidence strategy.
- The landing-page design follows the visual tone.
- The visual tone is expressed through the canvas.
- Generated imagery may support the canvas but never replace product proof.
- Product proof is supplied by product captures in production.
- Product captures use the capture dataset.
- The included product contains the included QR menu.
- The homepage journey gives the included QR menu a dedicated visual beat rather than reducing it to a feature-card label.
- The dedicated QR-menu beat may contain live QR proof.
- The homepage journey presents guides through the onboarding preview.
- The onboarding preview is governed by the guide-completion gate.
- The Guides hub uses the simple video guide surface.
- The Guides launch scope contains the Start Here path first.
- The simple video guide surface belongs to the active redesign pair.
- The customer guides follow the guide interaction boundary.
- The landing-page design is selected through the design probes.
- Design probes are compared with the probe scorecard.
- Design probes operate within the probe boundary.
- The homepage journey is entered through the primary navigation.
- All public landing-page copy follows the public voice.
- Design probes share the shared hero promise so that their composition can be compared fairly.
- The shared hero promise offers the hero setup action as its secondary path.
- The fit-requirements stage of the homepage journey states the basic equipment fit.
- Offline order capture extends the staff-device workflow beyond temporary local-network coverage.
- POSPal is described publicly as Windows-installed, not self-hosted.
- The hero uses product proof as its dominant visual evidence.
- Signature motion explains the real order workflow rather than decorating the page continuously.
- The website redesign must remain compatible with the hosting platform.
- The hosting platform is implemented through the static-first architecture.
- The homepage follows the homepage journey.
- The website redesign is delivered through the conversion core, onboarding core, and SEO acquisition layer.
- The conversion core routes visitors into the download handoff.
- The onboarding core supports the self-setup model.
- The SEO acquisition layer preserves existing search equity while creating demand-specific paths into the conversion core.
- The hero may show the early-adopter price beneath the primary promise; its full entitlement is explained in the pricing section.
- Presentation of the early-adopter price follows honest urgency.
- The pricing stage of the homepage journey uses the subscription ledger.
