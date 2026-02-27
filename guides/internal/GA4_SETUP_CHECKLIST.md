# GA4 Setup Checklist (POSPal)

## Property
- Property: POSPal
- Stream URL: `https://www.pospal.gr`
- Measurement ID: `G-F851JG8PL6`
- KPI priority: download-first

## Key Events
Mark these as Key events in GA4:
- `trial_start_click` (primary)
- `download_click` (primary)
- `demo_click` (secondary)

## Custom Dimensions (Event Scope)
Create these event-scoped custom dimensions in GA4:
- `cta_variant`
- `cta_text`
- `cta_href`
- `cta_id`
- `cta_classes`
- `section_id`
- `section_heading`
- `faq_id`
- `faq_question`
- `event_version`
- `page_type`

## Traffic Quality
- Create Internal traffic rule(s) for office/dev IPs.
- Enable Developer traffic where needed for QA sessions.
- Keep Enhanced measurement enabled.

## Referrals
- Review referral reports weekly for self-referrals.
- Add unwanted referrals only when noise is confirmed.

## Saved Explorations
Create and save these explorations:

1. Funnel (core conversion path)
- Steps:
  - `session_start`
  - `pricing_view`
  - `trial_start_click`
  - `download_click`

2. CTA Performance
- Dimensions:
  - `Page path + query string`
  - `cta_variant`
  - `cta_text`
- Metrics:
  - Event count
  - Total users
  - Key event rate

3. Landing Performance
- Dimensions:
  - Landing page + query string
  - Session source / medium
- Metrics:
  - `trial_start_click` events
  - `download_click` events
  - Session conversion rate

## Custom Insights
Create custom insights for:
- `trial_start_click` drop > 20% week-over-week
- `download_click` drop > 20% week-over-week
- `download_click` equals 0 for 6 hours

## Post-Deploy QA
- Validate in Realtime and DebugView:
  - `demo_click`
  - `download_click`
  - `trial_start_click`
  - `pricing_view`
  - `faq_expand`
- Validate desktop `/download/` autostart event:
  - `installer_autostart`
