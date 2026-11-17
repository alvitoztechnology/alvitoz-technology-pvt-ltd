
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Linkedin,
  Instagram,
  Github,
  Facebook,
  Youtube,
  Mail,
  Plus,
  ArrowDown,
  X,
} from "lucide-react";
import "./SocialDock.css";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:hello@alvitoztechnology.com",
  },
];

export default function SocialDock() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollDown = () => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section"
      )
    );

    const nextSection = sections.find(
      (section) =>
        section.getBoundingClientRect().top > 100
    );

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="social-dock">

      {/* SOCIAL MENU */}
      <div className="social-dock-menu">

        <motion.button
          className="social-dock-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close social links" : "Open social links"}
          aria-expanded={isOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <motion.span
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={{ duration: 0.35 }}
          >
            {isOpen ? <X size={21} /> : <Plus size={21} />}
          </motion.span>

          <span className="social-trigger-dot" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="social-dock-links"
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -15, scale: 0.9 }}
              transition={{
                duration: 0.3,
                staggerChildren: 0.07,
              }}
            >
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="social-dock-link"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.045 }}
                    whileHover={{
                      x: 6,
                      scale: 1.08,
                    }}
                  >
                    <Icon size={18} />
                    <span>{social.name}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.button
        className="social-scroll-indicator"
        onClick={scrollDown}
        aria-label="Scroll to next section"
        whileHover={{ y: 4 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="social-scroll-label">
          SCROLL
        </span>

        <span className="social-scroll-line">
          <motion.span
            className="social-scroll-progress"
            animate={{ y: [0, 24, 0], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.button>

    </aside>
  );
}
