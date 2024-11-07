import React, { useState } from 'react';
import './Product.css';
import { FaWhatsapp } from 'react-icons/fa';
import ContactButton from './ContactButton';

const productsData = {
    "Vertical Inline Pump Spares": {
        "2 Series": [
            { id: '2SeriesProduct1', name: '2 Series - Bearing Chamber', image: 'src/assets/images/vet/2Series - Bearing Chamber (2).png', description: 'Durable bearing chamber designed to enhance pump efficiency and longevity. Made from premium stainless steel to resist wear and corrosion', rating: 4.5 },
            { id: '2SeriesProduct2', name: '2 Series - Bottom Chamber', image: 'src/assets/images/vet/2Series - Bottom Chamber.png', description: 'Robust bottom chamber engineered for stability and optimal flow. Crafted from high-grade stainless steel to withstand high pressure and corrosion', rating: 4.3 },
            { id: '2SeriesProduct3', name: '2 Series - Chamber', image: 'src/assets/images/vet/2Series - Chamber.png', description: 'Durable and efficient chamber designed for seamless fluid transfer. Built with precision to enhance pump performance and longevity', rating: 4.7 },
            { id: '2SeriesProduct4', name: '2 Series - Impeller ', image: 'src/assets/images/vet/2Series - Impeller (3).png', description: 'High-performance impeller crafted for optimal fluid flow and pressure control. Made with quality materials to ensure durability and efficiency in pump systems', rating: 4.6 }
        ],
        "3 Series": [
            { id: '3SeriesProduct1', name: '3 Series - Bearing Chamber ', image: 'src/assets/images/vet/3Series - Bearing Chamber (2).png', description: 'Engineered for precision and longevity, this bearing chamber minimizes friction for enhanced performance. Its robust design ensures reliable operation in demanding conditions', rating: 4.4 },
            { id: '3SeriesProduct2', name: '3 Series - Bottom Chamber', image: 'src/assets/images/vet/3Series - Bottom Chamber.png', description: 'Designed to provide optimal fluid flow, this bottom chamber enhances pump efficiency. Its durable construction withstands high-pressure applications for long-lasting performance', rating: 4.2 },
            { id: '3SeriesProduct3', name: '3 Series - Chamber', image: 'src/assets/images/vet/3Series - Chamber.png', description: 'This versatile chamber offers reliable sealing and support for various pump models. Its innovative design reduces wear, ensuring consistent operation and extended lifespan', rating: 4.8 },
            { id: '3SeriesProduct4', name: '3 Series - Impeller', image: 'src/assets/images/vet/3Series - Impeller (2).png', description: 'The impeller is crafted for maximum hydraulic performance, promoting efficient fluid movement. Its lightweight design and sturdy materials make it ideal for high-speed applications', rating: 4.9 }
        ],
        "4 Series": [
            { id: '3SeriesProduct1', name: '4 Series - Bearing Chamber', image: 'src/assets/images/vet/4Series - Bearing Chamber (2).png', description: 'This bearing chamber is engineered for stability and precision, ensuring smooth rotation and minimal friction. Its robust design prolongs the life of your pump while enhancing overall efficiency', rating: 4.4 },
            { id: '3SeriesProduct2', name: '4 Series - Bottom Chamber', image: 'src/assets/images/vet/4Series - Bottom Chamber.png', description: 'Designed for superior fluid handling, this bottom chamber optimizes pump performance and reduces cavitation. Its durable materials ensure reliability even in demanding environments', rating: 4.2 },
            { id: '3SeriesProduct3', name: '4 Series - Chamber', image: 'src/assets/images/vet/4Series - Chamber.png', description: 'This chamber is built for versatility, accommodating various pump configurations with ease. Its innovative design minimizes leakage and maximizes efficiency for long-term reliability', rating: 4.8 },
            { id: '3SeriesProduct4', name: '4 Series - Impeller', image: 'src/assets/images/vet/4Series - Impeller (3).png', description: 'The impeller features advanced geometry for improved flow dynamics, resulting in higher efficiency. Made from high-quality materials, it ensures durability and optimal performance in various applications', rating: 4.9 }
        ],
        "5 Series": [
            { id: '3SeriesProduct1', name: '5 Series - Bearing Chamber', image: 'src/assets/images/vet/5Series - Bearing Chamber (2).png', description: 'This bearing chamber offers enhanced durability and precision, ensuring seamless operation in high-performance applications. Its design minimizes wear and tear, extending the service life of your equipment', rating: 4.4 },
            { id: '3SeriesProduct2', name: '5 Series - Bottom Chamber', image: 'src/assets/images/vet/5Series - Bottom Chamber.png', description: 'Engineered for optimal fluid flow, this bottom chamber reduces turbulence and enhances efficiency. Its robust construction withstands the toughest conditions, making it ideal for demanding operations', rating: 4.2 },
            { id: '3SeriesProduct3', name: '5 Series - Chamber', image: 'src/assets/images/vet/5Series - Chamber.png', description: 'This versatile chamber is designed to accommodate a range of pumping needs, maximizing performance and efficiency. Its leak-proof design ensures reliable operation across various applications', rating: 4.8 },
            { id: '3SeriesProduct4', name: '5 Series - Impeller ', image: 'src/assets/images/vet/5Series - Impeller (2).png', description: 'The impeller features a state-of-the-art design that enhances hydraulic performance and flow rates. Crafted from durable materials, it guarantees consistent performance and longevity in all environments', rating: 4.9 }
        ],
        "Chamber stack": [
            { id: '3SeriesProduct1', name: 'Chamber Stack - 2 Series', image: 'src/assets/images/vet/Chamber Stack - 2 Series.png', description: 'The 2 Series Chamber Stack is designed for compact efficiency, facilitating optimal fluid dynamics in tight spaces. Its durable construction ensures reliability and longevity in various applications', rating: 4.4 },
            { id: '3SeriesProduct2', name: 'Chamber Stack - 4 Series', image: 'src/assets/images/vet/Chamber Stack - 4 Series.png', description: 'Featuring an advanced design for enhanced performance, the 4 Series Chamber Stack maximizes flow efficiency and stability. Built with high-quality materials, it withstands demanding conditions while delivering consistent results', rating: 4.2 },
        ],
        "Pump Spares": [
            { id: '3SeriesProduct1', name: 'Pump Spare - Coupling Top Chamber', image: 'src/assets/images/vet/Pump Spare - Coupling Top Chamber.png', description: 'The Coupling Top Chamber is engineered to provide secure connections between components, ensuring efficient power transmission. Its robust design minimizes wear and enhances overall system reliability', rating: 4.4 },
            { id: '3SeriesProduct2', name: 'Pump Spare - Lock Washer', image: 'src/assets/images/vet/Pump Spare - Lock Washer.png', description: 'The Lock Washer offers secure fastening to prevent loosening under vibration and stress, ensuring optimal performance in pump systems. Its durable material guarantees long-lasting service in demanding environments', rating: 4.2 },
            { id: '3SeriesProduct3', name: 'Pump Spare - Mechanical Seal', image: 'src/assets/images/vet/Pump Spare - Mechanical Seal.png', description: 'The Mechanical Seal provides a leak-proof barrier between rotating and stationary parts, protecting against fluid loss. Designed for high efficiency, it enhances the longevity of pump systems', rating: 4.8 },
            { id: '3SeriesProduct4', name: 'Pump Spare - Shaft', image: 'src/assets/images/vet/Pump Spare - Shaft.png', description: 'The Shaft is precision-engineered for optimal power transfer and durability in various pumping applications. Its robust construction minimizes the risk of failure, ensuring smooth operation', rating: 4.9 },
            { id: '3SeriesProduct4', name: 'Pump Spare - Sleeves', image: 'src/assets/images/vet/Pump Spare - Sleeves.png', description: 'The Sleeves are designed to protect and enhance the life of the shaft while allowing for smooth operation within the pump. Made from high-quality materials, they offer excellent resistance to wear', rating: 4.9 },
            { id: '3SeriesProduct4', name: 'Pump Spare - Stopper', image: 'src/assets/images/vet/Pump Spare - Stopper.png', description: 'The Stopper provides essential functionality by preventing fluid backflow and maintaining system integrity. Its reliable design ensures effective operation in various pumping scenarios', rating: 4.9 },
            { id: '3SeriesProduct4', name: 'Pump Spare - TC Bush', image: 'src/assets/images/vet/Pump Spare - TC Bush.png', description: 'The TC Bush serves as a crucial component for stabilizing and supporting rotating elements within the pump. Its durable construction ensures longevity and consistent performance in challenging conditions', rating: 4.9 },
        ]
    },
    "4 inch SS Submersible spares": {
        "2 Series": [
            { id: '2SeriesProduct1', name: '2 Series - bottom', image: 'src/assets/images/four/2Series-Bottom.jpg', description: 'The 2 Series Bottom Chamber is designed for optimal performance, made from high-grade stainless steel to withstand harsh conditions. Its precision engineering ensures efficient fluid dynamics and minimal energy loss', rating: 4.5 },
            { id: '2SeriesProduct2', name: '2 Series - Chamber', image: 'src/assets/images/four/2 Series - Chamber.png', description: 'The 2 Series Chamber is constructed with durable stainless steel, providing strength and reliability for various pumping applications. Its design facilitates effective fluid movement, enhancing overall system efficiency', rating: 4.3 },
            { id: '2SeriesProduct2', name: '2 Series - Impeller ', image: 'src/assets/images/four/2 Series - Impeller.png', description: 'The 2 Series Impeller features a high-efficiency design that promotes effective fluid transfer. Made from premium stainless steel, it offers excellent performance and durability, even in challenging environments', rating: 4.3 }
        ],
        "3 Series": [
            { id: '3SeriesProduct1', name: '3 Series - Bottom', image: 'src/assets/images/four/3 Series - Bottom.png', description: 'The 3 Series Bottom Chamber is expertly crafted from high-quality stainless steel, ensuring long-lasting durability and resistance to wear. Its design optimizes fluid flow, making it perfect for various pumping applications', rating: 4.4 },
            { id: '3SeriesProduct2', name: '3 Series - Chamber', image: 'src/assets/images/four/3 Series - Chamber.png', description: 'The 3 Series Chamber offers robust construction with a focus on efficiency and performance. Made from premium stainless steel, it enhances fluid dynamics, reducing energy consumption while maximizing output', rating: 4.2 },
            { id: '3SeriesProduct2', name: '3 Series - Impeller', image: 'src/assets/images/four/3 Series - Impeller.png', description: 'The 3 Series Impeller is engineered for high performance, featuring a streamlined design that enhances fluid movement. Crafted from durable stainless steel, it ensures reliable operation and longevity in demanding environments', rating: 4.2 }
        
        ],
        "5 Series": [
            { id: '3SeriesProduct1', name: '5 Series - Bottom', image: 'src/assets/images/four/5 Series - Bottom.png', description: 'The 5 Series Bearing Chamber is engineered for durability and reliability, ensuring optimal performance in high-load applications. Its robust construction minimizes wear and enhances operational lifespan', rating: 4.4 },
            { id: '3SeriesProduct2', name: '5 Series - Chamber', image: 'src/assets/images/four/5 Series - Chamber.png', description: 'The 5 Series Bottom Chamber is crafted from high-quality materials to provide exceptional strength and stability. Its design ensures efficient fluid flow, reducing turbulence and energy consumption', rating: 4.2 },
            { id: '3SeriesProduct2', name: '5 Series - Impeller', image: 'src/assets/images/four/5 Series - Impeller.png', description: 'The 5 Series Impeller is designed for maximum efficiency and performance in fluid transfer applications. Its innovative shape, made from premium materials, ensures optimal flow rates and reduced operational noise', rating: 4.2 },
        
        ]
    },
    topSellers: [
        { id: '3SeriesProduct2', name: '5 Series - Chamber', image: 'src/assets/images/four/5 Series - Chamber.png', description: 'The 5 Series Bottom Chamber is crafted from high-quality materials to provide exceptional strength and stability. Its design ensures efficient fluid flow, reducing turbulence and energy consumption', rating: 4.2 },
        { id: '3SeriesProduct4', name: 'Pump Spare - Shaft', image: 'src/assets/images/vet/Pump Spare - Shaft.png', description: 'The Shaft is precision-engineered for optimal power transfer and durability in various pumping applications. Its robust construction minimizes the risk of failure, ensuring smooth operation', rating: 4.9 },
        { id: '3SeriesProduct4', name: 'Pump Spare - Sleeves', image: 'src/assets/images/vet/Pump Spare - Sleeves.png', description: 'The Sleeves are designed to protect and enhance the life of the shaft while allowing for smooth operation within the pump. Made from high-quality materials, they offer excellent resistance to wear', rating: 4.9 },
        { id: '3SeriesProduct2', name: 'Chamber Stack - 4 Series', image: 'src/assets/images/vet/Chamber Stack - 4 Series.png', description: 'Featuring an advanced design for enhanced performance, the 4 Series Chamber Stack maximizes flow efficiency and stability. Built with high-quality materials, it withstands demanding conditions while delivering consistent results', rating: 4.2 },   
    ]
};


