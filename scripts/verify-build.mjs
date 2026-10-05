import { access, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const routes = [
  "",
  "experience",
  "contact",
  "proof-of-work",
  "credentials",
  "demonstration-project",
  "case-studies/industrial-operations-intelligence",
  "case-studies/maintenance-leadership",
  "case-studies/cmms-administration",
  "case-studies/equipment-qualification",
];

for (const route of routes) {
  const file = path.join("build", route, "index.html");
  await access(file);
  const html = await readFile(file, "utf8");
  const expectedUrl = `https://zacharia.dev/${route}`;
  if (!html.includes(`rel="canonical" href="${expectedUrl}`))
    throw new Error(`Missing canonical URL in ${file}`);
  if (route === "case-studies/industrial-operations-intelligence") {
    if (!html.includes('<meta property="og:type" content="article"'))
      throw new Error("Flagship must use article metadata");
    const json = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    );
    const data = JSON.parse(json?.[1] || "{}");
    if (
      data["@type"] !== "Article" ||
      data.headline !== "Industrial Operations Intelligence Application" ||
      data.url !== expectedUrl
    )
      throw new Error("Invalid flagship structured data");
    if (/Tesla|Powerwall|Gigafactory|Istari/i.test(html))
      throw new Error("Confidential or misleading flagship metadata");
    if (!html.includes("AI-assisted development"))
      throw new Error("Missing flagship SEO description");
  }
  if (!html.includes("og-image.png"))
    throw new Error(`Missing social image metadata in ${file}`);
}

for (const file of [
  "build/404.html",
  "build/sitemap.xml",
  "build/robots.txt",
  "build/CNAME",
])
  await access(file);
const sitemap = await readFile("build/sitemap.xml", "utf8");
if (
  !sitemap.includes(
    "https://zacharia.dev/case-studies/industrial-operations-intelligence",
  )
)
  throw new Error("Missing flagship sitemap entry");
const cname = (await readFile("build/CNAME", "utf8")).trim();
if (cname !== "zacharia.dev") throw new Error(`Unexpected CNAME: ${cname}`);
const metadata = await sharp("build/og-image.png").metadata();
if (
  metadata.width !== 1200 ||
  metadata.height !== 630 ||
  metadata.format !== "png"
)
  throw new Error("Open Graph image must be a 1200x630 PNG");
console.log(
  `Verified ${routes.length} static route shells, routing fallback, SEO files, CNAME, and 1200x630 PNG.`,
);
