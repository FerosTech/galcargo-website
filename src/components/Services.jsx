import React from 'react';
import { Truck, Anchor, Train, ArrowRight, Shield, RefreshCw } from 'lucide-react';

export default function Services({ t, onOpenQuote }) {
  const servicesList = [
    {
      icon: <Truck size={36} style={{ color: 'var(--accent-light)' }} />,
      title: 'Автомобільні перевезення (FTL / LTL)',
      desc: 'Міжнародні тентові та рефрижераторні вантажні автомобільні рейси по Європі, СНД та Україні.',
      specs: ['FTL (Повні фури) & LTL (Збірні)', 'GPS-трекінг 24/7 у кабінеті', 'CMR страхування на €500 000']
    },
    {
      icon: <Anchor size={36} style={{ color: 'var(--accent-light)' }} />,
      title: 'Морські контейнерні лінії (FCL / LCL)',
      desc: 'Контейнерна логістика через порти Одеса, Гданськ, Гамбург, Роттердам. Прямі фрахтові контракти.',
      specs: ['Контейнери 20’GP, 40’HC, Reefer', 'Консолідаційні склади в Китаї', 'Митне очищення в портах']
    },
    {
      icon: <Train size={36} style={{ color: 'var(--accent-light)' }} />,
      title: 'Залізничні експрес-поїзди',
      desc: 'Пряме залізничне сполучення Китай — Україна / ЄС та перевезення масових промислових вантажів.',
      specs: ['Фіксований графік відправки', 'Економія до 40% від авіа', 'Криті вагони, хопери, цистерни']
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <span className="section-subtitle">{t('serv_subtitle')}</span>
        <h2 className="section-title">{t('serv_title')}</h2>
        <p className="section-desc">
          {t('serv_desc')}
        </p>
      </div>

      <div className="services-grid">
        {servicesList.map((s, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon-box">
              {s.icon}
            </div>

            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>

            <ul className="service-specs-list">
              {s.specs.map((item, i) => (
                <li key={i} className="service-spec-item">
                  <Shield size={14} style={{ color: 'var(--accent-light)' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button 
              className="btn-secondary" 
              style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
              onClick={onOpenQuote}
            >
              <span>{t('btn_serv_more')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
