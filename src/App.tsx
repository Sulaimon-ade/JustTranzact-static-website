import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SafetySolutionsPage from './pages/SafetySolutionsPage';
import EnergySolutionsPage from './pages/EnergySolutionsPage';
import SafetyShopPage from './pages/SafetyShopPage';
import CaseStudy from './components/EnergySolutions/CaseStudy';
import ContactPage from './pages/ContactPage';

// Components
import FloatingWhatsApp from './components/Common/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/safety-solutions" element={<SafetySolutionsPage />} />
        <Route path="/energy-solutions" element={<EnergySolutionsPage />} />
        <Route path="/energy-solutions/case-studies/:slug" element={<CaseStudy title={''} summary={''} imageUrl={''} slug={''} />} />
        <Route path="/safety-shop" element={<SafetyShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* 👇 This will show the floating WhatsApp icon on all pages */}
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
