import React from "react";
import styled from "styled-components";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import { ButtonAnchor, Card, Eyebrow, Grid, Intro, PageTitle, Section } from "../../components/site/UI";
import { contact, site } from "../../portfolio";

const ContactCard = styled(Card)`
  h2 { font-size: 1rem; color: ${({ theme }) => theme.textTertiary}; text-transform: uppercase; letter-spacing: 0.08em; }
  p, a { font-size: 1.08rem; }
`;

export default function ContactPage() {
  return (
    <Layout>
      <PageMeta title="Contact" description="Contact Zacharia Lentz about maintenance leadership, reliability, industrial operations, or technical implementation opportunities." path="/contact" />
      <Main id="main-content">
        <Eyebrow>Start a conversation</Eyebrow>
        <PageTitle>Contact</PageTitle>
        <Intro>{contact.summary}</Intro>
        <Section>
          <Grid>
            <ContactCard><h2>Email</h2><a href={`mailto:${site.email}`}>{site.email}</a></ContactCard>
            <ContactCard><h2>Phone</h2><a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a></ContactCard>
            <ContactCard><h2>Location</h2><p>{contact.location}</p><p><strong>{contact.relocation}</strong></p></ContactCard>
          </Grid>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <ButtonAnchor href={`mailto:${site.email}`}>Email Zacharia</ButtonAnchor>
            <ButtonAnchor href={site.linkedin} target="_blank" rel="noreferrer">View LinkedIn profile</ButtonAnchor>
          </div>
        </Section>
      </Main>
    </Layout>
  );
}
