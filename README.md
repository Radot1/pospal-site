# POSPal Website (GitHub Pages)

This repository hosts the public marketing site that lives at **https://pospal.gr**. It contains only static assets:

- `index.html` - landing page served by GitHub Pages
- `download/` - download/start-trial flow
- `guides/` - setup and usage guides
- SEO landing pages for Greek hospitality search intent
- `app_icon.ico` - favicon referenced by the page hero
- `_redirects` - kept for parity with the Cloudflare Pages build (ignored by GitHub Pages but harmless)
- `CNAME` - points GitHub Pages to `pospal.gr`

The current marketing goal is download-first. Demo content, where present, is only supporting proof and should not become the primary funnel.

## Updating the Site

1. Edit `index.html` or the relevant static page/asset locally.
2. The current **Deploy static content to Pages** workflow deploys pushes to `main` and supports manual runs. It does not invoke the legal release checker. Treat a push to `main` as publication.
3. Legal Issue #3 is satisfied: the owner approved the Greek and English documents with revision/effective date `2026-10-01`. Validate this separately with `node .github/scripts/verify-production-release.mjs --documents-only` and run the existing browser check against a local server.
4. Document approval is not paid-launch approval. The top-level `legal-release-status.json` remains blocked; its separate `document_approval` entry records Issue #3. The overall checker still requires `CONFIRM_PUBLISH=PUBLISH`, approved release metadata and zero blockers. Its legacy count of 13 is not an itemized current checklist; unresolved issue groups are recorded separately. Do not interpret the document-only check as permission to enable paid sales or as a successful overall release check.

## Custom Domain Setup

1. In this repo, keep the `CNAME` file with `pospal.gr`.
2. Under the domain DNS, create the usual GitHub Pages records:
   - `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional `AAAA` records for IPv6 (GitHub recommendations)
   - `CNAME` record from `www` to `<user>.github.io` if you want `www.pospal.gr`
3. Enable HTTPS in the repository Pages settings once DNS propagates.

## Linking to Downloads

Marketing CTAs should point users to the site download flow:

```text
https://pospal.gr/download/
```

The download page should use the public installer URL:

```text
https://github.com/Radot1/pospal-artifacts/releases/latest/download/POSPal-win-Setup.exe
```

Do not link directly to `POSPal.exe`.
