const site = {
  url: "https://zacharia.dev",
  name: "Zacharia Lentz",
  title: "Maintenance & Reliability Leader | CMMS Administration | Industrial Implementation",
  description:
    "Tesla Production Engineering Supervisor leading maintenance technicians across automated Powerwall production lines, with experience in reliability execution, CMMS administration, and industrial implementation.",
  email: "zach0lentz@gmail.com",
  phone: "(989) 941-5916",
  linkedin: "https://www.linkedin.com/in/zacharia-lentz/",
  github: "https://github.com/ZachariaLentz",
};

const hero = {
  eyebrow: "Industrial maintenance leadership, strengthened by systems expertise",
  headline: site.title,
  summary:
    "Tesla Production Engineering Supervisor leading 20+ maintenance technicians across three automated Powerwall production lines. I bridge frontline maintenance, CMMS configuration, equipment commissioning, and technical delivery. Based in Sparks, Nevada; relocating home to the Midland, Michigan area.",
};

const credibility = [
  { label: "Current role", value: "Production Engineering Supervisor" },
  { label: "Team scope", value: "20+ maintenance technicians" },
  { label: "Operations", value: "3 automated Powerwall lines" },
  { label: "Systems", value: "Hands-on CMMS administration" },
  { label: "Leadership depth", value: "≈5.5 years combined maintenance supervision" },
  { label: "Foundation", value: "USMC CH-53E aviation maintenance" },
];

const experience = [
  {
    title: "Production Engineering Supervisor - Energy Maintenance",
    company: "Tesla",
    duration: "April 2024–Present",
    location: "Gigafactory Nevada · Sparks, Nevada",
    summary:
      "Lead 20+ maintenance technicians on one of four rotating shifts supporting three automated Powerwall production lines.",
    highlights: [
      "Set daily priorities for preventive and corrective maintenance, equipment recovery, passdowns, and reliability work.",
      "Coordinate root-cause investigations and execution with Production, Engineering, and Controls partners.",
      "Hired, onboarded, and trained 15+ technicians; developed technicians into shift-leader roles.",
      "Administer CMMS settings, custom views and filters, user roles and permissions, configuration validation, and preventive-maintenance creation and scheduling.",
      "Inspected and qualified an automation line in Italy, authored 58 Jira requests, and supported later U.S. startup and commissioning.",
      "Built Python dashboards from internal databases for near-real-time KPI, downtime-trend, and shift-performance visibility.",
      "Helped move A-shift from lowest- to highest-performing in build-plan achievement; no unsupported percentage or cost claim is made.",
    ],
  },
  {
    title: "Energy Equipment Maintenance Technician",
    company: "Tesla",
    duration: "March 2023–April 2024",
    location: "Gigafactory Nevada · Sparks, Nevada",
    summary:
      "Supported automated energy-manufacturing equipment through troubleshooting, recovery, preventive maintenance, and startup work.",
    highlights: [
      "Worked across mechanical, pneumatic, hydraulic, sensor, conveyor, servo, and production-fixture systems.",
      "Used CMMS work orders to document repairs, preventive maintenance, recurring failures, and corrective actions.",
      "Collaborated with NPI teams on equipment builds, troubleshooting, testing, and commissioning support.",
    ],
  },
  {
    title: "Field Service Electrician",
    company: "Blue Raven Solar",
    duration: "March 2022–March 2023",
    location: "Northern Nevada",
    summary:
      "Served as the sole field-service technician for solar-system diagnostics, repair, commissioning, and customer-facing technical support across northern Nevada.",
    highlights: [
      "Owned on-site troubleshooting and communicated technical findings in practical terms.",
      "Worked independently while coordinating follow-up work with operations and customers.",
    ],
  },
  {
    title: "Equipment Maintenance Technician, Fixtures",
    company: "Tesla",
    duration: "March 2020–November 2021",
    location: "Gigafactory Nevada · Sparks, Nevada",
    summary:
      "Maintained and troubleshot production fixtures and associated mechanical and pneumatic systems.",
    highlights: [
      "Executed preventive and corrective maintenance on production tooling and fixtures.",
      "Used a FARO Arm for dimensional verification, alignment, and geometry checks supporting mechanical correction.",
      "Created a centralized maintenance-documentation dashboard for technician access to specifications and procedures.",
    ],
  },
  {
    title: "MOS 6113 CH-53E Helicopter Mechanic / Maintenance Leadership",
    company: "United States Marine Corps",
    duration: "December 2013–December 2018",
    location: "Multiple duty locations",
    summary:
      "Maintained CH-53E aircraft in safety-critical operations and advanced to Sergeant (E-5), Collateral Duty Inspector, aerial observer, and desk-sergeant responsibilities.",
    highlights: [
      "Performed inspection, troubleshooting, preventive maintenance, and repair within military aviation-maintenance controls.",
      "Led maintenance personnel and coordinated work priorities, passdowns, and operational readiness as a desk sergeant.",
      "Verified maintenance quality and procedural compliance as a Collateral Duty Inspector.",
    ],
  },
];

