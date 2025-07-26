import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    // Настраиваем SMTP Timeweb
    const transporter = nodemailer.createTransport({
      host: "smtp.timeweb.ru",
      port: 465,
      secure: true, // true для 465
      auth: {
        user: process.env.SMTP_USER, // info@dexsa.site
        pass: process.env.SMTP_PASS, // пароль почты
      },
    });

    // Письмо тебе
    await transporter.sendMail({
      from: `"DEXSA Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "New contact form submission",
      html: `
        <h3>New message from contact form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Письмо пользователю
    await transporter.sendMail({
      from: `"DEXSA Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting us. We have received your message and will respond shortly.</p>
        <blockquote>${message}</blockquote>
        <p>Best regards,<br/>DEXSA Team</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Mail error:", error);
    return res.status(500).json({ success: false, message: "Failed to send message." });
  }
}
