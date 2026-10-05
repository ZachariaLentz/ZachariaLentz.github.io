import { readFile } from "node:fs/promises";

const files = [
  "src/portfolio.js",
  "src/roleFamilies.js",
  "src/pages/role-families/RoleFamilyPage.js",
  "src/portfolioArtifacts.js",
  "src/components/site/PortfolioArtifact.js",
  "src/pages/home/HomeComponent.js",
  "src/pages/experience/Experience.js",
  "src/pages/contact/ContactComponent.js",
  "src/pages/case-studies/CaseStudyPage.js",
  "src/pages/case-studies/SoftwareSections.js",
  "src/components/site/FeaturedCaseStudy.js",
  "src/pages/case-studies/DemonstrationProjectPage.js",
];
const content = (
  await Promise.all(files.map((file) => readFile(file, "utf8")))
).join("\n");

const required = [
  "April 2024–Present",
  "March 2023–April 2024",
  "March 2022–March 2023",
  "March 2020–November 2021",
  "December 2013–December 2018",
  "Sparks, Nevada",
  "Production Engineering Supervisor - Energy Maintenance",
  "58 Jira requests",
  "15+ technicians",
  "≈5.5 years combined maintenance supervision",
  "Open to Michigan-based and remote opportunities.",
  "Relocating to the Midland, Michigan area.",
  "Self-directed demonstration using fictional/synthetic data",
];
const prohibited = [
  "Gigafactory Nevada • ~6 years",
  "seven years",
  "Reno, Nevada",
  "low turnover",
  "significantly reduced risk",
  "Managed international commissioning",
  "advanced PLC",
  "budget ownership",
];

const missing = required.filter((term) => !content.includes(term));
const found = prohibited.filter((term) =>
  content.toLowerCase().includes(term.toLowerCase()),
);
if (missing.length || found.length) {
  if (missing.length) console.error("Missing required content:", missing);
  if (found.length) console.error("Found prohibited/stale content:", found);
  process.exit(1);
}
console.log(
  "Required chronology, location, and demonstration labeling verified; stale claims not found in active content.",
);

const portfolioSource = await readFile("src/portfolio.js", "utf8");
const { caseStudies } = await import(
  `data:text/javascript;base64,${Buffer.from(portfolioSource).toString("base64")}`
);
const flagship = caseStudies.find(
  (study) => study.id === "industrial-operations-intelligence",
);
if (
  !flagship ||
  flagship.title !== "Industrial Operations Intelligence Application" ||
  flagship.eyebrow !== "Flagship software case study"
)
  throw new Error("Incorrect flagship naming");
const flagshipContent = JSON.stringify(flagship);
for (const term of [
  "Tesla",
  "Powerwall",
  "Gigafactory",
  "Istari",
  "predictive search",
]) {
  if (flagshipContent.toLowerCase().includes(term.toLowerCase()))
    throw new Error(`Disallowed flagship wording: ${term}`);
}
for (const term of [
  "This project was developed in an employment setting.",
  "All visuals on this page use fictional data and newly created examples. They are original portfolio concepts, not production screenshots or recreations.",
  "I conceived and designed the application and built it using substantial AI assistance. I owned the operational problem, requirements, workflow and UI decisions, implementation review, testing, and product evolution. AI coding assistants helped generate implementation code; I reviewed, tested, and refined the results using my software-development training.",
  "type-ahead search",
  "coaching, strengths, and development—not objective ranking",
]) {
  if (!flagshipContent.includes(term))
    throw new Error(`Missing flagship wording: ${term}`);
}
const artifactSource = await readFile("src/portfolioArtifacts.js", "utf8");
const { portfolioArtifacts } = await import(
  `data:text/javascript;base64,${Buffer.from(artifactSource).toString("base64")}`
);
if (flagship.evidence.items.length !== 3 || flagship.artifact)
  throw new Error(
    "Flagship must reference the three original portfolio artifacts",
  );
for (const id of flagship.evidence.items) {
  const artifact = portfolioArtifacts.find((item) => item.id === id);
  if (
    !artifact ||
    artifact.status !== "ready" ||
    artifact.disclosure !== "Portfolio concept — fictional data" ||
    !artifact.alt ||
    !artifact.caption
  )
    throw new Error(`Missing public-safe artifact or disclosure: ${id}`);
  if (
    /Tesla|Powerwall|Gigafactory|Istari|https?:|SELECT\s.+FROM/i.test(
      JSON.stringify(artifact),
    )
  )
    throw new Error(`Disallowed artifact content: ${id}`);
}
console.log(
  "Flagship naming, AI attribution, confidentiality, coaching language, and three labeled synthetic artifacts verified.",
);

const roleSource = await readFile("src/roleFamilies.js", "utf8");
const { roleFamilies } = await import(
  `data:text/javascript;base64,${Buffer.from(roleSource).toString("base64")}`
);
const { credibility, experience } = await import(
  `data:text/javascript;base64,${Buffer.from(portfolioSource).toString("base64")}`
);
const allowedSlugs = [
  "maintenance-reliability",
  "maintenance-systems",
  "industrial-technology",
];
if (
  roleFamilies.length !== 3 ||
  new Set(roleFamilies.map((family) => family.slug)).size !== 3
)
  throw new Error("Expected three distinct role families");
for (const family of roleFamilies) {
  if (!allowedSlugs.includes(family.slug))
    throw new Error("Unexpected employer-specific route");
  for (const id of [...family.caseStudyIds, ...family.supportingStudyIds])
    if (!caseStudies.some((study) => study.id === id))
      throw new Error(`Unknown canonical case-study reference: ${id}`);
  for (const id of family.experienceIds)
    if (!experience.some((role) => role.id === id))
      throw new Error(`Unknown canonical experience reference: ${id}`);
  for (const label of family.credibilityLabels)
    if (!credibility.some((item) => item.label === label))
      throw new Error(`Unknown canonical scope reference: ${label}`);
  if (
    /Istari|production screenshots|source code available|I own|employer.authorized/i.test(
      JSON.stringify(family),
    )
  )
    throw new Error("Unsafe role-family content");
}
console.log(
  "Three employer-neutral role families reference existing canonical evidence and career facts.",
);
