import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="address">
                    S.F. No. 363, Bharath Nagar, Neelikonampalayam Post, <br />
                     Coimbatore-641033, Tamil Nadu, India
                </p>
                <div className="social-media">
                    <a href="https://www.facebook.com/profile.php?id=61567910507185" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/midhuindustries/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/midhu-industries-06b835337/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                    </a>
                    <a href="https://x.com/MidhuI79631" target="_blank" rel="noopener noreferrer" className="social-icon">
                        {/* X logo SVG */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="social-icon">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.29 13.89l-1.41 1.41L12 13.41l-2.88 2.88-1.41-1.41L10.59 12 7.71 9.12l1.41-1.41L12 10.59l2.88-2.88 1.41 1.41L13.41 12l2.88 2.88z"/>
                        </svg>
                    </a>
                </div> <br />
                <p>&copy; {new Date().getFullYear()} Midhu Industries. All rights reserved.</p>
                <p>&copy; {new Date().getFullYear()}   Million Dream . All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
