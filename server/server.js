// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/db.js'



// //initiaze express
// const app=express()

// //connect to database
// await connectDB()


// //middlewares
// app.use(cors())
// app.use(express.json())


// //route 
// app.get('/',(req,res)=>res.send("API Working"))

// //port
// const PORT=process.env.PORT || 5000
// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`)
// })



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// dotenv.config(); // load .env

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Test route
// app.get("/", (req, res) => res.send("API Working"));

// // Start server after DB connection
// const startServer = async () => {
//   await connectDB(); // wait for DB to connect

//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// };

// startServer();



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// dotenv.config();

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Test route
// app.get("/", (req, res) => res.send("API Working"));

// // Start server after DB connection
// const startServer = async () => {
//   try {
//     await connectDB(); // connect DB
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () =>
//       console.log(`Server is running on http://localhost:${PORT}`)
//     );
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// startServer();


// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// dotenv.config();

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Test route
// app.get("/", (req, res) => res.send("API Working"));

// // Start server after DB connection
// const startServer = async () => {
//   try {
//     await connectDB(); // wait for DB connection
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () =>
//       console.log(`Server running on http://localhost:${PORT}`)
//     );
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// startServer();


// import './config/instrument.js'
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import * as Senstry from "@sentry/node";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => res.send("API Working"));
// app.get("/debug-sentry",function mainHandler(req,res){
//     throw new Error("My first sentry error");
// })

// const startServer = async () => {
//   await connectDB(); // Wait for DB connection
//   const PORT = process.env.PORT || 5000;
//   SentryContextManager.SetupExpressErrorHandler(app);
//   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// };

// startServer();


// 


// import './config/instrument.js';
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import * as Sentry from "@sentry/node";

// dotenv.config();

// const app = express();

// // Initialize Sentry
// Sentry.init({
//   dsn: process.env.SENTRY_DSN || "your-dsn-here",
//   sendDefaultPii: true,
// });

// app.use(Sentry.Handlers.requestHandler());
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => res.send("API Working"));
// app.get("/debug-sentry", (req, res) => {
//   throw new Error("My first sentry error");
// });

// // Sentry error handler
// app.use(Sentry.Handlers.errorHandler());

// const startServer = async () => {
//   await connectDB();
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// };

// startServer();



// import './config/instrument.js';
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import * as Sentry from "@sentry/node";

// dotenv.config();

// const app = express();

// // Initialize Sentry
// Sentry.init({
//   dsn: process.env.SENTRY_DSN, // must be valid
//   sendDefaultPii: true,
// });

// // Middleware
// app.use(Sentry.Handlers.requestHandler());
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => res.send("API Working"));
// app.get("/debug-sentry", (req, res) => {
//   throw new Error("Test Sentry error");
// });

// // Sentry error handler
// app.use(Sentry.Handlers.errorHandler());

// const startServer = async () => {
//   await connectDB(); // wait for MongoDB connection
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// };

// startServer();



// import './config/instrument.js';
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import * as Sentry from "@sentry/node";

// dotenv.config();

// const app = express();

// // Initialize Sentry
// Sentry.init({
//   dsn: process.env.SENTRY_DSN, // must be valid
//   sendDefaultPii: true,
// });

// // Middleware
// app.use(Sentry.Handlers.requestHandler());
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => res.send("API Working"));
// app.get("/debug-sentry", (req, res) => {
//   throw new Error("Test Sentry error");
// });

// // Sentry error handler
// app.use(Sentry.Handlers.errorHandler());

// const startServer = async () => {
//   await connectDB(); // wait for MongoDB connection
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// };

// startServer();

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import * as Sentry from "@sentry/node";

// dotenv.config();

// const app = express();

// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   sendDefaultPii: true,
// });

// app.use(Sentry.Handlers.requestHandler());
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => res.send("API Working"));
// app.get("/debug-sentry", () => {
//   throw new Error("Test Sentry error");
// });

// app.use(Sentry.Handlers.errorHandler());

// const startServer = async () => {
//   await connectDB();
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// };

// startServer();




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // Initialize Sentry
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   integrations: [nodeProfilingIntegration()],
//   tracesSampleRate: 1.0,
//   profilesSampleRate: 1.0,
//   sendDefaultPii: true,
// });

// // NEW middleware usage (v8+)
// app.use(Sentry.expressRequestMiddleware());
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => res.send("API Working"));

// // Example test route
// app.get("/debug-sentry", () => {
//   throw new Error("Test Sentry error");
// });

// // Error handler (NEW)
// app.use(Sentry.expressErrorHandler());

// const startServer = async () => {
//   await connectDB();
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () =>
//     console.log(`Server running on http://localhost:${PORT}`)
//   );
// };

