import React, { useRef, useState } from 'react';
import './style.scss';
import { dsnCN } from "../../hooks/helper";
import { useFormSubmit } from "../../hooks/useFormSubmit";

function ContactForm({ className }) {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const { sendForm } = useFormSubmit();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult(null);
        setLoading(true);

        const formData = new FormData(form.current);

        try {
            const result = await sendForm(formData, form.current);
            setLoading(false);
            setResult(result);
            form.current.reset();
        } catch (error) {
            setLoading(false);
            setResult({ success: false, message: error.message });
            console.error("Error:", error);
        }
    };

    return (
        <div className={dsnCN('form-box', className)}>
            <h3 className="mb-30">Get in Touch</h3>
            <form ref={form} onSubmit={handleSubmit}>
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

// import React, { useRef, useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// import './style.scss';
// import { dsnCN } from "../../hooks/helper";

// function ContactForm({ className }) {
//     const form = useRef();
//     const [loading, setLoading] = useState(false);
//     const [result, setResult] = useState(null);

//     // Инициализируем EmailJS с Public Key
//     useEffect(() => {
//         emailjs.init('2qeQpTzMZMRZ8CsrC'); // Ваш Public Key
//     }, []);

//     // Функция для отправки данных в Telegram
//     const sendToTelegram = async (formData) => {
//         try {
//             const response = await fetch('/api/send-to-telegram', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     name: formData.get('name'),
//                     email: formData.get('email'),
//                     phone: formData.get('phone'),
//                     message: formData.get('message'),
//                 }),
//             });
//             const data = await response.json();
//             if (!response.ok) {
//                 throw new Error(data.message || 'Failed to send message to Telegram');
//             }
//             return { success: true };
//         } catch (error) {
//             throw new Error(error.message || 'Telegram request failed');
//         }
//     };

//     const sendEmail = async (e) => {
//         e.preventDefault();
//         setResult(null);
//         setLoading(true);

//         const formData = new FormData(form.current);

//         try {
//             // Отправка через EmailJS
//             await emailjs.sendForm(
//                 'service_oauknwr', // Ваш Service ID
//                 'template_9ygkcxe', // Ваш Template ID
//                 form.current // Ссылка на форму
//             );

//             // console.log('EmailJS success:', emailResult.text); // Должно вывести "OK"
            
            // await emailjs.sendForm(
            //     'service_oauknwr', // Ваш Service ID
            //     'template_8xg9sks', // Ваш Template ID
            //     form.current // Ссылка на форму
            // );

//             // Отправка в Telegram
//             await sendToTelegram(formData);

//             setLoading(false);
//             setResult({ success: true, message: "Your message has been successfully sent. We will contact you soon." });
//             form.current.reset();
//         } catch (error) {
//             setLoading(false);
//             // EmailJS возвращает ошибку в формате { status, text }
//             const errorMessage = error.text || error.message || 'Unknown EmailJS error';
//             setResult({ success: false, message: `Failed to send message via EmailJS: ${errorMessage}` });
//             console.error("EmailJS Error:", error);
//         }
//     };

//     return (
//         <div className={dsnCN('form-box', className)}>
//             <h3 className="mb-30">Get in Touch</h3>
//             <form ref={form} onSubmit={sendEmail}>
//                 <div className="input__wrap controls">
//                     <div className="form-group">
//                         <label>What's your name?</label>
//                         <input id="form_name" type="text" name="name" placeholder="Let us know who you are."
//                                required="required" />
//                     </div>

//                     <div className="form-group">
//                         <label>What's your email address?</label>
//                         <input id="form_email" type="email" name="email" placeholder="So we can get back to you."
//                                required="required" />
//                     </div>

//                     <div className="form-group">
//                         <label>Any contacts?</label>
//                         <input id="form_phone" type="phone" name="phone" placeholder="Your any messenger for quick communication"
//                                required="required" />
//                     </div>

//                     <div className="form-group">
//                         <label>Tell us more</label>
//                         <textarea id="form_message" className="form-control" name="message"
//                                   placeholder="What’s on your mind? Pitch your idea, ask a question, or just say hi."
//                                   required="required" />
//                     </div>

//                     <div className="image-zoom">
//                         <button type="submit" disabled={loading}>Send Message</button>
//                     </div>
//                     {loading && <div className="loading-message mt-20">Sending message...</div>}
//                     {result && (
//                         <p className={`${result.success ? 'success-message' : 'error-message'} mt-20`}>
//                             {result.message}
//                         </p>
//                     )}
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default ContactForm;