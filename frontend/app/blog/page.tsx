
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./Blog.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore insights on web development, backend engineering, software design, and technology from Alvitoz Technology.",
};

const articles = [
  {
    slug: "building-modern-websites",
    category: "WEB DEVELOPMENT",
    date: "Oct 10, 2026",
    readTime: "5 min read",
    title: "What Makes a Modern Business Website Effective?",
    excerpt:
      "Explore the essentials of responsive design, performance, accessibility, and user experience for business websites.",
    style: "blog-visual-one",
    mark: "</>",
  },
  {
    slug: "backend-api-design",
    category: "BACKEND ENGINEERING",
    date: "Oct 06, 2026",
    readTime: "7 min read",
    title: "The Fundamentals of Designing Reliable APIs",
    excerpt:
      "Learn how thoughtful endpoint design, validation, error handling, and documentation make APIs easier to maintain.",
    style: "blog-visual-two",
    mark: "{ }",
  },
  {
    slug: "database-design-basics",
    category: "DATABASES",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    title: "Database Design Decisions That Matter",
    excerpt:
      "Understand relationships, constraints, indexing, and data consistency when planning an application database.",
    style: "blog-visual-three",
    mark: "DB",
  },
  {
    slug: "typescript-for-backend",
    category: "PROGRAMMING",
    date: "Sep 21, 2026",
    readTime: "6 min read",
    title: "Why TypeScript Helps Backend Teams",
    excerpt:
      "See how types, interfaces, and compiler checks can improve code clarity and reduce common mistakes.",
    style: "blog-visual-four",
    mark: "TS",
  },
  {
    slug: "from-development-to-deployment",
    category: "DEVOPS",
    date: "Sep 15, 2026",
    readTime: "8 min read",
    title: "From Local Development to Production",
    excerpt:
      "A practical overview of environment variables, deployment pipelines, logs, and production readiness.",
    style: "blog-visual-five",
    mark: "↗",
  },
  {
    slug: "designing-better-user-experiences",
    category: "DESIGN",
    date: "Sep 08, 2026",
    readTime: "4 min read",
    title: "Small UX Improvements That Make a Difference",
    excerpt:
      "Discover how clear feedback, readable content, useful forms, and consistent patterns improve digital experiences.",
    style: "blog-visual-six",
    mark: "✳",
  },
];

export default function BlogPage() {
  return (
    <main className="blog-page">
      <section className="page-hero blog-hero">
    <div className="page-hero-inner">
      <span className="eyebrow">THE ALVITOZ JOURNAL</span>

      <h1>
        Ideas worth sharing.
        <br />
        <span className="gradient-text">Knowledge worth building.</span>
      </h1>

      <p>
        Practical insights on software engineering, digital experiences,
        and technology that helps businesses move forward.
      </p>

      <a href="#articles" className="button button-primary">
        Explore Articles <span>↗</span>
      </a>
    </div>

    <div className="blog-hero-visual" aria-hidden="true">
      <Image
        src="/images/blog.png"
        alt=""
        fill
        priority
        sizes="(max-width: 650px) 100vw, 50vw"
        className="blog-hero-image"
      />

      <span className="blog-hero-orb blog-hero-orb-one" />
      <span className="blog-hero-orb blog-hero-orb-two" />
    </div>

    <div className="about-hero-decoration" aria-hidden="true">
      B
    </div>
  </section>


      <section className="section" id="articles">
        <div className="section-heading">
          <span className="eyebrow">LATEST INSIGHTS</span>
          <h2>
            Learn something
            <br />
            <span className="gradient-text">new today.</span>
          </h2>
          <p>
            Browse our sample articles on development, design, and modern
            software practices.
          </p>
        </div>

        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.slug}>
              <div className={`blog-visual ${article.style}`}>
                <span className="blog-visual-mark">{article.mark}</span>
                <span className="blog-visual-brand">ALVITOZ / INSIGHTS</span>
              </div>

              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <p className="blog-date">{article.date}</p>
                <h3>{article.title}</h3>
                <p className="blog-excerpt">{article.excerpt}</p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="service-link"
                >
                  Read article <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </section>

      <section className="section">
        <div className="final-cta">
          <span className="eyebrow">LET&apos;S TALK TECHNOLOGY</span>
          <h2>
            Have a project
            <br />
            <span>we should write about?</span>
          </h2>
          <p>
            Get in touch to discuss your goals, technical challenges, or
            potential collaboration.
          </p>
          <Link href="/contact" className="button button-light">
            Contact Us ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
