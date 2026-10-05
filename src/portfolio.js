const site = {
  url: "https://zacharia.dev",
  name: "Zacharia Lentz",
  title:
    "Maintenance & Reliability Leader | CMMS Administration | Industrial Implementation",
  description:
    "Tesla Production Engineering Supervisor leading maintenance technicians across automated Powerwall production lines, with experience in reliability execution, CMMS administration, and industrial implementation.",
  email: "zach0lentz@gmail.com",
  phone: "(989) 941-5916",
  linkedin: "https://www.linkedin.com/in/zacharia-lentz/",
  github: "https://github.com/ZachariaLentz",
};

const hero = {
  eyebrow:
    "Industrial maintenance leadership, strengthened by systems expertise",
  headline: site.title,
  summary:
    "Tesla Production Engineering Supervisor leading 20+ maintenance technicians across three automated Powerwall production lines. I bridge frontline maintenance, CMMS configuration, equipment commissioning, and technical delivery. Based in Sparks, Nevada; relocating home to the Midland, Michigan area.",
};

const credibility = [
  { label: "Current role", value: "Production Engineering Supervisor" },
  { label: "Team scope", value: "20+ maintenance technicians" },
  { label: "Operations", value: "3 automated Powerwall lines" },
  { label: "Systems", value: "Hands-on CMMS administration" },
  {
    label: "Leadership depth",
    value: "≈5.5 years combined maintenance supervision",
  },
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
    id: "industrial-operations-intelligence",
    title: "Industrial Operations Intelligence Application",
    deck: "A Python desktop application that grew from maintenance-event retrieval into analysis, shift handoffs, planning, parts research, and technician development.",
    category: "Industrial operations software",
    featured: true,
    format: "software",
    eyebrow: "Flagship software case study",
    confidentiality:
      "This project was developed in an employment setting. To respect confidentiality and intellectual-property obligations, this case study intentionally omits proprietary code, screenshots, data, schemas, internal system names, identifiers, and implementation details. All visuals on this page use fictional data and newly created examples. They are original portfolio concepts, not production screenshots or recreations.",
    feature: {
      homeSummary:
        "An internal application that grew from a simple maintenance-data problem into tools for analysis, shift handoffs, planning, parts research, and technician development.",
      title: "From maintenance records to practical workflows",
      summary:
        "A focused retrieval-and-export tool evolved into an application for maintenance analysis, shift handoffs, planning, parts research, and technician development.",
      linkLabel: "Explore the case study",
    },
    context:
      "Maintenance supervisors turn operational records into daily decisions: recurring-event analysis, technician feedback, shift handoffs, preventive work, and team development.",
    problem:
      "Retrieving maintenance dispatch information and preparing it for analysis created recurring administrative friction. I started by making relevant events easier to retrieve and export.",
    role: "I conceived and designed the application and built it using substantial AI assistance. I owned the operational problem, requirements, workflow and UI decisions, implementation review, testing, and product evolution. AI coding assistants helped generate implementation code; I reviewed, tested, and refined the results using my software-development training.",
    ownership: {
      title: "My role",
      responsibilities: [
        "Discover recurring operational problems and translate them into requirements and supervisor workflows.",
        "Direct product and UI decisions, implementation, and code/structure review.",
        "Test and refine behavior through QA, user feedback, and iterative product development.",
      ],
    },
    developmentApproach: {
      title: "AI-assisted development",
      paragraphs: [
        "I conceived and designed the application and built it using substantial AI assistance. I owned the operational problem, requirements, workflow and UI decisions, implementation review, testing, and product evolution. AI coding assistants helped generate implementation code; I reviewed, tested, and refined the results using my software-development training.",
        "I used coding assistants inside VS Code, working in repeated cycles of implementation, review, testing, and revision.",
      ],
    },
    evolution: {
      title: "A focused tool that evolved through use",
      intro:
        "Use of the initial tool surfaced related workflow problems. Requests from other users helped shape the next capabilities.",
      initialFocus: {
        title: "Start with retrieval and export",
        detail:
          "Retrieve maintenance dispatch information within a useful scope and prepare selected records for analysis.",
      },
      expansionThemes: [
        {
          title: "Understand the work",
          detail:
            "Add dashboards, KPI filters, consolidated technician comments, and event participation information.",
        },
        {
          title: "Prepare the next action",
          detail:
            "Support editable shift passdowns, maintenance-plan review, and weekly PM assignment workflows.",
        },
        {
          title: "Connect supporting information",
          detail:
            "Extend into historical parts use, BOM and spares cross-reference, parts-cost analysis, and technician development.",
        },
      ],
      note: "Scope-expansion themes, not a dated release sequence.",
    },
    capabilities: {
      title: "Workflows the application supports",
      intro:
        "The aim was to connect analysis with the next operational task. These four areas show where the workflows expanded; the original portfolio concepts below illustrate the reasoning.",
      groups: [
        {
          id: "event-analysis",
          title: "Maintenance-event analysis",
          summary:
            "Move from a broad set of records to the events and patterns relevant to a specific question.",
          items: [
            "Retrieve maintenance events by time window, event category, and asset scope.",
            "Visualize recurring assets, downtime, and response-related metrics.",
            "Filter KPIs by assets, personnel, and event categories.",
            "Consolidate technician comments for review across events.",
            "Review technician participation and associated time information.",
            "Select individual events for export.",
          ],
        },
        {
          id: "handoffs-and-planning",
          title: "Shift handoffs and preventive maintenance",
          summary:
            "Support review and preparation before information is handed off or assignments are published.",
          items: [
            "Curate and edit shift-passdown events throughout the day.",
            "Produce formatted handoff outputs.",
            "Retrieve and review maintenance plans and prepare proposed changes.",
            "Plan weekly PM work using technician groups and filters.",
            "Apply bulk assignments and control when assignments are published.",
          ],
        },
        {
          id: "parts-and-spares",
          title: "Parts and spares analysis",
          summary:
            "Connect parts history, inventory references, and costs for practical research.",
          items: [
            "Search historical parts use with filters and type-ahead search.",
            "Cross-reference BOM and spares information against existing inventory records.",
            "Distinguish existing records from new-part requests and prepare appropriate import or output data.",
            "Analyze parts costs across multiple filtering and visualization dimensions.",
          ],
        },
        {
          id: "team-development",
          title: "Technician development and usability",
          summary:
            "Support team development and make the application easier to use.",
          items: [
            "Prepare technician and team reports to support coaching, strengths, and development—not objective ranking.",
            "Manage technician goals using reusable progression and development libraries.",
            "Provide light and dark interface options.",
            "Offer an integrated tutorial and help experience.",
          ],
        },
      ],
    },
    handoff: {
      title: "From raw events to a useful handoff",
      intro:
        "Retrieval is only the starting point. A supervisor must decide what matters, review technician notes, add context, and prepare a passdown the next person can use. Editable handoff workflows support that judgment rather than treating every retrieved record as a finished message.",
    },
    architecture: {
      title: "Technical architecture at a glance",
      intro:
        "The application is primarily Python desktop software. The layers below describe its architecture at a conceptual level.",
      layers: [
        {
          title: "Desktop interface",
          detail:
            "Python and Qt-style tooling provide filtering, visualization, review, and editing workflows.",
        },
        {
          title: "Data retrieval",
          detail:
            "Database-backed retrieval supplies records for the selected operational scope.",
        },
        {
          title: "Local modeling and transformation",
          detail:
            "Retrieved records are modeled and transformed locally for analysis and workflow use.",
        },
        {
          title: "Workflow preparation",
          detail:
            "Users select, curate, review, and prepare information for the next operational task.",
        },
        {
          title: "Outputs",
          detail:
            "HTML and spreadsheet-oriented exports support handoffs, analysis, and prepared workflow outputs.",
        },
      ],
      note: "Production database structures, integrations, and implementation details are omitted.",
    },
    design: {
      title: "Design around the supervisor’s next action",
      intro:
        "Each workflow centers on the next decision: define scope, review the information, prepare a result, and decide when to share or publish it.",
      principles: [
        {
          title: "Make scope explicit",
          detail:
            "Time windows, categories, asset selections, and other filters help define what a view or output represents.",
        },
        {
          title: "Support review and curation",
          detail:
            "Event selection and editable passdowns give supervisors a way to shape useful handoff information.",
        },
        {
          title: "Separate preparation from publishing",
          detail:
            "Planning and assignment tools include controlled publishing rather than treating every edit as a finished assignment.",
        },
        {
          title: "Help users learn in context",
          detail:
            "Integrated help and interface options support use of an application whose capabilities expanded over time.",
        },
      ],
    },
    validation: {
      title: "Review, testing, and user feedback",
      intro:
        "Review and QA checked both the implementation and its fit with intended maintenance workflows.",
      practices: [
        "Review generated code and application structure.",
        "Test implemented behavior against the intended requirements and workflows.",
        "Investigate issues and revise the implementation.",
        "Use user feedback and requests to inform subsequent product decisions.",
      ],
      note: "This describes the development approach, not a claim of comprehensive automated test coverage or independent certification.",
    },
    outcome:
      "The application grew into a broader set of workflows shaped by maintenance experience and user requests. The work connects industrial domain expertise, product direction, data analysis, and reviewed AI-assisted implementation. Impact remains qualitative; no ROI, adoption, downtime-reduction, labor-savings, or cost-savings figures are published.",
    evidence: {
      title: "Portfolio-created examples",
      items: [
        "operations-workflow-concept",
        "maintenance-analysis-concept",
        "shift-handoff-concept",
      ],
    },
    skills: [
      "Industrial domain expertise",
      "Product thinking",
      "Workflow design",
      "UI design",
      "AI-assisted software development",
      "Python desktop development",
      "Data analysis",
      "Iterative testing and QA",
      "User-centered improvement",
      "Technical leadership",
    ],
    seo: {
      title: "Industrial Operations Intelligence Application",
      description:
        "How Zacharia Lentz conceived, designed, and built a Python desktop application for industrial operations, using AI-assisted development and iterative workflow design.",
      type: "article",
    },
  },
  {
    id: "maintenance-leadership",
    title: "Maintenance Leadership and Reliability Execution",
    deck: "Coordinating people, priorities, and equipment work in a rotating-shift production environment.",
    category: "Maintenance leadership",
    context:
      "Three automated Powerwall production lines operate across four rotating shifts. Zacharia leads 20+ maintenance technicians on one of those shifts.",
    problem:
      "The team must balance urgent equipment recovery with preventive work, reliable passdowns, technician development, and longer-term reliability priorities.",
    role: "Production Engineering Supervisor responsible for shift execution, technician leadership, work prioritization, and cross-functional coordination.",
    actions: [
      "Set daily priorities across preventive work, corrective work, equipment recovery, and reliability follow-up.",
      "Use passdowns and CMMS records to preserve context between rotating shifts.",
      "Coordinate structured root-cause investigation with Production, Engineering, and Controls partners.",
      "Hire, onboard, and train technicians; more than 15 technicians have been brought into the organization under Zacharia’s current supervision.",
    ],
    outcome:
      "Verified result: Zacharia helped move A-shift from lowest- to highest-performing in build-plan achievement while maintaining coverage through headcount reductions. Employer production figures, percentages, downtime data, and cost claims are intentionally not published.",
    skills: [
      "Shift leadership",
      "Reliability execution",
      "Work prioritization",
      "Root-cause investigation",
      "Technician development",
    ],
    artifact: {
      title: "Generic maintenance work lifecycle",
      note: "Original, sanitized model—not an employer process or screenshot.",
      steps: [
        "Detect & make safe",
        "Triage & assign",
        "Diagnose",
        "Repair & verify",
        "Document & pass down",
        "Review recurrence",
      ],
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
    role: "Direct CMMS administrator and frontline maintenance leader who understands both configuration decisions and daily technician use.",
    actions: [
      "Configure settings and validate both his own and other users’ configurations before broad use.",
      "Build custom views and filters around roles, priorities, ownership, and shift needs.",
      "Manage user roles and permissions with least-access and usability tradeoffs in mind.",
      "Create and schedule preventive-maintenance work with clear scope and ownership.",
      "Document workflows and reinforce adoption through technician training.",
    ],
    outcome:
      "Verified boundary: Zacharia directly performs these administrative activities in support of maintenance operations. The system name, employer configuration, records, adoption metrics, and internal data are confidential and are not reproduced here.",
    skills: [
      "CMMS configuration",
      "Workflow design",
      "Roles & permissions",
      "PM governance",
      "Training & documentation",
    ],
    artifact: {
      title: "Synthetic PM governance loop",
      note: "Fictional example showing the decision cycle, not a production configuration.",
      steps: [
        "Define failure mode",
        "Draft task & standard",
        "Assign owner & cadence",
        "Pilot",
        "Review findings",
        "Revise or retire",
      ],
    },
  },
  {
    id: "equipment-qualification",
    title:
      "Equipment Qualification, Commissioning, and Technical Issue Management",
    deck: "Turning equipment observations into traceable issues before shipment and useful context during startup.",
    category: "Equipment readiness",
    context:
      "New automated equipment was inspected and qualified in Italy before shipment to a U.S. manufacturing site.",
    problem:
      "Mechanical, electrical, controls, and operational findings needed clear documentation, ownership, and follow-through before shipment and during startup.",
    role: "Maintenance technical contributor—not project owner—supporting inspection, qualification, issue documentation, and later U.S. startup and commissioning.",
    actions: [
      "Inspect equipment behavior and maintainability during pre-shipment qualification.",
      "Translate observations into 58 detailed, traceable Jira requests for engineering review.",
      "Coordinate clarification and follow-through across technical disciplines.",
      "Carry equipment history into U.S. startup and commissioning support.",
    ],
    outcome:
      "Verified result: 58 documented findings entered the issue-management workflow before shipment, and Zacharia carried that equipment context into U.S. startup support. Project-level schedule, cost, production, and acceptance outcomes are not claimed.",
    skills: [
      "Equipment inspection",
      "Qualification support",
      "Technical writing",
      "Issue management",
      "Commissioning support",
    ],
    artifact: {
      title: "Sanitized qualification checklist",
      note: "Original checklist structure using no employer specifications or proprietary criteria.",
      steps: [
        "Safety & guarding",
        "Mechanical condition",
        "Utilities & interfaces",
        "Sequence observation",
        "Maintainability",
        "Issue evidence & owner",
      ],
    },
  },
];

