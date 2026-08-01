import React, { useState, useEffect } from 'react';
import { translations } from './i18n/translations';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import LeftThemeDrawer from './components/LeftThemeDrawer';
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
  // Preloader state
  const [loading, setLoading] = useState(true);

  // i18n Language state: 'ua' | 'en' | 'pl' | 'ru'
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('galcargo_lang') || 'ua';
  });

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

  useEffect(() => {
    localStorage.setItem('galcargo_lang', lang);
  }, [lang]);

  // Translation lookup helper
  const t = (key) => {
    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    // Fallback to UA if missing in target lang
    if (translations['ua'] && translations['ua'][key]) {
      return translations['ua'][key];
    }
    return key;
  };

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
      {/* High-Tech Multimodal Logistics Preloader Screen */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Left Sidebar Theme Switcher Drawer */}
      <LeftThemeDrawer 
        currentTheme={theme} 
        setTheme={setTheme} 
      />

      {/* Main Header & Navbar with Language Switcher */}
      <Navbar 
        currentLang={lang} 
        setLang={setLang} 
        t={t} 
        onOpenQuote={handleOpenQuote} 
      />

      {/* Hero Presentation */}
      <Hero 
        t={t} 
        onOpenQuote={handleOpenQuote} 
        onTrackCargo={handleTrackCargo} 
      />

      {/* Multimodal Freight Rate Calculator */}
      <Calculator 
        t={t} 
        onOpenQuoteWithData={handleOpenQuoteWithData} 
      />

      {/* Primary Transport Services Breakdown */}
      <Services 
        t={t} 
        onOpenQuote={handleOpenQuote} 
      />

      {/* Active Route Network & Geography */}
      <GeographyMap 
        t={t} 
        onOpenQuote={handleOpenQuote} 
      />

      {/* B2B About & Reliability Metrics */}
      <AboutUs t={t} />

      {/* B2B Client Reviews & Testimonials */}
      <Testimonials t={t} />

      {/* Contact Info & Direct Inquiry Form */}
      <ContactSection 
        t={t} 
        onOpenQuote={handleOpenQuote} 
      />

      {/* Footer */}
      <Footer 
        t={t} 
        onOpenQuote={handleOpenQuote} 
      />

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
