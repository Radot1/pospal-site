# PDA article visual-story brief

Page: `/pda-ti-einai.html`
Role: top-of-funnel educational article
Primary query: `PDA τι είναι`
Funnel: `/pda-ti-einai.html` -> `/times.html` -> `/systima-paraggeliolipsias.html` -> `/download/` -> `/guides/`
Status: design and evidence brief approved for prototyping; no production-page edit in this document
Prepared: 2026-08-31

## Decision

This page should become a real editorial article, not a landing page wearing article typography.

The visual idea is:

> Follow one order from the waiter's hand to the kitchen, while explaining what the PDA is, what it is not, what equipment sits behind it, and when dedicated hardware is genuinely useful.

The same order should recur through the article. It begins on the handheld device, crosses the local network, appears on the Windows computer, and reaches the kitchen workflow. This gives the page a narrative spine and makes every image answer part of the searcher's question.

## Design read

Reading this as: a founder-authored educational article for Greek hospitality owners, with the visual density of a practical field guide and the credibility of a product teardown.

This is a redesign-overhaul of one ranking page. Its URL, primary intent and essential SEO signals stay stable. The visual language can change substantially.

### Design dials

- `DESIGN_VARIANCE: 7` - asymmetric editorial compositions, but no art-direction tricks that make reading harder.
- `MOTION_INTENSITY: 3` - mostly static. Motion may clarify the journey of one order, never decorate it.
- `VISUAL_DENSITY: 6` - an informative object, screenshot, annotation or photograph should appear in every major reading beat.

The failed prototypes behaved closer to `variance 8 / motion 2 / density 2`: large type, large empty zones and almost no evidence. Density is the main correction.

## What the previous prototypes got wrong

1. They designed the container before identifying the visual material.
2. They used giant headlines to compensate for the absence of imagery.
3. Their three directions were the same page architecture with different styling.
4. They imitated editorial signals without editorial substance: issue labels, fake receipts, oversized quotations and decorative metadata.
5. They had no real waiter, device, network, printer, kitchen or author presence.
6. The first meaningful product image appeared more than 2,100 px down the page.
7. They treated the POSPal screenshot as an isolated proof block instead of one frame in a coherent story.

## What the references teach us

The references are useful because their design is carried by material, not effects.

- Counter Culture begins with an equipment taxonomy and continues with purpose-built instructional visuals. The design feels proprietary because the objects and diagrams belong to the subject.
- Bon Appétit establishes authorship immediately, then uses large, specific photography to create pacing and authority.
- Commerce Pundit combines a composed topic image, author information, reading context and article navigation in the first screen.
- Odoo uses a strong thematic hero and keeps introducing people, product screens and contextual images throughout the article.

The POSPal interpretation should not copy their styles. It should copy their discipline: every important section gets visual evidence or a purpose-built explanation.

## Visual thesis

### Working concept: The anatomy of one order

Use one sample order consistently throughout the page. The exact products and prices must come from a controlled demo environment or be clearly identified as a demonstration.

The order becomes a recurring visual marker:

1. entered on the staff device;
2. carried through the reachable local network;
3. received by POSPal on Windows;
4. routed into the kitchen workflow;
5. optionally represented by a real printed ticket, once authentic print evidence exists.

This is the content moat. A generic competitor can redraw a four-step arrow. It cannot easily reproduce a traceable order shown on the real product at every stage, with Robert explaining the decisions behind it.

## Page structure

### 1. Article masthead and first viewport

**Job:** Answer `PDA τι είναι` immediately and prove that a real person wrote the article.

**Layout:** Asymmetric article masthead. Copy occupies roughly 42% of the width; the hero image occupies roughly 58%. Avoid a centred poster hero.

**Visible in the first viewport:**

- POSPal masthead;
- article category: `Οδηγός παραγγελιοληψίας`;
- H1: `PDA τι είναι στην εστίαση;`;
- a two-sentence answer that distinguishes the device from the full ordering system;
- Robert's portrait, name and role;
- real published and updated dates;
- meaningful hero photography or a real-device composition;
- no product CTA before the educational answer.

**Hero visual:** A real phone or dedicated PDA in a waiter's hand, showing the actual staff ordering interface. The venue context should be visible enough to read as hospitality, but the screen must remain legible.

**Do not use:** floating UI made from HTML rectangles, abstract green blobs, a giant isolated acronym, fake publication metadata or a generic stock waiter.

### 2. The direct definition

**Job:** Fully answer the query before introducing POSPal's position.

**Core answer:**

