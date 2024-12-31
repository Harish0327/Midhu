import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

export default function Nav() {
    return (
        <div className='nav'>
            <img className='ima' src="public/WhatsApp Image 2024-10-30 at 11.42.48_72141968.jpg" alt="Midhu Industries" />
            <img className='ima1' src="public/midhu_logobg.png" alt="" />
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            
        </div>
    );
}  