import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

// Run against a local static server: node .github/scripts/verify-article-navigation.mjs [URL]
const base = process.argv[2] || 'http://127.0.0.1:8765';
const articles = [
  ['pos-na-dialexeis-paraggeliolipsia.html', 'paraggeliolipsia'],
  ['systima-paraggeliolipsias.html', 'paraggeliolipsia'],
  ['asyrmati-paraggeliolipsia.html', 'paraggeliolipsia'],
  ['pda-ti-einai.html', 'pda'],
  ['pda-pos-leitourgei.html', 'pda'],
  ['pda-gia-servitoro/', 'pda'],
];
const destinations = [...articles.map(([path]) => path), 'times.html', 'pda-gia-kafeteries.html', 'paraggelio-lipsia-gia-beach-bar.html'];
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));

async function open(path) {
  const response = await page.goto(new URL(path, `${base}/`).href, { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200, path);
}
async function count(expected) {
  assert.equal(await page.locator('[data-category]:visible').count(), expected);
}

try {
  await open('/');
  const reject = page.getByRole('button', { name: 'Απόρριψη όλων', exact: true });
  if (await reject.isVisible()) await reject.click();
  await page.locator('.homepage-mobile .menu summary').click();
  await page.locator('.homepage-mobile .menu a[href="/arthra/"]').click();
  assert.equal(new URL(page.url()).pathname, '/arthra/');
  await count(9);

  await page.locator('[data-filter="pda"]').click();
  assert.equal(new URL(page.url()).searchParams.get('category'), 'pda');
  await count(3);
  await page.reload({ waitUntil: 'networkidle' });
  await count(3);
  assert.equal(await page.locator('[data-filter="pda"]').getAttribute('aria-current'), 'true');
  await page.locator('[data-filter="paraggeliolipsia"]').click();
  await count(5);
  await page.goBack({ waitUntil: 'networkidle' });
  await count(3);
  await page.goForward({ waitUntil: 'networkidle' });
  await count(5);
  await page.locator('#article-search').fill('καφετέρια');
  await count(2);
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await page.locator('#article-search').inputValue(), 'καφετέρια');
  await count(2);
  await page.locator('#article-search').fill('ανύπαρκτο');
  await count(0);
  assert.equal(await page.locator('#empty-results').isVisible(), true);
  assert.equal(await page.locator('#venue-articles').isVisible(), false);
  await open('/arthra/?category=kostos');
  await count(1);
  assert.equal(await page.locator('.post:visible h2').innerText(), 'Τιμές POSPal');

  for (const [path, category] of articles) {
    await open(path);
    assert.equal(await page.locator('.article-breadcrumbs a').count(), 3, path);
    assert.equal(await page.locator('.article-breadcrumbs a').last().getAttribute('href'), `/arthra/?category=${category}`);
    await page.locator('.article-breadcrumbs a').last().click();
    await count(category === 'pda' ? 3 : 5);
  }

  for (const width of [320, 390, 720, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    for (const path of ['/', '/arthra/', ...destinations]) {
      await open(path);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${path} overflows at ${width}px`);
      if (path === '/') {
        if (width <= 720) {
          assert.equal(await page.locator('.homepage-mobile footer a[href="/arthra/"]').isVisible(), true);
          await page.locator('.homepage-mobile .menu summary').click();
          assert.equal(await page.locator('.homepage-mobile .menu a[href="/arthra/"]').isVisible(), true);
        }
      } else if (path !== '/arthra/') {
        const headerLink = page.locator('body > header a[href="/arthra/"]');
        assert.equal(await headerLink.isVisible(), true, path);
        const box = await headerLink.boundingBox();
        assert.ok(box.height >= 44 && box.x >= 0 && box.x + box.width <= width, `${path}: header target at ${width}px`);
        assert.equal(await page.locator('.article-related li a').count(), 2, path);
        assert.equal(await page.locator('footer nav[aria-label="Σύνδεσμοι σελίδας"] a:not([data-pospal-cookie-settings])').count(), 5, path);
        await headerLink.focus();
        assert.equal(await headerLink.evaluate(el => getComputedStyle(el).outlineStyle), 'solid', path);
      }
    }
  }
  await page.emulateMedia({ colorScheme: 'dark' });
  await open('times.html');
  const accessibility = await new AxeBuilder({ page }).include('.article-related').analyze();
  assert.deepEqual(accessibility.violations, [], 'Pricing related links must remain accessible in dark mode');
  assert.deepEqual(errors, []);
  console.log('PASS: mobile entry, 9 destinations, category/search URLs, reload/history, breadcrumbs, 4 viewport widths, keyboard focus and dark-mode related links.');
} finally {
  await browser.close();
}
