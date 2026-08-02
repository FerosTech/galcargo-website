import React from 'react';
import Calculator from './Calculator';
import { Package, ShieldAlert, ArrowRight, Truck } from 'lucide-react';

export default function CalculatorPage({ t, onOpenQuoteWithData, onOpenQuote }) {
  const containerSpecs = [
    {
      name: '20\' Standard Container (20\' GP)',
      vol: '33.2 m³',
      payload: 'до 28,000 kg',
      dims: '5.90m x 2.35m x 2.39m',
      desc: 'Ідеально для важких щільних вантажів (метали, зерно, обладнання)'
    },
    {
      name: '40\' High Cube Container (40\' HC)',
      vol: '76.4 m³',
      payload: 'до 28,600 kg',
      dims: '12.03m x 2.35m x 2.69m',
      desc: 'Найпопулярніший тип морського контейнера для об’ємних товарів та електроніки'
    },
    {
      name: 'Стандартний тент Euro-6 (Euroliner)',
      vol: '86 - 92 m³',
      payload: 'до 22,000 kg',
      dims: '13.60m x 2.48m x 2.70m',
      desc: 'Стандартна єврофура (33 європалети 120x80 см). Завантаження: верх, бік, зад'
    },
    {
      name: 'Автопоїзд Jumbo (Мега-Тент)',
      vol: '100 - 120 m³, висота 3m',
      payload: 'до 20,000 kg',
      dims: '13.60m x 2.48m x 3.00m',
      desc: 'Максимальний кубатурник для легких об’ємних товарів, текстилю та упаковки'
    }
  ];

  return (
    <div className="tab-page-container" style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Rate Estimator */}
      <Calculator t={t} onOpenQuoteWithData={onOpenQuoteWithData} />

      {/* ISO Container & Truck Dimensions Reference Guide */}
      <div style={{ marginTop: '60px' }}>
        <div className="section-header">
          <span className="section-subtitle">Довідник логіста</span>
          <h2 className="section-title">Габарити та місткість контейнерів / фур</h2>
          <p className="section-desc">
            Орієнтуйтеся у точних розмірах та корисній вантажопідйомності транспортних одиниць GalCargo.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          marginTop: '36px'
        }}>
          {containerSpecs.map((spec, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              boxShadow: 'var(--shadow-main)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
                  <Package size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1.05rem' }}>{spec.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-light)', fontWeight: 600 }}>{spec.vol} • {spec.payload}</div>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{spec.desc}</p>

              <div style={{
                background: 'var(--bg-secondary)',
                padding: '10px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border-color)',
                fontSize: '0.8rem',
                color: 'var(--text-main)',
                fontWeight: 600
              }}>
                Внутрішні розміри (Д х Ш х В): <span style={{ color: 'var(--accent-light)' }}>{spec.dims}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