const caseStudies = [
  {
    id: "maintenance-leadership",
    title: "Maintenance Leadership and Reliability Execution",
    deck: "Coordinating people, priorities, and equipment work in a rotating-shift production environment.",
    category: "Maintenance leadership",
    context:
      "Three automated Powerwall production lines operate across four rotating shifts. Zacharia leads 20+ maintenance technicians on one of those shifts.",
    problem:
      "The team must balance urgent equipment recovery with preventive work, reliable passdowns, technician development, and longer-term reliability priorities.",
    role:
      "Production Engineering Supervisor responsible for shift execution, technician leadership, work prioritization, and cross-functional coordination.",
    actions: [
      "Set daily priorities across preventive work, corrective work, equipment recovery, and reliability follow-up.",
      "Use passdowns and CMMS records to preserve context between rotating shifts.",
      "Coordinate structured root-cause investigation with Production, Engineering, and Controls partners.",
      "Hire, onboard, and train technicians; more than 15 technicians have been brought into the organization under Zacharia’s current supervision.",
    ],
    outcome:
      "Verified result: Zacharia helped move A-shift from lowest- to highest-performing in build-plan achievement while maintaining coverage through headcount reductions. Employer production figures, percentages, downtime data, and cost claims are intentionally not published.",
    skills: ["Shift leadership", "Reliability execution", "Work prioritization", "Root-cause investigation", "Technician development"],
    artifact: {
      title: "Generic maintenance work lifecycle",
      note: "Original, sanitized model—not an employer process or screenshot.",
      steps: ["Detect & make safe", "Triage & assign", "Diagnose", "Repair & verify", "Document & pass down", "Review recurrence"],
    },
  },
  {
    id: "cmms-administration",
    title: "CMMS Administration and Maintenance Workflow Design",
    deck: "Configuring maintenance systems around technician work while preserving governance and useful records.",
    category: "Maintenance systems",
    context:
      "A rotating-shift maintenance organization needs consistent work visibility, practical technician views, controlled access, and preventive-maintenance scheduling.",
    problem:
      "Poor configuration creates friction: technicians cannot find the right work, permissions become inconsistent, and preventive tasks lose operational context.",
    role:
      "Direct CMMS administrator and frontline maintenance leader who understands both configuration decisions and daily technician use.",
    actions: [
      "Configure settings and validate both his own and other users’ configurations before broad use.",
      "Build custom views and filters around roles, priorities, ownership, and shift needs.",
      "Manage user roles and permissions with least-access and usability tradeoffs in mind.",
      "Create and schedule preventive-maintenance work with clear scope and ownership.",
      "Document workflows and reinforce adoption through technician training.",
    ],
    outcome:
      "Verified boundary: Zacharia directly performs these administrative activities in support of maintenance operations. The system name, employer configuration, records, adoption metrics, and internal data are confidential and are not reproduced here.",
    skills: ["CMMS configuration", "Workflow design", "Roles & permissions", "PM governance", "Training & documentation"],
    artifact: {
      title: "Synthetic PM governance loop",
      note: "Fictional example showing the decision cycle, not a production configuration.",
      steps: ["Define failure mode", "Draft task & standard", "Assign owner & cadence", "Pilot", "Review findings", "Revise or retire"],
    },
  },
  {
    id: "equipment-qualification",
    title: "Equipment Qualification, Commissioning, and Technical Issue Management",
    deck: "Turning equipment observations into traceable issues before shipment and useful context during startup.",
    category: "Equipment readiness",
    context:
      "New automated equipment was inspected and qualified in Italy before shipment to a U.S. manufacturing site.",
    problem:
      "Mechanical, electrical, controls, and operational findings needed clear documentation, ownership, and follow-through before shipment and during startup.",
    role:
      "Maintenance technical contributor—not project owner—supporting inspection, qualification, issue documentation, and later U.S. startup and commissioning.",
    actions: [
      "Inspect equipment behavior and maintainability during pre-shipment qualification.",
      "Translate observations into 58 detailed, traceable Jira requests for engineering review.",
      "Coordinate clarification and follow-through across technical disciplines.",
      "Carry equipment history into U.S. startup and commissioning support.",
    ],
    outcome:
      "Verified result: 58 documented findings entered the issue-management workflow before shipment, and Zacharia carried that equipment context into U.S. startup support. Project-level schedule, cost, production, and acceptance outcomes are not claimed.",
    skills: ["Equipment inspection", "Qualification support", "Technical writing", "Issue management", "Commissioning support"],
    artifact: {
      title: "Sanitized qualification checklist",
      note: "Original checklist structure using no employer specifications or proprietary criteria.",
      steps: ["Safety & guarding", "Mechanical condition", "Utilities & interfaces", "Sequence observation", "Maintainability", "Issue evidence & owner"],
    },
  },
];

