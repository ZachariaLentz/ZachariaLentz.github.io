import React from "react";
import { Link, Navigate, useParams } from "react-router";
import styled from "styled-components";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import {
  Actions,
  ButtonLink,
  CardLink,
  Eyebrow,
  Grid,
  Intro,
  PageTitle,
  Section,
  SectionTitle,
  SecondaryButtonLink,
  Tag,
  TextLink,
} from "../../components/site/UI";
import {
  caseStudies,
  contact,
  credibility,
  demonstrationProject,
  experience,
  site,
} from "../../portfolio";
import { roleFamilies } from "../../roleFamilies";

const Snapshot = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 1rem;
  margin: 2rem 0;
  div {
    padding: 1rem;
    background: ${({ theme }) => theme.surfaceAlt};
    border-radius: ${({ theme }) => theme.radiusMd};
  }
  dt {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primaryLight};
  }
  dd {
    margin-top: 0.35rem;
    font-weight: 700;
  }
`;

export default function RoleFamilyPage() {
  const { slug } = useParams();
  const family = roleFamilies.find((item) => item.slug === slug);
  if (!family) return <Navigate to="/not-found" replace />;
  const path = `/for/${family.slug}`;
  const studies = family.caseStudyIds.map((id) =>
    caseStudies.find((study) => study.id === id),
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${family.label} | ${site.name}`,
    description: family.description,
    url: `${site.url}${path}`,
    relatedLink: family.caseStudyIds.map(
      (id) => `${site.url}/case-studies/${id}`,
    ),
  };
  return (
    <Layout>
      <PageMeta
        title={family.label}
        description={family.description}
        path={path}
        robots="index,follow"
        jsonLd={jsonLd}
      />
      <Main id="main-content">
        <Eyebrow>{family.label}</Eyebrow>
        <PageTitle>{family.headline}</PageTitle>
        <Intro>{family.intro}</Intro>
        <p>
          <strong>{contact.relocation}</strong> {contact.availability}
        </p>
        <Actions>
          <ButtonLink to="/contact">Start a conversation</ButtonLink>
          <SecondaryButtonLink to="/experience">
            View Experience
          </SecondaryButtonLink>
        </Actions>
        <Snapshot aria-label="Selected career scope">
          {family.credibilityLabels.map((label) => {
            const item = credibility.find((entry) => entry.label === label);
            return (
              <div key={label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            );
          })}
        </Snapshot>
        <Section>
          <SectionTitle>Selected evidence</SectionTitle>
          <Grid>
            {studies.map((study) => (
              <CardLink key={study.id} to={`/case-studies/${study.id}`}>
                <Tag>{study.category}</Tag>
                <h3>{study.title}</h3>
                <p>{study.feature?.homeSummary || study.deck}</p>
                <TextLink>Read case study →</TextLink>
              </CardLink>
            ))}
          </Grid>
          {family.supportingStudyIds.map((id) => {
            const study = caseStudies.find((item) => item.id === id);
            return (
              <p key={id} style={{ marginTop: "1.5rem" }}>
                Supporting evidence:{" "}
                <Link to={`/case-studies/${id}`}>{study.title}</Link>
              </p>
            );
          })}
        </Section>
        <Section>
          <SectionTitle>{family.backgroundTitle}</SectionTitle>
          {family.experienceIds.map((id) => {
            const role = experience.find((item) => item.id === id);
            return (
              <div key={id}>
                <h3>
                  {role.company} · {role.title}
                </h3>
                <p>{role.summary}</p>
              </div>
            );
          })}
          {family.positioningNote && <p>{family.positioningNote}</p>}
          <Link to="/experience">
            See responsibilities and career history →
          </Link>
          {family.showDemonstration && (
            <details>
              <summary>Optional self-directed CMMS demonstration</summary>
              <p>
                {demonstrationProject.label}. {demonstrationProject.summary}
              </p>
              <Link to="/demonstration-project">
                View the CMMS Implementation Blueprint →
              </Link>
            </details>
          )}
        </Section>
        <Section>
          <SectionTitle>Michigan-based and remote opportunities</SectionTitle>
          <p>{family.contactPrompt}</p>
          <ButtonLink to="/contact">Contact me</ButtonLink>
        </Section>
      </Main>
    </Layout>
  );
}
