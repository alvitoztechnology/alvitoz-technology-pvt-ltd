"use client";
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
  return (
    <header className="navbar">
      <Link href="/" className="brand" aria-label="Alvitoz Technology home">
        {/* <span className="brand-mark">A</span> */}
        <span>
          ALVITOZ
          <small>TECHNOLOGY</small>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
      {links.map((link) => {
      const isActive =
        link.href === "/"
          ? pathname === "/"
          : pathname === link.href ||
            pathname.startsWith(`${link.href}/`);

      return (
        <Link
          key={link.href}
          href={link.href}
          className={isActive ? "active" : ""}
          aria-current={isActive ? "page" : undefined}
        >
          {link.label}
        </Link>
      );
    })}
      </nav>

      <div className="navbar-actions">
    <ThemeToggle />

    <Link
      href="/contact"
      className={`button button-primary nav-cta ${
        pathname === "/contact" ? "active" : ""
      }`}
      aria-current={pathname === "/contact" ? "page" : undefined}
    >
      Let's Talk <span>↗</span>
    </Link>
  </div>
    </header>
  );
}
