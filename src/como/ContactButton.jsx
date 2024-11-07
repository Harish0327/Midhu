// src/components/ContactButtons.js
import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const ContactButtons = () => {
    const handleWhatsAppClick = () => {
        const whatsappUrl = "https://wa.me/918300101155"; // Add your WhatsApp number here
        window.open(whatsappUrl, "_blank");
    };

    const handlePhoneClick = () => {
        window.location.href = "tel:8300101155"; // Add your phone number here
    };

    return (
        <div className="contact-buttons">
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                <FaWhatsapp size={24} />
            </button>
            <button className="phone-button" onClick={handlePhoneClick}>
                <FaPhone size={24} />
            </button>
        </div>
    );
};

export default ContactButtons;
