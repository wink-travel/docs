import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailersendApiKey = defineSecret("MAILERSEND_API_KEY");

const ALLOWED_ORIGINS = [
  "https://wink.travel",
  "https://www.wink.travel",
];

function getCorsOrigin(request: { headers: { origin?: string } }): string | null {
  const origin = request.headers.origin ?? "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    return origin;
  }
  return null;
}

interface ContactFormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
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
  { secrets: [mailersendApiKey], cors: false },
  async (req, res) => {
    const origin = getCorsOrigin(req);

    if (origin) {
      res.set("Access-Control-Allow-Origin", origin);
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

    if (!origin) {
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
