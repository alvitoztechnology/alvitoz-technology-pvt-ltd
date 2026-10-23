
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore digital project concepts and solutions from Alvitoz Technology.",
};

const projects = [
  {
    number: "01",
    category: "SOFTWARE APPLICATION",
    title: "Business Management Platform",
    description:
      "A business workspace concept designed to organize information and simplify everyday operations.",
    tags: ["Next.js", "TypeScript", "Responsive UI"],
    image: "/images/foodvito.png",
    imageAlt: "Business management dashboard concept",
  },
  {
    number: "02",
    category: "MOBILE APPLICATION",
    title: "E-commerce Mobile App",
    description:
      "A mobile shopping experience concept focused on product discovery and a straightforward customer journey.",
    tags: ["Mobile UI", "User Experience", "Responsive Design"],
    image: "/images/ravito.png",
    imageAlt: "E-commerce mobile application concept",
  },
  {
    number: "03",
    category: "DASHBOARD DESIGN",
    title: "Business Analytics Dashboard",
    description:
      "An analytics interface concept that presents business metrics and data visualizations in one place.",
    tags: ["React", "Data Visualization", "UI Design"],
    image: "/images/vitomart.png",
    imageAlt: "Business analytics dashboard concept",
  },
  {
    number: "04",
    category: "DASHBOARD DESIGN",
    title: "Business Analytics Dashboard",
    description:
      "An analytics interface concept that presents business metrics and data visualizations in one place.",
    tags: ["React", "Data Visualization", "UI Design"],
    image: "/images/dravito.png",
    imageAlt: "Business analytics dashboard concept",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero portfolio-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">✦ OUR PORTFOLIO</span>
          <h1>
            Our Work.
            <br />
            <span className="gradient-text">Ideas into impact.</span>
          </h1>
          <p>
            Explore digital product concepts and experiences that demonstrate
            our approach to thoughtful design and dependable engineering.
          </p>
          <Link href="/contact" className="button button-primary">
            Discuss Your Project →
          </Link>
        </div>
        <div className="about-hero-decoration">P</div>
      </section>

      <section className="section portfolio-section">
        <div className="section-heading">
          <span className="eyebrow">SELECTED PROJECTS</span>
          <h2>
            Designed to solve.
            <br />
            <span className="gradient-text">Engineered to grow.</span>
          </h2>
          <p>
            Explore examples of digital experiences and systems designed
            around business needs.
          </p>
        </div>

        <div className="portfolio-grid portfolio-image-grid">
          {projects.map((project) => (
            <article className="project-card portfolio-image-card" key={project.number}>
              <div className="portfolio-image-wrap">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={380}
                  height={195}
                  className="portfolio-project-image"
                />
                <span className="portfolio-image-number">
                  {project.number}
                </span>
              </div>

              <div className="project-content">
                <span className="portfolio-category">
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="service-tags">
                  {project.tags.map((tag) => (
                    <span className="service-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/contact" className="portfolio-project-link">
                  Discuss a Similar Project <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="portfolio-note">
          These images and project descriptions are illustrative concepts,
          not verified client engagements. Replace them with real work or
          label them clearly before publishing.
        </p>
      </section>

      <section className="section">
        <div className="final-cta portfolio-cta">
          <span className="eyebrow">YOUR PROJECT COULD BE NEXT</span>
          <h2>
            Have an idea?
            <br />
            <span>Let&apos;s make it real.</span>
          </h2>
          <p>
            Share your goals with us and let&apos;s explore the right digital
            solution for your business.
          </p>
          <Link href="/contact" className="button button-light">
            Start a Conversation ↗
          </Link>
        </div>
      </section>
    </>
  );
}
