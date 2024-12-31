import React, { useEffect, useRef, useState } from 'react';
import { FaIndustry, FaUsers, FaFileInvoiceDollar, FaBalanceScale, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa'; // Import the React logo icon
import ContactButton from './ContactButton';
import './Home.css';

// Import images
import slide1 from '../assets/images/home/One.jpg';
import slide2 from '../assets/images/home/Two.jpg';
import slide3 from '../assets/images/home/Three.jpg';
import metalWorker from '../assets/Why choose us.jpg';
import equip1 from '../assets/images/equip/One.jpg';
import equip2 from '../assets/images/equip/Two.jpg';
import equip3 from '../assets/images/equip/Three.jpg';
import equip4 from '../assets/images/equip/Four.jpg';
import equip5 from '../assets/images/equip/Five.jpg';
import equip6 from '../assets/images/equip/Six.jpg';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of imported slides
    const slides = [slide1, slide2, slide3];

    // Slideshow logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const sendToWhatsApp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;

        if (name && phone && message) {
            const whatsappUrl = `https://wa.me/918300101155?text=Hello, my name is ${encodeURIComponent(name)}. My phone number is ${encodeURIComponent(phone)}. Message: ${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div className='home'>
            <h2 className='m2'>Welcome to Midhu Industries</h2>
            <div className="slideshow">
                <img src={slides[currentSlide]} alt={`Industry ${currentSlide + 1}`} className="slideshow-image" />
            </div>

            <h2 className='m1 animated-title'>Glimpse of Midhu Industries</h2>
            <p className='int1 animated-text slide-in'>
                <q>
                    Midhu Industries, founded in 2008 in Coimbatore, Tamil Nadu, is a leading manufacturer and exporter of stainless steel products, including impellers and pump diffusers. Our High Quality stainless steel products are delivering clean water efficiency in various types of pumps and they are in demand globally. Under the leadership of <span> Mr. A.Selvaraju</span>, we prioritize customer satisfaction and adhere to ethical business practices.
                </q>
            </p>
            
            <p className='additional-info animated-text'>
                At Midhu Industries, we believe in innovation and quality. Our skilled team continuously explores new technologies and methods to enhance our product offerings. With a strong commitment to sustainability, we ensure our manufacturing processes minimize environmental impact while maintaining the highest standards of safety and quality.
            </p>

            <div className="why-choose-us" ref={sectionRef}>
                <div className="content">
                    <h2>Why Choose Us</h2>
                    <p>
                        At Midhu Industries, we prioritize quality and customer satisfaction. With over 15 years of experience in steel manufacturing, we ensure that every product meets the highest industry standards.
                    </p>
                    <div className="highlights">
                        <div className="highlight-item">
                            <FaIndustry className="icon" />
                            <p>30+ Years of Experience</p>
                        </div>
                        <div className="highlight-item">
                            <FaUsers className="icon" />
                            <p>2000+ Happy Customers</p>
                        </div>
                        <div className="highlight-item">
                            <FaFileInvoiceDollar className="icon" />
                            <p>Global Export Reach</p>
                        </div>
                        <div className="highlight-item">
                            <FaBalanceScale className="icon" />
                            <p>Ethical Business Practices</p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img 
                        src={metalWorker} 
                        alt="Steel Manufacturing" 
                        className={`animated-image ${isVisible ? 'slideInFromRight' : ''}`} 
                    />
                </div>
            </div>

            <div className='offer'>
                <h2>Our Facilities</h2>
                <div className="offer-item">
                    <div className="front">
                        <img src={equip1} alt="Automatic Hydraulic Deep Drawing Press" />
                    </div>
                    <div className="back">
                        <p>Hydraulic  Forming Presses   </p> 
                      
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src={equip2} alt="PLC Controlled Projection Welding Machine" />
                    </div>
                    <div className="back">
                        <p>Mechanical Presses</p>
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src={equip3} alt="Projection Welding Machine" />
                    </div>
                    <div className="back">
                        <p>PLC Controlled Fully Automatic Deep draw Press</p>
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src={equip4} alt="High-Quality Steel Manufacturing" />
                    </div>
                    <div className="back">
                        <p>Automatic Deep draw Press</p>
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src={equip5} alt="Projection Welding Machine" />
                    </div>
                    <div className="back">
                        <p>Chamber Stack Assembly</p>
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src={equip6} alt="Mechanical Presses" />
                    </div>
                    <div className="back">
                        <p>PLC controlled Projection Welding Machines</p>
                    </div>
                </div>
            </div>

            {/* Get in Touch */}
            <div className="get-in-touch">
                <h2>Get in Touch</h2>
                <div className="owner-details">
                    <div className="detail-item">
                        <FaEnvelope className="icon" />
                        <p>Email: midhuindustries@gmail.com</p>
                    </div>
                    <div className="detail-item">
                        <FaPhone className="icon" />
                        <p>Phone: +91 9787715155 ,+91 8300101155</p>
                    </div>
                    <div className="detail-item">
                        <FaMapMarkerAlt className="icon" />
                        <p>Location: S.F. No. 363, Bharath Nagar, Neelikonampalayam Post, <br />
                         Coimbatore-641033, Tamil Nadu, India</p>
                    </div>
                </div>
                <form id="contact-form" onSubmit={sendToWhatsApp}>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <input type="tel" name="phone" placeholder="Enter your phone number" required />
                    <textarea name="message" placeholder="Enter your message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <ContactButton />
        </div>
    );
};

export default Home;
