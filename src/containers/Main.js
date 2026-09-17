import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/home/HomeComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Error404 from "../pages/errors/error404/Error";
import ProofOfWorkPage from "../pages/case-studies/ProofOfWorkPage";
import CaseStudyPage from "../pages/case-studies/CaseStudyPage";
import DemonstrationProjectPage from "../pages/case-studies/DemonstrationProjectPage";
import CredentialsPage from "../pages/credentials/CredentialsPage";

export default function Main() {
  return (
    <BrowserRouter basename="/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/proof-of-work" element={<ProofOfWorkPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyPage />} />
        <Route path="/demonstration-project" element={<DemonstrationProjectPage />} />
        <Route path="/credentials" element={<CredentialsPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
