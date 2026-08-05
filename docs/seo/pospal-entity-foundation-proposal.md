# Step 2 Proposal: POSPal Entity Foundation

Status: Approved; copy and schema draft ready for review
Parent plan: [POSPal ChatGPT and AI Discovery Work Plan](chatgpt-discovery-work-plan.md)
Evidence: [B0 AI-discovery scorecard](ai-discovery-benchmark/SCORECARD.md)
Entity record: [POSPal entity facts](pospal-entity-facts.md)
Copy and schema draft: [POSPal entity page](pospal-entity-page-draft.md)
Scope: identity, visible product facts, and supported structured data; no website changes in this proposal

## Outcome

Make public sources describe one unambiguous entity:

> **POSPal.gr — σύστημα παραγγελιοληψίας και ροής κουζίνας για καφέ και εστιατόρια στην Ελλάδα.**

This approved descriptor provides entity disambiguation. It connects the owned domain, product category, workflow, audience, and country without claiming that POSPal is a fiscal POS.

The product name remains `POSPal`. `POSPal.gr` is the approved public disambiguator, not a legal or trading-name change.

## Why this is next

The lean benchmark proved that:

- ChatGPT can retrieve `pospal.gr`; it ranked POSPal first for the no-card trial query.
- POSPal was absent from broad and workflow-specific candidate sets.
- ChatGPT repeatedly understood POSPal-compatible workflows without associating them with the POSPal name.
- No answer cited an independent source describing POSPal.

This makes a universal crawl block unlikely. The next constraint to address is consistent entity/category association supported by visible facts.

## Current state

### Already visible and verified

- Product name: `POSPal`.
- Official product domain: `https://pospal.gr/`.
- Product category: hospitality ordering and kitchen-workflow software.
- Audience: Greek cafes, restaurants, beach bars, food trucks, and seasonal venues.
- Windows installation.
- Existing phones or tablets for staff.
- Table mode, simple mode, kitchen flow, and QR menu.
- Works alongside the existing fiscal system.
- Not a fiscal POS and not a cash register.
- €23.90 monthly subscription.
- Thirty-day trial without a card or personal information.
- Direct subscription and cancellation at any time.

### Remaining implementation gaps

- A distinct public company/about page has not yet been implemented.
- No public logo URL has been approved for structured data; `logo` will be omitted initially.

### Current structured-data gap

The generic hub and pricing page expose `FAQPage` only. They do not identify:

- the POSPal software entity;
- the publishing organization;
- stable entity identifiers connecting pages;
- controlled official profiles.

## Proposed entity model

```text
POSPal publishing organization
└── publishes → POSPal software
    ├── category → hospitality ordering and kitchen workflow
    ├── operating system → Windows
    ├── official website → pospal.gr
    ├── offer → €23.90/month
    ├── trial → 30 days, no card or personal information
    └── boundary → not a fiscal POS or cash register
```

Stable identifiers:

- Organization: `https://pospal.gr/#organization`
- Website: `https://pospal.gr/#website`
- Software: `https://pospal.gr/#software`

The organization name and page facts are approved. Publish `#organization` only with the reviewed visible entity-page content.

## Recommended implementation batch

### 1. Approve the identity facts

Create one internal entity record containing:

| Field | Proposed or required value | Status |
| --- | --- | --- |
| Product name | `POSPal` | Verified |
| Public disambiguator | `POSPal.gr` | User-approved |
| Canonical descriptor | `POSPal.gr — σύστημα παραγγελιοληψίας και ροής κουζίνας για καφέ και εστιατόρια στην Ελλάδα` | User-approved |
| Official URL | `https://pospal.gr/` | Verified |
| Business form | `Ατομική επιχείρηση` | User-confirmed |
| Distinctive title | `POSPal` | User-confirmed |
| Founder/owner | `Robert Airey` in Latin characters | User-confirmed |
| Location | `Mytilini, Lesvos, Greece` | User-confirmed |
| Public support details | `support@pospal.gr`; no public telephone | User-confirmed |
| Launch date | May 2025 | User-confirmed |
| Official profiles | Instagram `@pospalsoftware`, YouTube `@pospal_gr`, and technical GitHub account `Radot1`; no Facebook or LinkedIn | Verified and user-confirmed |
| Price | €23.90/month including VAT | User-confirmed |

