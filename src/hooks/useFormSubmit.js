// src/hooks/useFormSubmit.js
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const useFormSubmit = () => {
    // Инициализируем EmailJS с Public Key
    useEffect(() => {
        emailjs.init('2qeQpTzMZMRZ8CsrC'); // Ваш Public Key
    }, []);

    // const sendToTelegram = async (formData) => {
    //     try {
    //         const response = await fetch('/api/send-to-telegram', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 name: formData.get('name'),
    //                 email: formData.get('email'),
    //                 phone: formData.get('phone'),
    //                 message: formData.get('message'),
    //             }),
    //         });
    //         const data = await response.json();
    //         if (!response.ok) {
    //             throw new Error(data.message || 'Failed to send message to Telegram');
    //         }
    //         return { success: true };
    //     } catch (error) {
    //         throw new Error(error.message || 'Telegram request failed');
    //     }
    // };

    const sendForm = async (formData, formElement) => {
        try {
            // Отправка через EmailJS - оповещение на email dexsa
            const emailResult = await emailjs.sendForm(
                'service_oauknwr', // Ваш Service ID
                'template_9ygkcxe', // Ваш Template ID
                formElement
            );
            console.log('EmailJS success:', emailResult.text);

            // Отправка через EmailJS - оповещение на email пользователя
            const emailWelcome = await emailjs.sendForm(
                'service_oauknwr', // Ваш Service ID
                'template_8xg9sks', // Ваш Template ID
                formElement // Ссылка на форму
            );
            console.log('EmailJS success:', emailWelcome.text);

            // Отправка в Telegram
            // await sendToTelegram(formData);
            // TODO add logic to sendToTelegram after test

            return { success: true, message: "Your message has been successfully sent. We will contact you soon." };
        } catch (error) {
            const errorMessage = error.text || error.message || 'Unknown EmailJS error';
            throw new Error(`Failed to send message: ${errorMessage}`);
        }
    };

    return { sendForm };
};