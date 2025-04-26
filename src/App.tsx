import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SafetySolutionsPage from './pages/SafetySolutionsPage';
import EnergySolutionsPage from './pages/EnergySolutionsPage';
import SafetyShopPage from './pages/SafetyShopPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/safety-solutions" element={<SafetySolutionsPage />} />
        <Route path="/energy-solutions" element={<EnergySolutionsPage />} />
        <Route path="/safety-shop" element={<SafetyShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;