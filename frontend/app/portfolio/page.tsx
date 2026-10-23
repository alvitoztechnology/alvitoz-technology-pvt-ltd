
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore digital project concepts and solutions from Alvitoz Technology.",
};

const projects = [
  {
    number: "01",
    category: "SOFTWARE APPLICATION",
  title: "Foodvito – Food Ordering & Delivery Platform",
  description:
    "A customer-focused food ordering platform designed to connect customers with restaurants through convenient ordering and delivery services. Built around a low-commission model to help food businesses retain more earnings while making great food more accessible to customers.",
  tags: ["Next.js", "TypeScript", "FoodTech", "Online Ordering"],
  image: "/images/foodvito.png",
  imageAlt: "Foodvito food ordering and delivery application"
  },
  {
    number: "02",
    category: "SOFTWARE APPLICATION",
    title: "Ravito – Ride Booking & Transportation Platform",
    description:
      "A customer-focused transportation platform designed to make everyday travel affordable, convenient, and reliable. Built around a low-commission business model, Ravito aims to help drivers earn more while providing customers with accessible ride-booking services as an alternative to traditional platforms.",
    tags: ["Next.js", "TypeScript", "Ride Booking", "Transportation"],
    image: "/images/ravito.png",
    imageAlt: "Ravito ride booking and transportation application"
    
  },
  {
    number: "03",
    category: "SOFTWARE APPLICATION",
  title: "VitoMart – Online Shopping & Essentials Platform",
  description:
    "A customer-focused shopping platform designed to connect customers with local shops and make everyday essentials easily accessible. Built around a low-commission business model, VitoMart aims to help shop owners retain more earnings while providing customers with a convenient, affordable, and seamless shopping experience.",
  tags: ["Next.js", "TypeScript", "E-Commerce", "Local Shopping"],
  image: "/images/vitomart.png",
  imageAlt: "VitoMart online shopping and local store delivery application"
  },
  {
    number: "04",
    title: "Dravito – Unified Rider & Delivery Management Platform",
  description:
    "A unified rider application designed to connect delivery partners across Foodvito, Ravito, and VitoMart through a single platform. Dravito aims to simplify order management, streamline delivery workflows, and help riders access delivery opportunities across multiple services, reducing app switching and improving earning potential.",
  tags: [
    "Next.js",
    "TypeScript",
    "Multi-Platform Integration",
    "Delivery Management"
  ],
  image: "/images/dravito.png",
  imageAlt: "Dravito unified rider and delivery management application"
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

  <div className="portfolio-hero-visual">
    <div className="portfolio-image-orbit" />

    <div className="portfolio-hero-image">
      <Image
        src="/images/portfolio1.png"
        alt="Digital product design and development workspace"
        width={1000}
        height={700}
        priority
      />
    </div>

    <span className="portfolio-pink-dot portfolio-dot-one" />
    <span className="portfolio-pink-dot portfolio-dot-two" />
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
