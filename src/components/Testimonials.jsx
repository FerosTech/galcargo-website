import React from 'react';
import { Star, Building2, Quote } from 'lucide-react';

export default function Testimonials({ t }) {
  const reviews = [
    {
      company: 'ТОВ "Агропром-Експорт"',
      person: 'Михайло Ковальчук',
      role: 'Директор з логістики',
      text: 'Працюємо з GalCargo вже 5 років по поставках обладнання з Німеччини та Польщі. Завжди чітко вкладаються в графік FTL автоперевезень.',
      stars: 5,
      route: 'Берлін ➔ Львів'
    },
    {
      company: 'Мережа ритейлу "ТехноСвіт"',
      person: 'Олена Петренко',
      role: 'Керівник ВЕД',
      text: 'Залізничні експрес-поїзди з Китаю від GalCargo скоротили термін доставки побутової техніки з 40 до 16 днів! Рекомендуємо як надійного партнера.',
      stars: 5,
      route: 'Нінбо ➔ Холм ➔ Київ'
    },
    {
      company: 'Завод "ЗахідМетал"',
      person: 'Ярослав Савченко',
      role: 'Начальник відділу постачання',
      text: 'Дуже зручна мультимодальна схема перевезення металоконструкцій у морських контейнерах через порт Гданськ. Митне оформлення без затримок.',
      stars: 5,
      route: 'Одеса ➔ Гданськ ➔ Роттердам'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <span className="section-subtitle">{t('test_subtitle')}</span>
        <h2 className="section-title">{t('test_title')}</h2>
        <p className="section-desc">
          {t('test_desc')}
        </p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((r, idx) => (
          <div key={idx} className="testimonial-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="stars-row">
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-light)" color="var(--accent-light)" />
                ))}
              </div>
              <Quote size={24} style={{ color: 'var(--border-color)' }} />
            </div>

            <p className="testimonial-text">"{r.text}"</p>

            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{r.person}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{r.role} • {r.company}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-light)', marginTop: '4px', fontWeight: 600 }}>
                Маршрут: {r.route}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
