import React from 'react';
import { Phone, Calculator, Menu, X, Clock } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="site-header">
      {/* Top Utility Line */}
      <div className="top-header-strip">
        <div className="top-header-container">
          <div className="top-info-left">
            <span className="status-indicator-dot"></span>
            <span>Диспетчерський центр 24/7 | GPS Моніторинг активний</span>
          </div>

          <div className="top-info-right">
            <Clock size={12} />
            <span>Пн-Нд: 24 години на добу</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Row */}
      <div className="main-navbar-row">
        <div className="navbar-container">
          {/* Brand Logo & Name */}
          <a href="#" className="brand-logo-container">
            <img 
              src="./logo.png" 
              alt="GalCargo Logo" 
              className="brand-logo-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = './image_532900.jpg';
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
