import React from "react";
import { Navigate, useParams } from "react-router";
import styled from "styled-components";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import {
  ButtonLink,
  Eyebrow,
  Intro,
  List,
  PageTitle,
  Section,
  SectionTitle,
  Tag,
} from "../../components/site/UI";
import SoftwareSections from "./SoftwareSections";
import { caseStudies, site } from "../../portfolio";

const Notice = styled.aside`
  margin: 2rem 0;
  padding: 1.25rem;
  border-left: 4px solid ${({ theme }) => theme.secondary};
  border-radius: ${({ theme }) => theme.radiusMd};
  background: ${({ theme }) => theme.surfaceAlt};
  p {
    margin: 0;
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const Contents = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-bottom: 2rem;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Artifact = styled.figure`
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.primary};

  figcaption {
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.textInverse};
  }
  figcaption span {
    display: block;
    margin-top: 0.35rem;
    color: #cbd5e1;
    font-size: 0.9rem;
  }
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

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 0;
  list-style: none;

  li {
    padding: 0.55rem 0.8rem;
    border-radius: ${({ theme }) => theme.radiusFull};
    background: ${({ theme }) => theme.surfaceAlt};
    font-weight: 700;
  }
`;

export default function CaseStudyPage() {
  const { id } = useParams();
  const study = caseStudies.find((item) => item.id === id);
  if (!study) return <Navigate to="/not-found" replace />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.seo?.description || study.deck,
    url: `${site.url}/case-studies/${study.id}`,
    author: { "@type": "Person", name: site.name },
  };

  return (
    <Layout>
      <PageMeta
        title={study.seo?.title || study.title}
        description={study.seo?.description || study.deck}
        path={`/case-studies/${study.id}`}
        type="article"
        jsonLd={jsonLd}
      />
      <Main id="main-content">
        <Eyebrow>{study.eyebrow || "Sanitized case study"}</Eyebrow>
        <Tag>{study.category}</Tag>
        <PageTitle>{study.title}</PageTitle>
        <Intro>{study.deck}</Intro>

        {study.confidentiality && (
          <Notice role="note" aria-label="Confidentiality">
            <p>{study.confidentiality}</p>
          </Notice>
        )}
        {study.format === "software" && (
          <Contents aria-label="On this page">
            <a href="#context">Problem</a>
            <a href="#built">Application & evolution</a>
            <a href="#workflows">Analysis example</a>
            <a href="#handoff">Handoff example</a>
            <a href="#role">My role</a>
            <a href="#outcome">Result</a>
            <a href="#technical-depth">Optional depth</a>
          </Contents>
        )}
        {study.format === "software" ? (
          <SoftwareSections study={study} />
        ) : (
          <>
            <Section id="context">
              <DetailGrid>
                <div>
                  <SectionTitle>Context</SectionTitle>
                  <p>{study.context}</p>
                </div>
                <div>
                  <SectionTitle>Problem</SectionTitle>
                  <p>{study.problem}</p>
                </div>
              </DetailGrid>
            </Section>
            <Section id="role">
              <SectionTitle>{study.ownership?.title || "My role"}</SectionTitle>
              {study.ownership ? (
                <List>
                  {study.ownership.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </List>
              ) : (
                <p>{study.role}</p>
              )}
            </Section>
            {study.actions && (
              <Section>
                <SectionTitle>Actions taken</SectionTitle>
                <List>
                  {study.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </List>
              </Section>
            )}
            <Section id="outcome">
              <SectionTitle>Verified result or outcome boundary</SectionTitle>
              <p>{study.outcome}</p>
            </Section>
            <Section>
              <SectionTitle>Skills demonstrated</SectionTitle>
              <Skills>
                {study.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </Skills>
            </Section>
            {study.artifact && study.artifact.status !== "planned" && (
              <Section>
                <SectionTitle>Sanitized supporting artifact</SectionTitle>
                <Artifact>
                  <figcaption>
                    <strong>{study.artifact.title}</strong>
                    <span>{study.artifact.note}</span>
                  </figcaption>
                  <Flow>
                    {study.artifact.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </Flow>
                </Artifact>
              </Section>
            )}
          </>
        )}
        <ButtonLink to="/proof-of-work">Back to Proof of Work</ButtonLink>
      </Main>
    </Layout>
  );
}
