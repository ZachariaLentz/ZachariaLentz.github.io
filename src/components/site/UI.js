import styled from "styled-components";
import { Link } from "react-router";

export const Eyebrow = styled.p`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.secondary};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const PageTitle = styled.h1`
  max-width: 900px;
  margin-bottom: 1.25rem;
  font-size: clamp(2.2rem, 7vw, 4.6rem);
  letter-spacing: -0.045em;
  line-height: 1.02;
`;

export const Intro = styled.p`
  max-width: 780px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: clamp(1.08rem, 2.3vw, 1.3rem);
  line-height: 1.65;
`;

export const Section = styled.section`
  padding: clamp(2.5rem, 6vw, 4.5rem) 0;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

export const SectionTitle = styled.h2`
  max-width: 760px;
  margin-bottom: 0.75rem;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  letter-spacing: -0.025em;
`;

export const SectionIntro = styled.p`
  max-width: 720px;
  margin-bottom: 2rem;
  font-size: 1.05rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 1rem;
`;

export const Card = styled.article`
  padding: clamp(1.25rem, 3vw, 1.75rem);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.surface};
  box-shadow: ${({ theme }) => theme.shadowSm};
`;

export const CardLink = styled(Link)`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusLg};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.textPrimary};
  box-shadow: ${({ theme }) => theme.shadowSm};
  transition: border-color ${({ theme }) => theme.transitionFast}, box-shadow ${({ theme }) => theme.transitionFast}, transform ${({ theme }) => theme.transitionFast};

  &:hover {
    border-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textPrimary};
    text-decoration: none;
    box-shadow: ${({ theme }) => theme.shadowMd};
    transform: translateY(-3px);
  }

  p {
    flex: 1;
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  width: fit-content;
  margin-bottom: 1rem;
  padding: 0.35rem 0.65rem;
  border-radius: ${({ theme }) => theme.radiusFull};
  background: ${({ theme }) => theme.surfaceAlt};
  color: ${({ theme }) => theme.secondary};
  font-size: 0.8rem;
  font-weight: 700;
`;

export const TextLink = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-weight: 700;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
`;

const buttonStyles = `
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;
  border: 2px solid #2563eb;
  border-radius: 8px;
  background: #2563eb;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
`;

export const ButtonLink = styled(Link)`
  ${buttonStyles}

  &:hover {
    background: #1d4ed8;
    color: #ffffff;
    text-decoration: none;
  }
`;

export const ButtonAnchor = styled.a`
  ${buttonStyles}

  &:hover {
    background: #1d4ed8;
    color: #ffffff;
    text-decoration: none;
  }
`;

export const SecondaryButtonLink = styled(ButtonLink)`
  background: transparent;
  color: ${({ theme }) => theme.secondary};

  &:hover {
    background: ${({ theme }) => theme.surfaceAlt};
    color: ${({ theme }) => theme.secondary};
  }
`;

export const List = styled.ul`
  padding-left: 1.25rem;

  li {
    margin-bottom: 0.65rem;
  }
`;
