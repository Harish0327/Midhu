import React from 'react';
import './Review.css';

export default function Reviews() {
    const reviews = [
        { name: 'Arun Kumar', location: 'Chennai, India', date: '2024-10-01', rating: 4, text: 'Purchased Spares for Our pressure pump.Quality is exeptional .Genuine Parts' },
        { name: 'Murali Sundaram', location: 'Coimbatore, India', date: '2024-09-28', rating: 5, text: 'We are buying pump parts from midhu last 10 years.consistant Quality and maintaining on time delivery at all' },
        { name: 'Manickam Raja', location: 'Trichy, India', date: '2024-10-15', rating: 3, text: 'Customers friendly approach and clearly explain the various options of products' },
        { name: 'Bhavani Sundar', location: 'Madurai, India', date: '2024-10-03', rating: 5, text: 'Even they are manufacture,dont hesiitate to supply small quantites' },
        { name: 'Vikram Selvam', location: 'Erode, India', date: '2024-10-07', rating: 4, text: 'Visited to thier facility few years before.they are manufacturing products 100% inhouse only' },
        { name: 'Karthik Subramaniam', location: 'Salem, India', date: '2024-10-10', rating: 5, text: 'He supported us very well even during tough time in COVID' },
        { name: 'Anand Krishnan', location: 'Thanjavur, India', date: '2024-10-12', rating: 4, text: 'Maintainnig on day dispatch for most of the products' },
        { name: 'Shanmugam Rajan', location: 'Tirunelveli, India', date: '2024-10-05', rating: 3, text: 'After sales services and followup is very good' },
        { name: 'Ravi Narayanan', location: 'Kanyakumari, India', date: '2024-10-06', rating: 5, text: 'Midhu Steel Manufacturing provides top-quality products and exceptional service—I’m impressed with their reliability and attention to detail ' },
        { name: 'Suresh Prabhu', location: 'Vellore, India', date: '2024-10-02', rating: 4, text: 'I’m extremely satisfied with Midhu Steel Manufacturing—their products are durable, and their service is outstanding!' }
    ];

    return (
        <div className='review-section'>
            <h2>Our Reviews and Ratings</h2>
            <div className='reviews-container'>
                {reviews.map((review, index) => (
                    <div key={index} className='review'>
                        <h3>{review.name}</h3>
                        <p className='location'>{review.location}</p>
                        <p className='date'>{review.date}</p>
                        <div className='stars'>
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </div>
                        <p className='text'>{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
