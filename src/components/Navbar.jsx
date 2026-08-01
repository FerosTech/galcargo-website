import React, { useState } from 'react';
import { Phone, Calculator, Menu, X, Palette, ShieldCheck, Clock } from 'lucide-react';

const themes = [
  { id: 'executive-dark', name: 'Executive Dark', color: '#1d4ed8' },
  { id: 'classic-light', name: 'Classic Light', color: '#1e3a8a' },
  { id: 'hitech-cyan', name: 'High-Tech Cyan', color: '#06b6d4' },
  { id: 'warm-steel', name: 'Warm Steel', color: '#d97706' },
  { id: 'glassmorphism-blue', name: 'Glass Modern', color: '#3b82f6' },
];

export default function Navbar({ currentTheme, setTheme, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Upper Utility Strip: Status & Theme Switcher */}
      <div className="top-header-strip">
        <div className="top-header-container">
          <div className="top-info-left">
            <span className="status-indicator-dot"></span>
            <span>Диспетчерський центр 24/7 | GPS Моніторинг активний</span>
          </div>

          {/* Integrated Theme Switcher */}
          <div className="theme-switcher-inline">
            <div className="theme-switcher-label">
              <Palette size={14} />
              <span>Тема сайту:</span>
            </div>
            <div className="theme-pills-row">
              {themes.map((t) => {
                const isActive = currentTheme === t.id;
                return (
                  <button
                    key={t.id}
                    className={`theme-pill-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setTheme(t.id)}
                    title={`Переключити на тему ${t.name}`}
                    type="button"
                  >
                    <span className="theme-pill-dot" style={{ backgroundColor: t.color }}></span>
                    <span className="theme-pill-name">{t.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="main-navbar-row">
        <div className="navbar-container">
          {/* Brand Logo & Name */}
          <a href="#" className="brand-logo-container">
            <img 
              src="/logo.png" 
              alt="GalCargo Logo" 
              className="brand-logo-img"
              onError={(e) => {
                e.target.src = '/image_532900.jpg';
              }} 
            />
            <div className="brand-text-block">
              <span className="brand-name">Гал Карго</span>
              <span className="brand-subtext">Multimodal Logistics</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className={`nav-menu ${mobileOpen ? 'mobile-active' : ''}`}>
            <a href="#hero" className="nav-link" onClick={() => setMobileOpen(false)}>Головна</a>
            <a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>Послуги</a>
            <a href="#calculator" className="nav-link" onClick={() => setMobileOpen(false)}>Калькулятор</a>
            <a href="#geography" className="nav-link" onClick={() => setMobileOpen(false)}>Географія</a>
            <a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>Про нас</a>
            <a href="#contacts" className="nav-link" onClick={() => setMobileOpen(false)}>Контакти</a>
          </nav>

          {/* Action Buttons & Phone */}
          <div className="nav-actions">
            <a href="tel:+380448002424" className="nav-phone">
              <Phone size={16} style={{ color: 'var(--accent-light)' }} />
              <span>+38 (044) 800-24-24</span>
            </a>
            <button className="btn-primary" onClick={onOpenQuote}>
              <Calculator size={16} />
              <span>Прорахувати вантаж</span>
            </button>
            
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Переключити меню"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
