
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

import "./Navbar.css";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${menuOpen ? "navbar-menu-open" : ""}`}>
      {/* Brand */}
      <Link
        href="/"
        className="brand"
        aria-label="Alvitoz Technology home"
        onClick={closeMenu}
      >
        <span>
          ALVITOZ
          <small>TECHNOLOGY</small>
        </span>
      </Link>

      {/* Mobile menu toggle */}
      <button
        type="button"
        className={`mobile-menu-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Navigation */}
      <nav
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "menu-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "active" : ""}
            aria-current={isActive(link.href) ? "page" : undefined}
            style={{ "--item-index": index } as React.CSSProperties}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile-only contact link */}
        <Link
          href="/contact"
          className={`mobile-contact-link ${
            pathname === "/contact" ? "active" : ""
          }`}
          aria-current={pathname === "/contact" ? "page" : undefined}
          onClick={closeMenu}
        >
          Let's Talk <span>↗</span>
        </Link>
      </nav>

      {/* Existing theme toggle and desktop CTA */}
      <div className="navbar-actions">
        <ThemeToggle />

        <Link
          href="/contact"
          className={`button button-primary nav-cta ${
            pathname === "/contact" ? "active" : ""
          }`}
          aria-current={pathname === "/contact" ? "page" : undefined}
          onClick={closeMenu}
        >
          Let's Talk <span>↗</span>
        </Link>
      </div>
    </header>
  );
}
