import React from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { contact, site } from "../../portfolio";

const Shell = styled.footer`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textInverse};
`;

const Inner = styled.div`
  display: grid;
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 2.5rem 0;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const Title = styled.h2`
  color: inherit;
  font-size: 1.1rem;
`;

const Copy = styled.p`
  max-width: 460px;
  color: #cbd5e1;
  font-size: 0.95rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.55rem;

  a {
    color: #e2e8f0;
  }
`;

const Bottom = styled.div`
  grid-column: 1 / -1;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  color: #cbd5e1;
  font-size: 0.88rem;
`;

export default function Footer() {
  return (
    <Shell>
      <Inner>
        <div>
          <Title>{site.name}</Title>
          <Copy>{contact.location}. {contact.relocation}</Copy>
        </div>
        <Nav aria-label="Footer navigation">
          <Title>Explore</Title>
          <Link to="/proof-of-work">Proof of Work</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/credentials">Credentials</Link>
        </Nav>
        <Nav aria-label="Contact links">
          <Title>Connect</Title>
          <a href={`mailto:${site.email}`}>Email Zacharia</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub profile</a>
        </Nav>
        <Bottom>© {new Date().getFullYear()} {site.name}. Maintenance leadership × technical systems.</Bottom>
      </Inner>
    </Shell>
  );
}
