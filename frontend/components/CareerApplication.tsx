"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import "./CareerApplication.css";

const API_URL = process.env.BACKEND_URL || "http://localhost:4000";

type CareerApplicationProps = {
  jobTitle: string;
  department: string;
};

export default function CareerApplication({
  jobTitle,
  department,
}: CareerApplicationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scrolling while the popup is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !isSubmitting) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isSubmitting]);

  function openModal() {
    setSubmitted(false);
    setError("");
    setIsOpen(true);
  }

  function closeModal() {
    if (isSubmitting) return;
    setIsOpen(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setError("Please upload your resume.");
      return;
    }

    if (resume.size > 5 * 1024 * 1024) {
      setError("Your resume must be 5 MB or smaller.");
      return;
    }

    // Map the frontend field names to the backend API fields.
    formData.set("fullName", String(formData.get("name") || "").trim());
    formData.set("position", jobTitle);
    formData.delete("name");
    formData.delete("jobTitle");
    formData.delete("department");

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/career-applications`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Unable to submit your application. Please try again."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className="button button-primary career-apply-trigger"
        onClick={openModal}
      >
        Express Interest <span aria-hidden="true">→</span>
      </button>

      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="career-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            <section
              className="career-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="career-modal-title"
              aria-describedby="career-modal-description"
            >
              <button
                type="button"
                className="career-modal-close"
                aria-label="Close application form"
                disabled={isSubmitting}
                onClick={closeModal}
              >
                ×
              </button>

              {!submitted ? (
                <>
                  <span className="career-modal-eyebrow">
                    CAREERS AT ALVITOZ
                  </span>

                  <h2 id="career-modal-title">Let&apos;s get to know you.</h2>

                  <p
                    id="career-modal-description"
                    className="career-modal-description"
                  >
                    Apply for <strong>{jobTitle}</strong>. Share your details
                    and attach your resume to get started.
                  </p>

                  <form
                    className="career-application-form"
                    onSubmit={handleSubmit}
                  >
                    <label>
                      Full name
                      <input
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                        maxLength={100}
                      />
                    </label>

                    <div className="career-form-row">
                      <label>
                        Email address
                        <input
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                          maxLength={254}
                        />
                      </label>

                      <label>
                        Phone number
                        <input
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          autoComplete="tel"
                          required
                          maxLength={20}
                        />
                      </label>
                    </div>

                    <label>
                      Experience
                      <select name="experience" defaultValue="" required>
                        <option value="">Select experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="0-1 years">0–1 years</option>
                        <option value="1-2 years">1–2 years</option>
                        <option value="2-3 years">2–3 years</option>
                        <option value="3-5 years">3–5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </label>

                    <label>
                      Resume
                      <input
                        className="career-resume-input"
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      <small>PDF or Word document, maximum 5 MB.</small>
                    </label>

                    <label>
                      Message <span className="career-optional">(optional)</span>
                      <textarea
                        name="message"
                        placeholder="Tell us a little about yourself..."
                        rows={3}
                        maxLength={2000}
                      />
                    </label>

                    {error && (
                      <p className="career-form-error" role="alert">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="career-submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Submitting application..."
                        : "Submit Application →"}
                    </button>

                    <p className="career-form-privacy">
                      Your details will be used to process your job application.
                    </p>
                  </form>
                </>
              ) : (
                <div className="career-success">
                  <div className="career-success-icon" aria-hidden="true">
                    ✓
                  </div>

                  <span className="career-modal-eyebrow">
                    APPLICATION RECEIVED
                  </span>

                  <h2 id="career-modal-title">Application Submitted!</h2>

                  <p id="career-modal-description">
                    Thank you for your interest in the <strong>{jobTitle}</strong>{" "}
                    role at Alvitoz Technology. Your application has been
                    received.
                  </p>

                  <button
                    type="button"
                    className="career-submit-button"
                    onClick={closeModal}
                  >
                    Done
                  </button>
                </div>
              )}
            </section>
          </div>,
          document.body
        )}
    </>
  );
}
