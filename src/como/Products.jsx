import React, { useState } from 'react';
import './Product.css';
import { FaWhatsapp } from 'react-icons/fa';
import ContactButton from './ContactButton';

import impellerImage from '../assets/images/vet/2Impeller.jpg';
import chamberImage from '../assets/images/vet/2Chamber.jpg';
import bearingChamberImage from '../assets/images/vet/2Bearing Chamber.jpg';
import bottomChamberImage from '../assets/images/vet/2Bottom Chamber.jpg';



import Impller from "../assets/images/vet/3Impeller.jpg"
import Chamber3 from'../assets/images/vet/3Chamber.jpg';
import bearingChamberImage3 from '../assets/images/vet/3Bearing Chamber.jpg';
import bottomChamberImage3 from '../assets/images/vet/3Bottom Chamber.jpg';

import Impller4 from '../assets/images/vet/4Impeller.jpg'
import chamber4 from '../assets/images/vet/4Chamber.jpg';
import bearingchamber4 from '../assets/images/vet/4Bearing Chamber.jpg';
import bottomchamber4 from'../assets/images/vet/4Bottom Chamber.jpg';

import Impller5 from '../assets/images/vet/5Impeller.jpg';
import chamber5 from '../assets/images/vet/5Chamber.jpg';
import bearingchamber5 from '../assets/images/vet/5Bearing Chamber.jpg';
import bottomchamber5 from'../assets/images/vet/5Bottom Chamber.jpg';

import chamberstack2 from '../assets/images/vet/2 seriesChamp.jpg';
import chamberstack4 from '../assets/images/vet/4 SeriesChamp.jpg';

import coupling from '../assets/images/vet/Coupling.jpg';
import pumpSpare2 from '../assets/images/vet/Lock Washer.jpg';
import pumpSpare3 from '../assets/images/vet/Mechanical Seal.jpg';
import pumpSpare4 from '../assets/images/vet/Pump Shafts.jpg';
import pumpSpare5 from '../assets/images/vet/Sleeves.jpg';
import pumpSpare6 from '../assets/images/vet/Top Chamber.jpg';
import pumpSpare7 from '../assets/images/vet/TC Bushes.jpg';

import fourimp2 from '../assets/images/four/2Impeller.jpg';
import fourcham2 from '../assets/images/four/2Chamber.jpg';
import fourbottom2 from '../assets/images/four/2Bottom Chamber.jpg';

import fourimp3 from '../assets/images/four/3Impeller.jpg';
import fourcham3 from '../assets/images/four/3Chamber.jpg';
import fourbottom3 from '../assets/images/four/3Bottom Chamber.jpg';

import fourimp5 from '../assets/images/four/5Impeller.jpg';
import fourcham5 from '../assets/images/four/5Chamber.jpg';
import fourbottom5 from '../assets/images/four/5Bottom Chamber.jpg';


