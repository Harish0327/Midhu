import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

// Import the images
import whatsAppImage from '../assets/WhatsApp Image 2024-10-30 at 11.42.48_72141968.jpg';
import midhuLogo from '../assets/midhu_logobg.png';


export default function Nav() {
    return (
        <div className='nav'>
            <img className='ima' src={whatsAppImage} alt="Midhu Industries" />
            <img className='ima1' src={midhuLogo} alt="Logo" />
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            
        </div>
    );
}
