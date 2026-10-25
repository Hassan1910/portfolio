import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors(process.env.CORS_ORIGIN ? { origin: process.env.CORS_ORIGIN } : undefined));
app.use(express.json({ limit: "32kb" }));

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

app.post("/api/send-email", async (req, res) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: "Contact API is not configured. Set RESEND_API_KEY, or use the site mailto form.",
    });
  }

  const { name, email, message, phone, subject } = req.body ?? {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO || "adanhassan1910@gmail.com";
  const from = process.env.CONTACT_FROM || "Portfolio Contact <onboarding@resend.dev>";

  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: subject ? `${subject} — ${name}` : `Portfolio message from ${name}`,
    html: `
      <h2>Portfolio contact</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject || "No subject")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.json({ success: true, id: data?.id ?? null });
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
