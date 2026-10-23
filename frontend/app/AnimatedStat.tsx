
"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  number: string | number;
  label: string;
  icon: React.ReactNode;
};

export default function AnimatedStat({
  number,
  label,
  icon,
}: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  const target = Number.parseInt(String(number), 10) || 0;

  useEffect(() => {
    const element = statRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    if (target === 0) {
      setCount(0);
      return;
    }

    const duration = 1600;
    let startTime: number | null = null;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [visible, target]);

  return (
    <div
      ref={statRef}
      className={`alv-stat ${visible ? "alv-stat-visible" : ""}`}
    >
      <span className="alv-stat-icon">{icon}</span>

      <div>
        <strong>{count}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}
