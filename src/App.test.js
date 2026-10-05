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
  expect(container.textContent).toContain("My role");
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

test("Home orders three proof areas around leadership, equipment, and systems", () => {
  const { container, cleanup } = renderAt("/");
  const links = container.querySelectorAll(
    'section[aria-labelledby="selected-proof"] a',
  );
  expect(Array.from(links, (link) => link.getAttribute("href"))).toEqual([
    "/case-studies/maintenance-leadership",
    "/case-studies/equipment-qualification",
    "/case-studies/industrial-operations-intelligence",
  ]);
  expect(links[2].querySelector("h3").textContent).toBe(
    "Industrial Operations Intelligence Application",
  );
  expect(links[2].textContent).toContain(
    "An internal application that grew from a simple maintenance-data problem into tools for analysis, shift handoffs, planning, parts research, and technician development.",
  );
  expect(
    container.querySelector('a[href="/demonstration-project"]'),
  ).toBeNull();
  expect(container.querySelector("main").textContent).toContain(
    "Relocating to the Midland, Michigan area",
  );
  cleanup();
});

test("Proof of Work prioritizes professional evidence and demotes the demonstration", () => {
  const { container, cleanup } = renderAt("/proof-of-work");
  expect(
    Array.from(
      container.querySelectorAll('main a[href^="/case-studies/"]'),
      (link) => link.getAttribute("href"),
    ),
  ).toEqual([
    "/case-studies/industrial-operations-intelligence",
    "/case-studies/maintenance-leadership",
    "/case-studies/equipment-qualification",
    "/case-studies/cmms-administration",
  ]);
  const demonstration = container
    .querySelector('a[href="/demonstration-project"]')
    .closest("details");
  expect(demonstration.open).toBe(false);
  expect(demonstration.textContent).toContain(
    "Self-directed demonstration using fictional/synthetic data",
  );
  cleanup();
});

test("software case study preserves public naming, confidentiality, and AI attribution", () => {
  const { container, cleanup } = renderAt(
    "/case-studies/industrial-operations-intelligence",
  );
  const main = container.querySelector("main");
  expect(main.querySelector("h1").textContent).toBe(
    "Industrial Operations Intelligence Application",
  );
  expect(main.textContent).toContain("Flagship software case study");
  expect(main.querySelectorAll("#role p")[0].textContent).toContain(
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

test("Credentials remain accessible without competing in primary navigation", () => {
  const { container, cleanup } = renderAt("/experience");
  expect(
    Array.from(
      container.querySelectorAll("#primary-navigation a"),
      (link) => link.textContent,
    ),
  ).toEqual(["Home", "Proof of Work", "Experience", "Contact"]);
  expect(container.querySelector('main a[href="/credentials"]')).not.toBeNull();
  expect(
    container.querySelector('footer a[href="/credentials"]'),
  ).not.toBeNull();
  expect(container.querySelector("article ul").children).toHaveLength(6);
  cleanup();
});

test("Flagship keeps AI attribution visible and technical depth optional", () => {
  const { container, cleanup } = renderAt(
    "/case-studies/industrial-operations-intelligence",
  );
  expect(container.querySelector("#role p").closest("details")).toBeNull();
  expect(container.querySelector("#technical-depth details").open).toBe(false);
  expect(container.querySelector("#technical-depth").textContent).toContain(
    "Review generated code and application structure",
  );
  expect(container.querySelector("main").textContent).not.toContain(
    "Skills demonstrated",
  );
  expect(
    container.querySelectorAll('[aria-label="Confidentiality"]'),
  ).toHaveLength(1);
  cleanup();
});

test.each([
  ["maintenance-reliability", "maintenance-leadership"],
  ["maintenance-systems", "cmms-administration"],
  ["industrial-technology", "industrial-operations-intelligence"],
])("%s curates canonical evidence for its audience", async (slug, firstId) => {
  const { container, cleanup } = renderAt(`/for/${slug}`);
  const main = container.querySelector("main");
  expect(
    main.querySelector('a[href^="/case-studies/"]').getAttribute("href"),
  ).toBe(`/case-studies/${firstId}`);
  expect(main.textContent).toContain(
    "Relocating to the Midland, Michigan area",
  );
  expect(main.querySelectorAll('a[href="/contact"]')).toHaveLength(2);
  expect(main.querySelector('a[href="/experience"]')).not.toBeNull();
  expect(main.querySelector("figure")).toBeNull();
  await act(async () => {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  });
  expect(document.querySelector('link[rel="canonical"]').href).toBe(
    `https://zacharia.dev/for/${slug}`,
  );
  expect(document.querySelector('meta[name="robots"]').content).toBe(
    "index,follow",
  );
  expect(main.textContent).not.toMatch(
    /Istari|Software Engineer|AI Engineer|source code available/,
  );
  cleanup();
});

test("Unconfigured role-family routes reach the not-found page", () => {
  const { container, cleanup } = renderAt("/for/unknown");
  expect(container.querySelector("h1").textContent).toBe(
    "That page is not available.",
  );
  cleanup();
});

test("Static metadata hands off to a single current canonical after navigation", async () => {
  document.head.insertAdjacentHTML(
    "beforeend",
    '<link rel="canonical" href="https://zacharia.dev/" data-rh="true"><meta name="description" content="Initial static description" data-rh="true">',
  );
  const { container, cleanup } = renderAt("/");
  await act(async () => {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  });
  act(() =>
    container
      .querySelector('a[href="/for/maintenance-systems"]')
      .dispatchEvent(new MouseEvent("click", { bubbles: true, button: 0 })),
  );
  await act(async () => {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  });
  expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  expect(document.querySelector('link[rel="canonical"]').href).toBe(
    "https://zacharia.dev/for/maintenance-systems",
  );
  expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
  expect(
    document.querySelectorAll('script[type="application/ld+json"]'),
  ).toHaveLength(1);
  act(() =>
    container
      .querySelector('a[href="/contact"]')
      .dispatchEvent(new MouseEvent("click", { bubbles: true, button: 0 })),
  );
  await act(async () => {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  });
  expect(document.querySelector('link[rel="canonical"]').href).toBe(
    "https://zacharia.dev/contact",
  );
  expect(document.querySelector('meta[name="robots"]')).toBeNull();
  expect(
    JSON.parse(
      document.querySelector('script[type="application/ld+json"]').textContent,
    )["@type"],
  ).toBe("WebPage");
  cleanup();
});

test("Escape closes mobile navigation and returns focus to its control", () => {
  const { container, cleanup } = renderAt("/");
  const menu = container.querySelector(
    'button[aria-controls="primary-navigation"]',
  );
  act(() => menu.dispatchEvent(new MouseEvent("click", { bubbles: true })));
  container.querySelector("#primary-navigation a").focus();
  act(() =>
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })),
  );
  expect(menu.getAttribute("aria-expanded")).toBe("false");
  expect(document.activeElement).toBe(menu);
  expect(container.querySelector("main").tabIndex).toBe(-1);
  cleanup();
});

test.each([
  "/",
  "/experience",
  "/contact",
  "/for/maintenance-reliability",
  "/for/maintenance-systems",
  "/for/industrial-technology",
])("%s makes Michigan relocation and remote availability clear", (path) => {
  const { container, cleanup } = renderAt(path);
  const main = container.querySelector("main");
  expect(main.textContent).toContain(
    "Relocating to the Midland, Michigan area.",
  );
  expect(main.textContent).toMatch(
    /Michigan-based and remote (opportunities|roles)/,
  );
  expect(container.querySelector("footer").textContent).toContain(
    "Open to Michigan-based and remote opportunities.",
  );
  cleanup();
});
