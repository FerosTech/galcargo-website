import React, { useState } from 'react';
import { Truck, Anchor, Train, Search, ShieldCheck, ArrowRight, Clock } from 'lucide-react';

export default function Hero({ t, onOpenQuote, onTrackCargo }) {
  const [activeTab, setActiveTab] = useState('truck');
  const [trackCode, setTrackCode] = useState('');

  const transportDetails = {
    truck: {
      title: 'Автомобільні перевезення (Фури & Контейнеровози)',
      time: '2 - 4 дні (Україна - ЄС)',
      capacity: 'До 24 тонн / 120 м³',
      types: 'Тенти, Рефрижератори, Негабаритні трали',
      badge: 'Гнучкість & Door-to-Door'
    },
    sea: {
      title: 'Морські контейнерні перевезення (Карго & FCL/LCL)',
      time: '25 - 35 днів (Азія / США - ЄС)',
      capacity: 'Без обмежень по об’єму',
      types: '20’GP, 40’HC, 40’Reefer, Open Top, Flat Rack',
      badge: 'Максимальна економія'
    },
    rail: {
      title: 'Залізничні перевезення (Контейнерні поїзди)',
      time: '14 - 18 днів (Китай - Україна/ЄС)',
      capacity: 'До 60 тонн на вагон',
      types: 'Криті вагони, Напіввагони, Цистерни, Хопери',
      badge: 'Стабільність & Точний графік'
    }
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (trackCode.trim()) {
      onTrackCargo(trackCode.trim());
    } else {
      onTrackCargo('GC-884920-UA');
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Left Column: Text & CTA */}
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={16} />
            <span>{t('hero_badge')}</span>
          </div>

          <h1 className="hero-title">
            {t('hero_title_1')} <br />
            <span className="hero-title-highlight">{t('hero_title_2')}</span>
          </h1>

          <p className="hero-description">
            {t('hero_desc')}
          </p>

          <div className="hero-cta-group">
            <button className="btn-primary" onClick={onOpenQuote}>
              <span>{t('btn_calc_cost')}</span>
              <ArrowRight size={18} />
            </button>
            <a href="#services" className="btn-secondary">
              {t('btn_our_services')}
            </a>
          </div>

          {/* Quick Tracking Widget */}
          <div className="tracking-box" style={{ marginTop: '16px' }}>
            <div className="tracking-box-label">
              <Search size={14} />
              <span>{t('track_title')}</span>
            </div>
            <form className="tracking-input-row" onSubmit={handleTrackSubmit}>
              <input
                type="text"
                className="tracking-input"
                placeholder={t('track_placeholder')}
                value={trackCode}
                onChange={(e) => setTrackCode(e.target.value)}
              />
              <button type="submit" className="btn-primary" style={{ padding: '10px 16px' }}>
                <Search size={16} />
                <span>{t('btn_track')}</span>
              </button>
            </form>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {t('demo_codes')} <span style={{ color: 'var(--accent-light)', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setTrackCode('GC-884920-UA')}>GC-884920-UA</span>, <span style={{ color: 'var(--accent-light)', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setTrackCode('GC-104922-EU')}>GC-104922-EU</span>
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
              <span>{t('tab_truck')}</span>
            </button>
            <button
              className={`mode-tab-btn ${activeTab === 'sea' ? 'active' : ''}`}
              onClick={() => setActiveTab('sea')}
            >
              <Anchor size={20} />
              <span>{t('tab_sea')}</span>
            </button>
            <button
              className={`mode-tab-btn ${activeTab === 'rail' ? 'active' : ''}`}
              onClick={() => setActiveTab('rail')}
            >
              <Train size={20} />
              <span>{t('tab_rail')}</span>
            </button>
          </div>

          <div className="mode-tab-content">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)' }}>
                {transportDetails[activeTab].title}
              </h3>
              <span className="hero-badge" style={{ fontSize: '0.75rem' }}>
                {transportDetails[activeTab].badge}
              </span>
            </div>

            <div className="mode-detail-row">
              <span className="mode-detail-label">{t('mode_time_label')}</span>
              <span className="mode-detail-val" style={{ color: 'var(--accent-light)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={16} />
                {transportDetails[activeTab].time}
              </span>
            </div>

            <div className="mode-detail-row">
              <span className="mode-detail-label">{t('mode_cap_label')}</span>
              <span className="mode-detail-val">{transportDetails[activeTab].capacity}</span>
            </div>

            <div className="mode-detail-row" style={{ borderBottom: 'none' }}>
              <span className="mode-detail-label">{t('mode_types_label')}</span>
              <span className="mode-detail-val" style={{ textAlign: 'right', fontSize: '0.85rem', maxWidth: '240px' }}>
                {transportDetails[activeTab].types}
              </span>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
              onClick={onOpenQuote}
            >
              {t('btn_book_mode')}
            </button>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="hero-stats-grid">
        <div className="stat-item">
          <span className="stat-num">{t('stat_1_num')}</span>
          <span className="stat-desc">{t('stat_1_desc')}</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">{t('stat_2_num')}</span>
          <span className="stat-desc">{t('stat_2_desc')}</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">{t('stat_3_num')}</span>
          <span className="stat-desc">{t('stat_3_desc')}</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">{t('stat_4_num')}</span>
          <span className="stat-desc">{t('stat_4_desc')}</span>
        </div>
      </div>
    </section>
  );
}
