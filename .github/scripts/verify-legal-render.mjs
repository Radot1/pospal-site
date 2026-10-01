import { chromium } from "playwright";
import fs from "node:fs";

const approval = JSON.parse(fs.readFileSync("legal-release-status.json", "utf8")).document_approval;

const baseUrl = (process.argv[2] || "http://127.0.0.1:8765").replace(/\/$/, "");
const routes = ["legal", "privacy", "cookies", "terms", "eula", "dpa", "subprocessors"]
  .flatMap((slug) => [`/${slug}/`, `/en/${slug}/`]);
const browser = await chromium.launch({ headless: true });
const failures = [];

try {
  const consentPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const prematureThirdParty = [];
  consentPage.on("request", (request) => {
    if (/(?:googletagmanager|google-analytics|googleadservices|doubleclick|clarity\.ms|youtube(?:-nocookie)?\.com|esm\.sh)/i.test(request.url())) prematureThirdParty.push(request.url());
  });
  await consentPage.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await consentPage.waitForTimeout(500);
  if (prematureThirdParty.length) failures.push(`homepage made ${prematureThirdParty.length} optional third-party request(s) before consent`);
  await consentPage.click("[data-pospal-consent-reject]");
  await consentPage.waitForTimeout(500);
  if (prematureThirdParty.length) failures.push("homepage made an optional third-party request after reject-all");
  await consentPage.close();

  for (const width of [320, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    for (const route of routes) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
      if (!response || response.status() !== 200) failures.push(`${route} returned ${response?.status() || "no response"} at ${width}px`);
      const result = await page.evaluate(() => ({
        h1: document.querySelector("h1")?.textContent?.trim() || "",
        bodyOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        tableCount: document.querySelectorAll("table").length,
        wrappedTableCount: document.querySelectorAll(".legal-table-wrap > table").length,
        robots: document.querySelector('meta[name="robots"]')?.content || "",
        legalMeta: document.querySelector('.legal-meta')?.textContent?.trim() || ""
      }));
      if (!result.h1) failures.push(`${route} has no visible heading at ${width}px`);
      if (result.bodyOverflow > 1) failures.push(`${route} overflows the viewport by ${result.bodyOverflow}px at ${width}px`);
      if (result.tableCount !== result.wrappedTableCount) failures.push(`${route} has an unwrapped legal table at ${width}px`);
      if (result.robots !== "noindex,nofollow") failures.push(`${route} changed the existing legal indexing policy`);
      const expectedMeta = route.startsWith('/en/')
        ? `Revised: ${approval.revision} · Effective: ${approval.effective_date}`
        : `Αναθεώρηση: ${approval.revision} · Έναρξη ισχύος: ${approval.effective_date}`;
      if (result.legalMeta !== expectedMeta) failures.push(`${route} has inconsistent revision/effective dates`);
    }
    await page.close();
  }

  const printPage = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  await printPage.emulateMedia({ media: "print" });
  for (const route of routes) {
    await printPage.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    const print = await printPage.evaluate(() => ({
      header: getComputedStyle(document.querySelector(".legal-site-header")).display,
      footer: getComputedStyle(document.querySelector(".legal-site-footer")).display,
      cardShadow: getComputedStyle(document.querySelector(".legal-card")).boxShadow
    }));
    if (print.header !== "none" || print.footer !== "none") failures.push(`${route} does not hide site chrome for print`);
    if (print.cardShadow !== "none") failures.push(`${route} retains a print box shadow`);
  }
  await printPage.close();
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Verified ${routes.length} legal pages at mobile, desktop, and print layouts.`);
