// src\components\contact\ContactForm.jsx
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './style.scss';
import {dsnCN} from "../../hooks/helper";

function ContactForm({className}) {

    const form = useRef();
    const [loading, setLoading] = useState();
    const [result, setResult] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
        setResult(false);
        setLoading(true);
        emailjs.sendForm(
            'service_mxt8ue9',
            'template_1f1243o',
            form.current,
            'bvnMqTU1Ir-7kgLNL')
            .then((result) => {
                setLoading(false);
                setResult(true);
                form.current.reset();
            }, (error) => {
                setLoading(false);
            });
    };

    setTimeout(() => setResult(false), 5000);


    return (
        <div className={dsnCN('form-box', className)}>
            <h3 className="mb-30">Get in Touch</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>What's your name?</label>
                        <input id="form_name" type="text" name="name" placeholder="Let us know who you are."
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>What's your email address?</label>
                        <input id="form_email" type="email" name="email" placeholder="So we can get back to you."
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>Any contacts?</label>
                        <input id="form_phone" type="phone" name="phone" placeholder="Your any messenger for quick communication"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>Tell us more</label>
                        <textarea id="form_message" className="form-control" name="message"
                                  placeholder="What’s on your mind? Pitch your idea, ask a question, or just say hi." required="required"
                        />
                    </div>

                    <div className="image-zoom">
                        <button type="submit">Send Message</button>
                    </div>
                    {loading && <div className="loading-message mt-20">Message Send ...</div>}
                    {result &&
                    <p className="success-message mt-20">Your Message has been successfully sent. I will contact you
                        soon.</p>}
                </div>
            </form>
        </div>
    );
}

export default ContactForm;