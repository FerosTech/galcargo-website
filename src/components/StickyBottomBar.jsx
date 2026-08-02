import React, { useState, useEffect } from 'react';
import { Calculator, Phone, MessageSquare, X, Zap } from 'lucide-react';

export default function StickyBottomBar({ onOpenQuote }) {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="sticky-ads-bar">
      <div className="sticky-ads-container">
        <div className="sticky-ads-text">
          <div className="sticky-badge">
            <Zap size={14} />
            <span>Google Ads Спец-пропозиція</span>
          </div>
          <span className="sticky-title">Розрахуйте тариф на зерновози та напіввагони за 60 секунд!</span>
        </div>

        <div className="sticky-ads-actions">
          <button className="btn-primary sticky-btn-main" onClick={onOpenQuote}>
            <Calculator size={18} />
            <span>Розрахувати фрахт</span>
          </button>
          
          <a href="tel:+380448002424" className="btn-secondary sticky-phone-btn">
            <Phone size={18} />
            <span className="desktop-only">+38 (044) 800-24-24</span>
          </a>

          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="btn-secondary sticky-tg-btn" title="Telegram 24/7">
            <MessageSquare size={18} />
          </a>

          <button className="sticky-close-btn" onClick={() => setDismissed(true)} title="Закрити">
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
