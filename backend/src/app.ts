
import express from "express";
import cors from "cors";
import helmet from "helmet";

import contactRoutes from "./routes/contact.routes";
import careerApplicationRoutes from "./routes/careerApplication.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(helmet());

// Put this before your API routes.
const allowedOrigins = [
  "https://alvitoz-technology-pvt-vmgrhjk80-alvitoztechnology.vercel.app",
  "https://alvitoztechnology.com",
  "https://www.alvitoztechnology.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Alvitoz backend is running."
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/career-applications", careerApplicationRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found."
  });
});

app.use(errorHandler);

export default app;