const demonstrationProject = {
  title: "CMMS Implementation Blueprint",
  label: "Self-directed demonstration using fictional/synthetic data",
  summary:
    "A transparent example of how Zacharia would structure an implementation. This is not a client engagement and contains no employer data or proprietary system configuration.",
  phases: [
    {
      title: "1. Discover",
      detail:
        "Interview maintenance, operations, planners, administrators, and leaders; map current pain points and define decision rights.",
    },
    {
      title: "2. Prepare data",
      detail:
        "Inventory fictional assets, locations, naming standards, criticality, parts, and source-data quality; document migration rules.",
    },
    {
      title: "3. Configure workflows",
      detail:
        "Define request, approval, planning, assignment, execution, verification, closure, and exception paths.",
    },
    {
      title: "4. Set access",
      detail:
        "Create technician, planner, supervisor, administrator, and read-only roles; test permissions against real task scenarios.",
    },
    {
      title: "5. Build PM program",
      detail:
        "Map legacy tasks, normalize instructions, assign assets and owners, set initial cadence, and establish review governance.",
    },
    {
      title: "6. Pilot and validate",
      detail:
        "Run a limited synthetic pilot, record defects and usability friction, validate reports, and control configuration changes.",
    },
    {
      title: "7. Train and launch",
      detail:
        "Deliver role-based technician and administrator training, go-live support, escalation paths, and concise job aids.",
    },
    {
      title: "8. Measure adoption",
      detail:
        "Track fictional indicators such as login completion, work-order data completeness, PM execution, backlog hygiene, and support themes.",
    },
  ],
};

