import React from 'react';
import { ShieldCheck, Award, Users, Check, X, Building2, Truck, FileCheck, Headphones } from 'lucide-react';

export default function AboutUs() {
  const comparisonData = [
    { feature: 'Власний автопарк та контейнерний парк', galcargo: true, others: false, detail: 'Понад 180 одиниць тягачів Euro 6 та 400+ власних контейнерів' },
    { feature: 'Прямі прямі договори з залізницею та судноплавними лініями', galcargo: true, others: false, detail: 'Відсутність посередників — мінімальні фрахтові ставки' },
    { feature: 'Фіксація ціни в договорі без прихованих платежів', galcargo: true, others: false, detail: 'Специфікація вартості є остаточною та не змінюється в дорозі' },
    { feature: 'GPS-моніторинг вантажу та електронний кабінет 24/7', galcargo: true, others: 'Частково', detail: 'Онлайн-відстеження з геозонами та фотозвітами з навантаження' },
    { feature: '100% Страхування відповідальності експедитора (CMR & All Risks)', galcargo: true, others: 'Частково', detail: 'Повне покриття збитків у провідних міжнародних страхувальників' },
    { feature: 'Персональний логіст-диспетчер 24/7/365', galcargo: true, others: false, detail: 'Прямий зв’язок без роботів та черг на лінії' }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-subtitle">Про компанію</span>
          <h2 className="section-title">Надійний B2B партнер з логістики</h2>
          <p className="section-desc">
            "Гал карго" (GalCargo) працює на ринку міжнародних вантажних перевезень з 2009 року. Наша мета — надати бізнесу безперебійний супровід ланцюгів постачання.
          </p>
        </div>

        {/* B2B Comparison Table */}
        <div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '16px', textAlign: 'center' }}>
            Чому провідні виробники та ритейлери обирають GalCargo:
          </h3>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Параметр послуги</th>
                  <th className="brand-col">Гал Карго (GalCargo)</th>
                  <th>Звичайні експедитори</th>
                  <th>Ваша перевага</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600, color: 'var(--text-main)' }}>{row.feature}</td>
                    <td className="brand-cell">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={18} style={{ color: '#22c55e' }} />
                        <span>Є в наявності</span>
                      </div>
                    </td>
                    <td style={{ color: 'var(--text-muted)' }}>
                      {typeof row.others === 'boolean' ? (
                        row.others ? <Check size={16} /> : <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ef4444' }}><X size={16} />Ні</div>
                      ) : (
                        <span>{row.others}</span>
                      )}
                    </td>
                    <td style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reliability Cards */}
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="service-card" style={{ padding: '24px' }}>
            <Building2 size={28} style={{ color: 'var(--accent-light)' }} />
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>4 Офіси & Термінали</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Головний офіс у Львові, представництва у Києві, Одеському порту та Варшаві.
            </p>
          </div>

          <div className="service-card" style={{ padding: '24px' }}>
            <FileCheck size={28} style={{ color: 'var(--accent-light)' }} />
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>ISO & FIATA Сертифікація</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Відповідність світовим стандартам якості та безпеки вантажних перевезень.
            </p>
          </div>

          <div className="service-card" style={{ padding: '24px' }}>
            <Truck size={28} style={{ color: 'var(--accent-light)' }} />
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Власний Автопарк</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Сучасні тягачі Euro 6 не молодше 3 років з регулярним технічним аудитом.
            </p>
          </div>

          <div className="service-card" style={{ padding: '24px' }}>
            <Headphones size={28} style={{ color: 'var(--accent-light)' }} />
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Підтримка 24/7</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Персональний менеджер на зв'язку цілодобово для оперативних рішень.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
