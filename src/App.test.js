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
  act(() => root.render(<HelmetProvider><App /></HelmetProvider>));
  return { container, cleanup: () => act(() => root.unmount()) };
}

afterEach(() => { document.body.innerHTML = ""; });

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
  const button = container.querySelector('button[aria-controls="primary-navigation"]');
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
  expect(container.textContent).toContain("Verified result or outcome boundary");
  expect(container.textContent).toContain("Sanitized supporting artifact");
  cleanup();
});

test("demonstration project clearly disclaims client work", () => {
  const { container, cleanup } = renderAt("/demonstration-project");
  expect(container.textContent).toContain("Self-directed demonstration using fictional/synthetic data");
  expect(container.textContent).toContain("does not represent external client work");
  cleanup();
});
