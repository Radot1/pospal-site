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
2. Commit and push to `main`.
3. GitHub Pages automatically redeploys (Settings > Pages > `main` branch / root).

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
