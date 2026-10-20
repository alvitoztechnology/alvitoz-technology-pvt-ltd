
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Alvitoz Technology",
  description:
    "Discover the mission, values, and approach behind Alvitoz Technology.",
};

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We explore better ways to solve problems using thoughtful design and modern technology.",
  },
  {
    number: "02",
    title: "Quality",
    description:
      "We prioritize reliable engineering, maintainable code, and experiences that work.",
  },
  {
    number: "03",
    title: "Client Focus",
    description:
      "We listen, communicate clearly, and align our work with your business goals.",
  },
  {
    number: "04",
    title: "Integrity",
    description:
      "We believe in honest communication, accountability, and transparent collaboration.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">GET TO KNOW US</span>
          <h1>
            Technology with purpose.
            <br />
            <span className="gradient-text">People at the center.</span>
          </h1>
          <p>
            We help ambitious businesses turn complex challenges into
            meaningful digital experiences through thoughtful design,
            engineering, and collaboration.
          </p>
          <Link href="/contact" className="button button-primary">
            Let&apos;s Work Together →
          </Link>
        </div>

        <div className="about-hero-image">
          <Image
            src="/images/hero-about.jpg"
            alt="The Alvitoz team collaborating on digital solutions"
            width={800}
            height={500}
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="about-story">
          <div>
            <span className="eyebrow">OUR STORY</span>
            <h2>
              Building digital solutions that make a{" "}
              <span className="gradient-text">real difference.</span>
            </h2>
          </div>

          <div className="story-copy">
            <p>
              At Alvitoz Technology, our focus is simple: understand the
              problem, choose the right technology, and build solutions that
              deliver practical value.
            </p>
            <p>
              From websites and applications to backend systems and digital
              platforms, we aim to make technology useful, dependable, and
              ready to grow alongside your business.
            </p>
            <p>
              We believe great outcomes come from a strong partnership,
              clear communication, and a commitment to continuous improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-mission">
        <div className="mission-grid">
          <article className="mission-card mission-primary">
            <span className="mission-icon">◎</span>
            <span className="eyebrow">OUR MISSION</span>
            <h2>Turn challenges into opportunities.</h2>
            <p>
              Deliver thoughtful, scalable technology that helps businesses
              work smarter and create better digital experiences.
            </p>
          </article>

          <article className="mission-card">
            <span className="mission-icon">↗</span>
            <span className="eyebrow">OUR VISION</span>
            <h2>Make digital progress achievable.</h2>
            <p>
              Build lasting technology partnerships and help businesses
              confidently navigate an evolving digital world.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE BELIEVE</span>
          <h2>
            The values behind
            <br />
            <span className="gradient-text">every decision.</span>
          </h2>
          <p>
            Our principles shape how we collaborate, solve problems, and
            deliver every project.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.number}>
              <span className="value-number">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="final-cta">
          <div className="final-cta-content">
            <span className="eyebrow">YOUR IDEA, OUR NEXT CHALLENGE</span>
            <h2>
              Let&apos;s create something
              <br />
              <span>meaningful together.</span>
            </h2>
            <p>
              Have a vision for your next digital product? We&apos;d love to
              hear about it.
            </p>
            <Link href="/contact" className="button button-light">
              Start a Conversation ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
