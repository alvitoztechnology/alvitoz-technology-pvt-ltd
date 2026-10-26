
"use client";

import { useCallback, useState } from "react";
import Toast from "./Toast";

const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

type ToastState = {
  message: string;
  type: "success" | "error";
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      service: String(formData.get("service") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || "").trim(),
    };

    setToast(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your enquiry."
        );
      }

      setToast({
        type: "success",
        message:
          "Thank you for contacting Alvitoz Technology. We'll be in touch soon.",
      });

      form.reset();
    } catch (error) {
      setToast({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
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
          <select
            id="service"
            name="service"
            required
            defaultValue=""
          >
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
            <option value="₹25,000–₹75,000">
              ₹25,000–₹75,000
            </option>
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
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="contact-button-loading">
              <span className="contact-spinner" />
              Sending...
            </span>
          ) : (
            <>Send Enquiry →</>
          )}
        </button>

        <p className="contact-form-disclaimer">
          By submitting this form, you agree that we may use these
          details to respond to your enquiry.
        </p>
      </form>

      {toast && (
        <Toast
          key={`${toast.type}-${toast.message}`}
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </>
  );
}
