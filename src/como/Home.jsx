import React, { useEffect, useRef, useState } from 'react';
import { FaIndustry, FaUsers, FaFileInvoiceDollar, FaBalanceScale, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa'; // Import the React logo icon
import ContactButton from'./ContactButton'
import './Home.css';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "src/assets/images/home/20241025_105516.jpg",
        "src/assets/images/home/20241025_102355.jpg",
        "src/assets/images/home/20241025_105603.jpg"
    ];

    // Slideshow logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

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
                    Midhu Industries, founded in 2008 in Coimbatore, Tamil Nadu, is a leading manufacturer and exporter of stainless steel products, including impellers and pump diffusers. Our high-quality products are essential for the smooth operation of various electrical appliances and are in demand globally. Under the leadership of <span> Mr. A.Selvaraju</span>, we prioritize customer satisfaction and adhere to ethical business practices.
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
                        src="src\assets\metal-worker-teaching-trainee-machine-use_441990-7959.jpg" 
                        alt="Steel Manufacturing" 
                        className={`animated-image ${isVisible ? 'slideInFromRight' : ''}`} 
                    />
                </div>
            </div>

            <div className='offer'>
                <h2>Our Equpiments</h2>
                <div className="offer-item">
                    <div className="front">
                        <img src="src\assets\images\equip\20241025_102436.jpg" alt="Solar Panels" />
                    </div>
                    <div className="back">
                        <p>AUTOMATIC HYDRAULIC DEEP DRAWING PRESS</p>
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src="src\assets\images\equip\20241025_102654.jpg" alt="Steel Manufacturing" />
                    </div>
                    <div className="back">
                        <p>PLC CONTROLLED AUTOMATIC PROJECTION WEDDING MACHINE</p>
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src="src\assets\images\equip\20241025_102705.jpg" alt="Steel Manufacturing" />
                    </div>
                    <div className="back">
                        <p>PLC CONTROLLED AUTOMATIC PROJECTION WEDDING MACHINE</p>
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src="src/assets/images/home/20241025_105603.jpg" alt="Steel Manufacturing" />
                    </div>
                    <div className="back">
                        <p>High-Quality Steel Manufacturing</p>
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src="src\assets\images\equip\WhatsApp Image 2024-10-25 at 16.56.42_c9bf3180.jpg" alt="Steel Manufacturing" />
                    </div>
                    <div className="back">
                        <p>PLC CONTROLLED AUTOMATIC PROJECTION WEDDING MACHINE</p>
                    </div>
                </div>
                <div className="offer-item">
                    <div className="front">
                        <img src="src\assets\images\equip\20241025_102355.jpg" alt="Steel Manufacturing" />
                    </div>
                    <div className="back">
                        <p>MECHANICAL PRESSES</p>
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
                        <p>Phone: 9787715155 , 8300101155</p>
                    </div>
                    <div className="detail-item">
                        <FaMapMarkerAlt className="icon" />
                        <p>Location: Coimbatore</p>
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
