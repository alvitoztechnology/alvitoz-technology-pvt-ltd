import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Server,
  Palette,
  Cloud,
  Settings,
} from "lucide-react";

import "./home.css";

const services = [
  {
    icon: "monitor",
    title: "Web Development",
    description: "Modern, responsive websites and web applications built for your business.",
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications designed around your customers.",
  },
  {
    icon: "server",
    title: "Backend Development",
    description: "Secure backend systems, APIs, and dependable database architecture.",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description: "User-centred interfaces and intuitive digital experiences.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure, deployment, and delivery automation.",
  },
  {
    icon: "settings",
    title: "IT Consulting",
    description: "Practical technology guidance to help your business grow.",
  },
];

const projects = [
  { name: "Business Management Platform", type: "Web App", image: "/images/project-business-management.png", description: "A clear workspace for everyday business operations." },
  { name: "E-commerce Mobile App", type: "Mobile App", image: "/images/project-ecommerce-mobile.png", description: "A mobile shopping experience with a simple user journey." },
  { name: "Analytics Dashboard", type: "Web App", image: "/images/project-analytics.png", description: "A visual overview of business data and performance." },
];

const stats = [
  { number: "0", label: "Projects Delivered", icon: "▣" },
  { number: "0", label: "Happy Clients", icon: "✿" },
  { number: "2", label: "Team Members", icon: "♧" },
  { number: "1", label: "Years Experience", icon: "♙" },
];

export default function Home() {
  return (
    <main className="alv-home">
      <section className="alv-hero">
        <div className="alv-hero-copy">
          <span className="alv-eyebrow"><span className="alv-dot" /> INNOVATE · BUILD · GROW</span>
          <h1>Transforming Ideas Into <span>Digital Solutions.</span></h1>
          <p>Alvitoz Technology is a software development company building scalable, modern, and innovative digital solutions for businesses.</p>
          <div className="alv-actions">
            <Link href="/contact" className="alv-btn alv-btn-primary">Get Started <span>→</span></Link>
            <Link href="/portfolio" className="alv-btn alv-btn-outline">Our Work</Link>
          </div>
        </div>
        <div className="alv-hero-art">
          <Image src="/images/hero-home.png" alt="Alvitoz Technology digital solutions and laptop dashboard illustration" width={594} height={336} priority />
        </div>
      </section>

      <section className="alv-stats" aria-label="Company highlights">
        {stats.map((stat) => (
          <div className="alv-stat" key={stat.label}>
            <span className="alv-stat-icon">{stat.icon}</span>
            <div><strong>{stat.number}</strong><span>{stat.label}</span></div>
          </div>
        ))}
      </section>

      <section className="alv-section" id="services">
        <div className="alv-section-heading">
          <span className="alv-eyebrow">✦ WHAT WE DO</span>
          <h2>Our <span>Services</span></h2>
          <p>We provide end-to-end technology solutions to help businesses build, scale, and succeed in the digital world.</p>
        </div>
        <div className="alv-service-grid">
          {services.map((service) => (
            <article className="alv-service-card" key={service.title}>
              <div className="alv-service-icon" aria-hidden="true">
  {service.icon === "monitor" && <Monitor />}
  {service.icon === "smartphone" && <Smartphone />}
  {service.icon === "server" && <Server />}
  {service.icon === "palette" && <Palette />}
  {service.icon === "cloud" && <Cloud />}
  {service.icon === "settings" && <Settings />}
</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/services" className="alv-text-link">Learn More <span>→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="alv-section alv-project-section" id="portfolio">
        <div className="alv-section-title-row">
          <div className="alv-section-heading alv-heading-left">
            <span className="alv-eyebrow">✦ OUR WORK</span>
            <h2>Featured Projects</h2>
            <p>A glimpse of digital product concepts and experiences.</p>
          </div>
          <Link href="/portfolio" className="alv-btn alv-btn-outline alv-view-all">View All Projects</Link>
        </div>
        <div className="alv-project-grid">
          {projects.map((project) => (
            <article className="alv-project-card" key={project.name}>
              <Link href="/portfolio" className="alv-project-image">
                <Image src={project.image} alt={project.name} width={380} height={195} />
              </Link>
              <div className="alv-project-copy">
                <span className="alv-project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Link href="/portfolio" className="alv-text-link">View Project <span>→</span></Link>
              </div>
            </article>
          ))}
        </div>
        {/* <p className="alv-disclaimer">Project cards are illustrative concepts. Replace them with real project examples before publishing.</p> */}
      </section>

      <section className="alv-cta-section">
        <div className="alv-cta">
          <div className="alv-cta-copy">
            <span className="alv-eyebrow">✦ LET&apos;S WORK TOGETHER</span>
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let&apos;s turn your ideas into powerful digital solutions.</p>
            <Link href="/contact" className="alv-btn alv-btn-white">Get in Touch <span>→</span></Link>
          </div>
          <div className="alv-cta-image" aria-hidden="true">
            <Image src="/images/cta-banner.jpg" alt="" width={474} height={164} />
          </div>
        </div>
      </section>
    </main>
  );
}