> PDA σημαίνει Personal Digital Assistant. Στην εστίαση, όμως, όταν κάποιος λέει «PDA» συνήθως εννοεί τη φορητή συσκευή από την οποία ο σερβιτόρος καταχωρίζει και στέλνει την παραγγελία.

Follow immediately with the distinction:

> Η συσκευή είναι μόνο η αρχή. Πίσω της υπάρχει το πρόγραμμα παραγγελιοληψίας, ο υπολογιστής του καταστήματος, το τοπικό δίκτυο και η ροή προς την κουζίνα.

**Visual:** Annotated close-up of the same handheld device. Four restrained callouts identify screen, browser/order interface, network connection and the system behind it. This is an explanatory plate, not proof of broad hardware compatibility.

### 3. What equipment is actually involved

**Job:** Give the educational answer that generic SEO pages usually avoid.

**Layout:** A full-width equipment atlas, inspired by instructional guides rather than a grid of feature cards.

**Objects:**

- Windows computer: required for POSPal;
- suitable phone or tablet with browser: staff device;
- reachable local network: required connection;
- thermal printer: optional according to the venue's desired paper workflow, and subject to a real test print;
- dedicated PDA hardware: optional, with a fair explanation of when it may be preferable.

Each object gets one plain label, one job and one limitation. No marketing benefit paragraphs.

**Required evidence class:** Mixed. Use real POSPal screenshots and real photographed objects where available. Use a clearly illustrative network overlay to explain relationships.

### 4. Where a dedicated PDA helps and where it does not

**Job:** Give the article an honest, opinionated point of view.

**Layout:** One photographic comparison, not two marketing cards. Dedicated PDA on one side, ordinary suitable phone or tablet on the other. Short annotations sit below the image.

**Editorial position:** Dedicated hardware may make sense when the venue has real operational reasons for it. An ordinary suitable device may be enough when the job is simply to open the staff ordering interface on the reachable local network.

Before publication, Robert must provide the actual considerations he uses when discussing durability, charging, shared ownership, wet or harsh environments, device management and long shifts. Do not turn common assumptions about rugged hardware into POSPal-tested claims.

End the section with the canonical line:

> Δεν πουλάμε PDA. Δεν χρεώνουμε ανά PDA. Το κινητό της ομάδας σου μπορεί να γίνει PDA.

Then state the boundary: the device still needs a browser and access to the same reachable local network as the Windows computer.

### 5. The recognisable shift problem

**Job:** Make the abstract device decision feel operational.

**Heading:** `«Ποιος έχει το PDA;»`

**Visual:** Documentary or staged-but-honest photograph showing the shared-device situation during preparation for a shift. If staged, describe it as an illustration in the alt text or caption. Do not imply it is a customer case study.

**Copy:** Keep the useful current observation about five people, two devices and one charging. Remove the current fake dashboard treatment with giant `5` and `2` counters.

**Founder note:** A short signed comment from Robert. It should explain why POSPal does not create a per-PDA fee. It must be based on Robert's approved words, not a fabricated founder anecdote.

### 6. Follow one order to the kitchen

**Job:** Become the signature section and the strongest educational asset on the page.

**Desktop behaviour:** A restrained sticky visual sequence. Text advances through four beats while the visual changes to the corresponding real or explanatory frame.

**Mobile behaviour:** Four stacked frames. No pinning or horizontal scroll.

**Frames:**

1. `Η παραγγελία γράφεται` - real staff-device screen capture with the sample order.
2. `Η συσκευή βρίσκει τον υπολογιστή` - explanatory local-network diagram using the actual device and Windows screen as anchors.
3. `Το POSPal την παραλαμβάνει` - real Windows screenshot showing the same traceable order.
4. `Η κουζίνα τη βλέπει` - real kitchen view or authentic printed ticket when evidence exists. Until then, show only a verified product screen and label printing as a separate optional route.

The route must never imply fiscal processing. Include a quiet clarification after the sequence:

> Αυτή είναι η ροή παραγγελιοληψίας και κουζίνας. Η ταμειακή και το φορολογικό POS παραμένουν ξεχωριστά.

**Motion rationale:** The visual change communicates the movement of one order. No parallax, ticker, marquee, rotating receipt or decorative scroll cue.

### 7. What usually goes wrong

**Job:** Add practical expertise and surface useful limitations.

Use two annotated editorial plates rather than a FAQ grid:

- `Το ίδιο όνομα Wi-Fi δεν αρκεί πάντα` - explain guest isolation and reachability without claiming router compatibility.
- `Το “στάλθηκε” δεν είναι δοκιμαστική εκτύπωση` - explain why a real test print matters without naming unverified printer models.

These points are already supported narrowly by the product-fact checklist. The visuals should explain the boundary, not inflate it.

