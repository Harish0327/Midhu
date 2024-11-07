import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactButton from './ContactButton';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    const sendWhatsAppMessage = (e) => {
        e.preventDefault();

        if (name === '' || mobile === '' || message === '') {
            alert('Please fill all fields');
            return;
        }

        const whatsappUrl = `https://api.whatsapp.com/send?phone=918300101155&text=Name:%20${encodeURIComponent(name)}%0AMobile:%20${encodeURIComponent(mobile)}%0AMessage:%20${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="contact-container">
            <div className="owner-info">
                <h3>Owner Information</h3>
                <p>
                    A.SELVARAJU<br />
                    Phone: 9787715155 , 8300101155<br />
                    Email: midhuindustries@gmail.com
                </p>
                <div className="map-container">
                    <h4>Our Location</h4>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.294223627454!2d77.02947287480866!3d11.016537389147198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857755fcf1ad3%3A0x89ee0ca86bae2968!2sMidhu%20Industries!5e0!3m2!1sen!2sin!4v1730782845282!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="contact-form animated-box">
                <h2>Contact Us</h2>
                <form onSubmit={sendWhatsAppMessage}>
                    <label>
                        Enter your Name: <br />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Enter your Mobile Number: <br />
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Message: <br />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
            <div className="customer-support">
                <h4>Customer Support</h4>
                <p>If you need assistance, you can reach our customer support team:</p>
                <p>Email: midhuindustries@gmail.com</p>
                <p>Phone: 9787715155 , 8300101155</p>
            </div>
            <div className="links-container">
                <h4>Connect with Us</h4><br />
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" size={30} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="30" 
                            height="30" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="social-icon">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.29 13.89l-1.41 1.41L12 13.41l-2.88 2.88-1.41-1.41L10.59 12 7.71 9.12l1.41-1.41L12 10.59l2.88-2.88 1.41 1.41L13.41 12l2.88 2.88z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" size={30} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" size={30} />
                    </a>
                </div>
            </div>
            <ContactButton/>
        </div>
    );
};

export default Contact;