// startServer();



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY SETUP ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   integrations: [nodeProfilingIntegration()],
//   tracesSampleRate: 1.0,   // For performance monitoring
//   profilesSampleRate: 1.0, // For profiling
//   sendDefaultPii: true,    // Sends user info if available
// });

// // ---------------- MIDDLEWARE ----------------
// // Request handler must be first
// app.use(Sentry.Handlers.requestHandler());
// // Optional performance tracing middleware
// app.use(Sentry.Handlers.tracingHandler());

// // Standard middlewares
// app.use(cors());
// app.use(express.json());

// // ---------------- ROUTES ----------------
// app.get("/", (req, res) => res.send("API Working"));

// // Route to test Sentry error reporting
// app.get("/debug-sentry", () => {
//   throw new Error("Test Sentry error");
// });

// // ---------------- ERROR HANDLING ----------------
// // Sentry error handler must be after all routes
// app.use(Sentry.Handlers.errorHandler());

// // Optional custom error handler (after Sentry)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- SERVER START ----------------
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();



// 





// import express from "express";
// import dotenv from "dotenv";
// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY INIT ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,               // Your DSN
//   integrations: [nodeProfilingIntegration()], // Enables CPU/memory profiling
//   tracesSampleRate: 1.0,                      // Capture 100% of transactions for performance
//   profilesSampleRate: 1.0,                    // Capture 100% of profiling data
//   sendDefaultPii: true,                       // Optional: capture user info
// });

// // ---------------- MIDDLEWARE ----------------
// // Must be before all routes
// app.use(Sentry.requestHandler());
// app.use(Sentry.tracingHandler());

// // ---------------- ROUTES ----------------
// app.get("/", (req, res) => {
//   res.send("Hello! API is working.");
// });

// // Test route to generate an error
// app.get("/debug-sentry", () => {
//   throw new Error("Test Sentry error");
// });

// // Test route to generate CPU-intensive work for profiling
// app.get("/heavy", (req, res) => {
//   // Simulate CPU work
//   let sum = 0;
//   for (let i = 0; i < 1e7; i++) sum += i;
//   res.send(`Heavy computation done! Sum=${sum}`);
// });

// // ---------------- ERROR HANDLING ----------------
// app.use(Sentry.errorHandler());

// // Optional custom error handler (after Sentry)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- START SERVER ----------------
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js"; // your MongoDB connection
// import * as Sentry from "@sentry/node/esm/index.js"; // ESM import for v10
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY INIT ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,               // Add your DSN in .env
//   integrations: [nodeProfilingIntegration()], // Profiling integration
//   tracesSampleRate: 1.0,                      // Performance monitoring
//   profilesSampleRate: 1.0,                    // Profiling sample rate
//   sendDefaultPii: true,                       // Capture user info if available
// });

// // ---------------- MIDDLEWARE ----------------
// // Must be first
// app.use(Sentry.requestHandler());
// app.use(Sentry.tracingHandler());

// app.use(cors());
// app.use(express.json());

// // ---------------- ROUTES ----------------
// app.get("/", (req, res) => res.send("API Working"));

// // Test route for Sentry error tracking
// app.get("/debug-sentry", () => {
//   throw new Error("Test Sentry error");
// });

// // Example route for CPU-intensive profiling
// app.get("/heavy", (req, res) => {
//   let sum = 0;
//   for (let i = 0; i < 1e7; i++) sum += i;
//   res.send(`Heavy computation done! Sum=${sum}`);
// });

// // ---------------- ERROR HANDLING ----------------
// // Sentry error handler must come after all routes
// app.use(Sentry.errorHandler());

// // Optional custom error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- SERVER START ----------------
// const startServer = async () => {
//   try {
//     await connectDB(); // connect to MongoDB
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import exampleRoutes from "./routes/example.js";
// import * as Sentry from "@sentry/node/esm/index.js"; // ESM import for v10
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY INIT ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   integrations: [nodeProfilingIntegration()],
//   tracesSampleRate: 1.0,
//   profilesSampleRate: 1.0,
//   sendDefaultPii: true,
// });

// // ---------------- MIDDLEWARE ----------------
// app.use(Sentry.requestHandler());
// app.use(Sentry.tracingHandler());

// app.use(cors());
// app.use(express.json());

// // ---------------- ROUTES ----------------
// app.use("/api", exampleRoutes);

// app.get("/", (req, res) => res.send("API Working"));

// app.get("/debug-sentry", () => {
//   throw new Error("Test Sentry error");
// });

// app.get("/heavy", (req, res) => {
//   let sum = 0;
//   for (let i = 0; i < 1e7; i++) sum += i;
//   res.send(`Heavy computation done! Sum=${sum}`);
// });