const credentials = [
  {
    title: "MOS 6113",
    detail: "CH-53E helicopter mechanic, United States Marine Corps",
  },
  { title: "Sergeant (E-5)", detail: "Military maintenance leadership" },
  {
    title: "Collateral Duty Inspector",
    detail: "Maintenance quality and procedural-compliance responsibility",
  },
  {
    title: "Aerial observer and desk sergeant",
    detail:
      "Supported flight operations and approximately three years of aviation-maintenance leadership",
  },
  {
    title: "Aviation maintenance supervisor training",
    detail:
      "Aviation Maintenance Workcenter Supervisor training and Naval Aviation Organizational Maintenance Activity Work Center Supervisor’s Course",
  },
  {
    title: "CH-53E maintenance training",
    detail:
      "Organizational maintenance, aircraft turbine-engine maintenance, helicopter power-train maintenance, and hydraulic-systems repair",
  },
  {
    title: "Hack Reactor",
    detail:
      "Certificate, Full Stack Software Engineering · September–December 2021 · 1,000+ hours",
  },
  {
    title: "Sabio",
    detail: "Certificate in Software Engineering · October–December 2018",
  },
];

const contact = {
  summary:
    "Open to maintenance leadership, reliability, maintenance planning, facilities or operations leadership, and adjacent industrial implementation roles.",
  location: "Sparks, Nevada",
  relocation: "Relocating home to the Midland, Michigan area.",
};

export {
  site,
  hero,
  credibility,
  experience,
  caseStudies,
  demonstrationProject,
  credentials,
  contact,
};
