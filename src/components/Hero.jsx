import React, { useState } from 'react';
import { Truck, Anchor, Train, Search, ShieldCheck, ArrowRight, Clock, MapPin, Globe } from 'lucide-react';

export default function Hero({ onOpenQuote, onTrackCargo }) {
  const [activeTab, setActiveTab] = useState('truck');
  const [trackCode, setTrackCode] = useState('');

  const transportDetails = {
    truck: {
      title: 'Автомобільні перевезення (Фури & Контейнеровози)',
      time: '2 - 4 дні (Україна - ЄС)',
      capacity: 'До 24 тонн / 120 м³',
      types: 'Тенти, Рефрижератори, Негабаритні трали, Контейнероплато',
      badge: 'Гнучкість & Door-to-Door'
    },
    sea: {
      title: 'Морські контейнерні перевезення (Карго & FCL/LCL)',
      time: '25 - 35 днів (Азія / США - ЄС)',
      capacity: 'Без обмежень по об’єму',
      types: '20’GP, 40’HC, 40’Reefer, Open Top, Flat Rack, Наливні вантажі',
      badge: 'Максимальна економія на далекі відстані'
    },
    rail: {
      title: 'Залізничні перевезення (Контейнерні поїзди)',
      time: '14 - 18 днів (Китай - Україна/ЄС)',
      capacity: 'До 60 тонн на вагон',
      types: 'Криті вагони, Напіввагони, Цистерни, Хопери, Платформи',
      badge: 'Стабільність & Точний графік'
    }
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (trackCode.trim()) {
      onTrackCargo(trackCode.trim());
    } else {
      onTrackCargo('GC-884920-UA'); // default demo code
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Left Column: Text & CTA */}
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={16} />
            <span>Мультимодальний оператор №1 в Україні та ЄС</span>
          </div>

          <h1 className="hero-title">
            Мультимодальна логістика <br />
            <span className="hero-title-highlight">без кордонів та затримок</span>
          </h1>

          <p className="hero-description">
            Прямі вантажні перевезення <strong>автомобільним транспортом</strong>, <strong>морським фрахтом</strong> та <strong>залізницею</strong>. Гарантія збереження вантажу, страхування 100% та GPS-моніторинг 24/7.
          </p>

          <div className="hero-cta-group">
            <button className="btn-primary" onClick={onOpenQuote}>
              <span>Розрахувати кошторис</span>
              <ArrowRight size={18} />
            </button>
            <a href="#services" className="btn-secondary">
              Наші послуги
            </a>
          </div>

          {/* Quick Tracking Widget */}
          <div className="tracking-box" style={{ marginTop: '16px' }}>
            <div className="tracking-box-label">
              <Search size={14} />
              <span>Швидка перевірка статусу вантажу (Live Cargo Tracking):</span>
            </div>
            <form className="tracking-input-row" onSubmit={handleTrackSubmit}>
              <input
                type="text"
                className="tracking-input"
                placeholder="Введіть номер трекінгу (напр. GC-884920-UA)..."
                value={trackCode}
                onChange={(e) => setTrackCode(e.target.value)}
              />
              <button type="submit" className="btn-primary" style={{ padding: '10px 16px' }}>
                <Search size={16} />
                <span>Відстежити</span>
              </button>
            </form>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Тестові трек-коди для перевірки: <span style={{ color: 'var(--accent-light)', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setTrackCode('GC-884920-UA')}>GC-884920-UA</span>, <span style={{ color: 'var(--accent-light)', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setTrackCode('GC-104922-EU')}>GC-104922-EU</span>
            </div>
          </div>
        </div>

        {/* Right Column: Transport Type Selector Card */}
        <div className="hero-modes-card">
          <div className="modes-tabs-header">
            <button
              className={`mode-tab-btn ${activeTab === 'truck' ? 'active' : ''}`}
              onClick={() => setActiveTab('truck')}
            >
              <Truck size={20} />
              <span>Фури (Авто)</span>
            </button>
            <button
              className={`mode-tab-btn ${activeTab === 'sea' ? 'active' : ''}`}
              onClick={() => setActiveTab('sea')}
            >
              <Anchor size={20} />
              <span>Море (Карго)</span>
            </button>
            <button
              className={`mode-tab-btn ${activeTab === 'rail' ? 'active' : ''}`}
              onClick={() => setActiveTab('rail')}
            >
              <Train size={20} />
              <span>Поїзди (З/Д)</span>
            </button>
          </div>

          <div className="mode-tab-content">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>
                {transportDetails[activeTab].title}
              </h3>
              <span className="hero-badge" style={{ fontSize: '0.75rem' }}>
                {transportDetails[activeTab].badge}
              </span>
            </div>

            <div className="mode-detail-row">
              <span className="mode-detail-label">Середній термін доставки:</span>
              <span className="mode-detail-val" style={{ color: 'var(--accent-light)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={16} />
                {transportDetails[activeTab].time}
              </span>
            </div>

            <div className="mode-detail-row">
              <span className="mode-detail-label">Вантажопідйомність:</span>
              <span className="mode-detail-val">{transportDetails[activeTab].capacity}</span>
            </div>

            <div className="mode-detail-row" style={{ borderBottom: 'none' }}>
              <span className="mode-detail-label">Типи кузовів/контейнерів:</span>
              <span className="mode-detail-val" style={{ textAlign: 'right', fontSize: '0.85rem', maxWidth: '240px' }}>
                {transportDetails[activeTab].types}
              </span>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
              onClick={onOpenQuote}
            >
              Замовити дане перевезення
            </button>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="hero-stats-grid">
        <div className="stat-item">
          <span className="stat-num">15+</span>
          <span className="stat-desc">років досвіду у B2B логістиці</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">120 000+</span>
          <span className="stat-desc">тонн вантажу щороку</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">48</span>
          <span className="stat-desc">країн у мережі доставки</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">99.4%</span>
          <span className="stat-desc">доставок строго за графіком</span>
        </div>
      </div>
    </section>
  );
}