const demonstrationProject = {
  title: "CMMS Implementation Blueprint",
  label: "Self-directed demonstration using fictional/synthetic data",
  summary:
    "A transparent example of how Zacharia would structure an implementation. This is not a client engagement and contains no employer data or proprietary system configuration.",
  phases: [
    { title: "1. Discover", detail: "Interview maintenance, operations, planners, administrators, and leaders; map current pain points and define decision rights." },
    { title: "2. Prepare data", detail: "Inventory fictional assets, locations, naming standards, criticality, parts, and source-data quality; document migration rules." },
    { title: "3. Configure workflows", detail: "Define request, approval, planning, assignment, execution, verification, closure, and exception paths." },
    { title: "4. Set access", detail: "Create technician, planner, supervisor, administrator, and read-only roles; test permissions against real task scenarios." },
    { title: "5. Build PM program", detail: "Map legacy tasks, normalize instructions, assign assets and owners, set initial cadence, and establish review governance." },
    { title: "6. Pilot and validate", detail: "Run a limited synthetic pilot, record defects and usability friction, validate reports, and control configuration changes." },
    { title: "7. Train and launch", detail: "Deliver role-based technician and administrator training, go-live support, escalation paths, and concise job aids." },
    { title: "8. Measure adoption", detail: "Track fictional indicators such as login completion, work-order data completeness, PM execution, backlog hygiene, and support themes." },
  ],
};

const credentials = [
  { title: "MOS 6113", detail: "CH-53E helicopter mechanic, United States Marine Corps" },
  { title: "Sergeant (E-5)", detail: "Military maintenance leadership" },
  { title: "Collateral Duty Inspector", detail: "Maintenance quality and procedural-compliance responsibility" },
  { title: "Aerial observer and desk sergeant", detail: "Supported flight operations and approximately three years of aviation-maintenance leadership" },
  { title: "Aviation maintenance supervisor training", detail: "Aviation Maintenance Workcenter Supervisor training and Naval Aviation Organizational Maintenance Activity Work Center Supervisor’s Course" },
  { title: "CH-53E maintenance training", detail: "Organizational maintenance, aircraft turbine-engine maintenance, helicopter power-train maintenance, and hydraulic-systems repair" },
  { title: "Hack Reactor", detail: "Certificate, Full Stack Software Engineering · September–December 2021 · 1,000+ hours" },
  { title: "Sabio", detail: "Certificate in Software Engineering · October–December 2018" },
];

const contact = {
  summary:
    "Open to maintenance leadership, reliability, maintenance planning, facilities or operations leadership, and adjacent industrial implementation roles.",
  location: "Sparks, Nevada",
  relocation: "Relocating home to the Midland, Michigan area.",
};

export { site, hero, credibility, experience, caseStudies, demonstrationProject, credentials, contact };
