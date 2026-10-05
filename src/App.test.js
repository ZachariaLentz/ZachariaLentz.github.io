import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

global.IS_REACT_ACT_ENVIRONMENT = true;

function renderAt(path) {
  window.history.pushState({}, "", path);
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() =>
    root.render(
      <HelmetProvider>
        <App />
      </HelmetProvider>,
    ),
  );
  return { container, cleanup: () => act(() => root.unmount()) };
}

afterEach(() => {
  document.body.innerHTML = "";
});

test("home presents the approved positioning and three primary actions", () => {
  const { container, cleanup } = renderAt("/");
  expect(container.textContent).toContain("Maintenance & Reliability Leader");
  expect(container.textContent).toContain("View Proof of Work");
  expect(container.textContent).toContain("View Experience");
  expect(container.textContent).toContain("Contact Me");
  cleanup();
});

test("mobile navigation exposes an accessible expanded state", () => {
  const { container, cleanup } = renderAt("/");
  const button = container.querySelector(
    'button[aria-controls="primary-navigation"]',
  );
  expect(button.getAttribute("aria-expanded")).toBe("false");
  act(() => button.dispatchEvent(new MouseEvent("click", { bubbles: true })));
  expect(button.getAttribute("aria-expanded")).toBe("true");
  cleanup();
});

test("experience keeps Tesla periods separate and uses Sparks", () => {
  const { container, cleanup } = renderAt("/experience");
  expect(container.textContent).toContain("April 2024–Present");
  expect(container.textContent).toContain("March 2023–April 2024");
  expect(container.textContent).toContain("March 2020–November 2021");
  expect(container.textContent).toContain("Sparks, Nevada");
  cleanup();
});

test("case study route renders required structure", () => {
  const { container, cleanup } = renderAt("/case-studies/cmms-administration");
  expect(container.textContent).toContain("Zacharia’s role");
  expect(container.textContent).toContain("Actions taken");
  expect(container.textContent).toContain(
    "Verified result or outcome boundary",
  );
  expect(container.textContent).toContain("Sanitized supporting artifact");
  cleanup();
});

test("demonstration project clearly disclaims client work", () => {
  const { container, cleanup } = renderAt("/demonstration-project");
  expect(container.textContent).toContain(
    "Self-directed demonstration using fictional/synthetic data",
  );
  expect(container.textContent).toContain(
    "does not represent external client work",
  );
  cleanup();
});

test.each(["/", "/proof-of-work"])(
  "%s features the software study once before supporting studies",
  (path) => {
    const { container, cleanup } = renderAt(path);
    const links = container.querySelectorAll(
      'a[href="/case-studies/industrial-operations-intelligence"]',
    );
    expect(links).toHaveLength(1);
    expect(links[0].querySelector("h2").textContent).toBe(
      "Industrial Operations Intelligence Application",
    );
    expect(links[0].textContent).toContain(
      "Industrial Operations Intelligence Application",
    );
    const homeSummary =
      "An internal application that grew from a simple maintenance-data problem into tools for analysis, shift handoffs, planning, parts research, and technician development.";
    if (path === "/") expect(links[0].textContent).toContain(homeSummary);
    else {
      expect(links[0].textContent).not.toContain(homeSummary);
      expect(links[0].textContent).toContain(
        "A Python desktop application that grew from maintenance-event retrieval",
      );
    }
    const firstStudy = container.querySelector('a[href^="/case-studies/"]');
    expect(firstStudy.getAttribute("href")).toBe(
      "/case-studies/industrial-operations-intelligence",
    );
    cleanup();
  },
);

test("software case study preserves public naming, confidentiality, and AI attribution", () => {
  const { container, cleanup } = renderAt(
    "/case-studies/industrial-operations-intelligence",
  );
  const main = container.querySelector("main");
  expect(main.querySelector("h1").textContent).toBe(
    "Industrial Operations Intelligence Application",
  );
  expect(main.textContent).toContain("Flagship software case study");
  expect(main.querySelectorAll("#development p")[0].textContent).toContain(
    "I conceived and designed the application",
  );
  expect(main.querySelector('[role="note"]').textContent).toContain(
    "This project was developed in an employment setting.",
  );
  expect(main.textContent).toContain(
    "I conceived and designed the application and built it using substantial AI assistance.",
  );
  expect(main.textContent).toContain(
    "The application is primarily Python desktop software.",
  );
  expect(main.textContent).not.toContain(
    "An internal application that grew from a simple maintenance-data problem",
  );
  expect(main.textContent).toContain("type-ahead search");
  expect(main.textContent).toContain(
    "coaching, strengths, and development—not objective ranking",
  );
  expect(main.textContent).not.toMatch(
    /Tesla|Powerwall|Gigafactory|Istari|predictive search/,
  );
  expect(main.textContent).not.toContain("Portfolio-created examples");
  expect(main.querySelectorAll("figure")).toHaveLength(3);
  for (const figure of main.querySelectorAll("figure")) {
    expect(figure.getAttribute("aria-label")).toBeTruthy();
    expect(figure.textContent).toContain("Portfolio concept — fictional data");
    expect(figure.querySelector("figcaption")).not.toBeNull();
  }
  for (const link of main.querySelectorAll('nav a[href^="#"]')) {
    expect(main.querySelector(link.getAttribute("href"))).not.toBeNull();
  }
  cleanup();
});

test.each([
  "maintenance-leadership",
  "cmms-administration",
  "equipment-qualification",
])("existing %s study keeps its artifact and actions", (id) => {
  const { container, cleanup } = renderAt(`/case-studies/${id}`);
  expect(container.textContent).toContain("Actions taken");
  expect(container.querySelector("figure figcaption")).not.toBeNull();
  expect(container.querySelector('[role="note"]')).toBeNull();
  cleanup();
});

test("unknown case study reaches the not-found page", () => {
  const { container, cleanup } = renderAt("/case-studies/unknown");
  expect(container.querySelector("h1").textContent).toBe(
    "That page is not available.",
  );
  cleanup();
});

test("synthetic artifacts render consistent fictional records", () => {
  const { container, cleanup } = renderAt(
    "/case-studies/industrial-operations-intelligence",
  );
  expect(
    container.querySelector("#operations-workflow-concept"),
  ).not.toBeNull();
  expect(
    container.querySelector("#maintenance-analysis-concept").textContent,
  ).toContain("71 fictional interruption minutes");
  expect(
    container.querySelector("#shift-handoff-concept").textContent,
  ).toContain("Do not treat cleaning as a confirmed fix.");
  expect(
    container
      .querySelector("#maintenance-analysis-concept")
      .querySelectorAll("article"),
  ).toHaveLength(6);
  cleanup();
});
