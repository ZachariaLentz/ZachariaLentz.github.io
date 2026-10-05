import React from "react";
import styled from "styled-components";
import { CardLink, Eyebrow, Section, Tag, TextLink } from "./UI";
import { caseStudies } from "../../portfolio";

const Feature = styled(CardLink)`
  padding: clamp(1.5rem, 5vw, 3rem);
  border-left: 4px solid ${({ theme }) => theme.secondary};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.surface},
    ${({ theme }) => theme.surfaceAlt}
  );

  h2 {
    max-width: 850px;
    font-size: clamp(1.8rem, 4vw, 3rem);
    letter-spacing: -0.025em;
  }

  p {
    max-width: 780px;
  }
`;

export default function FeaturedCaseStudy({ placement }) {
  const featured = caseStudies.filter((study) => study.featured);
  if (!featured.length) return null;
  return (
    <Section aria-label="Flagship software case study">
      <Eyebrow>Flagship software case study</Eyebrow>
      {featured.map((study) => (
        <Feature key={study.id} to={`/case-studies/${study.id}`}>
          <Tag>{study.category}</Tag>
          <h2>{study.title}</h2>
          <p>
            {placement === "home"
              ? study.feature.homeSummary || study.deck
              : study.deck}
          </p>
          <TextLink>{study.feature.linkLabel} →</TextLink>
        </Feature>
      ))}
    </Section>
  );
}
