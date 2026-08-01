import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '320px' }}>
            Провідна українська логістична компанія. Мультимодальні вантажні перевезення по Україні, Європейському Союзу, Азії та Північній Америці.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--accent-light)' }}>
            <ShieldCheck size={16} />
            <span>Сертифікований логістичний оператор FIATA & ISO</span>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Навігація
          </h4>
          <a href="#hero" className="nav-link">Головна</a>
          <a href="#services" className="nav-link">Послуги</a>
          <a href="#calculator" className="nav-link">Калькулятор фрахту</a>
          <a href="#geography" className="nav-link">Географія перевезень</a>
          <a href="#about" className="nav-link">Про компанію</a>
          <a href="#contacts" className="nav-link">Контакти</a>
        </div>

        {/* Column 3: Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Види перевезень
          </h4>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Автомобільні фури (FTL/LTL)</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Рефрижератори з термописом</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Морські контейнери (FCL/LCL)</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Залізничні поїзди з Китаю</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Митний брокеридж & Склади</span>
        </div>

        {/* Column 4: Quick Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Гаряча лінія 24/7
          </h4>
          
          <div>
            <a href="tel:+380448002424" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-light)', textDecoration: 'none' }}>
              +38 (044) 800-24-24
            </a>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>Безкоштовно по Україні</div>
          </div>

          <button className="btn-primary" onClick={onOpenQuote} style={{ width: '100%', justifyContent: 'center' }}>
            Замовити дзвінок
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} ТОВ "Гал карго" (GalCargo Multimodal Logistics). Всі права захищено.
        </div>
        <button 
          onClick={scrollToTop} 
          className="btn-secondary" 
          style={{ padding: '6px 12px', fontSize: '0.8rem' }}
        >
          <ArrowUp size={14} />
          <span>Нагору</span>
        </button>
      </div>
    </footer>
  );
}
