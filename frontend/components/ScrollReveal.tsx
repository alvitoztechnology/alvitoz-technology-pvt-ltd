
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { x: 0, y: 55 },
    down: { x: 0, y: -55 },
    left: { x: 55, y: 0 },
    right: { x: -55, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              ...offsets[direction],
              filter: "blur(8px)",
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
