# POSPal Website (GitHub Pages)

This repository hosts the public marketing site that lives at **https://pospal.gr**. It contains only static assets:

- `index.html` – landing page served by GitHub Pages
- `app_icon.ico` – favicon referenced by the page hero
- `_redirects` – kept for parity with the Cloudflare Pages build (ignored by GitHub Pages but harmless)
- `CNAME` – points GitHub Pages to `pospal.gr`

## Updating the Site

1. Edit `index.html` (or add additional static assets) locally.
2. Commit and push to `main`.
3. GitHub Pages automatically redeploys (Settings ? Pages ? `main` branch / root).

## Custom Domain Setup

1. In this repo, keep the `CNAME` file with `pospal.gr`.
2. Under the domain’s DNS, create the usual GitHub Pages records:
   - `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional `AAAA` records for IPv6 (GitHub recommendations)
   - `CNAME` record from `www` to `<user>.github.io` if you want `www.pospal.gr`
3. Enable HTTPS in the repository’s Pages settings once DNS propagates.

## Linking to Downloads

Marketing CTAs on `index.html` should link to the public releases at:
```
https://github.com/Radot1/pospal-artifacts/releases/latest
```
Update the button URLs whenever you change release locations or add mirrors.
