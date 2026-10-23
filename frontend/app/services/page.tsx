
import type { Metadata } from "next";
import Link from "next/link";

import './services.css'

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore web development, backend engineering, UI/UX design, and digital solutions from Alvitoz Technology.",
};

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Web Development",
    description:
      "Modern, responsive websites designed to communicate your brand and turn visitors into customers.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    number: "02",
    icon: "⚙",
    title: "Backend Development",
    description:
      "Secure APIs, business logic, authentication, and scalable server-side systems built for reliability.",
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    number: "03",
    icon: "✳",
    title: "UI/UX Design",
    description:
      "Intuitive digital experiences that balance visual appeal, usability, and your customers' needs.",
    tags: ["User Research", "Wireframes", "Prototypes"],
  },
  {
    number: "04",
    icon: "↗",
    title: "Custom Software",
    description:
      "Purpose-built applications and business tools designed around your workflows and requirements.",
    tags: ["Web Apps", "Integrations", "Automation"],
  },
  {
    number: "05",
    icon: "☁",
    title: "Cloud & Deployment",
    description:
      "Deployment workflows and server configuration to help applications run reliably in production.",
    tags: ["Docker", "CI/CD", "Cloud"],
  },
  {
    number: "06",
    icon: "⟳",
    title: "Maintenance & Support",
    description:
      "Ongoing improvements, bug fixes, performance optimization, and technical support as you grow.",
    tags: ["Optimization", "Updates", "Support"],
  },
];

export default function ServicesPage() {
  return (
    <>
      
<section className="page-hero">
  <div className="page-hero-inner">
    <span className="eyebrow">WHAT WE DO</span>

    <h1>
      Digital services for
      <br />
      <span className="gradient-text">ambitious ideas.</span>
    </h1>

    <p>
      From the first concept to production and beyond, we help transform
      business challenges into practical digital solutions.
    </p>

    <Link href="/contact" className="button button-primary">
      Discuss Your Project →
    </Link>
  </div>

  <div className="services-hero-visual" aria-hidden="true">
    <div className="services-hero-orb services-orb-one" />
    <div className="services-hero-orb services-orb-two" />

    <div className="services-hero-phone">
      <div className="phone-camera" />
      <div className="phone-screen">
        <span className="phone-mini-label">ALVITOZ TECHNOLOGY</span>
        <h3>
          Build
          <br />
          What's Next
        </h3>

        <div className="phone-screen-image">
          <span>✳</span>
          <span>↗</span>
          <span>⌘</span>
        </div>

        <div className="phone-screen-line phone-line-long" />
        <div className="phone-screen-line phone-line-short" />

        <div className="phone-screen-row">
          <span>✓</span>
          <div className="phone-screen-line phone-line-long" />
        </div>

        <div className="phone-screen-row">
          <span>✓</span>
          <div className="phone-screen-line phone-line-short" />
        </div>

        <div className="phone-bottom-nav">
          <span>⌂</span>
          <span>▤</span>
          <span>◉</span>
        </div>
      </div>
    </div>

    <div className="services-floating-card floating-card-one">
      <span className="floating-icon">✳</span>
      <span>Modern Design</span>
    </div>

    <div className="services-floating-card floating-card-two">
      <span className="floating-icon">▣</span>
      <span>Scalable Solutions</span>
    </div>

    <div className="services-floating-card floating-card-three">
      <span className="floating-icon">♧</span>
      <span>Ongoing Support</span>
    </div>

    <div className="services-dot-pattern" />
  </div>
</section>


      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">OUR EXPERTISE</span>
          <h2>
            The right solutions.
            <br />
            <span className="gradient-text">Built around you.</span>
          </h2>
          <p>
            Flexible technology services to help your business launch, improve,
            and scale its digital presence.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span className="service-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="service-link"
                aria-label={`Enquire about ${service.title}`}
              >
                Discuss this service <span>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="final-cta">
          <span className="eyebrow">LET'S BUILD SOMETHING</span>
          <h2>
            Have a challenge?
            <br />
            <span>We have a way forward.</span>
          </h2>
          <p>
            Tell us what you want to build. We’ll discuss your requirements and
            explore the right approach together.
          </p>
          <Link href="/contact" className="button button-light">
            Start a Conversation ↗
          </Link>
        </div>
      </section>
    </>
  );
}
