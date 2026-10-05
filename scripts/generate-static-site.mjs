import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const buildDir = path.join(root, "build");
const source = await readFile(path.join(buildDir, "index.html"), "utf8");
const portfolioSource = await readFile(
  path.join(root, "src", "portfolio.js"),
  "utf8",
);
const { caseStudies, site, demonstrationProject } = await import(
  `data:text/javascript;base64,${Buffer.from(portfolioSource).toString("base64")}`
);
const roleSource = await readFile(
  path.join(root, "src", "roleFamilies.js"),
  "utf8",
);
const { roleFamilies } = await import(
  `data:text/javascript;base64,${Buffer.from(roleSource).toString("base64")}`
);
const siteUrl = site.url;

const pages = [
  [
    "experience",
    "Experience | Zacharia Lentz",
    "Maintenance leadership, field service, automated manufacturing, and military aviation experience for Zacharia Lentz.",
  ],
  [
    "contact",
    "Contact | Zacharia Lentz",
    "Contact Zacharia Lentz about Michigan-based and remote roles in maintenance leadership, maintenance systems, industrial technology, and technical delivery.",
  ],
  [
    "proof-of-work",
    "Proof of Work | Zacharia Lentz",
    "Industrial operations software, maintenance leadership, CMMS administration, and equipment qualification case studies from Zacharia Lentz.",
  ],
  [
    "credentials",
    "Credentials | Zacharia Lentz",
    "Verified military maintenance roles and software-engineering certificate programs completed by Zacharia Lentz.",
  ],
  [
    "demonstration-project",
    "CMMS Implementation Blueprint | Zacharia Lentz",
    demonstrationProject.summary,
  ],
  ...roleFamilies.map((family) => [
    `for/${family.slug}`,
    `${family.label} | ${site.name}`,
    family.description,
  ]),
  ...caseStudies.map((study) => [
    `case-studies/${study.id}`,
    `${study.seo?.title || study.title} | ${site.name}`,
    study.seo?.description || study.deck,
  ]),
];

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function metadataFor(html, route, title, description) {
  const url = `${siteUrl}/${route}`;
  const escapedTitle = escapeHtml(title);
  const escapedDescription = escapeHtml(description);
  const study = caseStudies.find((item) => route === `case-studies/${item.id}`);
  const family = roleFamilies.find((item) => route === `for/${item.slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": study ? "Article" : "WebPage",
    ...(study
      ? {
          headline: study.title,
          author: { "@type": "Person", name: site.name },
        }
      : { name: title }),
    description,
    url,
    ...(family
      ? {
          relatedLink: family.caseStudyIds.map(
            (id) => `${siteUrl}/case-studies/${id}`,
          ),
        }
      : {}),
  };
  const shell = family
    ? html.replace(
        "</head>",
        '<meta name="robots" content="index,follow" data-rh="true"/></head>',
      )
    : html;
  return shell
    .replace(
      /<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/,
      `<script type="application/ld+json" data-rh="true">${JSON.stringify(structuredData).replaceAll("<", "\\u003c")}</script>`,
    )
    .replace(
      /<meta property="og:type" content="[^"]*"[^>]*>/,
      `<meta property="og:type" content="${study ? "article" : "website"}" data-rh="true"/>`,
    )
    .replace(
      /<title[^>]*>.*?<\/title>/,
      `<title data-rh="true">${escapedTitle}</title>`,
    )
    .replace(
      /<meta name="description" content="[^"]*"[^>]*>/,
      `<meta name="description" content="${escapedDescription}" data-rh="true"/>`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*"[^>]*>/,
      `<link rel="canonical" href="${url}" data-rh="true"/>`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*"[^>]*>/,
      `<meta property="og:title" content="${escapedTitle}" data-rh="true"/>`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*"[^>]*>/,
      `<meta property="og:description" content="${escapedDescription}" data-rh="true"/>`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*"[^>]*>/,
      `<meta property="og:url" content="${url}" data-rh="true"/>`,
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"[^>]*>/,
      `<meta name="twitter:title" content="${escapedTitle}" data-rh="true"/>`,
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"[^>]*>/,
      `<meta name="twitter:description" content="${escapedDescription}" data-rh="true"/>`,
    );
}

for (const [route, title, description] of pages) {
  const directory = path.join(buildDir, route);
  await mkdir(directory, { recursive: true });
  await writeFile(
    path.join(directory, "index.html"),
    metadataFor(source, route, title, description),
  );
}

const notFound = metadataFor(
  source,
  "not-found",
  "Page Not Found | Zacharia Lentz",
  "The requested page could not be found.",
);
await writeFile(path.join(buildDir, "404.html"), notFound);

await sharp(path.join(root, "public", "og-image.svg"))
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(path.join(buildDir, "og-image.png"));

console.log(
  `Generated ${pages.length} static route shells, 404.html, and 1200x630 og-image.png.`,
);
