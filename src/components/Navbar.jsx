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
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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

          {/* Navigation Links */}
          <nav className={`nav-menu ${mobileOpen ? 'mobile-active' : ''}`}>
            <a href="#hero" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_home')}</a>
            <a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_services')}</a>
            <a href="#calculator" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_calc')}</a>
            <a href="#geography" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_geo')}</a>
            <a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_about')}</a>
            <a href="#contacts" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_contacts')}</a>
          </nav>

          {/* Action Buttons & Phone */}
          <div className="nav-actions">
            <a href="tel:+380448002424" className="nav-phone">
              <Phone size={16} style={{ color: 'var(--accent-light)' }} />
              <span>{t('phone')}</span>
            </a>
            <button className="btn-primary" onClick={onOpenQuote}>
              <Calculator size={16} />
              <span>{t('btn_quote')}</span>
            </button>
            
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
