import React, { useState, useEffect } from 'react';
import { Truck, Anchor, Train, ShieldCheck } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Завантаження логістичних модулів...');
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadingOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 15) + 10;
        if (next > 30 && next <= 70) {
          setStatusText('Синхронізація GPS супутників та маршрутів...');
        } else if (next > 70 && next < 100) {
          setStatusText('Перевірка зв’язку з морськими та З/Д терміналами...');
        } else if (next >= 100) {
          setStatusText('Мережу GalCargo готово!');
        }

        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${fadingOut ? 'fade-out' : ''}`}>
      <div className="preloader-card">
        {/* Animated Radar Pulse Background */}
        <div className="preloader-pulse-ring"></div>

        {/* Brand Logo with Glow */}
        <div className="preloader-logo-wrap">
          <img 
            src="./logo.png" 
            alt="GalCargo Logo Preloader" 
            className="preloader-logo-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = './image_532900.jpg';
            }}
          />
        </div>

        {/* Title */}
        <div className="preloader-title-block">
          <h2 className="preloader-brand-name">Гал Карго</h2>
          <span className="preloader-brand-sub">MULTIMODAL LOGISTICS</span>
        </div>

        {/* Multimodal Transport Animated Icons */}
        <div className="preloader-modes-row">
          <div className={`preloader-mode-icon ${progress >= 20 ? 'active' : ''}`}>
            <Truck size={22} />
            <span>Авто</span>
          </div>
          <div className="mode-connector-line"></div>
          <div className={`preloader-mode-icon ${progress >= 55 ? 'active' : ''}`}>
            <Anchor size={22} />
            <span>Море</span>
          </div>
          <div className="mode-connector-line"></div>
          <div className={`preloader-mode-icon ${progress >= 85 ? 'active' : ''}`}>
            <Train size={22} />
            <span>Залізниця</span>
          </div>
        </div>

        {/* Progress Bar & Status Text */}
        <div className="preloader-progress-wrap">
          <div className="preloader-progress-bar">
            <div className="preloader-progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="preloader-status-row">
            <span className="preloader-status-text">{statusText}</span>
            <span className="preloader-percent">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
