import fs from "node:fs";

const fail = (message) => {
  console.error(`Production release refused: ${message}`);
  process.exit(1);
};

const documentsOnly = process.argv.includes("--documents-only");
if (!documentsOnly && process.env.CONFIRM_PUBLISH !== "PUBLISH") fail("the manual confirmation must be exactly PUBLISH");

const statusPath = "legal-release-status.json";
if (!fs.existsSync(statusPath)) fail(`${statusPath} is missing`);
const status = JSON.parse(fs.readFileSync(statusPath, "utf8"));
const approval = status.document_approval;
if (approval?.issue !== 3 || approval.status !== "satisfied") fail("legal document approval (Issue #3) is not satisfied");
if (!approval.approved_by || !approval.approved_at) fail("document owner approval metadata is incomplete");
for (const field of ["revision", "effective_date"]) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(approval[field] || "")) fail(`document ${field} is missing or invalid`);
}
const canonicalPages = ["legal", "privacy", "cookies", "terms", "eula", "dpa", "subprocessors"]
  .flatMap((slug) => [`${slug}/index.html`, `en/${slug}/index.html`]);
for (const file of canonicalPages) {
  if (!fs.existsSync(file)) fail(`${file} is missing`);
  const html = fs.readFileSync(file, "utf8");
  const header = file.startsWith("en/")
    ? `Revised: ${approval.revision} · Effective: ${approval.effective_date}`
    : `Αναθεώρηση: ${approval.revision} · Έναρξη ισχύος: ${approval.effective_date}`;
  if (!html.includes(`<div class="legal-meta">${header}</div>`)) fail(`${file} has inconsistent document dates`);
  if (/pending approval|release candidate|candidate for publication|εκκρεμεί έγκριση|υποψηφίου δημοσίευσης|publication.{0,20}blocked|δημοσίευση.{0,30}αποκλεισμένη|final (?:release|version).{0,30}(?:not|until)|BLOCKED:/i.test(html)) fail(`${file} contains internal document-status language`);
}
console.log(`Legal Issue #3 satisfied: ${canonicalPages.length} current documents, effective ${approval.effective_date}.`);
const fiscalIssue = status.remaining_issue_groups?.find((issue) => issue.issue === 4);
if (fiscalIssue?.status !== "satisfied") fail("Legal Issue #4 payment/fiscal-document distinction is not satisfied");
// Fiscal handling is external to the application; no integrated provider is required.
// Keep checking public copy rather than treating an absent integration as a blocker.
const publicPages = [];
function collectPublicPages(directory = ".") {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || ["node_modules", "tmp", "docs", "graphify-out", "seo-audit-2026-09-27"].includes(entry.name)) continue;
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) collectPublicPages(path);
    else if (entry.name.endsWith(".html")) publicPages.push(path);
  }
}
collectPublicPages();
const obsoleteFiscalClaims = /external Greek e-invoicing|εξωτερικού ελληνικού παρόχου ηλεκτρονικής τιμολόγησης|Fiscal issuance · confirmation pending|Φορολογική έκδοση · εκκρεμεί επιβεβαίωση|Επίλεξε το είδος παραστατικού|Το παραστατικό αποστέλλεται στο email|(?:automatically|αυτόματα|αυτομάτως)\s+(?:issues?|generates?|emails?|transmits?|εκδίδει|εκδίδεται|αποστέλλει|αποστέλλεται|διαβιβάζει|διαβιβάζεται)[^.<>]{0,100}(?:invoice|fiscal|myDATA|τιμολόγ|φορολογικ)/i;
for (const file of publicPages) {
  const text = fs.readFileSync(file, "utf8").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
  // Explicit denials are part of the approved wording, not automation promises.
  const affirmativeText = text.replace(/[^.!?]*(?:does not|not automate|δεν εκδίδει|δεν αυτοματοποιεί)[^.!?]*[.!?]/gi, "");
  if (obsoleteFiscalClaims.test(affirmativeText)) fail(`${file} contains an unsupported fiscal automation/provider claim`);
}
for (const file of ["terms/index.html", "privacy/index.html", "en/terms/index.html", "en/privacy/index.html"]) {
  const html = fs.readFileSync(file, "utf8");
  const english = file.startsWith("en/");
  if (!html.includes(english ? "handled separately by the POSPal business" : "χωριστά από την επιχείρηση POSPal") ||
      !html.includes(english ? "does not automate fiscal-document issuance or transmission to myDATA" : "δεν αυτοματοποιεί την έκδοση φορολογικών παραστατικών ή τη διαβίβαση στο myDATA")) fail(`${file} lacks the approved external fiscal-handling distinction`);
}
const accountGuide = fs.readFileSync("guides/account/index.html", "utf8");
if (!accountGuide.includes("Η εφαρμογή POSPal δεν εκδίδει ούτε αποστέλλει αυτόματα φορολογικά παραστατικά.")) fail("account guide lacks the fiscal automation clarification");
console.log(`Legal Issue #4 satisfied: ${publicPages.length} public HTML files checked; fiscal handling is external to the application.`);
if (documentsOnly) process.exit(0);

if (status.status !== "approved") fail(`legal release status is ${status.status || "unknown"}`);
if (status.blocker_count !== 0) fail(`legal release reports ${status.blocker_count} blocker(s)`);
if (!/^\d{4}-\d{2}-\d{2}$/.test(status.effective_date || "")) fail("effective date is missing or invalid");
if (!status.approved_by || !status.approved_at) fail("owner approval metadata is incomplete");

for (const file of canonicalPages) {
  if (!fs.existsSync(file)) fail(`${file} is missing`);
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes('content="index,follow"')) fail(`${file} is not approved for indexing`);
}

const sitemap = fs.readFileSync("sitemap.xml", "utf8");
if (!sitemap.includes("POSPAL-LEGAL-SITEMAP:START")) fail("approved legal routes are absent from sitemap.xml");

console.log(`Production release gate passed for legal revision ${status.revision}, effective ${status.effective_date}.`);
