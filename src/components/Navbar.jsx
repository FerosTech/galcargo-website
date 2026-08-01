import React, { useState } from 'react';
import { Phone, Calculator, Menu, X, Clock } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar({ currentLang, setLang, t, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoUrl = `${import.meta.env.BASE_URL}logo.png?v=clean2`;

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
          <a href="#" className="brand-logo-container">
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

          {/* Desktop Navigation Links */}
          <nav className="nav-menu desktop-only">
            <a href="#hero" className="nav-link">{t('nav_home')}</a>
            <a href="#services" className="nav-link">{t('nav_services')}</a>
            <a href="#calculator" className="nav-link">{t('nav_calc')}</a>
            <a href="#geography" className="nav-link">{t('nav_geo')}</a>
            <a href="#about" className="nav-link">{t('nav_about')}</a>
            <a href="#contacts" className="nav-link">{t('nav_contacts')}</a>
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
              <a href="#" className="brand-logo-container" onClick={() => setMobileOpen(false)}>
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
              <a href="#hero" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{t('nav_home')}</a>
              <a href="#services" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{t('nav_services')}</a>
              <a href="#calculator" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{t('nav_calc')}</a>
              <a href="#geography" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{t('nav_geo')}</a>
              <a href="#about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{t('nav_about')}</a>
              <a href="#contacts" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{t('nav_contacts')}</a>
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
