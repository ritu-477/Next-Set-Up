"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vpm5fe4', 'template_3h923kv', form.current, {
                publicKey: 'x8-Pr2kDhrGNisNuo',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='flex flex-col justify-center items-center pt-4 h-screen'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" className='border border-black p-3 mx-2' />
                <label>Email</label>
                <input type="email" name="user_email" className='border border-black p-3 mx-2' />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};
export default ContactUs
