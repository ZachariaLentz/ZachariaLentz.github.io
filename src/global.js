import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset & Base Styles */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  #root {
    min-height: 100vh;
  }

  body {
    min-width: 320px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontBase};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    transition: background-color ${({ theme }) => theme.transitionBase};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.textPrimary};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontXxxxl};
    font-weight: 700;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontXxxl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontXxl};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontXl};
  }

  h5, h6 {
    font-size: ${({ theme }) => theme.fontLg};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.7;
  }

  a {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitionFast};

    &:hover {
      color: ${({ theme }) => theme.accent};
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.secondary};
      outline-offset: 3px;
    }
  }

  button {
    font-family: ${({ theme }) => theme.fontFamily};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitionBase};

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.secondary};
      outline-offset: 3px;
    }
  }

  /* Lists */
  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-left: ${({ theme }) => theme.spacing.lg};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.textSecondary};
  }

  /* Code & Preformatted */
  code, pre {
    font-family: ${({ theme }) => theme.fontFamilyMono};
    background-color: ${({ theme }) => theme.surfaceAlt};
    border-radius: ${({ theme }) => theme.radiusMd};
  }

  code {
    padding: 2px 6px;
    font-size: ${({ theme }) => theme.fontSm};
  }

  pre {
    padding: ${({ theme }) => theme.spacing.md};
    overflow-x: auto;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  th, td {
    padding: ${({ theme }) => theme.spacing.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  th {
    background-color: ${({ theme }) => theme.surfaceAlt};
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary};
  }

  /* Form Elements */
  input, textarea, select {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontBase};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.radiusMd};
    background-color: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.textPrimary};
    transition: all ${({ theme }) => theme.transitionFast};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.secondary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.secondary}20;
    }

    &::placeholder {
      color: ${({ theme }) => theme.textTertiary};
    }
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.surfaceAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 5px;

    &:hover {
      background: ${({ theme }) => theme.borderDark};
    }
  }

  /* Print Styles */
  @media print {
    body {
      background: white;
    }
  }

  @media (max-width: 520px) {
    body {
      font-size: 17px;
      line-height: 1.7;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;
