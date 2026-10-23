
import { Router } from "express";
import rateLimit from "express-rate-limit";
import { createContact } from "../controllers/contact.controller";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions. Please try again later."
  }
});

router.post("/", contactLimiter, createContact);

export default router;
