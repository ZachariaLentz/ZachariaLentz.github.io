import React from "react";
import Layout, { Main } from "../../../components/site/Layout";
import PageMeta from "../../../components/site/PageMeta";
import { Actions, ButtonLink, Eyebrow, Intro, PageTitle, SecondaryButtonLink } from "../../../components/site/UI";

export default function Error404() {
  return (
    <Layout>
      <PageMeta title="Page Not Found" description="The requested page could not be found." path="/not-found" />
      <Main id="main-content">
        <Eyebrow>Error 404</Eyebrow>
        <PageTitle>That page is not available.</PageTitle>
        <Intro>Use the links below to return to Zacharia’s experience or proof of work.</Intro>
        <Actions>
          <ButtonLink to="/">Return home</ButtonLink>
          <SecondaryButtonLink to="/proof-of-work">View Proof of Work</SecondaryButtonLink>
        </Actions>
      </Main>
    </Layout>
  );
}
