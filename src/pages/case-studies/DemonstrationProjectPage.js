import React from "react";
import styled from "styled-components";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import { Card, Eyebrow, Grid, Intro, PageTitle, Section, SectionTitle, Tag } from "../../components/site/UI";
import { demonstrationProject } from "../../portfolio";

const Notice = styled.aside`
  margin-top: 2rem;
  padding: 1rem 1.25rem;
  border-left: 4px solid ${({ theme }) => theme.warning};
  background: #fffbeb;
  color: #78350f;
  font-weight: 700;
`;

const Sequence = styled(Grid)`
  counter-reset: implementation-phase;
`;

const Phase = styled(Card)`
  counter-increment: implementation-phase;
  h2 { font-size: 1.2rem; }
`;

export default function DemonstrationProjectPage() {
  return (
    <Layout>
      <PageMeta title={demonstrationProject.title} description={demonstrationProject.summary} path="/demonstration-project" />
      <Main id="main-content">
        <Eyebrow>Industrial implementation approach</Eyebrow>
        <Tag>Demonstration project</Tag>
        <PageTitle>{demonstrationProject.title}</PageTitle>
        <Intro>{demonstrationProject.summary}</Intro>
        <Notice role="note">{demonstrationProject.label}. It does not represent external client work.</Notice>
        <Section>
          <SectionTitle>Implementation rollout plan</SectionTitle>
          <Sequence>
            {demonstrationProject.phases.map((phase) => (
              <Phase key={phase.title}>
                <h2>{phase.title}</h2>
                <p>{phase.detail}</p>
              </Phase>
            ))}
          </Sequence>
        </Section>
      </Main>
    </Layout>
  );
}
