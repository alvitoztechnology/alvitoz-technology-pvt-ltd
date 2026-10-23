
"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type Project = {
  name: string;
  type: string;
  image: string;
  description: string;
};

type Props = {
  projects: Project[];
};

export default function FeaturedProjects({ projects }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    watchDrag: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const previous = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const next = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  if (!projects.length) return null;

  return (
    <section className="alv-section alv-project-section" id="portfolio">
      <div className="alv-section-title-row">
        <div className="alv-section-heading alv-heading-left">
          <span className="alv-eyebrow">✦ OUR WORK</span>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>A glimpse of digital product concepts and experiences.</p>
        </div>

        <Link
          href="/portfolio"
          className="alv-btn alv-btn-outline alv-view-all"
        >
          View All Projects
        </Link>
      </div>

      
<div className="alv-carousel">
  <div className="alv-carousel-viewport" ref={emblaRef}>
    <div className="alv-carousel-track">
      {projects.map((project) => (
        <article className="alv-project-card" key={project.name}>
          <Link href="/portfolio" className="alv-project-image">
            <Image
              src={project.image}
              alt={project.name}
              width={380}
              height={230}
            />
             {/* Coming Soon Hover Overlay */}
  <span className="alv-coming-soon">
    <span className="alv-coming-soon-badge">
      <span className="alv-coming-soon-dot" />
      COMING SOON
    </span>
  </span>
          </Link>

          <div className="alv-project-copy">
            <span className="alv-project-type">{project.type}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <Link href="/portfolio" className="alv-text-link">
              View Project <span>→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>

  {/* Floating navigation arrows */}
  <button
    type="button"
    className="alv-carousel-arrow alv-carousel-prev"
    onClick={previous}
    aria-label="Previous project"
  >
    <span aria-hidden="true">←</span>
  </button>

  <button
    type="button"
    className="alv-carousel-arrow alv-carousel-next"
    onClick={next}
    aria-label="Next project"
  >
    <span aria-hidden="true">→</span>
  </button>

  {/* Small slide indicator */}
  <div className="alv-carousel-bottom">
    <span className="alv-carousel-count">
      {String(selectedIndex + 1).padStart(2, "0")} /{" "}
      {String(projects.length).padStart(2, "0")}
    </span>

    <span className="alv-swipe-hint">
      <span aria-hidden="true">↔</span> Drag to explore
    </span>
  </div>
</div>

    </section>
  );
}
