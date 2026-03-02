// api/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../server/config/db.js";
import exampleRoutes from "../server/routes/example.js";
import companyRoutes from "../server/routes/companyRoutes.js";
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import { clerkWebhooks } from "../server/controllers/webhooks.js";

dotenv.config();

const app = express();

// Initialize Sentry only if DSN present
if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
      nodeProfilingIntegration(),
      Sentry.httpIntegration(),
      Sentry.expressIntegration({ app }),
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
    sendDefaultPii: true,
  });
}

// Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/api", exampleRoutes);
app.use("/api/company", companyRoutes);

// Clerk webhook
if (typeof clerkWebhooks === "function") {
  app.post("/webhooks", clerkWebhooks);
}

// Health check
app.get("/", (req, res) => res.json({ message: "API Working ✅" }));

// Global JSON error handler — ensures errors never return plain text
app.use((err, req, res, _next) => {
  console.error("Express error:", err?.message || err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Connect to MongoDB once per cold start
let isConnected = false;
const ensureDB = async () => {
  if (!isConnected && process.env.MONGO_URI) {
    await connectDB();
    isConnected = true;
  }
};

// Vercel serverless handler
export default async function handler(req, res) {
  try {
    await ensureDB();
    return app(req, res);
  } catch (err) {
    console.error("Serverless handler error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
