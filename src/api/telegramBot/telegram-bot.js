// src\api\telegramBot\telegram-bot.js
const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.json());

// console.log('TELEGRAM_BOT_TOKEN:', process.env.TELEGRAM_BOT_TOKEN);
// console.log('TELEGRAM_CHAT_ID:', process.env.TELEGRAM_CHAT_ID);

app.post('/api/send-to-telegram', async (req, res) => {
    const { name, email, phone, message } = req.body;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Проверяем, что переменные определены
    if (!botToken || !chatId) {
        return res.status(500).json({ success: false, message: 'Telegram Bot Token or Chat ID is not defined in .env' });
    }

    const text = `
        New Contact Form Submission:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.description || 'Failed to send message to Telegram');
        }
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(3001, () => console.log('Server running on port 3001'));