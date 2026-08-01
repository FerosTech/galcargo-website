import React from 'react';
import { MapPin, Globe, Compass, ArrowUpRight } from 'lucide-react';

export default function GeographyMap({ t, onOpenQuote }) {
  const hubs = [
    { city: 'Львів (UA)', desc: 'Західноукраїнський мультимодальний термінал & Консолідаційний склад' },
    { city: 'Київ (UA)', desc: 'Головний диспетчерський центр & Митний комплекс' },
    { city: 'Одеса (UA)', desc: 'Морський контейнерний термінал (Південний / Чорноморськ)' },
    { city: 'Холм / Перемишль (PL)', desc: 'Залізнично-автомобільний перевантажувальний хаб ЄС' },
    { city: 'Гданськ / Гамбург (EU)', desc: 'Глибоководні морські класифіковані порти' },
    { city: 'Нінбо / Шанхай (CN)', desc: 'Азійський консолідаційний хаб залізничних та морських вантажів' }
  ];

  const routes = [
    { from: 'Львів / Київ', to: 'Варшава / Берлін', mode: 'Авто (24-48 год)', price: 'від €650' },
    { from: 'Шанхай / Нінбо', to: 'Гданськ / Одеса', mode: 'Море (25-30 днів)', price: 'від $1,400' },
    { from: 'Сіань / Ченду', to: 'Холм / Ланьцут', mode: 'З/Д (14-16 днів)', price: 'від $2,100' },
    { from: 'Одеса / Южний', to: 'Роттердам / Антверпен', mode: 'Мультимодал (4-6 днів)', price: 'від €950' }
  ];

  return (
    <section className="geography-section" id="geography">
      <div className="section-header">
        <span className="section-subtitle">{t('geo_subtitle')}</span>
        <h2 className="section-title">{t('geo_title')}</h2>
        <p className="section-desc">
          {t('geo_desc')}
        </p>
      </div>

      <div className="geography-grid">
        {/* Hubs List */}
        <div className="hubs-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Compass size={24} style={{ color: 'var(--accent-light)' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{t('hubs_title')}</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            {t('hubs_sub')}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {hubs.map((h, i) => (
              <div key={i} className="hub-item">
                <div className="hub-icon">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="hub-city">{h.city}</div>
                  <div className="hub-desc">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Express Routes */}
        <div className="routes-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Globe size={24} style={{ color: 'var(--accent-light)' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{t('routes_title')}</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {routes.map((r, idx) => (
              <div key={idx} className="route-row">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="route-cities">{r.from} ➔ {r.to}</span>
                  <span className="route-mode">{r.mode}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="route-price">{r.price}</span>
                  <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={onOpenQuote}>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