### 2. Draft one distinct public entity page

Approved URL: `/sxetika-me-to-pospal/`

The page has a trust/entity job, not another keyword-targeting job. It should contain only approved facts:

1. What POSPal is.
2. Who publishes and supports it.
3. Who it is built for.
4. What it does and does not do.
5. Where the team operates.
6. Current support channels.
7. Official profiles and product links.
8. Last-reviewed date.
9. Primary CTA to download; secondary CTA to installation guides.

Do not publish an empty biography, generic startup story, fake address, unsupported support hours, or unverified founding claim.

### 3. Define the supported schema graph

After the visible facts exist:

- New entity page: `Organization` plus `SoftwareApplication` in one `@graph`.
- Existing generic hub: retain `FAQPage`; add the same `SoftwareApplication` `@id` with page-supported product facts.
- Pricing page: retain `FAQPage`; connect the same software `@id` to the visible €23.90 offer.
- `WebSite`: add only where implementation does not conflict with the permanent homepage lock and the canonical site identity is supported.

Minimum safe `SoftwareApplication` properties already supported by visible content:

```json
{
  "@type": "SoftwareApplication",
  "@id": "https://pospal.gr/#software",
  "name": "POSPal",
  "alternateName": "POSPal.gr",
  "url": "https://pospal.gr/",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Λογισμικό παραγγελιοληψίας και ροής κουζίνας για εστίαση",
  "operatingSystem": "Windows",
  "inLanguage": "el",
  "description": "Σύστημα παραγγελιοληψίας και ροής κουζίνας για καφέ και εστιατόρια στην Ελλάδα. Λειτουργεί δίπλα στο υπάρχον φορολογικό σύστημα.",
  "offers": {
    "@type": "Offer",
    "url": "https://pospal.gr/times.html",
    "price": "23.90",
    "priceCurrency": "EUR"
  }
}
```

This is a specification, not deployed markup. The final graph must be validated against the exact visible page and current schema guidelines before implementation.

### 4. Connect controlled sources

Use `sameAs` only for real profiles controlled by the POSPal publisher. Candidate source types:

- official LinkedIn page;
- official YouTube channel;
- official Facebook or Instagram profile;
- official GitHub organization or product repository when intended as public identity;
- verified software-directory profile.

Do not use customer pages, press articles, unrelated GitHub accounts, or the international POSPAL product as `sameAs`.

## Explicit exclusions

- No `aggregateRating` or `review` until genuine public reviews exist.
- No customer counts, transaction counts, uptime, setup time, or outcomes without reproducible evidence.
- No `LocalBusiness` unless POSPal operates a real public-facing local business location that the visible page documents.
- No claims of myDATA, fiscal receipt, cash-register, or compliance functionality.
- No `sameAs` placeholders.
- No change to the locked homepage, download page, or guides page.
- No new generic ordering-system URL.

## Validation

Before release:

- [ ] Every schema property is visible or directly supported by the page.
- [ ] The product name, descriptor, price, operating system, and product boundary are consistent across all changed pages.
- [ ] All `@id` values are reused exactly.
- [ ] Existing FAQ markup remains consistent with visible questions and answers.
- [ ] JSON-LD parses in the Schema.org validator.
- [ ] Applicable markup passes Google's Rich Results Test without errors.
- [ ] No rating, review, organization, location, or profile is invented.
- [ ] Download remains primary and guides remain secondary.
- [ ] Public copy remains natural Greek.

## Exit criteria

- One approved canonical descriptor exists.
- The publisher and official-profile facts are documented.
- One public entity page is ready for implementation or explicitly deferred for missing facts.
- The same `#software` identity can be reused on the generic hub and pricing page.
- Structured data matches visible content and introduces no unsupported claims.

## Inputs required from the user

None for the entity foundation. Website implementation still requires explicit approval after review of the copy and schema draft.

## Skill decisions

- `product-marketing`: kept the identity category-first, audience-specific, and explicit about the fiscal boundary.
- `schema`: restricted the graph to visible, verified facts and prevented ratings, local-business claims, or organization properties from being invented.
