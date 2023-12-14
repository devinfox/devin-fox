// Routing.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';
import Homepage from './pages/Homepage/Homepage';
import Results from './pages/Results/Results';
import AboutText from './components/AboutText/AboutText';
import ContactForm from './components/ContactForm/ContactForm';

function Routing() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/results" element={<Results />} />
      <Route path="/#about-section" element={<AboutText />} />
      <Route path="/#contact" element={<ContactForm />} />
    </Routes>
  );
}

export default Routing;
