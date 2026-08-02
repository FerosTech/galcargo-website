import React, { useState } from 'react';
import { Phone, Calculator, Menu, X, Clock, Home, Truck, MapPin, Info, Mail } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar({ currentLang, setLang, t, activeTab, setActiveTab, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoUrl = `${import.meta.env.BASE_URL}logo.png?v=clean2`;

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = tabKey;
  };

  return (
    <header className="site-header">
      {/* Top Utility Line */}
      <div className="top-header-strip">
        <div className="top-header-container">
          <div className="top-info-left">
            <span className="status-indicator-dot"></span>
            <span>{t('status_strip')}</span>
          </div>

          <div className="top-info-right" style={{ gap: '16px' }}>
            <div className="header-working-hours">
              <Clock size={12} />
              <span>{t('working_hours')}</span>
            </div>
            
            {/* Language Switcher Widget */}
            <LanguageSwitcher currentLang={currentLang} setLang={setLang} />
          </div>
        </div>
      </div>

      {/* Main Navbar Row */}
      <div className="main-navbar-row">
        <div className="navbar-container">
          {/* Brand Logo & Name */}
          <a href="#home" className="brand-logo-container" onClick={() => handleTabClick('home')}>
            <img 
              src={logoUrl} 
              alt="GalCargo Logo" 
              className="brand-logo-img"
              style={{ background: 'transparent' }}
            />
            <div className="brand-text-block">
              <span className="brand-name">Гал Карго</span>
              <span className="brand-subtext">Multimodal Logistics</span>
            </div>
          </a>

          {/* Desktop Navigation Tabs */}
          <nav className="nav-menu desktop-only">
            <button 
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} 
              onClick={() => handleTabClick('home')}
            >
              {t('nav_home')}
            </button>
            <button 
              className={`nav-link ${activeTab === 'services' ? 'active' : ''}`} 
              onClick={() => handleTabClick('services')}
            >
              {t('nav_services')}
            </button>
            <button 
              className={`nav-link ${activeTab === 'calculator' ? 'active' : ''}`} 
              onClick={() => handleTabClick('calculator')}
            >
              {t('nav_calc')}
            </button>
            <button 
              className={`nav-link ${activeTab === 'routes' ? 'active' : ''}`} 
              onClick={() => handleTabClick('routes')}
            >
              {t('nav_geo')}
            </button>
            <button 
              className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} 
              onClick={() => handleTabClick('about')}
            >
              {t('nav_about')}
            </button>
            <button 
              className={`nav-link ${activeTab === 'contacts' ? 'active' : ''}`} 
              onClick={() => handleTabClick('contacts')}
            >
              {t('nav_contacts')}
            </button>
          </nav>

          {/* Action Buttons & Mobile Hamburger Toggle */}
          <div className="nav-actions">
            <a href="tel:+380448002424" className="nav-phone desktop-only">
              <Phone size={16} style={{ color: 'var(--accent-light)' }} />
              <span>{t('phone')}</span>
            </a>
            <button className="btn-primary desktop-only" onClick={onOpenQuote}>
              <Calculator size={16} />
              <span>{t('btn_quote')}</span>
            </button>
            
            {/* Mobile Hamburger Toggle Button */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Overlay Menu Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-drawer">
            <div className="mobile-nav-header">
              <a href="#home" className="brand-logo-container" onClick={() => handleTabClick('home')}>
                <img src={logoUrl} alt="GalCargo Logo" className="brand-logo-img" />
                <div className="brand-text-block">
                  <span className="brand-name">Гал Карго</span>
                  <span className="brand-subtext">Multimodal Logistics</span>
                </div>
              </a>
              <button className="mobile-menu-btn" onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="mobile-nav-lang-bar">
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Мова / Language:</span>
              <LanguageSwitcher currentLang={currentLang} setLang={setLang} />
            </div>

            <nav className="mobile-nav-links">
              <button 
                className={`mobile-nav-link ${activeTab === 'home' ? 'active' : ''}`} 
                onClick={() => handleTabClick('home')}
              >
                {t('nav_home')}
              </button>
              <button 
                className={`mobile-nav-link ${activeTab === 'services' ? 'active' : ''}`} 
                onClick={() => handleTabClick('services')}
              >
                {t('nav_services')}
              </button>
              <button 
                className={`mobile-nav-link ${activeTab === 'calculator' ? 'active' : ''}`} 
                onClick={() => handleTabClick('calculator')}
              >
                {t('nav_calc')}
              </button>
              <button 
                className={`mobile-nav-link ${activeTab === 'routes' ? 'active' : ''}`} 
                onClick={() => handleTabClick('routes')}
              >
                {t('nav_geo')}
              </button>
              <button 
                className={`mobile-nav-link ${activeTab === 'about' ? 'active' : ''}`} 
                onClick={() => handleTabClick('about')}
              >
                {t('nav_about')}
              </button>
              <button 
                className={`mobile-nav-link ${activeTab === 'contacts' ? 'active' : ''}`} 
                onClick={() => handleTabClick('contacts')}
              >
                {t('nav_contacts')}
              </button>
            </nav>

            <div className="mobile-nav-actions">
              <a href="tel:+380448002424" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <Phone size={18} />
                <span>+38 (044) 800-24-24</span>
              </a>
              <button 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }} 
                onClick={() => { setMobileOpen(false); onOpenQuote(); }}
              >
                <Calculator size={18} />
                <span>{t('btn_quote')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
