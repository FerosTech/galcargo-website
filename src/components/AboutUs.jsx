import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';

export default function AboutUs({ t }) {
  const advantages = [
    'Власний та зафрахтований автопарк понад 280 вантажівок Euro-6',
    'Прямі агентські угоди з найбільшими морськими лініями (Maersk, MSC, CMA CGM)',
    'Власні митні брокери та склади консолідації у Львові, Холмі та Нінбо',
    'Страхування відповідальності експедитора у міжнародній компанії TT Club'
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-subtitle">{t('about_subtitle')}</span>
          <h2 className="section-title">{t('about_title')}</h2>
          <p className="section-desc">
            {t('about_desc')}
          </p>
        </div>

        <div className="comparison-table-wrapper">
          <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)' }}>
              {t('comp_title')}
            </h3>
          </div>

          <table className="comparison-table">
            <thead>
              <tr>
                <th>Параметри сервісу</th>
                <th className="brand-col">Гал Карго (GalCargo)</th>
                <th>Звичайні перевізники</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>Вид перевезень</td>
                <td className="brand-cell">Мультимодальні (Авто + Море + З/Д)</td>
                <td>Лише 1 вид транспорту</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>GPS-моніторинг</td>
                <td className="brand-cell">Онлайн 24/7 у кабінеті + трекінг код</td>
                <td>Телефонні дзвінки водію</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Страхування вантажу</td>
                <td className="brand-cell">100% CMR & Cargo Insurance (€500k)</td>
                <td>Базове мінімальне</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Митний супровід</td>
                <td className="brand-cell">Власна митно-брокерська служба</td>
                <td>Шукають сторонніх брокерів</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Штраф за затримку</td>
                <td className="brand-cell">Фінансово гарантовано договором</td>
                <td>Відсутня відповідальність</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