const productsData = {
    "Vertical Inline Pump Spares": {
        "2 Series": [
            { id: '2SeriesProduct4', name: '2 Series - Impeller', image: impellerImage, description: [' - Material: SS304( SS316 On request)',<br/> ,'- Suitable for: Double D,Spline,Hex shafts' , <br/> ,'- Outer dia : 90mm',<br/>,'- Rated flow : 2m3/Hr'], rating: 4.7 },
            { id: '2SeriesProduct3', name: '2 Series - Chamber', image: chamberImage, description:  ['- Material: SS304/PTFE',<br/> ,'- Length :  18mm' , <br/> ,'- Outer Dia : 110mm'], rating: 4.6 },
            { id: '2SeriesProduct1', name: '2 Series - Bearing Chamber', image: bearingChamberImage, description: ['- Material : SS304/PTFE',<br/> ,'- Bush : Sic / TC' , <br/> ,'- Inner Dia:  16mm/ 17.5mm'], rating: 4.5 },
            { id: '2SeriesProduct2', name: '2 Series - Bottom Chamber', image:  bottomChamberImage, description: [' - Material: SS304/PTFE',<br/> ,'- Suitable for: MVC2 , CR2 , CDL2' , <br/> ,'- Outer Dia : 110mm'], rating: 4.3 },
          
            
        ],
        "3 Series": [
            { id: '3SeriesProduct1', name: '3 Series - Bearing Chamber', image: bearingChamberImage3, description: ['-  Material: SS304( SS316 On request)',<br/> ,'- Suitable for:  Double D, Spline  ' , <br/> ,'- 	Outer dia : 73mm',<br/>,'- 	Rated flow : 3m3/Hr'], rating: 4.5 },
            { id: '3SeriesProduct2', name: '3 Series - Bottom Chamber', image: bottomChamberImage3, description: ['- Material: SS304/PTFE',<br/> ,'- Length :  18mm' , <br/> ,'- Outer Dia : 110mm'], rating: 4.3 },
            { id: '3SeriesProduct3', name: '3 Series - Chamber', image: Chamber3, description: ['- Material : SS304/PTFE',<br/> ,'- Bush : Sic / TC' , <br/> ,'- Inner dia:  16mm/ 17.5mm'], rating: 4.6 },
            { id: '3SeriesProduct4', name: '3 Series - Impeller', image: Impller, description: ['- 	Material: SS304/PTFE',<br/> ,'- Suitable for: MVC3 , CR3 , CDL3' , <br/> ,'- Outer Dia : 110mm'], rating: 4.7 },
        ],
        "4 Series": [
            { id: '4SeriesProduct1', name: '4 Series - Bearing Chamber', image:  bearingchamber4, description: ['- Material: SS304( SS316 On request)',<br/> ,'- Suitable for:  Double D, Spline , Hex  ' , <br/> ,'- Outer dia : 95mm',<br/>,'- Rated flow : 4m3/Hr'],  rating: 4.5 },
            { id: '4SeriesProduct2', name: '4 Series - Bottom Chamber', image: bottomchamber4, description: ['- Material: SS304/PTFE',<br/> ,'- Length :  27mm' , <br/> ,'- Outer Dia : 110mm'] , rating: 4.3 },
            { id: '4SeriesProduct3', name: '4 Series - Chamber', image: chamber4, description: ['- 	Material : SS304/PTFE',<br/> ,'- Bush : Sic / TC' , <br/> ,'- Inner dia:  16mm/ 17.5mm'], rating: 4.6 },
            { id: '4SeriesProduct4', name: '4 Series - Impeller', image: Impller4 , description:  ['- Material: SS304/PTFE',<br/> ,'- Suitable for: MVC4 , CR4 , CDL4' , <br/> ,'- Outer Dia : 110mm'], rating: 4.7 },
        ],
        "5 Series": [
            { id: '5SeriesProduct1', name: '5 Series - Bearing Chamber', image: bearingchamber5, description: ['- Material: SS304( SS316 On request)',<br/> ,'- Suitable for:  Double D, Spline    ' , <br/> ,'- Outer dia : 73mm',<br/>,'- Rated flow : 5m3/Hr'], rating: 4.5 },
            { id: '5SeriesProduct2', name: '5 Series - Bottom Chamber', image:bottomchamber5, description: ['- Material: SS304/PTFE',<br/> ,'- Length :  27mm' , <br/> ,'- Outer Dia : 110mm '], rating: 4.3 },
            { id: '5SeriesProduct3', name: '5 Series - Chamber', image: chamber5, description: ['- 	Material : SS304/PTFE',<br/> ,'- Bush : Sic / TC' , <br/> ,'- Inner dia:  16mm/ 17.5mm'], rating: 4.6 },
            { id: '5SeriesProduct4', name: '5 Series - Impeller', image: Impller5, description: ['- Material: SS304/PTFE',<br/> ,'- Suitable for: MVC5 , CR5 , CDL5' , <br/> ,'- Outer Dia : 110mm'], rating: 4.7 },
        ],
    
    "Chamber Stack": [
        { id: 'ChamberStackProduct1', name: 'Chamber Stack - 2 Series', image: chamberstack2 , description: ['- Material: SS304( SS316 On request)',<br/> ,'- Available for:  2/11, 2/13, 2/15 , 2/18 and 2/22 ' , <br/> ,'- Bush : Sic/ TC',<br/>,'- Rated flow : 2m3/Hr'], rating: 4.5 },
        { id: 'ChamberStackProduct2', name: 'Chamber Stack - 4 Series ', image: chamberstack4, description:  ['- Material: SS304( SS316 On request)',<br/> ,'- Available for:  4/12, 4/16, 4/22  ' , <br/> ,'- Bush : Sic/ TC',<br/>,'- Rated flow : 4m3/Hr'], rating: 4.2 },
    ],
    "Pump Spares": [
        { id: 'PumpSpare1', name: 'Pump Spare - Coupling Top Chamber', image: coupling , description: ['- Suitable for:  2 , 3 , 4 and 5 series Pumps  ',<br/> ,'- 	Fitted with drive pin and Screws  ' , <br/> ,'- Rugged Construction'], rating: 4.7 },
        { id: 'PumpSpare2', name: 'Pump Spare - Lock Washer', image: pumpSpare2, description: ['- Suitable for:  2 , 3 and 4 series  ',<br/> ,'- Length :  21mm( 22mm)  ' , <br/> ,'- Outer Dia : 128mm'], rating: 4.6 },
        { id: 'PumpSpare3', name: 'Pump Spare - Mechanical Seal', image: pumpSpare3, description: ['- Material : Sic/ Sic  Or TC/TC ',<br/> ,'- 	Available for :12mm and 16mm Shafts  ' , <br/> ,'- Cartridge Type '], rating: 4.5 },
        { id: 'PumpSpare4', name: 'Pump Spare - Shaft', image: pumpSpare4, description:['- Material: SS304 ',<br/> ,'- 	Available  for: MVC AND CDL Models  ' , <br/> ,'- Size : Dia 12.5 X 10A/F '], rating: 4.4 },
        { id: 'PumpSpare5', name: 'Pump Spare -  Sleeves', image: pumpSpare5, description: ['- Material: SS304 ',<br/> ,'- Outer dia : 15mm and 17mm    ' , <br/> ,'- Length : 4mm to 26mm '], rating: 4.3 },
        { id: 'PumpSpare6', name: 'Pump Spare - Stopper', image: pumpSpare6, description:  ['- Material: SS304 ',<br/> ,'- Suitable for:  Double D shafts ' , <br/> ,'- Preciously wire cut to avoid slip '], rating: 4.2 },
        { id: 'PumpSpare7', name: 'Pump Spare - TC Bush', image: pumpSpare7, description: ['- Material: Tungsten Carbide ',<br/> ,'- 	Length : 11mm' , <br/> ,'- Outer dia:  16mm and 17.5mm' ,<br/>,'- Suitable for Double D , Spline and Hex Shafts'], rating: 4.1 },
      
    ]
    },
    "4 inch SS Submersible spares": {
        "2 Series": [
            { id: '2SeriesProduct1', name: '2 Series - bottom', image: fourcham2  , description: ['- Material: SS304( SS316 On request)',<br/> ,'- 	Suitable for:  Keyway type  , Hex shafts   ' , <br/> ,'- Outer dia : 73mm',<br/>,'- Rated flow : 2m3/Hr'], rating: 4.5 },
            { id: '2SeriesProduct2', name: '2 Series - Chamber', image:fourimp2 , description: ['- Material: SS304/Nitrile Rubber/PTFE',<br/> ,'- Length :  22mm' , <br/> ,'- Outer Dia : 87mm '], rating: 4.3 },
            { id: '2SeriesProduct2', name: '2 Series - Impeller ', image:fourbottom2 , description: ['- Material: SS304/Nitrile Rubber/PTFE',<br/> ,'- 	Suitable for: SP2, SP3, SP5' , <br/> ,'- 	Outer Dia : 87mm'], rating: 4.3 }
        ],
        "3 Series": [
            { id: '34SeriesProduct1', name: '3 Series - Bottom', image:  fourcham3, description: ['- Material: SS304( SS316 On request)',<br/> ,'- 	Suitable for:  Keyway type  , Hex shafts' , <br/> ,'- 	Outer Dia : 73mm',<br/>,'- Rated flow : 3m3/Hr'], rating: 4.4 },
            { id: '34SeriesProduct2', name: '3 Series - Chamber', image: fourimp3, description: ['- Material: SS304/Nitrile Rubber/PTFE',<br/> ,'- 	Length :  22mm' , <br/> ,'- Outer Dia : 87mm'], rating: 4.2 },
            { id: '34SeriesProduct2', name: '3 Series - Impeller', image: fourbottom3, description: [' - Material: SS304/Nitrile Rubber/PTFE', <br/> ,'- Suitable for: SP2, SP3, SP5' , <br/> ,'- 	Outer Dia : 87mm'], rating: 4.2 }
        
        ],
        "5 Series": [
            { id: '5SeriesProduct1', name: '5 Series - Bottom', image:fourcham5 , description: ['- 	Material: SS304( SS316 On request)',<br/> ,'- Suitable for:  Keyway type  , Hex shafts' , <br/> ,'- Outer Dia : 73mm',<br/>,'- Rated flow : 5m3/Hr'], rating: 4.4 },
            { id: '5SeriesProduct2', name: '5 Series - Chamber', image:fourimp5 , description: ['- 	Material: SS304/Nitrile Rubber/PTFE',<br/> ,'- 	Length :  22mm' , <br/> ,'- Outer Dia : 87mm'], rating: 4.2 },
            { id: '5SeriesProduct2', name: '5 Series - Impeller', image: fourbottom5, description: ['- Material: SS304/Nitrile Rubber/PTFE', <br/> ,'- Suitable for: SP2, SP3, SP5' , <br/> ,'- Outer Dia : 87mm'], rating: 4.2 },
        
        ]
    },
    topSellers: [
        { id: '3tSeriesProduct2', name: '5 Series - Chamber', image: fourcham5, description:  ['- 	Material : SS304/PTFE',<br/> ,'- Bush : Sic / TC' , <br/> ,'- Inner dia:  16mm/ 17.5mm'], rating: 4.2 },
        { id: '3tiSeriesProduct4', name: 'Pump Spare - Shaft', image: pumpSpare4, description: ['- Material: SS304 ',<br/> ,'- 	Available  for: MVC AND CDL Models  ' , <br/> ,'- Size : Dia 12.5 X 10A/F '], rating: 4.9 },
        { id: '3toSeriesProduct4', name: 'Pump Spare - Sleeves', image:pumpSpare5 , description:['- Material: SS304 ',<br/> ,'- Outer dia : 15mm and 17mm    ' , <br/> ,'- Length : 4mm to 26mm '] , rating: 4.9 },
        { id: '3thSeriesProduct2', name: 'Chamber Stack - 4 Series', image:chamberstack4 , description: ['- Material: SS304( SS316 On request)',<br/> ,'- Available for:  4/12, 4/16, 4/22  ' , <br/> ,'- Bush : Sic/ TC',<br/>,'- Rated flow : 4m3/Hr'], rating: 4.2 },   
    ]
};


