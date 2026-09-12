import fs from "node:fs";

const fail = (message) => {
  console.error(`Production release refused: ${message}`);
  process.exit(1);
};

if (process.env.CONFIRM_PUBLISH !== "PUBLISH") fail("the manual confirmation must be exactly PUBLISH");

const statusPath = "legal-release-status.json";
if (!fs.existsSync(statusPath)) fail(`${statusPath} is missing`);
const status = JSON.parse(fs.readFileSync(statusPath, "utf8"));
if (status.status !== "approved") fail(`legal release status is ${status.status || "unknown"}`);
if (status.blocker_count !== 0) fail(`legal release reports ${status.blocker_count} blocker(s)`);
if (!/^\d{4}-\d{2}-\d{2}$/.test(status.effective_date || "")) fail("effective date is missing or invalid");
if (!status.approved_by || !status.approved_at) fail("owner approval metadata is incomplete");

const canonicalPages = ["legal", "privacy", "cookies", "terms", "eula", "dpa", "subprocessors"]
  .flatMap((slug) => [`${slug}/index.html`, `en/${slug}/index.html`]);
for (const file of canonicalPages) {
  if (!fs.existsSync(file)) fail(`${file} is missing`);
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes('content="index,follow"')) fail(`${file} is not approved for indexing`);
  if (/pending approval|release candidate|εκκρεμεί έγκριση|υποψηφίου δημοσίευσης|BLOCKED/i.test(html)) fail(`${file} still contains draft/blocker language`);
}

const sitemap = fs.readFileSync("sitemap.xml", "utf8");
if (!sitemap.includes("POSPAL-LEGAL-SITEMAP:START")) fail("approved legal routes are absent from sitemap.xml");

console.log(`Production release gate passed for legal revision ${status.revision}, effective ${status.effective_date}.`);
