import React from "react";
import Layout, { Main } from "../../components/site/Layout";
import PageMeta from "../../components/site/PageMeta";
import {
  Card,
  Eyebrow,
  Grid,
  Intro,
  PageTitle,
  Section,
} from "../../components/site/UI";
import { credentials } from "../../portfolio";

export default function CredentialsPage() {
  return (
    <Layout>
      <PageMeta
        title="Credentials"
        description="Verified military maintenance roles and software-engineering certificate programs completed by Zacharia Lentz."
        path="/credentials"
      />
      <Main id="main-content">
        <Eyebrow>Verified foundation</Eyebrow>
        <PageTitle>Credentials</PageTitle>
        <Intro>
          My military maintenance qualifications and software-development
          training support my industrial maintenance and technical leadership
          background.
        </Intro>
        <Section>
          <Grid>
            {credentials.map((credential) => (
              <Card key={credential.title}>
                <h2>{credential.title}</h2>
                <p>{credential.detail}</p>
              </Card>
            ))}
          </Grid>
        </Section>
      </Main>
    </Layout>
  );
}