### 8. What we learned building POSPal

**Job:** Establish authorship and make the article difficult to copy.

**Layout:** Robert portrait beside a short editorial note. This is not a dramatic full-width quote.

The note should answer three questions in Robert's actual words:

1. What problem did he see with teams sharing too few dedicated devices?
2. Why does POSPal avoid charging per PDA?
3. When would he still advise an owner to use dedicated hardware?

No answer should be invented. Record or collect Robert's answers before writing this block.

### 9. Concise practical answers

**Job:** Preserve useful long-tail coverage without ending in generic SEO furniture.

Keep only questions that add information not already visible above. Candidate questions:

- `Τι σημαίνουν τα αρχικά PDA;`
- `Είναι το PDA το ίδιο με το σύστημα παραγγελιοληψίας;`
- `Χρειάζεται ειδική εφαρμογή στο κινητό;`
- `Χρειάζεται internet ή μόνο τοπικό δίκτυο;`
- `Είναι το PDA ταμειακή ή φορολογικό POS;`

Printer detail belongs in the practical edge-case section. Pricing belongs on `/times.html`.

### 10. Commercial handoff

**Job:** Advance one step in the approved funnel. Do not send the reader directly to the money page or make download the main body CTA.

**Transition copy:**

> Τώρα ξέρεις τι είναι το PDA και τι υπάρχει πίσω από τη συσκευή. Το επόμενο ερώτημα είναι πόσο κοστίζει όλο το σύστημα παραγγελιοληψίας και τι περιλαμβάνει η τιμή.

**Single main link:**

> Σύστημα παραγγελιοληψίας: τιμές, κόστος και τι περιλαμβάνεται

Destination: `/times.html`

The handoff should look like the next article in a reading sequence, not a green sales banner. The global site navigation may still expose other destinations, but the article body gets one primary next step.

## Article identity

The masthead should show:

- `Robert Airey`;
- `Ιδρυτής της POSPal`;
- a real portrait;
- `Δημοσιεύτηκε: [verified date]`;
- `Ενημερώθηκε: [verified date]`;
- estimated reading time calculated from the final article, not guessed now.

Use `Article` or `BlogPosting` structured data only after the real dates, author identity, headline and image are available. Keep FAQ schema aligned exactly with the visible final FAQ if it remains.

## Existing assets and evidence we can use

### Existing public assets

| Asset | Current path | Safe use | Limitation |
| --- | --- | --- | --- |
| Real POSPal ordering screenshot | `/static/img/pospal-desktop-order.webp` | Windows/product frame, crops and annotations | It cannot by itself prove a complete device-to-printer journey |
| PNG fallback of the same screenshot | `/static/img/pospal-desktop-order.png` | Fallback only | Larger than the WebP version |
| POSPal mark and icons | `/static/img/pospal-mark-64.png`, `/static/img/pospal-icon-96.png`, `/static/img/pospal-icon-180.png` | Masthead and metadata | Not article imagery |
| QR menu preview and code | `/static/qr-menu-live-preview.png`, `/static/qr-menu-live-code.png` | Supporting proof elsewhere | Not central to `PDA τι είναι`; do not branch the article into QR-menu education |

### Existing controlled facts

These are documented in `docs/seo/pospal-product-fact-checklist.md`:

- `FAC-DEV-001`: a staff device can reach the Windows host through the local network;
- `FAC-DEV-002`: the staff connection does not require a native mobile app;
- `FAC-NET-001`: the workflow depends on a reachable local network;
- `FAC-NET-002`: guest isolation can make the same Wi-Fi name insufficient;
- `FAC-PRN-001` to `FAC-PRN-004`: Windows-installed printer visibility, printer roles and the need for a real test print;
- `FAC-WRK-001` to `FAC-WRK-003`: the local staff-device-to-Windows workflow and ordering modes.

These support narrow explanatory copy. They do not support universal device, browser, router or printer compatibility.

### Evidence explicitly not available

`docs/seo/proof-records/PRF-2026-001.md` records that interactive installation, a live test order and authentic printer output were not executed. Do not visually imply that this proof exists.

## Asset production list

### Tier 1: required before a credible prototype

1. **Robert portrait**
   - natural light;
   - landscape and square crops;
   - no corporate crossed-arms pose;
   - minimum 1600 px on the long edge.

2. **Real staff-device screen capture**
   - exact staff ordering interface;
   - controlled demo menu;
   - same sample order used in the Windows frame;
   - capture at native phone resolution;
   - remove private data.

3. **Real Windows receipt/order frame**
   - same sample order;
   - capture at 2x where possible;
   - show enough surrounding UI to prove context;
   - do not fake it from HTML.

