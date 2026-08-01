import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Services from './components/Services';
import GeographyMap from './components/GeographyMap';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import TrackingModal from './components/TrackingModal';

export default function App() {
  // Theme state: default 'executive-dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('galcargo_theme') || 'executive-dark';
  });

  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCalcData, setQuoteCalcData] = useState(null);

  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [activeTrackCode, setActiveTrackCode] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('galcargo_theme', theme);
  }, [theme]);

  const handleOpenQuote = () => {
    setQuoteCalcData(null);
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithData = (data) => {
    setQuoteCalcData(data);
    setQuoteModalOpen(true);
  };

  const handleTrackCargo = (code) => {
    setActiveTrackCode(code);
    setTrackingModalOpen(true);
  };

  return (
    <div className="app-main-wrapper">
      {/* Unified Header with Integrated Navbar & Theme Switcher */}
      <Navbar 
        currentTheme={theme} 
        setTheme={setTheme} 
        onOpenQuote={handleOpenQuote} 
      />

      {/* Hero Presentation */}
      <Hero 
        onOpenQuote={handleOpenQuote} 
        onTrackCargo={handleTrackCargo} 
      />

      {/* Multimodal Freight Rate Calculator */}
      <Calculator onOpenQuoteWithData={handleOpenQuoteWithData} />

      {/* Primary Transport Services Breakdown */}
      <Services onOpenQuote={handleOpenQuote} />

      {/* Active Route Network & Geography */}
      <GeographyMap onOpenQuote={handleOpenQuote} />

      {/* B2B About & Reliability Metrics */}
      <AboutUs />

      {/* B2B Client Reviews & Testimonials */}
      <Testimonials />

      {/* Contact Info & Direct Inquiry Form */}
      <ContactSection onOpenQuote={handleOpenQuote} />

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Modals */}
      {quoteModalOpen && (
        <QuoteModal 
          calcData={quoteCalcData} 
          onClose={() => setQuoteModalOpen(false)} 
        />
      )}

      {trackingModalOpen && (
        <TrackingModal 
          trackCode={activeTrackCode} 
          onClose={() => setTrackingModalOpen(false)} 
          onOpenQuote={handleOpenQuote}
        />
      )}
    </div>
  );
}