// // ---------------- ERROR HANDLING ----------------
// app.use(Sentry.errorHandler());

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- SERVER START ----------------
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js"; // your MongoDB connection
// import exampleRoutes from "./routes/example.js"; // modular routes
// import * as Sentry from "@sentry/node/esm/index.js"; // ESM import for Sentry v10
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY INIT ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,               // from your .env
//   integrations: [nodeProfilingIntegration()], // enables CPU/memory profiling
//   tracesSampleRate: 1.0,                      // performance monitoring
//   profilesSampleRate: 1.0,                    // profiling sample rate
//   sendDefaultPii: true,                       // optional user info
// });

// // ---------------- MIDDLEWARE ----------------
// // Must be first
// app.use(Sentry.requestHandler());
// app.use(Sentry.tracingHandler());

// app.use(cors());
// app.use(express.json());

// // ---------------- ROUTES ----------------
// app.use("/api", exampleRoutes); // modular API routes

// app.get("/", (req, res) => res.send("API Working"));

// // Route to trigger an error for Sentry testing
// app.get("/debug-sentry", () => {
//   throw new Error("Test Sentry error");
// });

// // Route to simulate heavy CPU work for profiling
// app.get("/heavy", (req, res) => {
//   let sum = 0;
//   for (let i = 0; i < 1e7; i++) sum += i;
//   res.send(`Heavy computation done! Sum=${sum}`);
// });

// // ---------------- ERROR HANDLING ----------------
// // Sentry error handler must come after all routes
// app.use(Sentry.errorHandler());

// // Optional custom error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- SERVER START ----------------
// const startServer = async () => {
//   try {
//     await connectDB(); // connect to MongoDB
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import exampleRoutes from "./routes/example.js";
// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   integrations: [nodeProfilingIntegration()],
//   tracesSampleRate: 1.0,
//   profilesSampleRate: 1.0,
//   sendDefaultPii: true
// });

// app.use(Sentry.requestHandler());
// app.use(Sentry.tracingHandler());

// app.use(cors());
// app.use(express.json());

// // ---------------- ROUTES ----------------
// app.use("/api", exampleRoutes);

// app.get("/", (req, res) => res.send("API Working"));
// app.get("/debug-sentry", () => { throw new Error("Test Sentry error"); });
// app.get("/heavy", (req, res) => {
//   let sum = 0;
//   for (let i = 0; i < 1e7; i++) sum += i;
//   res.send(`Heavy computation done! Sum=${sum}`);
// });

// // ---------------- ERROR HANDLING ----------------
// app.use(Sentry.errorHandler());
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- START SERVER ----------------
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import exampleRoutes from "./routes/example.js";
// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY v10 ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   integrations: [
//     nodeProfilingIntegration(),
//     Sentry.httpIntegration(),          // handles HTTP tracing
//     Sentry.expressIntegration(app),    // integrates with Express middleware
//   ],
//   tracesSampleRate: 1.0,
//   profilesSampleRate: 1.0,
//   sendDefaultPii: true,
// });

// // Register Sentry middleware (NEW STYLE)
// app.use(Sentry.setupExpressErrorHandler()); // Error handler
// // If you want request performance tracing:
// app.use(Sentry.setupExpressRequestHandler()); // Request handler

// // ---------------- MIDDLEWARE ----------------
// app.use(cors());
// app.use(express.json());

// // ---------------- ROUTES ----------------
// app.use("/api", exampleRoutes);

// app.get("/", (req, res) => res.send("API Working"));
// app.get("/debug-sentry", () => {
//   throw new Error("Test Sentry error");
// });
// app.get("/heavy", (req, res) => {
//   let sum = 0;
//   for (let i = 0; i < 1e7; i++) sum += i;
//   res.send(`Heavy computation done! Sum=${sum}`);
// });

// // ---------------- ERROR HANDLING ----------------
// // This must come *after* all routes
// app.use(Sentry.setupExpressErrorHandler());

// // Optional custom error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- START SERVER ----------------
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () =>
//       console.log(`✅ Server running on http://localhost:${PORT}`)
//     );
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import exampleRoutes from "./routes/example.js";
// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY v10 ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   integrations: [
//     nodeProfilingIntegration(),
//     Sentry.httpIntegration(),         // enable tracing for HTTP calls
//     Sentry.expressIntegration({ app }) // 👈 pass app as an option here
//   ],
//   tracesSampleRate: 1.0,
//   profilesSampleRate: 1.0,
//   sendDefaultPii: true,
// });

// // ---------------- MIDDLEWARE ----------------
// app.use(Sentry.setupExpressRequestHandler()); // 👈 request handler
// app.use(cors());
// app.use(express.json());

// // ---------------- ROUTES ----------------
// app.use("/api", exampleRoutes);

// app.get("/", (req, res) => res.send("API Working"));
// app.get("/debug-sentry", () => {
//   throw new Error("Test Sentry error");
// });
// app.get("/heavy", (req, res) => {
//   let sum = 0;
//   for (let i = 0; i < 1e7; i++) sum += i;
//   res.send(`Heavy computation done! Sum=${sum}`);
// });

