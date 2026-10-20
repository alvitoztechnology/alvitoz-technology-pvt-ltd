
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
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
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="navbar-actions">
    <ThemeToggle />

    <Link
      href="/contact"
      className="button button-primary nav-cta"
    >
      Let's Talk <span>↗</span>
    </Link>
  </div>
    </header>
  );
}
