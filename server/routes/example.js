import express from "express";
const router = express.Router();

// Example API route
router.get("/hello", (req, res) => {
  res.json({ message: "Hello from the job portal API!" });
});

export default router;
