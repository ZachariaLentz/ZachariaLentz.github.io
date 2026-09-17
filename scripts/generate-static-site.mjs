import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const buildDir = path.join(root, "build");
const source = await readFile(path.join(buildDir, "index.html"), "utf8");
const siteUrl = "https://zacharia.dev";

const pages = [
  ["experience", "Experience | Zacharia Lentz", "Accurate maintenance, field service, automated manufacturing, and military aviation experience for Zacharia Lentz."],
  ["contact", "Contact | Zacharia Lentz", "Contact Zacharia Lentz about maintenance leadership, reliability, industrial operations, or technical implementation opportunities."],
  ["proof-of-work", "Proof of Work | Zacharia Lentz", "Sanitized maintenance leadership, CMMS administration, and equipment qualification case studies from Zacharia Lentz."],
  ["credentials", "Credentials | Zacharia Lentz", "Verified military maintenance roles and software-engineering certificate programs completed by Zacharia Lentz."],
  ["demonstration-project", "CMMS Implementation Blueprint | Zacharia Lentz", "A self-directed demonstration using fictional data that shows Zacharia Lentz's structured CMMS implementation approach."],
  ["case-studies/maintenance-leadership", "Maintenance Leadership and Reliability Execution | Zacharia Lentz", "How Zacharia coordinates people, priorities, and equipment work in a rotating-shift production environment."],
  ["case-studies/cmms-administration", "CMMS Administration and Maintenance Workflow Design | Zacharia Lentz", "How Zacharia configures maintenance systems around technician work, governance, permissions, and preventive maintenance."],
  ["case-studies/equipment-qualification", "Equipment Qualification, Commissioning, and Technical Issue Management | Zacharia Lentz", "Zacharia's contributor role in pre-shipment equipment qualification, issue documentation, and U.S. startup support."],
];

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function metadataFor(html, route, title, description) {
  const url = `${siteUrl}/${route}`;
  const escapedTitle = escapeHtml(title);
  const escapedDescription = escapeHtml(description);
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapedTitle}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escapedDescription}"/>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}"/>`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapedTitle}"/>`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escapedDescription}"/>`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}"/>`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${escapedTitle}"/>`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${escapedDescription}"/>`);
}

for (const [route, title, description] of pages) {
  const directory = path.join(buildDir, route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), metadataFor(source, route, title, description));
}

const notFound = metadataFor(source, "not-found", "Page Not Found | Zacharia Lentz", "The requested page could not be found.");
await writeFile(path.join(buildDir, "404.html"), notFound);

await sharp(path.join(root, "public", "og-image.svg"))
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(path.join(buildDir, "og-image.png"));

console.log(`Generated ${pages.length} static route shells, 404.html, and 1200x630 og-image.png.`);