4. **Equipment flat-lay or tabletop photograph**
   - Windows laptop or compact PC;
   - phone or tablet;
   - router/access point represented honestly;
   - thermal printer only if it is a real device being discussed;
   - neutral venue or workbench setting.

5. **Hospitality-context hero photograph**
   - real hand and real device;
   - environmental cues from a cafe or restaurant;
   - screen readable;
   - landscape crop suitable for approximately 3:2.

### Tier 2: required for the full content moat

6. **Traceable kitchen frame**
   - the same sample order in the actual kitchen-facing state.

7. **Authentic printer ticket**
   - real paper output;
   - retained with printer setup details;
   - connected to the same sample order;
   - not published as compatibility proof beyond that exact setup.

8. **Dedicated PDA comparison photograph**
   - a real dedicated device and a real ordinary suitable phone/tablet;
   - captions based on Robert's approved practical criteria.

9. **Connection and guest-network captures**
   - actual POSPal local-link or QR connection screen;
   - optional router/admin evidence only if safe and scrubbed;
   - otherwise use a clearly marked explanatory diagram.

### Generated illustration policy

Image generation may be used for a consistent explanatory overlay system, background texture or an explicitly illustrative scene. It must not generate:

- POSPal UI;
- fake customer proof;
- fake Robert imagery;
- fake printed tickets;
- a fake named venue;
- specific hardware presented as tested.

For product UI, use real screenshots. For proof, use real photographs. For invisible concepts such as network reachability, use labelled explanatory graphics.

## Visual system

### Theme

Use one light editorial theme across the page. Preserve POSPal's green as the only expressive accent. Dark green and neutral tones provide hierarchy; amber should remain an accessibility/focus utility rather than a second decorative accent.

### Typography

- Keep the POSPal sans-serif language for navigation, labels and product annotations.
- Test a Greek-capable editorial face for article display or body text only if it improves long-form reading and can be self-hosted legally.
- Do not use giant 96-125 px H1 typography. The image and answer share the first viewport.
- Avoid decorative issue numbers, all-caps micro-labels above every section and fake magazine language.

### Shapes and containers

- Images and article plates use square or very lightly rounded edges.
- Interactive controls may retain the established 8 px POSPal radius.
- Cards are not the default article container.
- Use captions, annotations, white space and occasional rules to group information.

### Image rhythm

- First meaningful image: inside the first viewport.
- No more than roughly 900-1,100 desktop pixels of reading without a meaningful visual anchor.
- Minimum target for the finished article: five substantial visual moments, not five decorative icons.
- Use varied image scales: hero, full-width atlas, sticky sequence, comparison plate and founder portrait.

### Motion

Only the order-journey sequence may use scroll-linked behaviour. Every other section should be readable and complete when static. Respect reduced-motion preferences. On mobile, all sequences become normal document flow.

## SEO and funnel preservation

- Keep `/pda-ti-einai.html` and its self-canonical.
- Preserve `PDA τι είναι` in the title, H1 and first answer.
- Retain natural variants such as `τι είναι το PDA` and `PDA εστίαση` in useful prose, not repeated headings.
- Change Open Graph type from generic website to article only when article metadata is implemented correctly.
- Do not expose placeholder publication dates.
- Replace the current early money-page CTA with education and article navigation.
- Make `/times.html` the single primary body handoff.
- Do not turn `/pda-gia-servitoro/`, `/asyrmati-paraggeliolipsia.html` or other cluster pages into competing main branches in this version.
- Keep the fiscal-system distinction visible but proportionate.

## Prototype acceptance criteria

A prototype is not ready for review unless:

1. the first viewport contains the answer, author identity and a meaningful image;
2. it uses at least the Tier 1 asset slots, with unavailable proof visibly marked as missing rather than faked;
3. no giant type is being used to fill empty space;
4. no fake receipt, fake product UI, fake customer scene or invented date appears;
5. the same order is visually traceable through the signature sequence;
6. at least four distinct layout families are used across the article;
7. no three consecutive sections use an alternating image/text split;
8. the main body CTA goes only to `/times.html`;
9. the article reads correctly without animation and at 320 px width;
10. every public claim maps to repository evidence or is clearly presented as general explanation/opinion;
11. the current URL, primary keyword, canonical and internal funnel role remain intact;
12. the prototype feels full because of useful material, not decorative density.

## Recommended next action

Do not build another full HTML prototype yet.

First collect the five Tier 1 assets and Robert's answers to the three founder questions. Once those exist, build one content-complete prototype around the anatomy-of-one-order concept. If variation is still useful, vary only the hero treatment and the order-journey interaction. Do not generate three unrelated empty page shells.
