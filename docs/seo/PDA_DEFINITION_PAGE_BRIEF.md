# PDA Definition Page Refocus Brief

Status: Draft for review — no live-page edits made  
Target page: `/pda-ti-einai.html`  
Page role: Informational ranking page and owner-qualification feeder  
Last updated: 2026-08-29

## Decision

Keep the URL, title topic, H1 topic, concise definition, canonical, and FAQ foundation. Do not redirect, noindex, or turn this page into a commercial landing page.

The page should answer `PDA τι είναι` immediately and then help the visitor choose one of two paths:

1. continue learning what a PDA means in hospitality;
2. move to the commercial POSPal path if they actually own a venue and are choosing software.

The page's first in-content CTA should point to `/systima-paraggeliolipsias.html`. A direct Windows download remains available later for visitors who qualify themselves.

## Evidence

### Measured — Search Console, 2026-05-27 to 2026-08-26

- 74 clicks;
- 5,143 impressions;
- 1.44% CTR;
- average position 5.9.

Visible queries include:

- `pda τι ειναι`: 5 clicks and 1,321 impressions;
- `pda`: 5 clicks and 1,043 impressions;
- `τι ειναι το pda`: 2 clicks and 137 impressions;
- `pda σερβιτορου`: 15 clicks and 260 impressions;
- `pda εστιαση`: 6 clicks and 368 impressions.

The page ranks successfully for definitions, but it is also absorbing commercial/use-case searches that should partly move to `/pda-gia-servitoro/`.

### Measured — current repository HTML

- title: 52 characters;
- meta description: 156 characters;
- main content: approximately 454 words;
- one H1, five H2s, six H3s;
- seven in-content links;
- one real product image;
- self-referencing canonical and FAQ schema present.

## Search ownership

### Primary target

`PDA τι είναι στην εστίαση`

### Secondary targets

- `τι είναι το PDA`;
- `PDA στην εστίαση`;
- `τι σημαίνει PDA`;
- `χρήση PDA στην εστίαση`.

### Terms to mention but hand off

- `PDA σερβιτόρου` → `/pda-gia-servitoro/`;
- `PDA πώς λειτουργεί` → `/pda-pos-leitourgei.html`;
- `σύστημα παραγγελιοληψίας` → `/systima-paraggeliolipsias.html`.

This page should no longer try to satisfy the complete commercial intent behind those terms.

## Current on-page audit

| Element | Score | Finding |
| --- | ---: | --- |
| Title | 9/10 | Correct intent, primary phrase at the beginning, and valid 52-character length. Preserve initially. |
| Meta description | 8/10 | Valid 156-character length and accurate, but it blends the definition with a detailed POSPal setup explanation. |
| H1 and headings | 8/10 | One exact-intent H1 and valid hierarchy. Later sections drift into the waiter, setup, and commercial page roles. |
| Content structure | 7/10 | The definition is delivered quickly, but the download and guide CTAs arrive before the visitor has shown product intent. |
| Keyword alignment | 8/10 | Strong for `PDA τι είναι`; too much shared language with the waiter and how-it-works pages. |
| Internal links | 8/10 | Relevant destinations exist. The commercial handoff needs stronger context and clearer hierarchy. |
| Images | 8/10 | One real product image with useful alt text. It supports the hospitality explanation. |
| Canonical and schema | 9/10 | Canonical and synchronized FAQ markup are present. Preserve and update FAQ only with visible-copy changes. |
| Trust and evidence | 6/10 | Accurate and transparent, but it relies entirely on first-party explanation and product imagery. |

Overall structural on-page score: **7.9/10**.  
Current informational-to-commercial transition score: **4.5/10**.

## Ranking-preservation rules

1. Keep `/pda-ti-einai.html` unchanged as the URL.
2. Keep the self-referencing canonical.
3. Keep one H1 containing `PDA τι είναι`.
4. Keep the direct definition in the first paragraph.
5. Keep the visible definition FAQ and corresponding FAQ schema.
6. Retain natural references to `PDA στην εστίαση`, `σερβιτόρος`, `κινητό` and `tablet`.
7. Preserve the real POSPal screenshot and descriptive alt text.
8. Do not replace the page with thin commercial copy.
9. Do not remove all references to POSPal; change their order and role.
10. Do not change the URL or consolidate it with `pda-pos-leitourgei.html` in this phase.

## Recommended metadata

### Title

Keep initially:

> PDA τι είναι: έννοια και χρήση στην εστίαση | POSPal

The title already matches the ranking intent and is not the main problem.

### Meta description

Recommended:

> PDA τι είναι στην εστίαση; Δες τι σημαίνει, ποια συσκευή χρησιμοποιεί ο σερβιτόρος, αν μπορεί να είναι κινητό ή tablet και πώς συνδέεται με την παραγγελιοληψία.

Length: 160 characters.

### H1

Keep:

> PDA τι είναι στην εστίαση

## Recommended page argument

### 1. Definition hero

**Signal**

> PDA στην εστίαση

**H1**

> PDA τι είναι στην εστίαση

**Definition lead**

> Στην εστίαση, PDA λέμε τη φορητή συσκευή που χρησιμοποιεί ο σερβιτόρος για να περνά παραγγελίες. Μπορεί να είναι ειδική συσκευή, κινητό ή tablet. Το PDA είναι το σημείο όπου ξεκινά η παραγγελία· δεν είναι από μόνο του ταμειακή ή ολόκληρο σύστημα παραγγελιοληψίας.

Do not place the guide CTA beside the first definition. The persistent header download may remain, but the first main-content action should match the visitor's current question.

