// Original public portfolio concepts. No production material was used.
const portfolioArtifacts = [
  {
    id: "operations-workflow-concept",
    kind: "workflow",
    status: "ready",
    title: "From records to operational decisions",
    disclosure: "Portfolio concept — fictional data",
    alt: "Conceptual flow from operational records through scope and retrieval, local transformation, analysis, supervisor workflows, and prepared outputs. Five illustrative workflow branches are shown; no production architecture is represented.",
    caption:
      "An original conceptual model of how information becomes useful work. This diagram describes systems thinking, not production architecture or integration methods.",
    steps: [
      {
        title: "Operational records",
        detail: "Generic maintenance information",
      },
      {
        title: "Scope & retrieval",
        detail: "Choose the question and its boundaries",
      },
      {
        title: "Local modeling / transformation",
        detail: "Organize records for review",
      },
      {
        title: "Analysis & review",
        detail: "Find patterns and inspect context",
      },
      { title: "Supervisor workflow", detail: "Curate, plan, and prepare" },
      {
        title: "Prepared outputs / controlled actions",
        detail: "Review before handoff or publishing",
      },
    ],
    branches: [
      "Event analysis",
      "Shift handoff",
      "PM planning",
      "Parts research",
      "Technician development",
    ],
  },
  {
    id: "maintenance-analysis-concept",
    kind: "analysis",
    status: "ready",
    title: "Scope first. Patterns second. Context always.",
    disclosure: "Portfolio concept — fictional data",
    alt: "Original maintenance-analysis concept with an invented date window, asset and category selections, recurring-asset bars, and six fictional events. Event cards show invented interruption and response minutes, technician participation, and notes.",
    caption:
      "All dates, assets, technicians, identifiers, notes, and numerical values are invented. The layout was created for this portfolio and does not reproduce the internal application. These numbers are not operational results or impact claims.",
    scope: {
      date: "12 April 2030 · 06:00–18:00",
      assets: "PACK-01 · CONV-04 · CELL-07 · LIFT-02",
      categories: "Mechanical · Controls · Material Flow · Planned Work",
    },
    events: [
      {
        id: "EX-101",
        time: "06:20",
        asset: "PACK-01",
        category: "Controls",
        interruption: 18,
        response: 6,
        technician: "Technician A",
        note: "Intermittent photoeye indication observed. Bracket checked; repeat observation requested.",
      },
      {
        id: "EX-102",
        time: "07:10",
        asset: "CONV-04",
        category: "Mechanical",
        interruption: 12,
        response: 4,
        technician: "Technician B",
        note: "Belt tracking adjusted. Monitor alignment during the next run.",
      },
      {
        id: "EX-103",
        time: "08:35",
        asset: "CELL-07",
        category: "Planned Work",
        interruption: 0,
        response: 0,
        technician: "Technician C",
        note: "Planned inspection completed. No follow-up item recorded in this fictional example.",
      },
      {
        id: "EX-104",
        time: "10:05",
        asset: "LIFT-02",
        category: "Material Flow",
        interruption: 9,
        response: 7,
        technician: "Technician A",
        note: "Transfer obstruction cleared. Guide position flagged for review.",
      },
      {
        id: "EX-105",
        time: "11:40",
        asset: "PACK-01",
        category: "Controls",
        interruption: 24,
        response: 5,
        technician: "Technician A + Technician C",
        note: "Photoeye indication returned. Lens cleaned; bracket alignment needs follow-up.",
      },
      {
        id: "EX-106",
        time: "15:05",
        asset: "CONV-04",
        category: "Mechanical",
        interruption: 8,
        response: 3,
        technician: "Technician B",
        note: "Tracking rechecked after adjustment. Record alignment at the next planned stop.",
      },
    ],
  },
  {
    id: "shift-handoff-concept",
    kind: "handoff",
    status: "ready",
    title: "A handoff needs judgment, not just an export",
    disclosure: "Portfolio concept — fictional data",
    alt: "Six-step fictional handoff walkthrough comparing raw event notes with curated supervisor context for PACK-01, CONV-04, and CELL-07. It separates observations, follow-up, and completed work for the next shift.",
    caption:
      "Newly written fictional scenario and original handoff layout. It is not an internal export template, procedure, or production record. Synthetic observations illustrate the distinction between retrieving records and preparing a useful passdown.",
    date: "12 April 2030 · fictional day-to-evening handoff",
    steps: [
      "Retrieve fictional events",
      "Select relevant events",
      "Review technician notes",
      "Add supervisor context",
      "Curate the passdown",
      "Produce a formatted handoff",
    ],
    entries: [
      {
        asset: "PACK-01",
        raw: "EX-105 · Technician A + Technician C: Photoeye indication returned. Lens cleaned; bracket alignment needs follow-up.",
        label: "Follow-up",
        curated:
          "Intermittent photoeye indication recurred during the fictional shift. At the next planned stop, review bracket alignment and record whether the indication returns. Do not treat cleaning as a confirmed fix.",
      },
      {
        asset: "CONV-04",
        raw: "EX-102 / EX-106 · Technician B: Belt tracking adjusted, then rechecked. Record alignment at the next planned stop.",
        label: "Monitor",
        curated:
          "Tracking was adjusted and rechecked. The next shift should confirm alignment during the next run and carry forward any repeat observation.",
      },
      {
        asset: "CELL-07",
        raw: "EX-103 · Technician C: Planned inspection completed; no follow-up item recorded.",
        label: "Completed",
        curated:
          "Planned inspection is complete in this fictional scenario. Keep it in the passdown for continuity; no additional task is proposed.",
      },
    ],
  },
];

export { portfolioArtifacts };
