import React from 'react';
import GeographyMap from './GeographyMap';
import { MapPin, ShieldCheck, Globe, Truck } from 'lucide-react';

export default function RoutesPage({ t, onOpenQuote }) {
  const borderPoints = [
    { country: 'Україна — Польща', points: 'Ягодин / Дорогуськ, Краківець / Корчова, Шегині / Медика', status: 'Митний контроль 24/7' },
    { country: 'Україна — Румунія / Молдова', points: 'Порубне / Сірет, Рени / Джурджулешти', status: 'Зелений коридор' },
    { country: 'Морські порти ЄС', points: 'Гданськ (PL), Гамбург (DE), Роттердам (NL), Констанца (RO)', status: 'Прямий фрахт' },
    { country: 'Залізничні хаби', points: 'Холм (PL), Ланьцут (PL), Сіань (CN), Ченду (CN)', status: 'Експрес поїзди' }
  ];

  return (
    <div className="tab-page-container" style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <GeographyMap t={t} onOpenQuote={onOpenQuote} />

      {/* Border & Customs Hubs Guide */}
      <div style={{ marginTop: '60px' }}>
        <div className="section-header">
          <span className="section-subtitle">Митні перехода & Кордони</span>
          <h2 className="section-title">Прикордонні комплекси та логістичні хаби</h2>
          <p className="section-desc">
            Наші логістичні маршрути оптимізовані для швидкого проходження прикордонного та митного контролю.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginTop: '36px'
        }}>
          {borderPoints.map((bp, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              boxShadow: 'var(--shadow-main)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--accent-light)', fontSize: '1rem' }}>{bp.country}</span>
                <span style={{ fontSize: '0.75rem', background: 'var(--badge-bg)', color: 'var(--badge-text)', padding: '4px 10px', borderRadius: '12px' }}>
                  {bp.status}
                </span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 600 }}>{bp.points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