const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupProduct, setPopupProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
    const [productReviews, setProductReviews] = useState({}); // Track individual product ratings

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedSeries(null);
    };

    const handleSeriesClick = (series) => {
        setSelectedSeries(series);
    };

    const handleGetQuote = (product) => {
        setPopupProduct(product);
        setFormData({ name: '', phone: '', message: '' });
        setShowPopup(true);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        const whatsappUrl = `https://wa.me/+918300101155?text=Interested in ${popupProduct.name}. Name: ${formData.name}, Phone: ${formData.phone}, Message: ${formData.message}`;
        window.open(whatsappUrl, '_blank');
        setShowPopup(false);
    };

    const handleStarClick = (productId, star) => {
        setProductReviews((prevReviews) => ({
            ...prevReviews,
            [productId]: { rating: star, isReviewed: true }
        }));
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
                                
                                {/* Star Rating */}
                                <div className="star-rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            onClick={() => handleStarClick(product.id, star)}
                                            style={{
                                                cursor: 'pointer',
                                                color: star <= (productReviews[product.id]?.rating || 0) ? 'gold' : 'gray'
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                {productReviews[product.id]?.isReviewed && <p>Thank you for the review!</p>}
                            </div>
                        </div>
                    ))}
                    <button
  className="back-to-set"
  onClick={() => {
    setSelectedSeries(null);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
  }}
>
  Back to Series
</button>

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
                                
                                {/* Star Rating */}
                                <div className="star-rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            onClick={() => handleStarClick(product.id, star)}
                                            style={{
                                                cursor: 'pointer',
                                                color: star <= (productReviews[product.id]?.rating || 0) ? 'gold' : 'gray'
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                {productReviews[product.id]?.isReviewed && <p>Thank you for the review!</p>}
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
