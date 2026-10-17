
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities and learn about working with Alvitoz Technology.",
};

const benefits = [
  {
    icon: "✦",
    title: "Meaningful Work",
    description:
      "Contribute to practical digital products and solutions that solve real business problems.",
  },
  {
    icon: "↗",
    title: "Keep Learning",
    description:
      "Explore modern tools, improve your skills, and grow through challenging projects.",
  },
  {
    icon: "◎",
    title: "Collaborative Culture",
    description:
      "Work with people who value clear communication, thoughtful ideas, and teamwork.",
  },
];

const openings = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "India · Remote / Hybrid",
    description:
      "Build accessible, responsive web experiences using React, Next.js, and modern frontend tools.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "India · Remote / Hybrid",
    description:
      "Develop APIs, integrate databases, and build reliable server-side applications.",
    skills: ["Node.js", "REST APIs", "SQL"],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "India · Remote / Hybrid",
    description:
      "Create intuitive interfaces, wireframes, and user journeys for digital products.",
    skills: ["Figma", "Wireframes", "Prototyping"],
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">CAREERS AT ALVITOZ</span>
          <h1>
            Build your future.
            <br />
            <span className="gradient-text">Create what&apos;s next.</span>
          </h1>
          <p>
            Bring your ideas, curiosity, and ambition. Explore opportunities
            to grow your skills while building useful digital experiences.
          </p>
          <a href="#openings" className="button button-primary">
            Explore Opportunities ↓
          </a>
        </div>
        <div className="about-hero-decoration">C</div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">WHY ALVITOZ</span>
          <h2>
            Do work that matters.
            <br />
            <span className="gradient-text">Grow as you go.</span>
          </h2>
          <p>
            We believe great digital solutions start with people who are
            supported, curious, and motivated to solve problems.
          </p>
        </div>

        <div className="career-benefits-grid">
          {benefits.map((benefit) => (
            <article className="career-benefit-card" key={benefit.title}>
              <span className="service-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="openings">
        <div className="section-heading">
          <span className="eyebrow">OPPORTUNITIES</span>
          <h2>
            Find your next
            <br />
            <span className="gradient-text">challenge.</span>
          </h2>
          <p>
            Explore the example roles below. These are sample listings for
            the website design, not confirmation of current vacancies.
          </p>
        </div>

        <div className="career-openings">
          {openings.map((job) => (
            <article className="career-job-card" key={job.title}>
              <div className="career-job-main">
                <span className="eyebrow">{job.department}</span>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <div className="service-tags">
                  {job.skills.map((skill) => (
                    <span className="service-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="career-job-meta">
                <span>◷ {job.type}</span>
                <span>⌖ {job.location}</span>
                <Link
                  href={`/contact?subject=${encodeURIComponent(
                    `Career enquiry: ${job.title}`
                  )}`}
                  className="button button-primary"
                >
                  Express Interest →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="career-note">
          <strong>Don&apos;t see the right role?</strong>
          <p>
            You can still contact us to introduce yourself and share the
            kind of work you&apos;re interested in.
          </p>
          <Link href="/contact" className="service-link">
            Contact Alvitoz Technology <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="final-cta">
          <span className="eyebrow">YOUR NEXT CHAPTER</span>
          <h2>
            Bring your talent.
            <br />
            <span>Let&apos;s build together.</span>
          </h2>
          <p>
            Start a conversation and tell us where you want to make an impact.
          </p>
          <Link href="/contact" className="button button-light">
            Get in Touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}
