
"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
};

export default function Toast({
  message,
  type = "success",
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 4000);
    return () => window.clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div
      className={`app-toast app-toast-${type}`}
      role={type === "error" ? "alert" : "status"}
    >
      <div className="app-toast-icon">
        {type === "success" ? "✓" : "!"}
      </div>

      <div className="app-toast-content">
        <strong>
          {type === "success"
            ? "Enquiry sent successfully!"
            : "Unable to send enquiry"}
        </strong>
        <span>{message}</span>
      </div>

      <button
        className="app-toast-close"
        type="button"
        aria-label="Dismiss notification"
        onClick={onClose}
      >
        ×
      </button>

      <div className="app-toast-progress" />
    </div>
  );
}
