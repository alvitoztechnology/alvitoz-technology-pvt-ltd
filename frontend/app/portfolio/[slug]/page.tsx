
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import type { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) return {};

  return {
    title: `${product.name} | Alvitoz Technology`,
    description: product.description,
  };
}

export default function ProductPage({ params }: Props) {
  return (
    <Suspense fallback={<ProductPageLoading />}>
      <ProductPageContent params={params} />
    </Suspense>
  );
}

async function ProductPageContent({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="alv-home alv-product-page">


      {/* HERO */}

      <section className="alv-product-hero" id="about">

        <div className="alv-product-hero-copy">

          <span className="alv-eyebrow">
            <span className="alv-dot" />
            {product.category}
          </span>

          <h1>
            {product.tagline.split(".")[0]}
            <span>
              {product.tagline.includes(".")
                ? "." + product.tagline.split(".").slice(1).join(".")
                : ""}
            </span>
          </h1>

          <p>{product.description}</p>

          <div className="alv-product-actions">
            <a href="#download" className="alv-btn alv-btn-primary">
              Get the App <span>→</span>
            </a>

            <a href="#features" className="alv-btn alv-btn-outline">
              Explore Features
            </a>
          </div>

          <div className="alv-product-status">
            <span className="alv-coming-soon-dot" />
            {product.status}
          </div>

        </div>

        <div className="alv-product-hero-visual">

          <div className="alv-product-glow" />

          <div className="alv-product-image-frame">
            <Image
              src={product.image}
              alt={`${product.name} product preview`}
              width={600}
              height={600}
              priority
            />
          </div>

          <div className="alv-product-floating-card">
            <span className="alv-product-floating-icon">✦</span>
            <div>
              <strong>{product.name}</strong>
              <span>{product.category}</span>
            </div>
          </div>

        </div>

      </section>

      {/* PRODUCT INTRODUCTION */}

      <section className="alv-product-intro">

        <div className="alv-product-intro-heading">
          <span className="alv-eyebrow">✦ ABOUT THE PRODUCT</span>

          <h2>
            Introducing <span>{product.name}</span>
          </h2>

          <p>{product.description}</p>
        </div>

        <div className="alv-product-audience">
          <span>BUILT FOR</span>
          <h3>{product.audience}</h3>
        </div>

      </section>

      {/* FEATURES */}

      <section className="alv-section alv-product-features" id="features">

        <div className="alv-section-heading">
          <span className="alv-eyebrow">✦ WHAT YOU GET</span>

          <h2>
            Everything You Need.
            <span> All in One Place.</span>
          </h2>

          <p>
            Discover the features designed to make your
            experience simple, convenient and efficient.
          </p>
        </div>

        <div className="alv-service-grid">

          {product.features.map((feature, index) => (

            <article className="alv-service-card" key={feature.title}>

              <div className="alv-service-icon">
                <span>0{index + 1}</span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </article>

          ))}

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="alv-product-process" id="how-it-works">

        <div className="alv-section-heading">
          <span className="alv-eyebrow">✦ SIMPLE EXPERIENCE</span>

          <h2>
            How It <span>Works.</span>
          </h2>

          <p>
            Getting started with {product.name} is designed
            to be straightforward.
          </p>
        </div>

        <div className="alv-product-steps">

          {product.steps.map((step) => (

            <article className="alv-product-step" key={step.number}>

              <span className="alv-step-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </article>

          ))}

        </div>

      </section>

      {/* PARTNER SECTION */}

      <section className="alv-product-partners" id="partners">

        <div className="alv-product-partner-copy">

          <span className="alv-eyebrow">
            ✦ GROW WITH {product.name.toUpperCase()}
          </span>

          <h2>{product.benefitsTitle}</h2>

          <p>{product.benefitsDescription}</p>

          <ul>
            {product.benefits.map((benefit) => (
              <li key={benefit}>
                <span>✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <Link href="/contact" className="alv-btn alv-btn-primary">
            Partner With Us →
          </Link>

        </div>

        <div className="alv-product-partner-art">
          <Image
            src={product.image}
            alt={`${product.name} brand`}
            width={420}
            height={420}
          />
        </div>

      </section>

      {/* DOWNLOAD SECTION */}

      <section className="alv-product-download" id="download">

        <span className="alv-eyebrow">
          ✦ COMING SOON
        </span>

        <h2>
          Experience <span>{product.name}</span>
        </h2>

        <p>
          We're working on bringing {product.name} to your
          smartphone. Stay connected for the launch.
        </p>

        <div className="alv-store-buttons">

          <div className="alv-store-button">
            <span className="alv-store-icon">▶</span>
            <div>
              <small>GET IT ON</small>
              <strong>Google Play</strong>
            </div>
            <span className="alv-store-coming">Coming Soon</span>
          </div>

          <div className="alv-store-button">
            <span className="alv-store-icon">●</span>
            <div>
              <small>DOWNLOAD ON THE</small>
              <strong>App Store</strong>
            </div>
            <span className="alv-store-coming">Coming Soon</span>
          </div>

        </div>

      </section>

    

    </main>
  );

}

function ProductPageLoading() {
  return (
    <main className="alv-home alv-product-page">
      <section className="alv-product-hero">
        <div className="alv-product-hero-copy">
          <span className="alv-eyebrow">
            Loading product...
          </span>
          <h1>
            Preparing your <span>experience.</span>
          </h1>
        </div>
      </section>
    </main>
  );
  
}
