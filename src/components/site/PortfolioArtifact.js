import React from "react";
import styled from "styled-components";
import { portfolioArtifacts } from "../../portfolioArtifacts";
import { Eyebrow, Tag } from "./UI";

const Figure = styled.figure`
  margin: 2rem 0 0;
  padding: clamp(1rem, 3vw, 2rem);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.surface};
  box-shadow: ${({ theme }) => theme.shadowSm};
  min-width: 0;
  overflow-wrap: anywhere;
  h3 {
    font-size: clamp(1.25rem, 3vw, 1.7rem);
  }
  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  figcaption {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.9rem;
  }
`;
const Disclosure = styled.p`
  display: inline-block;
  padding: 0.4rem 0.65rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  background: ${({ theme }) => theme.surfaceAlt};
  color: ${({ theme }) => theme.primary};
  font-size: 0.85rem;
  font-weight: 800;
`;
const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  padding: 0;
  list-style: none;
  counter-reset: concept-step;
  li {
    min-width: 0;
    margin: 0;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.radiusMd};
    background: ${({ theme }) => theme.surfaceAlt};
    counter-increment: concept-step;
  }
  li::before {
    content: counter(concept-step, decimal-leading-zero) " ↓";
    display: block;
    margin-bottom: 0.6rem;
    color: ${({ theme }) => theme.secondary};
    font-weight: 800;
  }
  strong {
    display: block;
    color: ${({ theme }) => theme.textPrimary};
  }
  p {
    margin: 0.35rem 0 0;
    color: ${({ theme }) => theme.primaryLight};
    font-size: 0.9rem;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
const Branches = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  list-style: none;
  li {
    padding: 0.45rem 0.7rem;
    margin: 0;
    border-radius: ${({ theme }) => theme.radiusFull};
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textInverse};
    font-size: 0.85rem;
  }
`;
const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
const Panel = styled.div`
  min-width: 0;
  padding: 1.1rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  background: ${({ theme }) => theme.surfaceAlt};
  p {
    color: ${({ theme }) => theme.primaryLight};
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
const Scope = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 0 0 1.5rem;
  div:first-child {
    grid-column: 1 / -1;
  }
  dt {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 800;
    color: ${({ theme }) => theme.secondary};
  }
  dd {
    margin: 0.3rem 0 0;
    font-size: 0.95rem;
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
const Bars = styled.div`
  display: grid;
  gap: 0.9rem;
`;
const Bar = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr 20px;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  div {
    height: 0.8rem;
    background: ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.radiusFull};
    overflow: hidden;
  }
  i {
    display: block;
    height: 100%;
    width: ${({ $fraction }) => $fraction}%;
    background: ${({ theme }) => theme.secondary};
  }
`;
const Event = styled.article`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusMd};
  min-width: 0;
  p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;
const Comparison = styled.div`
  margin-top: 1.5rem;
  ${Panel}:last-child {
    border-left: 3px solid ${({ theme }) => theme.secondary};
  }
`;

