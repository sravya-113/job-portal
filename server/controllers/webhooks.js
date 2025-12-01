import { Webhook } from "svix";
import User from "../models/User.js";

// API controller function to manage Clerk user webhooks
export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify signature (expects raw payload in production)
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };
    const payload = JSON.stringify(req.body || {});
    await whook.verify(payload, headers);

    const { data, type } = req.body || {};

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data?.email_addresses?.[0]?.email_address,
          name: `${data?.first_name || ""} ${data?.last_name || ""}`.trim(),
          image: data?.image_url || "",
          resume: "",
        };
        await User.create(userData);
        return res.json({ ok: true });
      }
      case "user.updated": {
        const userData = {
          email: data?.email_addresses?.[0]?.email_address,
          name: `${data?.first_name || ""} ${data?.last_name || ""}`.trim(),
          image: data?.image_url || "",
        };
        await User.findByIdAndUpdate(data.id, userData, { upsert: true });
        return res.json({ ok: true });
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.json({ ok: true });
      }
      default: {
        return res.json({ ok: true, ignored: true });
      }
    }
  } catch (error) {
    console.error("Webhook error:", error?.message || error);
    return res.status(400).json({ success: false, message: "Webhook Error" });
  }
};
