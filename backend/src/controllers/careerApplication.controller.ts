import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";
import { prisma } from "../lib/prisma";
import { sendCareerApplicationEmail } from "../services/email.service";

const validExperience = [
  "Fresher",
  "0-1 years",
  "1-2 years",
  "2-3 years",
  "3-5 years",
  "5+ years",
];

export const createCareerApplication = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      fullName,
      email,
      phone,
      experience,
      message,
      position,
    } = req.body;

    const resume = req.file;

//     console.log("BODY:", req.body);
// console.log("FILE:", req.file);

    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !experience ||
      !position?.trim()
    ) {
      if (resume) await fs.unlink(resume.path).catch(() => {});

      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      if (resume) await fs.unlink(resume.path).catch(() => {});

      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!validExperience.includes(experience)) {
      if (resume) await fs.unlink(resume.path).catch(() => {});

      return res.status(400).json({
        success: false,
        message: "Please select a valid experience level.",
      });
    }

    if (!resume) {
      return res.status(400).json({
        success: false,
        message: "Please upload your resume.",
      });
    }

    const application = await prisma.careerApplication.create({
      data: {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        position: position.trim(),
        experience,
        message: message?.trim() || null,
        resumeUrl: `/private-resumes/${resume.filename}`,
        resumeName: path.basename(resume.originalname),
      },
    });

    const resumePath = path.resolve(
        "uploads",
        "resumes",
        path.basename(resume.filename)
      );
      
      try {
        await sendCareerApplicationEmail(application, resumePath);
        console.log("Career application email sent successfully.");
      } catch (emailError) {
        // The application is already saved in the database.
        console.error("Career notification email failed:", emailError);
      }

    return res.status(201).json({
      success: true,
      message: "Your application has been submitted successfully.",
      data: {
        id: application.id,
        fullName: application.fullName,
        position: application.position,
        status: application.status,
        createdAt: application.createdAt,
      },
    });
  } catch (error) {
    console.error("Career application error:", error);

    if (req.file) {
      await fs.unlink(req.file.path).catch(() => {});
    }

    return res.status(500).json({
      success: false,
      message: "Unable to submit your application. Please try again.",
    });
  }
};