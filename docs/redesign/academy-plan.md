# POSPal Academy Plan

*Working plan confirmed through `grill-with-docs`: 2026-06-23*

## Purpose

Build a confidence-first customer education system at `/guides/`. The public navigation remains `Οδηγοί`; internally the system is the POSPal Academy.

The Academy should make customers feel that learning POSPal is worth their time. It is broader than installation, but the Start Here path stays visibly first.

## Skill Sequence

1. `grill-with-docs`: lock terminology, scope, launch gate, and documentation decisions.
2. `cro`: shape the Academy as a conversion path that reduces hesitation after homepage interest.
3. `frontend-design`: design the `/guides/` hub and lesson page templates.
4. `accessibility`: verify video-led lessons, controls, focus, mobile layout, and fallback content.
5. `web-design-guidelines`: review the UI code for semantic HTML, focus, target size, motion, image, and interaction rules.
6. `impeccable`: final UI polish and responsive QA before promotion.
7. `technical-seo-checker`: verify sitemap, canonicals, redirects, indexing, and legacy guide URLs.

## Decisions

- Canonical hub URL: `/guides/`.
- `/guides/` opens directly into the classroom lesson environment with the first available Start Here lesson selected by default.
- Public nav label: `Οδηγοί`.
- Internal system name: Academy.
- Lesson format: video-led.
- Progress model: lightweight local progress, not an LMS.
- Completion model: the customer manually marks a lesson complete.
- Completion is stored in `localStorage` only; no account, login, server progress, unlocks, or video watch-time inference.
- Hard boundary: never include quizzes, forums, comments, discussions, certificates, scores, or social learning features.
- Lesson URLs: one stable public URL per lesson.
- Every lesson URL renders the same classroom environment with that lesson selected.
- Launch gate: complete the Start Here path; broader modules can show planned lessons as `Σύντομα`.
- First production scope: publish only Start Here lessons as real lessons; keep broader modules visible but upcoming.
- Sidebar outline: show all broader Academy modules from day one, collapsed and clearly marked `Σύντομα` until real lessons exist.
- Selected interface direction: classroom lesson environment, based on `prototype/academy-odoo-lab/?variant=classroom`.
- Superseded direction: the earlier `prototype/academy-v1/` card-style hub is no longer the promotion target.

## CRO Role

The Academy is the confidence layer behind the homepage and download page. It should convert interest into learning momentum, not replace the download CTA.

Primary conversion goal:

- Get a qualified visitor to download POSPal for Windows.

Secondary conversion goals:

- Start the first Academy lesson.
- Complete the Start Here path.
- Return to the download flow from a relevant lesson.
- Use support only after seeing the relevant setup material.

Primary traffic sources:

- Homepage visitors who need setup confidence before downloading.
- Download-page visitors who need their next step after the installer.
- Pricing visitors checking whether self-setup is realistic.
- Organic visitors landing on PDA/order-taking pages who are not ready to download immediately.
- Mobile researchers who cannot use the Windows installer on the current device.

## CRO Requirements

### Course Entry

The `/guides/` course-player entry must answer three questions within the first screen:

1. What can I learn here?
2. Where do I start?
3. How much effort is this going to take?

Required first-screen elements:

- A selected first Start Here lesson.
- A visible curriculum outline with available and planned lessons.
- A large video lesson area.
- A manual completion action and a next lesson action.
- A secondary download action that stays subordinate to learning progress.

The entry should not look like a blog archive, marketing landing page, or card grid. It should feel like a practical course environment for an operator preparing a venue.

The sidebar should communicate the full Academy shape from day one. Start Here is open and actionable; broader modules are collapsed and marked `Σύντομα`.

### Start Here Path

The Start Here path is the main conversion bridge between homepage interest and product adoption.

It should reduce these objections:

- "Will this work with my equipment?"
- "Can I install this myself?"
- "What happens after I download?"
- "Can I test it before using it in a real shift?"

Each Start Here lesson should end with one next action. Avoid multiple competing CTAs inside the lesson body.

### Lesson Pages

Each lesson page should have one job: get the customer to watch, do the related action, and continue.

Required conversion mechanics:

- Module context and lesson position.
- Video player or clearly labelled upcoming state.
- Short "you will learn" statement.
- Manual completion button.
- Previous/next lesson controls.
- Contextual support link only where setup risk exists.
- Download CTA only when the lesson logically precedes installation or first use.

Do not place pricing, upsells, testimonials, broad marketing sections, long article text, or supporting companion panels inside lessons.

Never add quizzes, forums, comments, discussions, certificates, scores, or social learning features. The Academy is a guided video-learning and setup-confidence surface, not a learning management system or community product.

### CTA Hierarchy

CTA priority by context:

- Homepage: primary download, secondary guides.
- Download page: primary installer click, secondary Start Here.
- Guides hub: primary start first lesson, secondary download.
- Start Here lessons before installation: primary continue lesson path, secondary download when relevant.
- Operational lessons after installation: primary next lesson or mark complete, secondary support where relevant.
- Classroom top bar may always include `Κατέβασε για Windows`, but the lesson body should prioritize completion and next lesson.
- `/guides/windows-installation/` may make download more prominent because the installer is part of the lesson task.
- Do not turn every lesson into a download pitch.

### Trust and Objection Handling

Because POSPal has no testimonials or logos yet, the Academy earns trust through:

- complete lesson structure;
- real product videos or screenshots;
- exact next steps;
- visible progress;
- clear support escalation;
- honest product boundaries;
- no fake social proof.

The fiscal POS boundary should appear in the owner/admin module and wherever setup/pricing questions could confuse POSPal with a cash register.

## Measurement

Track real actions, not inferred intent:

- `academy_start`: first Start Here lesson opened from the hub.
- `lesson_start`: lesson page opened or first meaningful player interaction.
- `lesson_complete`: manual completion click.
- `lesson_next_click`: next lesson link click.
- `academy_download_click`: download CTA clicked from hub or lesson page.
- `academy_support_click`: support link clicked from a lesson page.

Do not infer lesson completion from video watch time in the first version.

Completion is a confidence cue, not a gate. If JavaScript is unavailable or `localStorage` fails, every lesson remains usable; only saved progress is unavailable.

## Copy Direction

Hub headline should emphasize guided confidence, not documentation volume.

Candidate directions for later Greek copy:

- Μάθε το στήσιμο πριν την πρώτη βάρδια.
- Ξεκίνα με τα απαραίτητα και μετά μάθε την καθημερινή ροή.
- Βίντεο για εγκατάσταση, δοκιμή και καθημερινή χρήση του POSPal.

The final public copy must be natural monotonic Greek.

## Academy Modules

### 1. Ξεκίνα εδώ

Required for launch:

- What you need before installing.
- Install POSPal on Windows.
- Connect the first staff phone or tablet.
- Run the first test order.

Production launch URLs:

- `/guides/` defaults to the first available Start Here lesson.
- `/guides/printer-setup/`
- `/guides/windows-installation/`
- `/guides/connect-staff-devices/`
- `/guides/test-order/`

### 2. Κατάλογος και προϊόντα

- Categories.
- Products.
- Prices.
- Simple changes before a shift.

### 3. QR μενού

- QR menu appearance.
- Mobile check.
- Publishing or sharing the QR.
- Common QR mistakes.

### 4. Παραγγελιοληψία στη βάρδια

- Table mode.
- Simple mode.
- Waiter phone or tablet use.
- Kitchen workflow.

### 5. Εξοπλισμός και σύνδεση

- Windows computer.
- Local network.
- Thermal printer.
- Staff devices.

### 6. Λογαριασμός και υποστήριξη

- Subscription.
- Cancellation.
- What to send to support.
- What POSPal is not.

## Prototype Delivered

The selected prototype direction lives in `prototype/academy-odoo-lab/`.

- Winning variant: `?variant=classroom`.
- Shape: Odoo-inspired course/player environment with top course bar, left lesson outline, main video lesson, manual completion, and next action.
- Desktop proof: `docs/redesign/captures/academy-odoo-classroom-localhost-1440.png`.
- Mobile proof: `docs/redesign/captures/academy-odoo-classroom-390-cdp.png`.
- The prototype is intentionally `noindex, nofollow`.
- Completion is manual and stored in `localStorage`.
- Public copy is Greek; internal notes remain English.

`prototype/academy-v1/` is retained only as earlier prototype evidence. It should not be promoted into production unless the design decision is reopened.

## Technical SEO Launch Gate

Keep the prototype out of the production sitemap until promotion. When promoted:

- Promote `/guides/` as the only hub URL; do not create `/academy/`.
- Treat `/guides/` as the course-player entry point, not a separate course landing page.
- Use clean lesson URLs such as `/guides/printer-setup/` and `/guides/windows-installation/`.
- Keep the classroom shell consistent between `/guides/` and lesson URLs; only the selected lesson, title, video, completion state, and prev/next links change.
- Replace existing `?lesson=` internal links with stable lesson URLs.
- Add self-canonical tags on the hub and every published lesson.
- Add only indexable production lesson URLs to `sitemap.xml`.
- Keep prototype and unfinished lessons `noindex` or out of production.
- Do not create indexable URLs for broader modules until the lessons are real.
- Convert legacy guide redirects to one-hop destinations where hosting allows it.
- Use `VideoObject` schema only when the visible video facts are real and stable.
- Keep the download CTA pointed at `/download/`, not directly at `POSPal.exe`.

Measured on 2026-06-23: live `robots.txt` allows crawling and declares `https://pospal.gr/sitemap.xml`; live `sitemap.xml` includes `/guides/` but not lesson URLs. GitHub Pages serves HTTPS with HSTS. Current production guide links still use `/guides/index.html?lesson=...`, which should be replaced during Academy promotion.
