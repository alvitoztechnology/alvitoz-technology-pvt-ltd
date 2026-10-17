
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Alvitoz Technology to discuss your website, software, or backend development project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">LET'S CONNECT</span>
          <h1>
            Tell us what
            <br />
            <span className="gradient-text">you want to build.</span>
          </h1>
          <p>
            Have a project in mind or a business challenge to solve? Tell us a
            little about it and let&apos;s start a conversation.
          </p>
        </div>
        <div className="about-hero-decoration">C</div>
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

            <form className="contact-form" action="/api/contact" method="POST">
              <div className="contact-field">
                <label htmlFor="name">Full name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  maxLength={254}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="service">Service you need *</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Backend Development">
                    Backend Development
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Cloud & Deployment">
                    Cloud &amp; Deployment
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="budget">Estimated budget</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="">Select a budget (optional)</option>
                  <option value="Under ₹25,000">Under ₹25,000</option>
                  <option value="₹25,000–₹75,000">₹25,000–₹75,000</option>
                  <option value="₹75,000–₹2,00,000">
                    ₹75,000–₹2,00,000
                  </option>
                  <option value="₹2,00,000+">₹2,00,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Project details *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your idea, requirements, or challenge..."
                  rows={5}
                  required
                  minLength={10}
                  maxLength={5000}
                />
              </div>

              <button
                className="button button-primary contact-submit"
                type="submit"
              >
                Send Enquiry →
              </button>

              <p className="contact-form-disclaimer">
                By submitting this form, you agree that we may use these
                details to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
