# UTM Governance (POSPal)

## Naming Rules
- Always lowercase values.
- Use only approved values per field.
- Never mix Greek/English in UTM values.

## Approved Values

### `utm_source`
- `google`
- `meta`
- `newsletter`
- `linkedin`
- `youtube`
- `partner`

### `utm_medium`
- `cpc`
- `paid_social`
- `email`
- `referral`
- `organic_social`

### `utm_campaign`
Format:
- `YYYYQ#_objective_audience_offer`

Example:
- `2026q1_download_owners_30daytrial`

## Optional Fields
### `utm_content`
Use for creative or placement split tests:
- `hero_cta_a`
- `pricing_card_b`
- `footer_link`

### `utm_term`
Use only for keyword-level paid search.

## Examples
- `https://www.pospal.gr/?utm_source=google&utm_medium=cpc&utm_campaign=2026q1_download_owners_30daytrial&utm_content=hero_cta_a`
- `https://www.pospal.gr/download/?utm_source=meta&utm_medium=paid_social&utm_campaign=2026q1_download_owners_30daytrial&utm_content=video1`

## QA Before Launch
- Confirm all UTM parameters are lowercase.
- Confirm campaign format follows `YYYYQ#_objective_audience_offer`.
- Confirm no spaces, no Greek characters, no duplicate parameters.
