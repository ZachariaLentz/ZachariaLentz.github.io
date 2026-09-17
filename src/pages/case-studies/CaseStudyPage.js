import React from "react";
import { Navigate, useParams } from "react-router";
import styled from "styled-components";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import { ButtonLink, Eyebrow, Intro, List, PageTitle, Section, SectionTitle, Tag } from "../../components/site/UI";
import { caseStudies } from "../../portfolio";

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

const Artifact = styled.figure`
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.primary};

  figcaption { margin-bottom: 1.25rem; color: ${({ theme }) => theme.textInverse}; }
  figcaption span { display: block; margin-top: 0.35rem; color: #cbd5e1; font-size: 0.9rem; }
`;

const Flow = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.65rem;
  padding: 0;
  list-style: none;
  counter-reset: artifact-step;

  li {
    position: relative;
    min-height: 86px;
    padding: 1rem;
    border-radius: ${({ theme }) => theme.radiusMd};
    background: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.textPrimary};
    counter-increment: artifact-step;
  }

  li::before {
    display: block;
    margin-bottom: 0.35rem;
    color: ${({ theme }) => theme.secondary};
    font-weight: 800;
    content: counter(artifact-step, decimal-leading-zero);
  }

  @media (max-width: 650px) { grid-template-columns: 1fr; }
`;

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 0;
  list-style: none;

  li { padding: 0.55rem 0.8rem; border-radius: ${({ theme }) => theme.radiusFull}; background: ${({ theme }) => theme.surfaceAlt}; font-weight: 700; }
`;

export default function CaseStudyPage() {
  const { id } = useParams();
  const study = caseStudies.find((item) => item.id === id);
  if (!study) return <Navigate to="/not-found" replace />;

  return (
    <Layout>
      <PageMeta title={study.title} description={study.deck} path={`/case-studies/${study.id}`} type="article" />
      <Main id="main-content">
        <Eyebrow>Sanitized case study</Eyebrow>
        <Tag>{study.category}</Tag>
        <PageTitle>{study.title}</PageTitle>
        <Intro>{study.deck}</Intro>

        <Section>
          <DetailGrid>
            <div><SectionTitle>Context</SectionTitle><p>{study.context}</p></div>
            <div><SectionTitle>Problem</SectionTitle><p>{study.problem}</p></div>
          </DetailGrid>
        </Section>
        <Section>
          <SectionTitle>Zacharia’s role</SectionTitle>
          <p>{study.role}</p>
        </Section>
        <Section>
          <SectionTitle>Actions taken</SectionTitle>
          <List>{study.actions.map((action) => <li key={action}>{action}</li>)}</List>
        </Section>
        <Section>
          <SectionTitle>Verified result or outcome boundary</SectionTitle>
          <p>{study.outcome}</p>
        </Section>
        <Section>
          <SectionTitle>Skills demonstrated</SectionTitle>
          <Skills>{study.skills.map((skill) => <li key={skill}>{skill}</li>)}</Skills>
        </Section>
        <Section>
          <SectionTitle>Sanitized supporting artifact</SectionTitle>
          <Artifact>
            <figcaption><strong>{study.artifact.title}</strong><span>{study.artifact.note}</span></figcaption>
            <Flow>{study.artifact.steps.map((step) => <li key={step}>{step}</li>)}</Flow>
          </Artifact>
        </Section>
        <ButtonLink to="/proof-of-work">Back to Proof of Work</ButtonLink>
      </Main>
    </Layout>
  );
}
