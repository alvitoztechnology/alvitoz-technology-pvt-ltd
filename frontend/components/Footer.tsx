
import Link from "next/link";
import "./Footer.css";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="brand footer-brand">
        <span className="brand-mark">A</span>
        <span>
          ALVITOZ
          <small>TECHNOLOGY</small>
        </span>
      </Link>

      <p>
        Building meaningful digital experiences with modern technology.
      </p>

      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="footer-bottom">
        <span>© 2026 Alvitoz Technology.</span>
        <span>Innovate. Build. Grow.</span>
      </div>
    </footer>
  );
}
