"use client";
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
import AnimatedStat from "./AnimatedStat";
import FeaturedProjects from "./FeaturedProjects";


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
  {
    name: "Foodvito",
    type: "Food Delivery App",
    image: "/images/foodvito.png",
    description:
      "A food ordering and delivery platform built around lower commissions, convenient ordering, and better earning opportunities for restaurants and food partners.",
  },
  {
    name: "Ravito",
    type: "Transportation App",
    image: "/images/ravito.png",
    description:
      "A ride-booking platform focused on affordable transportation, lower commissions, and better earning opportunities for drivers and convenient travel for customers.",
  },
  {
    name: "VitoMart",
    type: "Shopping & Delivery App",
    image: "/images/vitomart.png",
    description:
      "An online shopping platform connecting customers with local shops and everyday essentials through convenient delivery and a low-commission model that supports local businesses.",
  },
  {
    name: "Dravito",
    type: "Rider & Delivery Management App",
    image: "/images/dravito.png",
    description:
      "A unified rider platform connecting Foodvito, Ravito, and VitoMart, enabling delivery partners to manage orders across multiple services from one application and access more earning opportunities.",
  },
];

const stats = [
  { number: "10", label: "Projects Delivered", icon: "▣" },
  { number: "9", label: "Happy Clients", icon: "✿" },
  { number: "10", label: "Team Members", icon: "♧" },
  { number: "5", label: "Years Experience", icon: "♙" },
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
        <div className="alv-orbit alv-orbit-1" />
  <div className="alv-orbit alv-orbit-2" />
  <div className="alv-orbit alv-orbit-3" />

  <Image
    src="/images/earth-network.png"
    alt="Connected digital globe representing global technology solutions"
    className="alv-earth"
    width={600}
    height={600}
    priority
  />
        </div>
      </section>

      
<section className="alv-stats" aria-label="Company highlights">
  {stats.map((stat) => (
    <AnimatedStat
      key={stat.label}
      number={stat.number}
      label={stat.label}
      icon={stat.icon}
    />
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

      <FeaturedProjects projects={projects} />

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
