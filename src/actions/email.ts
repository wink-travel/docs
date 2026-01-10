import { defineAction, ActionError } from "astro:actions";

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { z } from "zod";

// Define the expected schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100).trim(),
  email: z.string().email("Invalid email address").toLowerCase(),
  subject: z
    .string()
    .min(5, "Subject must be at least 10 characters")
    .max(200)
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000)
    .trim(),
  // Optional honeypot field (add an invisible field in your form named "honeypot")
  honeypot: z.string().optional().default(""),
  // Optional simple anti-bot timestamp (client sets Date.now() on form load)
  _sent: z.string().optional(),
});

const mailerSend = new MailerSend({
  apiKey: import.meta.env.MAILERSEND_API_KEY,
});

export const POST = defineAction({
  accept: "form", // Accepts form data
  handler: async (formData) => {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    try {
      // const formData = new FormData(form);

      const raw = Object.fromEntries(formData.entries());

      console.log("raw", raw);

      console.log("honeypot");

      // 2. Honeypot check (simple but very effective spam protection)
      if (raw.honeypot && String(raw.honeypot).trim() !== "") {
        // Spam bot filled the hidden field → fake success to not reveal detection
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      console.log("Zod");
      // 3. Validate with Zod
      const result = contactSchema.safeParse(raw);

      if (!result.success) {
        const errors = result.error.format();
        return new Response(
          JSON.stringify({
            success: false,
            errors: {
              name: errors.name?._errors?.[0],
              email: errors.email?._errors?.[0],
              message: errors.message?._errors?.[0],
            },
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      console.log("email");

      const { name, email, message } = result.data;

      // 5. Send email via MailerSend
      const from = new Sender("no-reply@yourdomain.com", "Wink");
      const to = [new Recipient("hi@wink.travel", "Wink Support")];

      const emailParams = new EmailParams()
        .setFrom(from)
        .setTo(to)
        .setReplyTo(new Recipient(email, name))
        .setSubject("New Contact Form Submission").setText(`
Name: ${name}
Email: ${email}
Message:
${message}

Sent: ${new Date().toISOString()}
      `);

      await mailerSend.email.send(emailParams);

      return { success: true };
    } catch (error) {
      console.error("Contact form error:", error);
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "Unknown error",
      });
    }
  },
});
