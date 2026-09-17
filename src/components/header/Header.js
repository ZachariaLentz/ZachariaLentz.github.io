import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import styled from "styled-components";

const Shell = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
`;

const Bar = styled.div`
  display: flex;
  width: min(1120px, calc(100% - 2rem));
  min-height: 68px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Brand = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.02em;

  &:hover {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  min-width: 44px;
  min-height: 44px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusMd};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.primary};
  font-size: 1.25rem;

  @media (max-width: 860px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.15rem;

  @media (max-width: 860px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    position: absolute;
    top: 68px;
    right: 0;
    left: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 0.75rem 1rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.surface};
    box-shadow: ${({ theme }) => theme.shadowMd};
  }
`;

const Item = styled(NavLink)`
  padding: 0.55rem 0.7rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.92rem;
  font-weight: 700;

  &:hover,
  &.active {
    background: ${({ theme }) => theme.surfaceAlt};
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
  }

  @media (max-width: 860px) {
    padding: 0.8rem;
  }
`;

const links = [
  ["/", "Home"],
  ["/proof-of-work", "Proof of Work"],
  ["/experience", "Experience"],
  ["/credentials", "Credentials"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <Shell>
      <Bar>
        <Brand to="/" aria-label="Zacharia Lentz home">Zacharia Lentz</Brand>
        <MenuButton
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </MenuButton>
        <Navigation id="primary-navigation" aria-label="Primary navigation" $open={open}>
          {links.map(([to, label]) => (
            <Item key={to} to={to} end={to === "/"}>{label}</Item>
          ))}
        </Navigation>
      </Bar>
    </Shell>
  );
}
