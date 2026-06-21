# GA4 Setup Checklist (POSPal)

## Property
- Property: POSPal
- Stream URL: `https://www.pospal.gr`
- Measurement ID: `G-F851JG8PL6`
- KPI priority: download-first, guides second
- Demo interactions are proof/context only, not a conversion KPI.

## Key Events
Mark these as Key events in GA4:
- `trial_start_click` (primary)
- `download_click` (primary)
- `guide_journey_start` (secondary, if guide-entry tracking is active)

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
- `guide_journey_start` drop > 20% week-over-week, if marked as a key event

## Post-Deploy QA
- Validate in Realtime and DebugView:
  - `download_click`
  - `trial_start_click`
  - `guide_journey_start`, where present
  - `pricing_view`
  - `faq_expand`
- Optional proof/context event only:
  - `demo_click`
- Validate desktop `/download/` autostart event:
  - `installer_autostart`
