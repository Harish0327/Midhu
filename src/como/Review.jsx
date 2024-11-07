import React from 'react';
import './Review.css';

export default function Reviews() {
    const reviews = [
        { name: 'Arun Kumar', location: 'Chennai, India', date: '2024-10-01', rating: 4, text: 'Nalla thaguthi mattrum pumpugalil payanpaduthiya ulokangal uyartharama irundhathu. Ovvoru alavilum nambakamana seyal.' },
        { name: 'Murali Sundaram', location: 'Coimbatore, India', date: '2024-09-28', rating: 5, text: 'Engaludaya thozhirsalaiyil thevaiyana ulok pagangal miga sirappaga irundhathu. Tharam miga meepadathathu!' },
        { name: 'Manickam Raja', location: 'Trichy, India', date: '2024-10-15', rating: 3, text: 'Pothuvaga nalladhu, aanaal sila pagangalil siria thiruthangal thevai padugirathu.' },
        { name: 'Bhavani Sundar', location: 'Madurai, India', date: '2024-10-03', rating: 5, text: 'Migaperiya alavilana urpathi mattrum kalakkedu sariyaga irundhathu.' },
        { name: 'Vikram Selvam', location: 'Erode, India', date: '2024-10-07', rating: 4, text: 'Niruvanathin urpathi tharam uyarnthathu. Miga nalla seyalvazhigal!' },
        { name: 'Karthik Subramaniam', location: 'Salem, India', date: '2024-10-10', rating: 5, text: 'Steel industryil engal niruvanam tharamai ullathu. Athanai pagangalum sariyana vilaiyin mel kaarangal!' },
        { name: 'Anand Krishnan', location: 'Thanjavur, India', date: '2024-10-12', rating: 4, text: 'Steel pagangalalum pumpugalalum nejamaga thoguthiyai kaatugirargal. Valara nalla ulagangal.' },
        { name: 'Shanmugam Rajan', location: 'Tirunelveli, India', date: '2024-10-05', rating: 3, text: 'Sila products sariyaga irundhalum sila productsil thiruthangal thevai padugirathu.' },
        { name: 'Ravi Narayanan', location: 'Kanyakumari, India', date: '2024-10-06', rating: 5, text: 'Taramum urpathiyum arumai. Sariyana ulagangal mattrum thagaval vilaiyil.' },
        { name: 'Suresh Prabhu', location: 'Vellore, India', date: '2024-10-02', rating: 4, text: 'Steel products galil sirappanavai kidaithathu. Nalla kalamudan urpathi saerthu tharuthal.' }
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
