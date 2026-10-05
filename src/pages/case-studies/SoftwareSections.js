import React from "react";
import styled from "styled-components";
import PortfolioArtifact from "../../components/site/PortfolioArtifact";
import {
  Card,
  Grid,
  List,
  Section,
  SectionIntro,
  SectionTitle,
} from "../../components/site/UI";

const CapabilityGrid = styled(Grid)`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

function Details({ items }) {
  return (
    <Grid>
      {items.map((item) => (
        <Card key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </Card>
      ))}
    </Grid>
  );
}

export default function SoftwareSections({ study }) {
  const {
    developmentApproach,
    evolution,
    capabilities,
    architecture,
    design,
    validation,
    handoff,
  } = study;
  const evidence = study.evidence?.items || [];
  const artifact = (id) =>
    evidence.includes(id) ? <PortfolioArtifact id={id} /> : null;
  return (
    <>
      {developmentApproach && (
        <Section id="development">
          <SectionTitle>{developmentApproach.title}</SectionTitle>
          {developmentApproach.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Section>
      )}
      {evolution && (
        <Section id="evolution">
          <SectionTitle>{evolution.title}</SectionTitle>
          <SectionIntro>{evolution.intro}</SectionIntro>
          <Card>
            <h3>{evolution.initialFocus.title}</h3>
            <p>{evolution.initialFocus.detail}</p>
          </Card>
          <SectionIntro>{evolution.note}</SectionIntro>
          <Details items={evolution.expansionThemes} />
        </Section>
      )}
      {architecture && (
        <Section id="architecture">
          <SectionTitle>{architecture.title}</SectionTitle>
          <SectionIntro>{architecture.intro}</SectionIntro>
          {artifact("operations-workflow-concept")}
          <details>
            <summary>High-level technical approach</summary>
            <List>
              {architecture.layers.map((layer) => (
                <li key={layer.title}>
                  <strong>{layer.title}:</strong> {layer.detail}
                </li>
              ))}
            </List>
          </details>
          <p>{architecture.note}</p>
        </Section>
      )}
      {capabilities && (
        <Section id="workflows">
          <SectionTitle>{capabilities.title}</SectionTitle>
          <SectionIntro>{capabilities.intro}</SectionIntro>
          <CapabilityGrid>
            {capabilities.groups.map((group) => (
              <Card key={group.id}>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
                <details>
                  <summary>Explore {group.title.toLowerCase()}</summary>
                  <List>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </List>
                </details>
              </Card>
            ))}
          </CapabilityGrid>
          {artifact("maintenance-analysis-concept")}
        </Section>
      )}
      {handoff && (
        <Section id="handoff">
          <SectionTitle>{handoff.title}</SectionTitle>
          <SectionIntro>{handoff.intro}</SectionIntro>
          {artifact("shift-handoff-concept")}
        </Section>
      )}
      {design && (
        <Section id="design">
          <SectionTitle>{design.title}</SectionTitle>
          <SectionIntro>{design.intro}</SectionIntro>
          <Details items={design.principles} />
        </Section>
      )}
      {validation && (
        <Section id="validation">
          <SectionTitle>{validation.title}</SectionTitle>
          <SectionIntro>{validation.intro}</SectionIntro>
          <List>
            {validation.practices.map((practice) => (
              <li key={practice}>{practice}</li>
            ))}
          </List>
          <p>{validation.note}</p>
        </Section>
      )}
    </>
  );
}
