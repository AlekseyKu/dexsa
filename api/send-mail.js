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
        <h3>New message from DEXSA.site contact form</h3>
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
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

            body {
              margin: 0;
              padding: 0;
              font-family: 'Montserrat', Arial, sans-serif;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 30px auto;
              background: #f9f9f9;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              background-color: #000322;
              padding: 25px;
              text-align: center;
              color: #C44E35;
              font-size: 28px;
              font-weight: 600;
              font-family: 'Montserrat', Arial, sans-serif;
              letter-spacing: 2px;
            }
            .header img {
              max-width: 160px;
            }
            .content {
              padding: 25px;
              color: #333;
              font-size: 15px;
              line-height: 1.6;
            }
            .content h1 {
              font-size: 22px;
              color: #000322;
              margin-bottom: 20px;
            }
            .message-box {
              background-color: #f9f9f9;
              border-left: 4px solid #C44E35;
              padding: 15px;
              margin: 20px 0;
              font-style: italic;
            }
            .link-text {
              display: inline-block;
              background-color: #C44E35;
              color: #ffffff !important;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 600;
              margin-top: 20px;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              color: #888;
              padding: 15px;
              border-top: 1px solid #eaeaea;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- HEADER -->
            <div class="header">
              { DEXSA }
            </div>

            <!-- CONTENT -->
            <div class="content">
              <h1>Hi ${name},</h1>
              <p>Thank you for contacting <strong>DEXSA</strong>. We’ve received your message and will respond shortly.</p>

              <div class="message-box">${message}</div>

              <p>Meanwhile, you can explore more about us on our website:</p>
              <a href="https://dexsa.site" class="link-text">Visit DEXSA Website</a>

              <p style="margin-top: 20px;">Best regards,<br/>DEXSA Team</p>
            </div>

            <!-- FOOTER -->
            <div class="footer">
              &copy; ${new Date().getFullYear()} DEXSA. All rights reserved.
            </div>
          </div>
        </body>
      </html>
      `,
    });


    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Mail error:", error);
    return res.status(500).json({ success: false, message: "Failed to send message." });
  }
}
