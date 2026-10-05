import React from "react";
import { Link } from "react-router";
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
  SectionIntro,
  SectionTitle,
  SecondaryButtonLink,
  Tag,
  TextLink,
} from "../../components/site/UI";
import { caseStudies, contact, credibility, hero, site } from "../../portfolio";

const Hero = styled.section`
  padding: clamp(1rem, 4vw, 3rem) 0 clamp(3rem, 7vw, 5rem);
`;

const ProofBar = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.surface};
  overflow: hidden;

  div {
    padding: 1.15rem;
    border-right: 1px solid ${({ theme }) => theme.border};
  }

  div:last-child {
    border-right: 0;
  }
  dt {
    margin-bottom: 0.35rem;
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
  }
  dd {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 0.95rem;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    div {
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr 1fr;
    div {
      border-right: 0;
    }
  }
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Production Engineering Supervisor - Energy Maintenance",
    homeLocation: { "@type": "Place", name: "Sparks, Nevada" },
    sameAs: [site.linkedin, site.github],
    knowsAbout: [
      "Industrial maintenance",
      "Reliability",
      "CMMS administration",
      "Automated manufacturing",
      "Maintenance workflows",
    ],
  },
};

export default function Home() {
  const flagship = caseStudies.find((study) => study.featured);
  return (
    <Layout>
      <PageMeta jsonLd={jsonLd} />
      <Main id="main-content">
        <Hero>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <PageTitle>{hero.headline}</PageTitle>
          <Intro>{hero.summary}</Intro>
          <p>
            <strong>{contact.relocation}</strong> {contact.availability}
          </p>
          <Actions>
            <ButtonLink to="/proof-of-work">View Proof of Work</ButtonLink>
            <SecondaryButtonLink to="/experience">
              View Experience
            </SecondaryButtonLink>
            <SecondaryButtonLink to="/contact">Contact Me</SecondaryButtonLink>
          </Actions>
        </Hero>

        <ProofBar aria-label="Career credibility snapshot">
          {credibility.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </ProofBar>

        <Section aria-labelledby="selected-proof">
          <Eyebrow>Selected proof</Eyebrow>
          <SectionTitle id="selected-proof">
            Leading people. Understanding equipment. Improving systems.
          </SectionTitle>
          <Grid>
            <CardLink to="/case-studies/maintenance-leadership">
              <Tag>Leadership & execution</Tag>
              <h3>Maintenance leadership</h3>
              <p>
                Shift priorities, technician development, equipment recovery,
                and cross-functional reliability work.
              </p>
              <TextLink>See leadership evidence →</TextLink>
            </CardLink>
            <CardLink to="/case-studies/equipment-qualification">
              <Tag>Equipment & automation</Tag>
              <h3>Qualification & commissioning</h3>
              <p>
                Italy equipment qualification, 58 Jira requests, and later U.S.
                startup support.
              </p>
              <TextLink>See equipment evidence →</TextLink>
            </CardLink>
            <CardLink to="/case-studies/industrial-operations-intelligence">
              <Tag>Systems & workflow · flagship</Tag>
              <h3>{flagship.title}</h3>
              <p>{flagship.feature.homeSummary}</p>
              <TextLink>Explore the application →</TextLink>
            </CardLink>
          </Grid>
        </Section>
        <Section>
          <Eyebrow>Background</Eyebrow>
          <SectionTitle>
            From aviation maintenance to automated manufacturing
          </SectionTitle>
          <SectionIntro>
            USMC CH-53E maintenance, customer-facing field service, and hands-on
            production-equipment work inform my approach to leading maintenance.
            Direct CMMS administration and software-development training add
            depth to that operational foundation.
          </SectionIntro>
          <Actions>
            <SecondaryButtonLink to="/experience">
              View career history
            </SecondaryButtonLink>
            <SecondaryButtonLink to="/case-studies/cmms-administration">
              CMMS administration evidence
            </SecondaryButtonLink>
          </Actions>
        </Section>

        <Section>
          <Eyebrow>Location and next step</Eyebrow>
          <SectionTitle>
            Based in Sparks, NV. Relocating to Midland, MI.
          </SectionTitle>
          <SectionIntro>
            Open to Michigan-based and remote opportunities in{" "}
            <Link to="/for/maintenance-reliability">
              maintenance leadership
            </Link>
            , <Link to="/for/maintenance-systems">maintenance systems</Link>,
            and{" "}
            <Link to="/for/industrial-technology">industrial technology</Link>.
          </SectionIntro>
          <ButtonLink to="/contact">Start a conversation</ButtonLink>
        </Section>
      </Main>
    </Layout>
  );
}
