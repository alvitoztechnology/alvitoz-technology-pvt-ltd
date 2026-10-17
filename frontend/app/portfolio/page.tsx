
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore selected digital projects and solutions from Alvitoz Technology.",
};

const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Business Website",
    description:
      "A responsive digital presence designed to communicate a brand, showcase services, and generate enquiries.",
    tags: ["Next.js", "TypeScript", "Responsive UI"],
    style: "project-visual-one",
    mark: "A.",
  },
  {
    number: "02",
    category: "BACKEND ENGINEERING",
    title: "Task Management Platform",
    description:
      "A productivity platform concept for managing tasks, tracking time, and reviewing daily progress.",
    tags: ["Node.js", "PostgreSQL", "REST API"],
    style: "project-visual-two",
    mark: "T.",
  },
  {
    number: "03",
    category: "DASHBOARD DESIGN",
    title: "Business Analytics Dashboard",
    description:
      "A dashboard concept that organizes important business information into a clear, actionable interface.",
    tags: ["React", "Data Visualization", "UI Design"],
    style: "project-visual-three",
    mark: "D.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">OUR WORK</span>
          <h1>
            Ideas into impact.
            <br />
            <span className="gradient-text">Built with purpose.</span>
          </h1>
          <p>
            Explore selected project concepts that demonstrate our approach to
            thoughtful design, dependable engineering, and useful technology.
          </p>
          <Link href="/contact" className="button button-primary">
            Discuss Your Project →
          </Link>
        </div>
        <div className="about-hero-decoration">P</div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">SELECTED PROJECTS</span>
          <h2>
            Designed to solve.
            <br />
            <span className="gradient-text">Engineered to grow.</span>
          </h2>
          <p>
            A look at the kinds of digital experiences and systems we can
            create for businesses.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-visual ${project.style}`}>
                <span className="project-visual-mark">{project.mark}</span>
                <span className="project-visual-label">
                  ALVITOZ / {project.number}
                </span>
                <span className="project-orbit project-orbit-one" />
                <span className="project-orbit project-orbit-two" />
              </div>

              <div className="project-content">
                <span className="eyebrow">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="service-tags">
                  {project.tags.map((tag) => (
                    <span className="service-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="portfolio-note">
          These are illustrative project concepts, not verified client
          engagements. Replace them with your real projects before presenting
          this portfolio to customers.
        </p>
      </section>

      <section className="section">
        <div className="final-cta">
          <span className="eyebrow">YOUR PROJECT COULD BE NEXT</span>
          <h2>
            Have an idea?
            <br />
            <span>Let&apos;s make it real.</span>
          </h2>
          <p>
            Share your goals with us and let&apos;s explore the right solution
            for your business.
          </p>
          <Link href="/contact" className="button button-light">
            Start a Conversation ↗
          </Link>
        </div>
      </section>
    </>
  );
}
