import React from "react";
import FeaturedCaseStudy from "../../components/site/FeaturedCaseStudy";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import {
  CardLink,
  Eyebrow,
  Grid,
  Intro,
  PageTitle,
  Section,
  Tag,
  TextLink,
} from "../../components/site/UI";
import {
  caseStudies,
  demonstrationProject,
  proofStudyIds,
} from "../../portfolio";

export default function ProofOfWorkPage() {
  return (
    <Layout>
      <PageMeta
        title="Proof of Work"
        description="Industrial operations software, maintenance leadership, CMMS administration, and equipment qualification case studies from Zacharia Lentz."
        path="/proof-of-work"
      />
      <Main id="main-content">
        <Eyebrow>Selected professional evidence</Eyebrow>
        <PageTitle>Proof of Work</PageTitle>
        <Intro>
          Maintenance leadership, automated equipment, and systems work—shown
          through specific responsibilities and public-safe evidence.
        </Intro>
        <FeaturedCaseStudy />
        <Section>
          <Grid>
            {proofStudyIds
              .map((id) => caseStudies.find((study) => study.id === id))
              .filter((study) => !study.featured)
              .map((study) => (
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
          <details>
            <summary>Additional self-directed CMMS demonstration</summary>
            <p>{demonstrationProject.label}</p>
            <p>{demonstrationProject.summary}</p>
            <CardLink to="/demonstration-project">
              <h2>{demonstrationProject.title}</h2>
              <TextLink>Review the blueprint →</TextLink>
            </CardLink>
          </details>
        </Section>
      </Main>
    </Layout>
  );
}
