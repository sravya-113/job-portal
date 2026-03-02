// api/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../server/config/db.js";
import exampleRoutes from "../server/routes/example.js";
import companyRoutes from "../server/routes/companyRoutes.js";
import { clerkWebhooks } from "../server/controllers/webhooks.js";

dotenv.config();

const app = express();

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

// Global JSON error handler — always returns JSON, never plain text
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  console.error("Express error:", err?.message || err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
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
    await ensureDB();
    return app(req, res);
  } catch (err) {
    console.error("Serverless handler error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
