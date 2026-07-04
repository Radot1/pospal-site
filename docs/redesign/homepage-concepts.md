# POSPal Homepage Concept Directions

*Draft for direction approval: 2026-06-19*

## The Question

What homepage structure can make POSPal feel specific, credible, and easy to adopt while keeping Windows download primary and onboarding visible?

These concepts differ in information hierarchy and primary visual device, not merely color. All obey the same product, accessibility, SEO, and CTA constraints.

## Concept A: The Order Route

**Idea:** The homepage visually follows one order from the staff device through POSPal to kitchen output. The product workflow is the page's organizing structure.

**Why it is distinct:** Instead of a generic hero followed by feature cards, the first half of the page is one continuous operational story. Real POSPal screens carry the design.

### Hero Direction

> **Παραγγελιοληψία για εστίαση, από το τραπέζι ως την κουζίνα.**  
> Το POSPal εγκαθίσταται σε Windows και ενώνει τραπέζια, απλή λειτουργία και QR μενού σε μία καθαρή ροή.  
> **€23,90/μήνα · 30 ημέρες δωρεάν · χωρίς κάρτα**

Primary CTA: `Κατέβασε για Windows`  
Secondary CTA: `Δες τον οδηγό εγκατάστασης`

### Structure

1. Hero with real staff-device and kitchen/output screens connected by a restrained route line.
2. Readiness row integrated into the workflow: Windows, supported printer, phone/tablet.
3. One order shown in three stages: entry, routing, output.
4. Modes presented as branches of the same workflow: tables, simple mode, QR menu.
5. Four-step onboarding timeline.
6. Pricing and product boundary.
7. Practical FAQ and final CTA.

### Visual Character

- Operational, energetic, and clear.
- Strong green used as the route/action color rather than a decorative gradient.
- Product screens at useful size, not tiny device mockups.
- Layout alternates between wide workflow moments and compact instructions.
- Motion, if used, follows the order route and has a reduced-motion fallback.

### Strengths

- Explains the product through evidence.
- Distinctive without inventing a new brand story.
- Supports both cold search visitors and existing PDA users.
- Makes the fiscal-POS boundary easy to place next to the workflow.

### Risk

The flow will fail if the product screens are staged poorly or if unsupported workflow details are shown. Screens and transitions must reflect real behavior.

## Concept B: The Guided Setup

**Idea:** The homepage behaves like the first page of an excellent installation manual. The visitor sees what is required, what happens after download, and how quickly confidence builds.

**Why it is distinct:** Onboarding, not features, is the main visual hierarchy. The site proves the self-managed promise before the visitor downloads.

### Hero Direction

> **Κατέβασε το POSPal. Στήσε τη ροή σου βήμα-βήμα.**  
> Παραγγελιοληψία για καφέ, εστιατόρια και εποχικές επιχειρήσεις, με ξεκάθαρες οδηγίες από τον εκτυπωτή ως την πρώτη βάρδια.  
> **30 ημέρες δωρεάν · χωρίς κάρτα και χωρίς στοιχεία**

Primary CTA: `Κατέβασε για Windows`  
Secondary CTA: `Δες τι χρειάζεσαι πριν ξεκινήσεις`

### Structure

1. Hero with a visible four-step setup rail.
2. Equipment/readiness checklist.
3. Guide 0-3 preview with concrete outcomes, not “coming soon” labels.
4. Product proof inserted at the step where each feature becomes relevant.
5. First-shift checkpoint showing the complete order test.
6. Price, cancellation, and product boundary.
7. Troubleshooting/support promise and final CTA.

### Visual Character

- Precise, calm, and instructional.
- Large step illustrations built from real screenshots and equipment photography.
- Strong typographic hierarchy inspired by high-quality equipment manuals, without terminal or developer aesthetics.
- Checkpoints and outcome states replace decorative cards.

### Strengths

- Directly addresses the largest credibility gap.
- Makes guides part of conversion.
- Particularly strong for mobile researchers and self-installing owners.
- Gives the site a useful identity competitors may not match.

### Risk

It can make POSPal feel difficult if too much setup detail appears before the product benefit. The hero still needs to explain the workflow immediately.

## Concept C: The Direct Offer

**Idea:** The homepage leads with radical commercial clarity: the complete workflow, public price, trial terms, and no-middleman model are treated as one direct offer.

**Why it is distinct:** The page resembles a confident product offer rather than a software brochure. A restrained order-ticket/receipt rhythm structures details without pretending POSPal is a cash register.

### Hero Direction

> **Όλη η παραγγελιοληψία. €23,90 τον μήνα.**
> Τραπέζια, απλή λειτουργία, ροή κουζίνας και QR μενού σε ένα πρόγραμμα για Windows. Χωρίς μεσάζοντα και χωρίς δέσμευση.  
> **30 ημέρες δωρεάν · χωρίς κάρτα**

Primary CTA: `Κατέβασε για Windows`  
Secondary CTA: `Δες ακριβώς τι περιλαμβάνει`

### Structure

1. Offer-led hero with price, included workflow, and product screen.
2. “Included / not included” comparison with the fiscal boundary.
3. One real workflow proof section.
4. Equipment and setup requirements.
5. Four-step onboarding path.
6. Cancellation, support, and FAQ.
7. Final download CTA.

### Visual Character

- Bold, compact, and commercially direct.
- Pricing and inclusion details use a ticket-like vertical rhythm, not literal fiscal receipt styling.
- Green is reserved for inclusion, progress, and primary actions.
- Less animation; stronger typography and alignment.

### Strengths

- Fastest comprehension for switchers who already understand PDA software.
- Makes price transparency and no-middleman positioning memorable.
- Works well for commercial SEO traffic.

### Risk

Leading too heavily with price can make the product feel low quality or interchangeable. Real product evidence and onboarding must appear immediately after the offer.

## Recommendation

Use **Concept A: The Order Route** as the primary direction.

It expresses what POSPal actually does and gives the redesign a specific visual idea that cannot be copied from a generic SaaS template. Borrow the visible onboarding confidence from Concept B and the concise price treatment from Concept C, but do not blend all three into an undifferentiated page.

## Shared Requirements For Any Selected Concept

- One `h1` and one dominant primary CTA.
- Real POSPal screens captured from verified product states.
- No fake customer proof, outcome metrics, or integrations.
- No stock-photo hero.
- No runtime Tailwind dependency.
- Core content visible without JavaScript.
- Greek-only public copy.
- WCAG 2.2 AA target and reduced-motion behavior.
- Existing VIP URLs and SEO metadata protected through the approved migration map.

## Prototype Gate

After a concept is approved, build three switchable throwaway homepage variants under a clearly marked prototype file or route. The variants should test layout and hierarchy using the same approved Greek content. They must not modify the production homepage or ship to the live site.
