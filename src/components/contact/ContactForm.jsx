import React, { useRef, useState } from 'react';
import './style.scss';
import { dsnCN } from "../../hooks/helper";

function ContactForm({ className }) {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult(null);
        setLoading(true);

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch('/api/send-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setLoading(false);
            setResult(data);

            if (data.success) {
                form.current.reset();
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setLoading(false);
            setResult({ success: false, message: 'Failed to send message. Please try again later.' });
        }
    };

    return (
        <div className={dsnCN('form-box', className)}>
            <h3 className="mb-30">Get in Touch</h3>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>What's your name?</label>
                        <input
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Let us know who you are."
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>What's your email address?</label>
                        <input
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="So we can get back to you."
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Any contacts?</label>
                        <input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            placeholder="Your messenger or phone"
                        />
                    </div>

                    <div className="form-group">
                        <label>Tell us more</label>
                        <textarea
                            id="form_message"
                            className="form-control"
                            name="message"
                            placeholder="What’s on your mind? Pitch your idea, ask a question, or just say hi."
                            required
                        />
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
