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
import { motion } from "motion/react";
import ScrollReveal
 from "@/components/ScrollReveal";
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
    slug: "foodvito",
    type: "Food Delivery App",
    image: "/images/foodvito.png",
    description:
      "A food ordering and delivery platform built around lower commissions, convenient ordering, and better earning opportunities for restaurants and food partners.",
  },
  {
    name: "Ravito",
    slug: "ravito",
    type: "Transportation App",
    image: "/images/ravito.png",
    description:
      "A ride-booking platform focused on affordable transportation, lower commissions, and better earning opportunities for drivers.",
  },
  {
    name: "VitoMart",
    slug: "vitomart",
    type: "Shopping & Delivery App",
    image: "/images/vitomart.png",
    description:
      "An online shopping platform connecting customers with local shops and everyday essentials through convenient delivery.",
  },
  {
    name: "Dravito",
    slug: "dravito",
    type: "Rider & Delivery Management App",
    image: "/images/dravito.png",
    description:
      "A unified rider platform connecting Foodvito, Ravito, and VitoMart.",
  },
];

const stats = [
  { number: "1", label: "Projects Delivered", icon: "▣" },
  { number: "1", label: "Happy Clients", icon: "✿" },
  { number: "10", label: "Team Members", icon: "♧" },
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

      

      <motion.section
  className="alv-stats"
  aria-label="Company highlights"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
  {stats.map((stat) => (
    <motion.div
      key={stat.label}
      variants={{
        hidden: {
          opacity: 0,
          y: 45,
          scale: 0.94,
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        },
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <AnimatedStat
        number={stat.number}
        label={stat.label}
        icon={stat.icon}
      />
    </motion.div>
  ))}
</motion.section>

<ScrollReveal direction="up" duration={1}>
  <FeaturedProjects projects={projects} />
</ScrollReveal>

      <section className="alv-section" id="services">
        <div className="alv-section-heading">
          <span className="alv-eyebrow">✦ WHAT WE DO</span>
          <h2>Our <span>Services</span></h2>
          <p>We provide end-to-end technology solutions to help businesses build, scale, and succeed in the digital world.</p>
        </div>
        
<motion.div
  className="alv-service-grid"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.12 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
>
  {services.map((service, index) => (
    <motion.article
      className="alv-service-card"
      key={service.title}
      variants={{
        hidden: {
          opacity: 0,
          y: 65,
          rotateX: 8,
          filter: "blur(7px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
        },
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -9,
        transition: { duration: 0.25 },
      }}
      style={{ transformPerspective: 1000 }}
    >
      <motion.div
        className="alv-service-icon"
        whileHover={{
          scale: 1.15,
          rotate: -10,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 12,
        }}
      >
        {service.icon === "monitor" && <Monitor />}
        {service.icon === "smartphone" && <Smartphone />}
        {service.icon === "server" && <Server />}
        {service.icon === "palette" && <Palette />}
        {service.icon === "cloud" && <Cloud />}
        {service.icon === "settings" && <Settings />}
      </motion.div>

      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <Link href="/services" className="alv-text-link">
        Learn More <span>→</span>
      </Link>
    </motion.article>
  ))}
</motion.div>

      </section>

      
<section className="alv-cta-section">
  <ScrollReveal direction="up" duration={1}>
    <motion.div
      className="alv-cta"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className="alv-cta-copy"
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.15 }}
      >
        <span className="alv-eyebrow">
          ✦ LET&apos;S WORK TOGETHER
        </span>

        <h2>Ready to Build Something Amazing?</h2>

        <p>
          Let&apos;s turn your ideas into powerful digital solutions.
        </p>

        <Link href="/contact" className="alv-btn alv-btn-white">
          Get in Touch <span>→</span>
        </Link>
      </motion.div>

      <motion.div
        className="alv-cta-image"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85, x: 35 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src="/images/cta-banner.jpg"
          alt=""
          width={474}
          height={164}
        />
      </motion.div>
    </motion.div>
  </ScrollReveal>
</section>

    </main>
  );
}
