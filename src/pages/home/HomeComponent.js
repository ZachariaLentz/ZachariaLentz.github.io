import React from "react";
import styled from "styled-components";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import { Actions, ButtonLink, CardLink, Eyebrow, Grid, Intro, PageTitle, Section, SectionIntro, SectionTitle, SecondaryButtonLink, Tag, TextLink } from "../../components/site/UI";
import { caseStudies, credibility, hero, site } from "../../portfolio";

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

  div:last-child { border-right: 0; }
  dt { margin-bottom: 0.35rem; color: ${({ theme }) => theme.textTertiary}; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; }
  dd { color: ${({ theme }) => theme.textPrimary}; font-size: 0.95rem; font-weight: 700; }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    div { border-bottom: 1px solid ${({ theme }) => theme.border}; }
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    div { border-right: 0; }
  }
`;

const Bridge = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 720px) { grid-template-columns: 1fr; }
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
    knowsAbout: ["Industrial maintenance", "Reliability", "CMMS administration", "Automated manufacturing", "Industrial implementation"],
  },
};

export default function Home() {
  return (
    <Layout>
      <PageMeta jsonLd={jsonLd} />
      <Main id="main-content">
        <Hero>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <PageTitle>{hero.headline}</PageTitle>
          <Intro>{hero.summary}</Intro>
          <Actions>
            <ButtonLink to="/proof-of-work">View Proof of Work</ButtonLink>
            <SecondaryButtonLink to="/experience">View Experience</SecondaryButtonLink>
            <SecondaryButtonLink to="/contact">Contact Me</SecondaryButtonLink>
          </Actions>
        </Hero>

        <ProofBar aria-label="Career credibility snapshot">
          {credibility.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
        </ProofBar>

        <Section>
          <Eyebrow>Selected evidence</Eyebrow>
          <SectionTitle>Proof of work</SectionTitle>
          <SectionIntro>Sanitized case studies show how maintenance leadership, equipment work, and systems administration connect in practice.</SectionIntro>
          <Grid>
            {caseStudies.map((study) => (
              <CardLink key={study.id} to={`/case-studies/${study.id}`}>
                <Tag>{study.category}</Tag>
                <h3>{study.title}</h3>
                <p>{study.deck}</p>
                <TextLink>Read case study →</TextLink>
              </CardLink>
            ))}
          </Grid>
        </Section>

        <Section>
          <Bridge>
            <div>
              <Eyebrow>The primary lane</Eyebrow>
              <SectionTitle>Maintenance leadership and reliability execution</SectionTitle>
            </div>
            <div>
              <p>Frontline credibility comes first: equipment troubleshooting, preventive and corrective maintenance, rotating-shift leadership, technician development, and cross-functional reliability work.</p>
              <p>CMMS administration, technical documentation, field service, qualification support, and software training create a practical bridge into industrial implementation—not a claim of external SaaS consulting experience.</p>
              <SecondaryButtonLink to="/demonstration-project">View CMMS implementation blueprint</SecondaryButtonLink>
            </div>
          </Bridge>
        </Section>

        <Section>
          <Eyebrow>Location and next step</Eyebrow>
          <SectionTitle>Based in Sparks. Relocating home to Midland.</SectionTitle>
          <SectionIntro>Open to maintenance leadership, reliability, planning, facilities or operations leadership, and adjacent industrial implementation roles.</SectionIntro>
          <ButtonLink to="/contact">Start a conversation</ButtonLink>
        </Section>
      </Main>
    </Layout>
  );
}