const Workflow = styled(TwoColumns)`
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  align-items: start;
  ${Steps} {
    grid-template-columns: 1fr;
    gap: 1.35rem;
  }
  ${Steps} li {
    position: relative;
    padding: 0.8rem 1rem;
  }
  ${Steps} li::before {
    content: counter(concept-step, decimal-leading-zero);
    float: left;
    margin-right: 0.75rem;
  }
  ${Steps} li:not(:last-child)::after {
    content: "↓";
    position: absolute;
    bottom: -1.45rem;
    left: 50%;
    color: ${({ theme }) => theme.secondary};
    font-weight: 800;
  }
  ${Branches} {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

function Analysis({ artifact }) {
  const assets = ["PACK-01", "CONV-04", "CELL-07", "LIFT-02"];
  const interruption = artifact.events.reduce(
    (sum, event) => sum + event.interruption,
    0,
  );
  return (
    <>
      <Scope>
        <div>
          <dt>Invented time window</dt>
          <dd>{artifact.scope.date}</dd>
        </div>
        <div>
          <dt>Asset scope</dt>
          <dd>{artifact.scope.assets}</dd>
        </div>
        <div>
          <dt>Category scope</dt>
          <dd>{artifact.scope.categories}</dd>
        </div>
      </Scope>
      <TwoColumns>
        <Panel>
          <h4>Recurring assets · fictional event counts</h4>
          <Bars
            role="img"
            aria-label={assets
              .map(
                (asset) =>
                  `${asset}: ${artifact.events.filter((event) => event.asset === asset).length} fictional events`,
              )
              .join("; ")}
          >
            {assets.map((asset) => {
              const count = artifact.events.filter(
                (event) => event.asset === asset,
              ).length;
              return (
                <Bar
                  key={asset}
                  $fraction={(count / 2) * 100}
                  aria-hidden="true"
                >
                  <span>{asset}</span>
                  <div>
                    <i />
                  </div>
                  <strong>{count}</strong>
                </Bar>
              );
            })}
          </Bars>
        </Panel>
        <Panel>
          <h4>Illustrative scope summary</h4>
          <p>
            <strong>{artifact.events.length} invented events</strong>
          </p>
          <p>
            <strong>{interruption} fictional interruption minutes</strong>
          </p>
          <p>
            Illustration only. These values do not measure production
            performance or improvements.
          </p>
        </Panel>
      </TwoColumns>
      <details>
        <summary>
          Review six fictional events: response, participation & notes
        </summary>
        <h4 style={{ marginTop: "1.5rem" }}>
          Fictional event list · response, participation & notes
        </h4>
        <TwoColumns>
          {artifact.events.map((event) => (
            <Event key={event.id}>
              <h4>
                {event.asset} · {event.time}
              </h4>
              <Tag>{event.category}</Tag>
              <p>
                {event.id} · {event.technician}
              </p>
              <p>
                Invented interruption: {event.interruption} min · response:{" "}
                {event.response} min
              </p>
              <p>{event.note}</p>
            </Event>
          ))}
        </TwoColumns>
      </details>
    </>
  );
}

function Handoff({ artifact }) {
  return (
    <>
      <p>{artifact.date}</p>
      <Steps>
        {artifact.steps.map((step) => (
          <li key={step}>
            <strong>{step}</strong>
          </li>
        ))}
      </Steps>
      <Comparison>
        {artifact.entries.map((entry) => (
          <TwoColumns key={entry.asset} style={{ marginBottom: "1rem" }}>
            <Panel>
              <Eyebrow>Raw event information</Eyebrow>
              <h4>{entry.asset} · raw notes</h4>
              <p>{entry.raw}</p>
            </Panel>
            <Panel>
              <Eyebrow>Curated supervisor handoff</Eyebrow>
              <h4>
                {entry.asset} · {entry.label}
              </h4>
              <p>{entry.curated}</p>
            </Panel>
          </TwoColumns>
        ))}
      </Comparison>
    </>
  );
}

export default function PortfolioArtifact({ id }) {
  const artifact = portfolioArtifacts.find(
    (item) => item.id === id && item.status === "ready",
  );
  if (!artifact) return null;
  return (
    <Figure
      id={artifact.id}
      aria-label={artifact.alt}
      aria-describedby={`${artifact.id}-caption`}
    >
      <Disclosure>{artifact.disclosure}</Disclosure>
      <h3>{artifact.title}</h3>
      {artifact.kind === "workflow" && (
        <Workflow>
          <Steps aria-label="Conceptual information flow">
            {artifact.steps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <p>{step.detail}</p>
              </li>
            ))}
          </Steps>
          <Panel>
            <h4>Supervisor workflow branches</h4>
            <p>
              Each branch turns scoped records into reviewed information for a
              supervisor task.
            </p>
            <Branches>
              {artifact.branches.map((branch) => (
                <li key={branch}>{branch}</li>
              ))}
            </Branches>
            <p>
              Conceptual relationships only. No production systems or
              integration methods are represented.
            </p>
          </Panel>
        </Workflow>
      )}
      {artifact.kind === "analysis" && <Analysis artifact={artifact} />}
      {artifact.kind === "handoff" && <Handoff artifact={artifact} />}
      <figcaption id={`${artifact.id}-caption`}>{artifact.caption}</figcaption>
    </Figure>
  );
}
