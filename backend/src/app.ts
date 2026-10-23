
import express from "express";
import cors from "cors";
import helmet from "helmet";

import contactRoutes from "./routes/contact.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);

app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Alvitoz backend is running."
  });
});

app.use("/api/contact", contactRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found."
  });
});

app.use(errorHandler);

export default app;
