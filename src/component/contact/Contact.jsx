import React from 'react'
import './contact.css'
import { AiTwotoneMail } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { AiFillFacebook } from 'react-icons/ai'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ykdzb05', 'template_a9pcv7q', form.current, 'dhahT8CthMYWxuQEn')
        e.target.reset();
    };

    return (

        <section id='contact'>
            <h5>Keep in Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <AiTwotoneMail />
                        <h4>Email</h4>
                        <p>pinyunwuu@gmail.com</p>
                        <a href="mailto:pinyunwuu@gmail.com">Send a Mail to Me</a>
                    </article>
                    <article className='contact__option'>
                        <AiFillFacebook />
                        <h4>Facebook</h4>
                        <p>Pin-Yun Wu 吳品云</p>
                        <a href="https://www.facebook.com/profile.php?id=100011124549946">View My Profile</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <h3>Leave Message</h3>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />

                    <textarea name="message" rows="10" placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Messgage</button>
                </form>
            </div>
        </section>
    )
}

export default Contact