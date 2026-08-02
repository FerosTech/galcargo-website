import React, { useState, useEffect } from 'react';
import { translations } from './i18n/translations';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import LeftThemeDrawer from './components/LeftThemeDrawer';
import Hero from './components/Hero';
import ServicesPage from './components/ServicesPage';
import CalculatorPage from './components/CalculatorPage';
import RoutesPage from './components/RoutesPage';
import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';
import Services from './components/Services';
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

  // Tab Navigation state: 'home' | 'services' | 'calculator' | 'routes' | 'about' | 'contacts'
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const validTabs = ['home', 'services', 'calculator', 'routes', 'about', 'contacts'];
    return validTabs.includes(hash) ? hash : 'home';
  });

  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCalcData, setQuoteCalcData] = useState(null);

  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [activeTrackCode, setActiveTrackCode] = useState('');

  // Sync theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('galcargo_theme', theme);
  }, [theme]);

  // Sync lang
  useEffect(() => {
    localStorage.setItem('galcargo_lang', lang);
  }, [lang]);

  // Dynamic SEO Meta & Title Manager
  useEffect(() => {
    const titles = {
      home: 'Гал карго — Мультимодальна Логістична Компанія | GalCargo',
      services: 'Послуги Мультимодальних Перевезень (Фури, Море, З/Д) | GalCargo',
      calculator: 'Калькулятор Фрахту & Розрахунок Перевезення | GalCargo',
      routes: 'Міжнародні Маршрути та Логістичні Хаби | GalCargo',
      about: 'Про Компанію, Ліцензії FIATA & ISO | GalCargo',
      contacts: 'Контакти, Диспетчерська 24/7 та Офіси | GalCargo'
    };

    document.title = titles[activeTab] || titles.home;
  }, [activeTab, lang]);

  // Listen to hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['home', 'services', 'calculator', 'routes', 'about', 'contacts'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Translation lookup helper
  const t = (key) => {
    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
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

      {/* Left Sidebar Theme Switcher Drawer (22 themes) */}
      <LeftThemeDrawer 
        currentTheme={theme} 
        setTheme={setTheme} 
      />

      {/* Main Header & Navbar with Dynamic Tab Navigation */}
      <Navbar 
        currentLang={lang} 
        setLang={setLang} 
        t={t} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={handleOpenQuote} 
      />

      {/* Tabbed Content View */}
      <main className="main-content-tabbed">
        {activeTab === 'home' && (
          <>
            <Hero 
              t={t} 
              onOpenQuote={handleOpenQuote} 
              onTrackCargo={handleTrackCargo} 
            />
            <Services t={t} onOpenQuote={handleOpenQuote} />
            <Testimonials t={t} />
            <ContactSection t={t} onOpenQuote={handleOpenQuote} />
          </>
        )}

        {activeTab === 'services' && (
          <ServicesPage t={t} onOpenQuote={handleOpenQuote} />
        )}

        {activeTab === 'calculator' && (
          <CalculatorPage 
            t={t} 
            onOpenQuoteWithData={handleOpenQuoteWithData} 
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activeTab === 'routes' && (
          <RoutesPage t={t} onOpenQuote={handleOpenQuote} />
        )}

        {activeTab === 'about' && (
          <AboutPage t={t} onOpenQuote={handleOpenQuote} />
        )}

        {activeTab === 'contacts' && (
          <ContactsPage t={t} onOpenQuote={handleOpenQuote} />
        )}
      </main>

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
