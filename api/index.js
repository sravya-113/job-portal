// api/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../server/config/db.js";            // <- from project root, server/config/db.js
import exampleRoutes from "../server/routes/example.js";  // <- server/routes/example.js
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import { clerkWebhooks } from "../server/controllers/webhooks.js"; // <- adjust if file is elsewhere

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

// Middlewares and routes
app.use(cors());
app.use(express.json());

// Mount your existing route files under /api
app.use("/api", exampleRoutes);

// Add webhook route only if the handler exists
if (typeof clerkWebhooks === "function") {
  app.post("/webhooks", clerkWebhooks);
}

// Quick test endpoints
app.get("/", (req, res) => res.send("API Working ✅"));
app.get("/debug-sentry", (req, res) => {
  throw new Error("🧨 Test Sentry error");
});

// Connect to MongoDB once per cold start (not per request)
let isConnected = false;
const ensureDB = async () => {
  if (!isConnected && process.env.MONGO_URI) {
    await connectDB();
    isConnected = true;
  }
};

// Vercel serverless handler — do NOT call app.listen() here
export default async function handler(req, res) {
  try {
    await ensureDB();        // ensure DB connected before handling requests
    return app(req, res);   // hand request to Express
  } catch (err) {
    console.error("Serverless handler error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
