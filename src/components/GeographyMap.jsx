import React from 'react';
import { MapPin, Navigation, Clock, Globe, ArrowRight, ShieldAlert } from 'lucide-react';

export default function GeographyMap({ onOpenQuote }) {
  const hubs = [
    { city: 'Львів', country: 'Україна', status: 'Головний термінал & З/Д хаб', code: 'LVO' },
    { city: 'Одеса', country: 'Україна', status: 'Морський порт & Контейнерний термінал', code: 'ODS' },
    { city: 'Київ', country: 'Україна', status: 'Логістичний центр & Митниця', code: 'IEV' },
    { city: 'Варшава', country: 'Польща', status: 'Європейський дистрибуційний хаб', code: 'WAW' },
    { city: 'Гамбург', country: 'Німеччина', status: 'Морський & Авто термінал', code: 'HAM' },
    { city: 'Нінбо / Шанхай', country: 'Китай', status: 'Азійський консолідаційний склад', code: 'NGB' }
  ];

  const popularRoutes = [
    { from: 'Львів / Київ', to: 'Варшава / Берлін', mode: 'Авто (Фури)', time: '2 - 3 дні', freq: 'Щодня' },
    { from: 'Нінбо (Китай)', to: 'Львів (З/Д Експрес)', mode: 'Залізниця', time: '14 - 18 днів', freq: '3 рази на тиждень' },
    { from: 'Шанхай (Китай)', to: 'Одеса / Гданськ', mode: 'Морський фрахт', time: '28 - 35 днів', freq: 'Щотижня' },
    { from: 'Україна', to: 'Чикаго / Нью-Йорк (США)', mode: 'Море + Авіа / Авто', time: '16 - 22 дні', freq: '2 рази на тиждень' }
  ];

  return (
    <section className="geography-section" id="geography">
      <div className="section-header">
        <span className="section-subtitle">Географія & Маршрути</span>
        <h2 className="section-title">Міжнародна логістична мережа</h2>
        <p className="section-desc">
          Ми з'єднуємо ключові промислові та торговельні центри України, Європейського Союзу, Азії та Північної Америки.
        </p>
      </div>

      <div className="routes-grid">
        {/* Interactive Map Visual */}
        <div className="map-visual-card">
          <div className="map-bg-graphics"></div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-light)' }}>
              <Globe size={20} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Ключові логістичні хаби GalCargo</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Власні та партнерські консолідаційні склади з цілодобовою охороною та митним контролем.
            </p>
          </div>

          <div className="hub-nodes-container">
            {hubs.map((h, i) => (
              <div key={i} className="hub-node">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="hub-name">{h.city}</span>
                  <span style={{ fontSize: '0.65rem', padding: '2px 6px', background: 'var(--badge-bg)', color: 'var(--accent-light)', borderRadius: '4px', fontWeight: 700 }}>
                    {h.code}
                  </span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{h.country}</div>
                <div className="hub-status">
                  <MapPin size={10} />
                  <span>{h.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Завжди в наявності вільні причепи та контейнери
            </span>
            <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.8rem' }} onClick={onOpenQuote}>
              Запитати маршрут
            </button>
          </div>
        </div>

        {/* Popular Active Routes List */}
        <div className="routes-cards-list">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '4px' }}>
            Популярні експрес-напрямки:
          </h3>

          {popularRoutes.map((r, idx) => (
            <div key={idx} className="route-card-item">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div className="route-endpoints">
                  <span>{r.from}</span>
                  <Navigation size={14} style={{ color: 'var(--accent-light)', transform: 'rotate(90deg)' }} />
                  <span>{r.to}</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>Вид: <strong style={{ color: 'var(--text-main)' }}>{r.mode}</strong></span>
                  <span>•</span>
                  <span>Регулярність: <strong style={{ color: 'var(--text-main)' }}>{r.freq}</strong></span>
                </div>
              </div>

              <div className="route-eta">
                <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                {r.time}
              </div>
            </div>
          ))}

          <div style={{ padding: '16px', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <MapPin size={24} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Не знайшли потрібне місто? Ми розробляємо <strong style={{ color: 'var(--text-main)' }}>індивідуальні мультимодальні схеми</strong> під спецзавдання вашого бізнесу.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
