// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './como/Footer';
import Nav from './como/Nav';
import Home from './como/Home';
import Products from './como/Products';
import About from './como/About';
import Contact from './como/Contact';

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
