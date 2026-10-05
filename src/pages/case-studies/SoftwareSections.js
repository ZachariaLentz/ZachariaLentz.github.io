import React from "react";
import styled from "styled-components";
import PortfolioArtifact from "../../components/site/PortfolioArtifact";
import {
  Grid,
  List,
  Section,
  SectionIntro,
  SectionTitle,
} from "../../components/site/UI";

const Reading = styled.div`
  max-width: 780px;
`;
const TechnicalDetails = styled.details`
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusMd};
  background: ${({ theme }) => theme.surface};
  h3 {
    margin-top: 1.5rem;
  }
`;

export default function SoftwareSections({ study }) {
  const { evolution, capabilities, architecture, design, validation, handoff } =
    study;
  const evidence = study.evidence?.items || [];
  const artifact = (id) =>
    evidence.includes(id) ? <PortfolioArtifact id={id} /> : null;
  return (
    <>
      <Section id="context">
        <SectionTitle>The operational problem</SectionTitle>
        <Reading>
          <p>{study.context}</p>
          <p>{study.problem}</p>
        </Reading>
      </Section>
      <Section id="built">
        <SectionTitle>{study.built.title}</SectionTitle>
        <SectionIntro>{study.built.summary}</SectionIntro>
        <h3>{evolution.title}</h3>
        <Reading>
          <p>
            {evolution.intro} What began as retrieval and export expanded into
            tools for reviewing recurring work, preparing the next shift, and
            connecting supporting information.
          </p>
        </Reading>
        {artifact("operations-workflow-concept")}
      </Section>
      <Section id="workflows">
        <SectionTitle>
          Example: find the events that need attention
        </SectionTitle>
        <SectionIntro>
          Time, asset, and category filters narrow the question. Recurring-event
          views, participation information, and consolidated notes help a
          supervisor review the work before deciding what to follow up.
        </SectionIntro>
        {artifact("maintenance-analysis-concept")}
      </Section>
      <Section id="handoff">
        <SectionTitle>{handoff.title}</SectionTitle>
        <SectionIntro>{handoff.intro}</SectionIntro>
        {artifact("shift-handoff-concept")}
      </Section>
      <Section id="role">
        <SectionTitle>My role and AI-assisted development</SectionTitle>
        <Reading>
          <p>{study.role}</p>
        </Reading>
      </Section>
      <Section id="outcome">
        <SectionTitle>What the work demonstrates</SectionTitle>
        <Reading>
          <p>{study.outcome}</p>
        </Reading>
      </Section>
      <Section id="technical-depth">
        <SectionTitle>Optional technical and workflow depth</SectionTitle>
        <TechnicalDetails>
          <summary>
            Explore capabilities, design decisions, and review practices
          </summary>
          <Reading>
            <h3 id="architecture">{architecture.title}</h3>
            <p>{architecture.intro}</p>
            <List>
              {architecture.layers.map((layer) => (
                <li key={layer.title}>
                  <strong>{layer.title}:</strong> {layer.detail}
                </li>
              ))}
            </List>
            <h3>{capabilities.title}</h3>
          </Reading>
          <Grid>
            {capabilities.groups.map((group) => (
              <div key={group.id}>
                <h4>{group.title}</h4>
                <p>{group.summary}</p>
                <List>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </List>
              </div>
            ))}
          </Grid>
          <Reading>
            <h3>{design.title}</h3>
            <List>
              {design.principles.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.detail}
                </li>
              ))}
            </List>
            <h3 id="validation">{validation.title}</h3>
            <p>{validation.intro}</p>
            <List>
              {validation.practices.map((practice) => (
                <li key={practice}>{practice}</li>
              ))}
            </List>
            <p>{study.developmentApproach.paragraphs[1]}</p>
            <h3>Evidence and methodology note</h3>
            <p>{validation.note}</p>
            <p>{study.evidenceBoundary}</p>
          </Reading>
        </TechnicalDetails>
      </Section>
    </>
  );
}
