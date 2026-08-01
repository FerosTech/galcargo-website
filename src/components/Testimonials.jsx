import React from 'react';
import { Star, Building2, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      company: 'ТОВ "АгроТех Захід"',
      industry: 'Експорт агропродукції та сільгосптехніки',
      text: 'Співпрацюємо з "Гал карго" понад 5 років. Перевозимо негабаритні комбайни та зернові контейнерними поїздами в Європу. Жодного разу не підвели з термінами подачі вагонів на залізниці.',
      author: 'Олег Василенко, Директор з логістики',
      rating: 5
    },
    {
      company: 'Nordic Consumer Goods Sp. z o.o.',
      industry: 'FMCG & Ритейл (Польща - Україна)',
      text: 'Регулярні тентовані автоперевезення 92 м³ з Варшави до Києва. Митне оформлення роблять на власному терміналі за 2 години, що економить нам сотні годин простою на кордоні.',
      author: 'Марцін Ковальскі, Supply Chain Director',
      rating: 5
    },
    {
      company: 'ДП "УкрФарм Постач"',
      industry: 'Фармацевтична логістика (Температурний режим)',
      text: 'Для нас критично важлива підтримка температурного режиму +2°C...+8°C з контролем термописця. GalCargo надає ідеальні рефрижератори Euro 6 із 100% страхуванням вантажу.',
      author: 'Ірина Мельник, Головний провізор-експедитор',
      rating: 5
    }
  ];

  return (
    <section className="about-section" style={{ background: 'var(--bg-primary)' }}>
      <div className="about-container">
        <div className="section-header">
          <span className="section-subtitle">Довіра B2B Клієнтів</span>
          <h2 className="section-title">Відгуки та успішні логістичні кейси</h2>
          <p className="section-desc">
            Нам довіряють понад 450 промислових підприємств, імпортерів та експортерів по всій Україні та Європі.
          </p>
        </div>

        <div className="services-grid">
          {reviews.map((r, idx) => (
            <div key={idx} className="service-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" />
                  ))}
                </div>
                <Quote size={24} style={{ color: 'var(--accent-light)', opacity: 0.5 }} />
              </div>

              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                "{r.text}"
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>{r.company}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-light)' }}>{r.industry}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{r.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
