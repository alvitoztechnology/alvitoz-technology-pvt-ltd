
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import "../services.css";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: `${service.title} | Alvitoz Technology`,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
    return (
        <Suspense fallback={<ServiceLoading />}>
          <ServiceContent params={params} />
        </Suspense>
      );
    }
    
    function ServiceLoading() {
      return (
        <main className="service-detail-page">
          <section className="service-detail-hero">
            <div className="service-detail-container">
              <p>Loading service...</p>
            </div>
          </section>
        </main>
      );
    }
    
    async function ServiceContent({ params }: Props) {
      const { slug } = await params;
    
      const service = services.find(
        (item) => item.slug === slug
      );
    
      if (!service) notFound();
    

  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero">
        <div className="service-detail-container">

          <span className="eyebrow">
            {service.category}
          </span>

          <h1>
            {service.title}.
            <br />
            <span className="gradient-text">
              {service.subtitle}
            </span>
          </h1>

          <p>{service.description}</p>

          <div className="service-detail-actions">
            <Link href="/contact" className="button button-primary">
              Discuss Your Project →
            </Link>

            <Link href="/portfolio" className="button button-outline">
              Explore Our Work
            </Link>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="service-detail-intro">
        <div className="service-detail-container">

          <span className="eyebrow">WHAT WE DO</span>

          <h2>
            Building solutions that
            <span className="gradient-text"> move businesses forward.</span>
          </h2>

          <p>{service.description}</p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="service-detail-features">
        <div className="service-detail-container">

          <span className="eyebrow">OUR CAPABILITIES</span>

          <h2>What we offer</h2>

          <div className="service-detail-grid">
            {service.features.map((feature, index) => (
              <div className="service-detail-card" key={feature}>
                <span className="service-detail-number">
                  0{index + 1}
                </span>

                <h3>{feature}</h3>

                <p>
                  Thoughtfully engineered solutions
                  designed around your business requirements.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="service-detail-tech">
        <div className="service-detail-container">

          <span className="eyebrow">OUR TECHNOLOGY STACK</span>

          <h2>Technologies we work with</h2>

          <div className="service-detail-tags">
            {service.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="service-detail-cta">
        <div className="service-detail-container">

          <span className="eyebrow">
            LET'S BUILD SOMETHING
          </span>

          <h2>
            Have a project in mind?
            <br />
            <span>Let's make it happen.</span>
          </h2>

          <p>
            Tell us about your goals. Let's explore
            how Alvitoz can help bring your ideas to life.
          </p>

          <Link href="/contact" className="button button-light">
            Start a Conversation ↗
          </Link>

        </div>
      </section>

    </main>
  );
}