const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupProduct, setPopupProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedSeries(null);
    };

    const handleSeriesClick = (series) => {
        setSelectedSeries(series);
    };

    const handleGetQuote = (product) => {
        setPopupProduct(product);
        setFormData({ name: '', phone: '', message: '' }); // Reset form data
        setShowPopup(true);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        const whatsappUrl = `https://wa.me/+919787715155?text=Interested in ${popupProduct.name}. Name: ${formData.name}, Phone: ${formData.phone}, Message: ${formData.message}`;
        window.open(whatsappUrl, '_blank');
        setShowPopup(false);
    };
    return (
        <div className="products-page">
            <h2>Our Products</h2>

            {!selectedCategory ? (
                <div className="product-categories">
                    {Object.keys(productsData).filter(category => category !== "topSellers").map((category) => (
                        <div key={category} className="category-box" onClick={() => handleCategoryClick(category)}>
                            <h3>{category}</h3>
                        </div>
                    ))}
                </div>
            ) : !selectedSeries ? (
                <div className="product-series">
                    <h3>{selectedCategory}</h3>
                    <button className="back-to-categories" onClick={() => setSelectedCategory(null)}>
                        Back to Categories
                    </button>
                    {Object.keys(productsData[selectedCategory]).map((series) => (
                        <div key={series} className="series-box" onClick={() => handleSeriesClick(series)}>
                            <h4>{series}</h4>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="product-list">
                    <h3>{selectedSeries} - {selectedCategory}</h3>
                    {productsData[selectedCategory][selectedSeries].map((product) => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.name} />
                            <div className="product-details">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p>Rating: {product.rating} ⭐</p>
                                <button className='get-quote-button' onClick={() => handleGetQuote(product)}>
                                    <FaWhatsapp /> Get a Quote
                                </button>
                            </div>
                        </div>
                    ))}
                    <button className="back-to-set" onClick={() => setSelectedSeries(null)}>Back to Series</button>
                </div>
            )}
              <div className="top-sellers">
                <h3>Top Sellers</h3>
                <div className="top-seller-list">
                    {productsData.topSellers.map((product) => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.name} />
                            <div className="product-details">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p>Rating: {product.rating} ⭐</p>
                                <button onClick={() => handleGetQuote(product)}>
                                    <FaWhatsapp /> Get a Quote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h4>Get a Quote for {popupProduct.name}</h4>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleFormChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone Number"
                            value={formData.phone}
                            onChange={handleFormChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleFormChange}
                        ></textarea>
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
            <ContactButton/>
        </div>
    );
};

export default Products;
