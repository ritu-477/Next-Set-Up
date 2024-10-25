"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_p7h3fvm', 'template_fvndh3o', form.current, {
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
            <form ref={form} onSubmit={sendEmail} className='flex justify-center items-center'>
                <label>Name</label>
                <input type="text" name="name" className='border border-black p-3 mx-2' />
                <label>Email</label>
                <input type="email" name="email" className='border border-black p-3 mx-2' />
                <label>Message</label>
                <textarea name="message" rows="2" cols="50" placeholder="Message" className='border border-black p-3 mx-2'></textarea>
                <button className='border border-blue-400 p-3 mx-2 bg-blue-100'>Send</button>
            </form>
        </div>
    );
};
export default ContactUs
