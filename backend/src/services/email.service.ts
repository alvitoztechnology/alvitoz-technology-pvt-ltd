
import nodemailer from "nodemailer";
import path from "path";
import type { CareerApplication } from "@prisma/client";


const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_RECEIVER } =
  process.env;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_RECEIVER) {
  throw new Error("Gmail email configuration is missing.");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

interface ContactEmail {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  budget?: string;
  message: string;
}

export async function sendContactNotification(
  contact: ContactEmail
) {
  await transporter.sendMail({
    from: `"Alvitoz Technology Website" <${GMAIL_USER}>`,
    to: CONTACT_RECEIVER,
    replyTo: contact.email,
    subject: `New website enquiry: ${contact.service || "General enquiry"}`,
    text: [
      "You received a new enquiry through your website.",
      "",
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Phone: ${contact.phone || "Not provided"}`,
      `Company: ${contact.company || "Not provided"}`,
      `Service: ${contact.service || "Not specified"}`,
      `Budget: ${contact.budget}`,
      "",
      "Message:",
      contact.message,
    ].join("\n"),
  });
}


export async function sendCareerApplicationEmail(
  application: CareerApplication,
  resumePath: string
) {
  const receiver = process.env.CONTACT_RECEIVER;
  const sender = process.env.GMAIL_USER;

  if (!receiver || !sender) {
    throw new Error("Gmail email configuration is missing.");
  }

  await transporter.sendMail({
    from: `"Alvitoz Careers" <${sender}>`,
    to: receiver,
    replyTo: application.email,
    subject: `New Career Application - ${application.position}`,
    text: `
A new career application has been submitted.

Name: ${application.fullName}
Email: ${application.email}
Phone: ${application.phone}
Position: ${application.position}
Experience: ${application.experience}

Message:
${application.message || "No message provided."}

Application ID: ${application.id}
Submitted: ${application.createdAt.toISOString()}
    `,
    attachments: [
      {
        filename: path.basename(application.resumeName),
        path: resumePath,
      },
    ],
  });
}