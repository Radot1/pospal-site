# POSPal Entity Facts

Status: Complete; entity facts and page URL approved
Last reviewed: 2026-08-05
Related proposal: [POSPal entity foundation](pospal-entity-foundation-proposal.md)
Page draft: [POSPal entity page](pospal-entity-page-draft.md)

## Verified public facts

| Field | Value | Evidence | Use |
| --- | --- | --- | --- |
| Product name | `POSPal` | Consistent across `pospal.gr` and product repositories | `SoftwareApplication.name` |
| Official product URL | `https://pospal.gr/` | Live public site and repository `CNAME` | Canonical product URL |
| Public support email | `support@pospal.gr` | Published on the homepage, download page, and guides | Visible entity page and `contactPoint` after organization approval |
| Official Instagram | `https://www.instagram.com/pospalsoftware/` (`@pospalsoftware`) | User-confirmed; also linked by earlier public versions of the POSPal site in repository history | Candidate `sameAs` |
| Official YouTube channel | `https://www.youtube.com/@pospal_gr` | Publisher of the videos embedded by the POSPal guides | Candidate `sameAs` |
| Official technical GitHub account | `https://github.com/Radot1` | Owns `pospal-site` and `pospal-artifacts`, which supply the site and installer | Candidate technical profile; do not label as legal publisher |
| Public repository start | 2025-12-08/09 | Repositories created 2025-12-08; first site commit 2025-12-09 | Historical evidence only; not yet accepted as product launch date |
| Product category | Hospitality ordering and kitchen-workflow software | Visible across the site and product context | Entity descriptor and application category |
| Operating system | Windows | Visible on homepage, download, pricing, and generic hub | `operatingSystem` |
| Price | €23.90/month after trial, including VAT | Visible on homepage and pricing page; VAT treatment confirmed by the owner on 2026-08-05 | `Offer` and visible pricing copy |
| Trial | 30 days; no card or personal information | Visible on homepage and pricing page | Visible offer/trial copy |
| Fiscal boundary | Not a fiscal POS or cash register | Visible across acquisition and conversion pages | Entity description and FAQ |

## User-confirmed publisher facts

| Field | Value | Evidence status | Use |
| --- | --- | --- | --- |
| Business form | `Ατομική επιχείρηση` | Confirmed by the owner on 2026-08-05 | Visible publisher description |
| Legal publisher name | `ΡΟΜΠΕΡΤΟΣ ΖΟΥΜΠΟΥΛΗΣ ΕΡΗ` | Confirmed by the owner on 2026-08-05 | `Organization.legalName` after public-display approval |
| Distinctive title | `POSPal` | Confirmed by the owner on 2026-08-05 | Public organization/trading name |
| Public founder/owner name | `Robert Airey` | Confirmed by the owner on 2026-08-05; retain Latin characters | Visible entity-page attribution and founder/owner identity |
| Public business location | `Mytilini, Lesvos, Greece` | Confirmed by the owner on 2026-08-05 | Visible publisher location; use natural Greek spelling in Greek public copy |
| Public telephone | None | Confirmed by the owner on 2026-08-05 | Do not publish a telephone number; use `support@pospal.gr` as the public contact channel |
| Product launch | May 2025 | Confirmed by the owner on 2026-08-05 | Visible product history and structured data where appropriate |
| VAT treatment | €23.90/month includes VAT | Confirmed by the owner on 2026-08-05 | Pricing footnote and offer clarification |
| Public disambiguator | `POSPal.gr` | Approved by the owner on 2026-08-05 | Distinguishes the Greek product from unrelated POSPal entities |
| Canonical descriptor | `POSPal.gr — σύστημα παραγγελιοληψίας και ροής κουζίνας για καφέ και εστιατόρια στην Ελλάδα` | Approved by the owner on 2026-08-05 | Consistent visible entity and category description |
| Entity-page URL | `/sxetika-me-to-pospal/` | Approved by the owner on 2026-08-05 | Canonical public entity/about page |

## Remaining implementation detail

No additional user-supplied identity fact is required for the first entity-page draft. A suitable public logo URL has not been approved, so the initial structured-data draft omits `logo` rather than inferring one.

## Evidence rules

- Repository commit email addresses are not treated as public support or publisher identity.
- The unrelated international POSPAL LinkedIn/company profiles are explicitly excluded.
- GitHub creation dates do not become a launch claim without confirmation.
- A future telephone number, company name, or VAT statement will not be inferred.
- `sameAs` will include only profiles confirmed as controlled by the POSPal publisher.

## Confirmation log

| Order | Question | Answer | Status |
| ---: | --- | --- | --- |
| 1 | Legal publisher/company name | `Ατομική επιχείρηση`, legal publisher `ΡΟΜΠΕΡΤΟΣ ΖΟΥΜΠΟΥΛΗΣ ΕΡΗ`, distinctive title `POSPal` | Confirmed |
| 2 | Public founder/owner display name | `Robert Airey`, always in Latin characters | Confirmed |
| 3 | Public business city and country | `Mytilini, Lesvos, Greece` | Confirmed |
| 4 | Public telephone | No public phone | Confirmed |
| 5 | Approximate product launch date | May 2025 | Confirmed |
| 6 | Other official social profiles | Instagram `@pospalsoftware`; no Facebook or LinkedIn | Confirmed |
| 7 | VAT treatment of €23.90 price | Includes VAT | Confirmed |
| 8 | Canonical public descriptor | `POSPal.gr — σύστημα παραγγελιοληψίας και ροής κουζίνας για καφέ και εστιατόρια στην Ελλάδα` | Confirmed |
| 9 | Public entity-page URL | `/sxetika-me-to-pospal/` | Confirmed |
