import React from 'react';
import Calculator from './Calculator';
import { Wheat, Train, Truck, Anchor, Package, ShieldCheck } from 'lucide-react';

export default function CalculatorPage({ t, onOpenQuoteWithData, onOpenQuote }) {
  const railcarSpecs = [
    {
      name: 'Зерновоз-Хоппер (модель 19-7053)',
      vol: '120 m³',
      payload: 'до 70.5 тонн',
      dims: 'Довжина 14.7м • 4 люки • 6 бункерів',
      desc: 'Найефективніший вагоновид для безвтратного транспортування пшениці, кукурудзи та сої'
    },
    {
      name: 'Напіввагон Люковий (Gondola Car)',
      vol: '88 m³ (з нарощеними бортами)',
      payload: 'до 69-71 тонн',
      dims: 'Довжина 13.9м • 14 розвантажувальних люків',
      desc: 'Універсальний вагон для перевезення пшениці у біг-бегах, шроту, вугілля та металопрокату'
    },
    {
      name: 'Авто-Зерновоз Самоскид (Агро-Самоскид)',
      vol: '45 - 55 m³',
      payload: 'до 24-26 тонн',
      dims: 'Алюмінієвий напівпричіп з тентовим пологом',
      desc: 'Гнучка доставка зерна прямо з елеватора або поля до найближчого залізничного вузла'
    },
    {
      name: '20\' Морський Контейнер під Зернові (Liner-Bag)',
      vol: '33.2 m³ (Liner-Bag вставка)',
      payload: 'до 26-28 тонн',
      dims: '5.90m x 2.35m x 2.39m',
      desc: 'Прямий морський контейнерний експорт пшениці у мішках або насипом до країн Азії та Африки'
    }
  ];

  return (
    <div className="tab-page-container" style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Rate Estimator */}
      <Calculator t={t} onOpenQuoteWithData={onOpenQuoteWithData} />

      {/* Railcars & Agri-Fleet Guide */}
      <div style={{ marginTop: '60px' }}>
        <div className="section-header">
          <span className="section-subtitle">Довідник агро-експедитора</span>
          <h2 className="section-title">Характеристики зерновозів-хоперів та напіввагонів</h2>
          <p className="section-desc">
            Орієнтуйтеся у точних об'ємах, кубатурі та нормах завантаження пшениці у залізничний та автомобільний рухомий склад GalCargo.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          marginTop: '36px'
        }}>
          {railcarSpecs.map((spec, idx) => (
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
                  <Wheat size={22} />
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
                Специфікація кузова: <span style={{ color: 'var(--accent-light)' }}>{spec.dims}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
