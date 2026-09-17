import React from "react";
import styled from "styled-components";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import { Eyebrow, Intro, List, PageTitle, Section } from "../../components/site/UI";
import { experience } from "../../portfolio";

const Timeline = styled.ol`
  padding: 0;
  list-style: none;
`;

const Role = styled.li`
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 2rem;
  margin: 0;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 680px) { grid-template-columns: 1fr; gap: 0.75rem; }
`;

const Date = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.95rem;
  font-weight: 800;
`;

const Meta = styled.p`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.textTertiary};
  font-size: 0.95rem;
  font-weight: 700;
`;

export default function ExperiencePage() {
  return (
    <Layout>
      <PageMeta title="Experience" description="Accurate maintenance, field service, automated manufacturing, and military aviation experience for Zacharia Lentz." path="/experience" />
      <Main id="main-content">
        <Eyebrow>Chronological career history</Eyebrow>
        <PageTitle>Experience</PageTitle>
        <Intro>Maintenance leadership is the primary throughline. CMMS administration, field service, qualification work, and software training strengthen the bridge to industrial implementation.</Intro>
        <Section>
          <Timeline>
            {experience.map((role) => (
              <Role key={`${role.company}-${role.duration}`}>
                <Date>{role.duration}</Date>
                <article>
                  <h2>{role.title}</h2>
                  <Meta>{role.company} · {role.location}</Meta>
                  <p>{role.summary}</p>
                  <List>{role.highlights.map((item) => <li key={item}>{item}</li>)}</List>
                </article>
              </Role>
            ))}
          </Timeline>
        </Section>
      </Main>
    </Layout>
  );
}
