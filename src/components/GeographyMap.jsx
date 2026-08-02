import React from 'react';
import { MapPin, Globe, Compass, ArrowUpRight, Train, Wheat, Anchor, Truck } from 'lucide-react';

export default function GeographyMap({ t, onOpenQuote }) {
  const hubs = [
    { 
      flag: '🇺🇦',
      city: 'Львів (UA)', 
      role: 'Західноукраїнський Агро-Термінал & Консолідаційний Склад', 
      spec: 'Подача хоперів зерновозів • Колія 1520/1435 мм • Потужність: 45 вагонів/добу' 
    },
    { 
      flag: '🇺🇦',
      city: 'Київ / Сарни (UA)', 
      role: 'Центральний Диспетчерський Вузол & Фітосанітарний Лабораторний Комплекс', 
      spec: 'Аналіз вологості пшениці • Сертифікація GAFTA/SGS • Маршрутні поїзди' 
    },
    { 
      flag: '🇺🇦',
      city: 'Одеса / Чорноморськ (UA)', 
      role: 'Глибоководні Зернові Портові Елеватори (Південний / Чорноморськ)', 
      spec: 'Швидкісна стафіровка в 20\' контейнери & Перевалка на судна Panamax' 
    },
    { 
      flag: '🇵🇱',
      city: 'Холм / Перемишль (PL)', 
      role: 'Сухий Порт & Сухопутний Перевантажувальний Хаб ЄС', 
      spec: 'Перевозильне перевантаження з широкої колії 1520 мм на євроколію 1435 мм' 
    },
    { 
      flag: '🇩🇪',
      city: 'Гданськ / Гамбург / Гдиня (EU)', 
      role: 'Класифіковані Балтійські Порти & Контейнерні Термінали', 
      spec: 'Прямий морський фрахт до Африки, Близького Сходу та Азії' 
    },
    { 
      flag: '🇷🇴',
      city: 'Рени / Ізмаїл / Констанца (RO)', 
      role: 'Дунайсько-Чорноморський Зерновий Коридор', 
      spec: 'Баржеві та залізничні відправки пшениці й ячменю 24/7' 
    }
  ];

  const routes = [
    { 
      typeIcon: <Wheat size={18} />,
      typeLabel: 'Зерновози-Хопери (Пшениця)',
      from: 'Елеватор Полтава / Вінниця', 
      to: 'Порт Одеса / Чорноморськ', 
      time: 'З/Д (24-48 год)', 
      capacity: 'Маршрут 54 хопери (3 800 т)',
      price: 'від $22 / т' 
    },
    { 
      typeIcon: <Train size={18} />,
      typeLabel: 'Люкові Напіввагони (Gondola Cars)',
      from: 'Станція Запоріжжя / Дніпро', 
      to: 'Перевантаження Холм (PL)', 
      time: 'З/Д (3-5 днів)', 
      capacity: 'Пшениця у Біг-Бегах (69 т/вагон)',
      price: 'від €34 / т' 
    },
    { 
      typeIcon: <Anchor size={18} />,
      typeLabel: 'Морський Фрахт (Bulk Vessels)',
      from: 'Порт Чорноморськ / Констанца', 
      to: 'Порти Александрія (EG) / Джидда (SA)', 
      time: 'Море (8-12 днів)', 
      capacity: 'Судна Panamax (50 000+ т)',
      price: 'від $18 / т' 
    },
    { 
      typeIcon: <Truck size={18} />,
      typeLabel: 'Авто-Зерновози (Самоскиди)',
      from: 'Поле / Фарм-склад (UA)', 
      to: 'Прикордонний елеватор (PL/RO)', 
      time: 'Авто (1-2 дні)', 
      capacity: 'Самоскиди 50 м³ (25 тонн)',
      price: 'від €45 / т' 
    }
  ];

  return (
    <section className="geography-section" id="geography" style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div className="section-header">
        <span className="section-subtitle">{t('geo_subtitle')}</span>
        <h2 className="section-title">{t('geo_title')}</h2>
        <p className="section-desc">
          {t('geo_desc')}
        </p>
      </div>

      {/* Modern Hubs Grid */}
      <div style={{ marginTop: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ padding: '10px', borderRadius: '12px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
            <Compass size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>{t('hubs_title')}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>{t('hubs_sub')}</p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }} className="hubs-card-grid">
          {hubs.map((h, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: 'var(--shadow-main)',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }} className="hub-grid-item">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '1.5rem' }}>{h.flag}</span>
                <span style={{ fontSize: '0.75rem', background: 'var(--badge-bg)', color: 'var(--accent-light)', padding: '4px 10px', borderRadius: '12px', fontWeight: 700 }}>
                  Хаб 24/7
                </span>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '4px' }}>{h.city}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--accent-light)', fontWeight: 600 }}>{h.role}</div>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'var(--bg-secondary)', padding: '10px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                {h.spec}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Routes Grid */}
      <div style={{ marginTop: '50px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ padding: '10px', borderRadius: '12px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
            <Globe size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>{t('routes_title')}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>Прямі логістичні коридори з подачею хоперів та напіввагонів</p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px'
        }} className="routes-card-grid">
          {routes.map((r, idx) => (
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--badge-bg)', color: 'var(--accent-light)', padding: '6px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700 }}>
                  {r.typeIcon}
                  <span>{r.typeLabel}</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{r.time}</span>
              </div>

              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {r.from} <span style={{ color: 'var(--accent-light)' }}>➔</span> {r.to}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>{r.capacity}</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Орієнтовна ставка:</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-light)' }}>{r.price}</span>
                </div>
                <button className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }} onClick={onOpenQuote}>
                  <span>Забронювати рейс</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
