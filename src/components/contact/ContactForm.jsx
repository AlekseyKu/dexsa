// src\components\contact\ContactForm.jsx
import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import './style.scss';
import { dsnCN } from "../../hooks/helper";

function ContactForm({ className }) {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    // Функция для отправки данных в Telegram
    const sendToTelegram = async (formData) => {
        const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
        const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

        const message = `
            New Contact Form Submission:
            Name: ${formData.get('name')}
            Email: ${formData.get('email')}
            Phone: ${formData.get('phone')}
            Message: ${formData.get('message')}
        `;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to send message to Telegram');
            }
            return { success: true };
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setResult(null);
        setLoading(true);

        const formData = new FormData(form.current);

        try {
            // Отправка через EmailJS
            // const emailResult = await emailjs.sendForm(
            //     'service_mxt8ue9',
            //     'template_1f1243o',
            //     form.current,
            //     'bvnMqTU1Ir-7kgLNL'
            // );
            // TODO: Uncomment the above lines to enable EmailJS functionality

            // Отправка в Telegram
            await sendToTelegram(formData);

            setLoading(false);
            setResult({ success: true, message: "Your message has been successfully sent. I will contact you soon." });
            form.current.reset();
        } catch (error) {
            setLoading(false);
            setResult({ success: false, message: `Failed to send message: ${error.message}` });
            console.error("Error:", error);
        }
    };

    return (
        <div className={dsnCN('form-box', className)}>
            <h3 className="mb-30">Get in Touch</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>What's your name?</label>
                        <input id="form_name" type="text" name="name" placeholder="Let us know who you are."
                               required="required" />
                    </div>

                    <div className="form-group">
                        <label>What's your email address?</label>
                        <input id="form_email" type="email" name="email" placeholder="So we can get back to you."
                               required="required" />
                    </div>

                    <div className="form-group">
                        <label>Any contacts?</label>
                        <input id="form_phone" type="phone" name="phone" placeholder="Your any messenger for quick communication"
                               required="required" />
                    </div>

                    <div className="form-group">
                        <label>Tell us more</label>
                        <textarea id="form_message" className="form-control" name="message"
                                  placeholder="What’s on your mind? Pitch your idea, ask a question, or just say hi."
                                  required="required" />
                    </div>

                    <div className="image-zoom">
                        <button type="submit" disabled={loading}>Send Message</button>
                    </div>
                    {loading && <div className="loading-message mt-20">Sending message...</div>}
                    {result && (
                        <p className={`${result.success ? 'success-message' : 'error-message'} mt-20`}>
                            {result.message}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
