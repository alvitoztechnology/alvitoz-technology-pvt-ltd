import { Router } from "express";
import { createCareerApplication } from "../controllers/careerApplication.controller";
import { careerUpload } from "../middleware/careerUpload";

const router = Router();

router.post(
  "/",
  careerUpload.single("resume"),
  createCareerApplication
);

export default router;