import { readFile } from "node:fs/promises";

const files = [
  "src/portfolio.js",
  "src/pages/home/HomeComponent.js",
  "src/pages/experience/Experience.js",
  "src/pages/contact/ContactComponent.js",
  "src/pages/case-studies/CaseStudyPage.js",
  "src/pages/case-studies/DemonstrationProjectPage.js",
];
const content = (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n");

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
const found = prohibited.filter((term) => content.toLowerCase().includes(term.toLowerCase()));
if (missing.length || found.length) {
  if (missing.length) console.error("Missing required content:", missing);
  if (found.length) console.error("Found prohibited/stale content:", found);
  process.exit(1);
}
console.log("Required chronology, location, and demonstration labeling verified; stale claims not found in active content.");
