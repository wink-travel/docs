import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

import { checkOrigin } from "./origin.js";
import { verifyTurnstile } from "./turnstile.js";

const mailersendApiKey = defineSecret("MAILERSEND_API_KEY");
const turnstileSecretKey = defineSecret("TURNSTILE_SECRET_KEY");

interface ContactFormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
  "cf-turnstile-response"?: string;
}

function validateForm(data: ContactFormData): { valid: true; cleaned: Required<Pick<ContactFormData, "name" | "email" | "subject" | "message">> } | { valid: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim().toLowerCase();
  const subject = (data.subject ?? "").trim();
  const message = (data.message ?? "").trim();

  if (name.length < 2 || name.length > 100) {
    errors.name = "Name must be between 2 and 100 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (subject.length < 5 || subject.length > 200) {
    errors.subject = "Subject must be between 5 and 200 characters.";
  }

  if (message.length < 10 || message.length > 2000) {
    errors.message = "Message must be between 10 and 2000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return { valid: true, cleaned: { name, email, subject, message } };
}

export const contactForm = onRequest(
  { secrets: [mailersendApiKey, turnstileSecretKey], cors: false },
  async (req, res) => {
    const originCheck = checkOrigin(req);

    if (originCheck.allowed && originCheck.header) {
      res.set("Access-Control-Allow-Origin", originCheck.header);
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type");
    }

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ success: false, error: "Method not allowed." });
      return;
    }

    if (!originCheck.allowed) {
      res.status(403).json({ success: false, error: "Forbidden." });
      return;
    }

    const body = req.body as ContactFormData;

    if (body.honeypot && body.honeypot.trim() !== "") {
      res.status(200).json({ success: true });
      return;
    }

    const result = validateForm(body);

    if (!result.valid) {
      res.status(400).json({ success: false, errors: result.errors });
      return;
    }

    const forwardedIp = req.headers["cf-connecting-ip"];
    const turnstile = await verifyTurnstile({
      token: body["cf-turnstile-response"],
      secret: turnstileSecretKey.value(),
      remoteIp: typeof forwardedIp === "string" ? forwardedIp : req.ip,
    });

    if (turnstile.status === "rejected") {
      res.status(403).json({ success: false, error: "Verification failed. Please reload the page and try again." });
      return;
    }

    if (turnstile.status === "unavailable") {
      res.status(503).json({ success: false, error: "Verification is temporarily unavailable. Please try again shortly." });
      return;
    }

    const { name, email, subject, message } = result.cleaned;

    try {
      const mailerSend = new MailerSend({
        apiKey: mailersendApiKey.value(),
      });

      const from = new Sender("no-reply@wink.travel", "Wink");
      const to = [new Recipient("hi@wink.travel", "Wink Support")];

      const emailParams = new EmailParams()
        .setFrom(from)
        .setTo(to)
        .setReplyTo(new Recipient(email, name))
        .setSubject(`Contact Form: ${subject}`)
        .setText(
          `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\nSent: ${new Date().toISOString()}`
        );

      await mailerSend.email.send(emailParams);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("MailerSend error:", error);
      res.status(500).json({ success: false, error: "Failed to send message. Please try again later." });
    }
  }
);