### 2. Owner qualification fork

Place this immediately after the definition:

**H2**

> Ψάχνεις τον ορισμό ή πρόγραμμα για το κατάστημά σου;

**Path A — informational**

> Θέλω να καταλάβω πώς λειτουργεί το PDA.

Link: `/pda-pos-leitourgei.html`

**Path B — commercial**

> Έχω κατάστημα και ψάχνω σύστημα παραγγελιοληψίας.

Link: `/systima-paraggeliolipsias.html`

Path B should be visually stronger because it identifies the commercially relevant visitor without forcing a download too early.

### 3. What a PDA does — and what it does not do

**H2**

> Το PDA ξεκινά την παραγγελία. Το σύστημα κρατά όλη τη ροή.

Explain three distinct concepts:

| Concept | Plain-language explanation |
| --- | --- |
| PDA / staff device | The device used by the waiter to enter the order |
| Ordering system | The software that receives, organizes, and continues the order workflow |
| Fiscal POS / cash register | A separate fiscal layer that POSPal does not replace |

This distinction answers the informational question while preventing the visitor from assuming that PDA, ordering system, and fiscal POS are the same product.

### 4. PDA waiter handoff

**H2**

> Θέλεις PDA σερβιτόρου χωρίς να αγοράσεις ειδική συσκευή;

**Body direction**

> Με το POSPal ο σερβιτόρος μπορεί να ανοίξει την παραγγελιοληψία από κινητό ή tablet στο προσβάσιμο τοπικό δίκτυο του καταστήματος. Δες τι χρειάζεται και πώς συνεχίζει η παραγγελία στον υπολογιστή Windows.

**CTA**

> Δες το PDA σερβιτόρου

Link: `/pda-gia-servitoro/`

This section transfers the commercially useful query to the page intended to own it.

### 5. Short POSPal explanation

Keep the product explanation compact:

> Το POSPal εγκαθίσταται σε υπολογιστή Windows και συνδέει την παραγγελιοληψία από κινητά ή tablet με τη ροή κουζίνας. Περιλαμβάνει λειτουργία τραπεζιών, απλή λειτουργία και QR μενού. Δεν είναι φορολογικό POS ή ταμειακή.

Do not repeat the full setup ledger, printer routing, every venue type, and the complete three-step product route here. Those belong to the commercial and how-it-works pages.

### 6. FAQ

Recommended visible questions:

1. `Τι σημαίνουν τα αρχικά PDA;`
2. `Τι είναι το PDA στην εστίαση;`
3. `Χρειάζεται ειδική συσκευή PDA;`
4. `Ποια είναι η διαφορά ανάμεσα στο PDA και το σύστημα παραγγελιοληψίας;`
5. `Το PDA είναι ταμειακή ή φορολογικό POS;`
6. `Πώς λειτουργεί το PDA σερβιτόρου με το POSPal;`

The FAQ should support the definition intent, not become another complete setup page.

### 7. Final qualification CTA

**H2**

> Αν ψάχνεις πρόγραμμα και όχι μόνο τον ορισμό, δες το POSPal.

**Primary CTA**

> Δες το σύστημα παραγγελιοληψίας

Link: `/systima-paraggeliolipsias.html`

**Secondary CTA**

> Κατέβασε για Windows

Link: `/download/`

At this point the visitor has received the answer and has enough context to choose the trial directly.

## What to keep, reduce, and move

### Keep

- current URL, title, H1, canonical, and first-answer intent;
- the real product screenshot;
- definition and no-special-device FAQs;
- a short POSPal explanation;
- honest fiscal boundary.

### Reduce

- the full three-step POSPal route;
- detailed setup requirements;
- repeated `Windows`, local-network, and printer explanations;
- equal emphasis on download and guides above the fold.

### Move to other pages

- detailed waiter workflow → `/pda-gia-servitoro/`;
- full three-step operation → `/pda-pos-leitourgei.html`;
- complete product and trial decision → `/systima-paraggeliolipsias.html`;
- detailed local-network behavior → `/asyrmati-paraggeliolipsia.html`.

## CTA map

| Placement | Wording | Destination | Purpose |
| --- | --- | --- | --- |
| Header | `Κατέβασε για Windows` | `/download/` | Persistent access for ready visitors |
| After definition | `Έχω κατάστημα και ψάχνω σύστημα παραγγελιοληψίας` | System page | Qualify owner intent |
| After definition | `Θέλω να καταλάβω πώς λειτουργεί το PDA` | How-it-works page | Continue education |
| Waiter handoff | `Δες το PDA σερβιτόρου` | Waiter page | Transfer commercial PDA intent |
| Final primary | `Δες το σύστημα παραγγελιοληψίας` | System page | Main feeder conversion |
| Final secondary | `Κατέβασε για Windows` | Download page | Direct path for qualified visitor |

## Implementation acceptance criteria

- The first paragraph still answers `PDA τι είναι` without requiring a scroll.
- The H1, URL, canonical, and definition topic remain intact.
- The first main-content CTA no longer asks an unqualified visitor to open setup guides.
- `/pda-gia-servitoro/` receives a prominent contextual `PDA σερβιτόρου` link.
- The system page receives the main owner-qualified handoff.
- FAQ schema exactly matches visible FAQ answers.
- No direct link points to `POSPal.exe`.
- Public copy remains natural monotonic Greek.

## Approval gate

After this brief is approved, produce the complete Greek copy draft in Markdown. Do not edit `pda-ti-einai.html` until that copy is approved.
