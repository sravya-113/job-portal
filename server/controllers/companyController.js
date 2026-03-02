import Company from "../models/Company.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "jobportal_secret_key";

// Generate JWT token
const generateToken = (id) =>
    jwt.sign({ id }, JWT_SECRET, { expiresIn: "7d" });

// POST /api/company/register
export const registerCompany = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const exists = await Company.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "Email already registered" });
        }

        const company = await Company.create({ name, email, password });

        res.status(201).json({
            success: true,
            message: "Account created successfully",
            token: generateToken(company._id),
            company: {
                _id: company._id,
                name: company.name,
                email: company.email,
                image: company.image,
            },
        });
    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// POST /api/company/login
export const loginCompany = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        const company = await Company.findOne({ email });
        if (!company) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const isMatch = await company.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        res.json({
            success: true,
            message: "Login successful",
            token: generateToken(company._id),
            company: {
                _id: company._id,
                name: company.name,
                email: company.email,
                image: company.image,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
