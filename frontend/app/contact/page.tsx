
import type { Metadata } from "next";
import "./Contact.css";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Alvitoz Technology to discuss your website, software, or backend development project.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      
<section className="page-hero contact-hero">
  <div className="page-hero-inner">
    <span className="eyebrow">LET&apos;S CONNECT</span>

    <h1>
      Tell us what
      <br />
      <span className="gradient-text">you want to build.</span>
    </h1>

    <p>
      Have a project in mind or a business challenge to solve? Tell us a
      little about it and let&apos;s start a conversation.
    </p>

    <a href="#contact-form" className="button button-primary">
      Start a Conversation <span>→</span>
    </a>
  </div>

  <div className="contact-hero-visual" aria-hidden="true">
    <div className="contact-hero-orbit contact-hero-orbit-one" />
    <div className="contact-hero-orbit contact-hero-orbit-two" />

    <div className="contact-hero-main-card">
      <div className="contact-hero-main-icon">✦</div>
      <h3>
        Let&apos;s
        <br />
        Work Together
      </h3>
      <div className="contact-hero-lines">
        <span />
        <span />
        <span />
      </div>
      <div className="contact-hero-arrow">↗</div>
    </div>

    <div className="contact-floating-card contact-card-idea">
      <div className="contact-floating-icon">✉</div>
      <div>
        <strong>Share Your Idea</strong>
        <span>Tell us about your project</span>
      </div>
    </div>

    <div className="contact-floating-card contact-card-team">
      <div className="contact-floating-icon">♧</div>
      <div>
        <strong>Join Our Team</strong>
        <span>Explore career opportunities</span>
      </div>
    </div>

    <div className="contact-floating-card contact-card-help">
      <div className="contact-floating-icon">☏</div>
      <div>
        <strong>General Inquiries</strong>
        <span>We&apos;re here to help</span>
      </div>
    </div>

    <span className="contact-hero-spark contact-spark-a">✦</span>
    <span className="contact-hero-spark contact-spark-b">✧</span>
    <span className="contact-hero-spark contact-spark-c">✳</span>
  </div>
</section>


      <section className="section">
        <div className="contact-layout">
          <div className="contact-info">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>
              Let&apos;s make your
              <br />
              next idea happen.
            </h2>
            <p>
              Share your requirements with us. We can discuss your goals,
              project scope, and the right technical approach.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-icon">↗</span>
              <div>
                <strong>Project enquiries</strong>
                <p>Use the form to tell us about your project.</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">⌘</span>
              <div>
                <strong>Our services</strong>
                <p>Websites, APIs, applications, and digital solutions.</p>
              </div>
            </div>

            <div className="contact-note">
              <strong>Have a clear idea?</strong>
              <p>
                Include your goals, expected features, and timeline so we can
                understand your requirements better.
              </p>
            </div>
          </div>

          <div className="contact-form-card">
            <h3>Tell us about your project</h3>
            <p className="contact-form-intro">
              Fields marked with * are required.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
