
import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { sendContactNotification } from "../services/email.service";


const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.string().trim().min(1).max(5000),
  message: z.string().trim().min(10).max(5000)
});

export async function createContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Please check your form details.",
        errors: parsed.error.flatten().fieldErrors
      });
    }

    const { name, email, phone, company, service,budget, message } = parsed.data;

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        service: service || null,
        budget,
        message,
      },
      select: {
        id: true,
        createdAt: true
      }
    });

    try {
      await sendContactNotification({
        name,
        email,
        phone,
        company,
        service,
        budget,
        message,
      });
    } catch (emailError) {
      console.error("Contact notification email failed:", emailError);
    
      return res.status(500).json({
        success: false,
        message:
          "Your enquiry was saved, but we could not send the email notification. Please contact us directly.",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: submission
    });
  } catch (error) {
    return next(error);
  }
}
