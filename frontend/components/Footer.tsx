
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import "./Footer.css";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Cloud Solutions", href: "/services/cloud-solutions" },
  { label: "Digital Strategy", href: "/services/digital-strategy" },
  { label: "Product Engineering", href: "/services/product-engineering" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", symbol: "in" },
  { label: "Twitter", href: "https://twitter.com/", symbol: "𝕏" },
  { label: "Instagram", href: "https://www.instagram.com/", symbol: "◎" },
  // { label: "GitHub", href: "https://github.com/", symbol: "⌘" },
  { label: "YouTube", href: "https://www.youtube.com/", symbol: "▶" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-globe" aria-hidden="true">
        <div className="footer-globe-sphere" />
        <span className="footer-orbit footer-orbit-one" />
        <span className="footer-orbit footer-orbit-two" />
      </div>

      <div className="footer-main">
        {/* Brand column */}
        <div className="footer-brand-column">
          <Link href="/" className="footer-brand">
            {/* <span className="footer-brand-mark">A</span> */}

            <span className="footer-brand-text">
              <strong>ALVITOZ</strong>
              <small>TECHNOLOGY</small>
            </span>
          </Link>

          <p className="footer-description">
            Empowering businesses with
            <br />
            scalable and innovative technology.
          </p>

          <Link href="/contact" className="footer-cta">
            Start a Project
            <ArrowRight size={15} strokeWidth={1.8} />
          </Link>

          <div className="footer-socials">
  {socialLinks.map((social) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="footer-social-link"
    >
      <span>{social.symbol}</span>
    </a>
  ))}
</div>
        </div>

        {/* Quick links */}
        <div className="footer-column footer-quick-links">
          <h3>Quick Links</h3>

          <nav aria-label="Quick links">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div className="footer-column footer-services">
          <h3>Services</h3>

          <nav aria-label="Our services">
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="footer-bottom">
        <p>© 2026 Alvitoz Technology. All rights reserved.</p>
        <p>Innovate. Build. Grow.</p>
      </div>
    </footer>
  );
}