// // ---------------- ERROR HANDLING ----------------
// app.use(Sentry.setupExpressErrorHandler()); // 👈 must come after routes

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- START SERVER ----------------
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () =>
//       console.log(`✅ Server running on http://localhost:${PORT}`)
//     );
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import exampleRoutes from "./routes/example.js";
// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY v10 (Correct API) ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   integrations: [
//     nodeProfilingIntegration(),
//     Sentry.httpIntegration(),
//     Sentry.expressIntegration({ app }), // integrates automatically with Express
//   ],
//   tracesSampleRate: 1.0,
//   profilesSampleRate: 1.0,
//   sendDefaultPii: true,
// });

// // ---------------- MIDDLEWARE ----------------
// app.use(cors());
// app.use(express.json());

// // ---------------- ROUTES ----------------
// app.use("/api", exampleRoutes);

// app.get("/", (req, res) => res.send("API Working"));

// app.get("/debug-sentry", (req, res) => {
//   // test error route — should appear in Sentry dashboard
//   throw new Error("Test Sentry error");
// });

// app.get("/heavy", (req, res) => {
//   let sum = 0;
//   for (let i = 0; i < 1e7; i++) sum += i;
//   res.send(`Heavy computation done! Sum=${sum}`);
// });

// // ---------------- ERROR HANDLING ----------------
// // ✅ Use the middleware from expressIntegration directly
// app.use(Sentry.errorHandler());

// // Custom fallback error handler
// app.use((err, req, res, next) => {
//   console.error("Internal Server Error:", err);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- START SERVER ----------------
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () =>
//       console.log(`✅ Server running on http://localhost:${PORT}`)
//     );
//   } catch (error) {
//     console.error("❌ Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();





import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import exampleRoutes from "./routes/example.js";
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import {clerkWebhooks} from './controllers/webhooks.js'
dotenv.config();

const app = express();

// ---------------- SENTRY v10 ----------------
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

// ✅ This automatically registers request + error handlers internally
// (No need for Sentry.errorHandler() or setupExpressRequestHandler())

// ---------------- MIDDLEWARE ----------------
app.use(cors());
app.use(express.json());

// ---------------- ROUTES ----------------
app.use("/api", exampleRoutes);

app.get("/", (req, res) => res.send("API Working ✅"));

app.get("/debug-sentry", (req, res) => {
  throw new Error("🧨 Test Sentry error");
});
app.post('/webhooks',clerkWebhooks)

app.get("/heavy", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1e7; i++) sum += i;
  res.send(`Heavy computation done! Sum=${sum}`);
});

// ---------------- ERROR HANDLER ----------------
// ⚠️ No need for Sentry.errorHandler() anymore in v10.
// Just keep your custom fallback below.

app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

// ---------------- START SERVER ----------------
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`✅ Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();




// // server/server.js
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import exampleRoutes from "./routes/example.js";
// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";
// import { clerkWebhooks } from "./controllers/webhooks.js";

// dotenv.config();

// const app = express();

// // ---------------- SENTRY v10 ----------------
// Sentry.init({
//   dsn: process.env.SENTRY_DSN,
//   integrations: [
//     nodeProfilingIntegration(),
//     Sentry.httpIntegration(),
//     Sentry.expressIntegration({ app }),
//   ],
//   tracesSampleRate: 1.0,
//   profilesSampleRate: 1.0,
//   sendDefaultPii: true,
// });

// // ---------------- MIDDLEWARE ----------------
// app.use(cors());
// app.use(express.json());

// // ---------------- ROUTES ----------------
// app.use("/api", exampleRoutes);

// app.get("/", (req, res) => res.send("API Working ✅"));

// app.get("/debug-sentry", (req, res) => {
//   throw new Error("🧨 Test Sentry error");
// });

// app.post("/webhooks", clerkWebhooks);

// app.get("/heavy", (req, res) => {
//   let sum = 0;
//   for (let i = 0; i < 1e7; i++) sum += i;
//   res.send(`Heavy computation done! Sum=${sum}`);
// });

// // ---------------- ERROR HANDLER ----------------
// app.use((err, req, res, next) => {
//   console.error("Internal Server Error:", err);
//   res.status(500).json({ message: "Internal Server Error" });
// });

// // ---------------- START SERVER ----------------
// const startServer = async () => {
//   try {
//     await connectDB();

//     // ✅ Only start server locally (NOT in production)
//     if (process.env.NODE_ENV !== "production") {
//       const PORT = process.env.PORT || 5000;
//       app.listen(PORT, () =>
//         console.log(`✅ Server running locally on http://localhost:${PORT}`)
//       );
//     }
//   } catch (error) {
//     console.error("❌ Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();

// // ✅ Export for Vercel Serverless usage
// export default app;
