import React from 'react';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export default function AboutPage({ t, onOpenQuote }) {
  const certs = [
    { name: 'FIATA International Federation', desc: 'Сертифікований міжнародний вантажний експедитор' },
    { name: 'ISO 9001:2015 Quality System', desc: 'Міжнародний стандарт системи менеджменту якості' },
    { name: 'ISO 14001:2015 Environmental', desc: 'Екологічний стандарт сталого автотранспорту Euro-6' },
    { name: 'TT Club Cargo Insurance', desc: '100% страхування відповідальності експедитора на €500k' }
  ];

  return (
    <div className="tab-page-container" style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <AboutUs t={t} />

      {/* Certifications Section */}
      <div style={{ marginTop: '60px' }}>
        <div className="section-header">
          <span className="section-subtitle">Сертифікація та Стандарти</span>
          <h2 className="section-title">Гарантія якості та ліцензії GalCargo</h2>
          <p className="section-desc">
            Наша діяльність відповідна міжнародним нормативам FIATA, IRU та європейським стандартам безпеки.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginTop: '36px'
        }}>
          {certs.map((c, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: 'var(--shadow-main)'
            }}>
              <Award size={32} style={{ color: 'var(--accent-light)' }} />
              <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{c.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials t={t} />
    </div>
  );
}
