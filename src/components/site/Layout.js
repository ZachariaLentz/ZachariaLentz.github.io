import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Frame = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SkipLink = styled.a`
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textInverse};
  transform: translateY(-160%);

  &:focus {
    transform: translateY(0);
  }
`;

export const Main = styled.main`
  flex: 1;
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding: clamp(2.5rem, 7vw, 5rem) 0;
`;

export default function Layout({ children, mainId = "main-content" }) {
  return (
    <Frame>
      <SkipLink href={`#${mainId}`}>Skip to main content</SkipLink>
      <Header />
      {children}
      <Footer />
    </Frame>
  );
}
