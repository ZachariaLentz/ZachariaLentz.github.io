import React from "react";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import { CardLink, Eyebrow, Grid, Intro, PageTitle, Section, SectionIntro, SectionTitle, Tag, TextLink } from "../../components/site/UI";
import { caseStudies, demonstrationProject } from "../../portfolio";

export default function ProofOfWorkPage() {
  return (
    <Layout>
      <PageMeta title="Proof of Work" description="Sanitized maintenance leadership, CMMS administration, and equipment qualification case studies from Zacharia Lentz." path="/proof-of-work" />
      <Main id="main-content">
        <Eyebrow>Evidence, not confidential data</Eyebrow>
        <PageTitle>Proof of Work</PageTitle>
        <Intro>Each case study defines Zacharia’s role, actions, and outcome boundary. Supporting artifacts are original and sanitized.</Intro>
        <Section>
          <Grid>
            {caseStudies.map((study) => (
              <CardLink key={study.id} to={`/case-studies/${study.id}`}>
                <Tag>{study.category}</Tag>
                <h2>{study.title}</h2>
                <p>{study.deck}</p>
                <TextLink>Read case study →</TextLink>
              </CardLink>
            ))}
          </Grid>
        </Section>
        <Section>
          <Eyebrow>Adjacent implementation lane</Eyebrow>
          <SectionTitle>{demonstrationProject.title}</SectionTitle>
          <SectionIntro>{demonstrationProject.summary}</SectionIntro>
          <CardLink to="/demonstration-project">
            <Tag>Demonstration project</Tag>
            <h3>{demonstrationProject.label}</h3>
            <p>Discovery, data preparation, workflow configuration, permissions, PM migration, pilot testing, training, go-live, and adoption measures.</p>
            <TextLink>Review the blueprint →</TextLink>
          </CardLink>
        </Section>
      </Main>
    </Layout>
  );
}
