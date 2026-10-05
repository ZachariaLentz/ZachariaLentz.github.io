import React from "react";
import { Link } from "react-router";
import styled from "styled-components";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import {
  Eyebrow,
  Intro,
  List,
  PageTitle,
  Section,
  SectionTitle,
  Grid,
  CardLink,
  TextLink,
} from "../../components/site/UI";
import { roleFamilies } from "../../roleFamilies";
import { contact, experience } from "../../portfolio";

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

  &:not(:first-child) h2 {
    font-size: clamp(1.3rem, 3vw, 1.7rem);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const Date = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.95rem;
  font-weight: 800;
`;

const Meta = styled.p`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  font-weight: 700;
`;

export default function ExperiencePage() {
  return (
    <Layout>
      <PageMeta
        title="Experience"
        description="Maintenance leadership, field service, automated manufacturing, and military aviation experience for Zacharia Lentz."
        path="/experience"
      />
      <Main id="main-content">
        <Eyebrow>Chronological career history</Eyebrow>
        <PageTitle>Experience</PageTitle>
        <Intro>
          Industrial maintenance leadership is my primary throughline. My
          background connects hands-on equipment work, maintenance systems,
          field service, and military aviation.
        </Intro>
        <p>{contact.relocation} Open to Michigan-based and remote roles.</p>
        <p>
          <Link to="/credentials">
            Military qualifications and software-development training →
          </Link>
        </p>
        <Section>
          <Timeline>
            {experience.map((role) => (
              <Role key={`${role.company}-${role.duration}`}>
                <Date>{role.duration}</Date>
                <article>
                  <h2>{role.title}</h2>
                  <Meta>
                    {role.company} · {role.location}
                  </Meta>
                  <p>{role.summary}</p>
                  <List>
                    {role.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </List>
                </article>
              </Role>
            ))}
          </Timeline>
        </Section>
        <Section>
          <SectionTitle>Explore fit by role family</SectionTitle>
          <Grid>
            {roleFamilies.map((family) => (
              <CardLink key={family.slug} to={`/for/${family.slug}`}>
                <h3>{family.label}</h3>
                <TextLink>View selected evidence →</TextLink>
              </CardLink>
            ))}
          </Grid>
        </Section>
      </Main>
    </Layout>
  );
}
