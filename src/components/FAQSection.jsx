import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';

export default function FAQSection({ t, onOpenQuote }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Який термін подачі залізничних зерновозів-хоперів та напіввагонів?',
      a: 'Стандартний термін подачі сформованої нитки вагонів (від 5 до 54 вагонів) на елеватор або станцію становить 24-48 годин після підтвердження заявки та узгодження маршруту з Укрзалізницею (УЗ) чи іноземними перевізниками (PKP, DB Cargo).'
    },
    {
      q: 'Як розраховується вартість перевезення пшениці та агро-вантажів?',
      a: 'Тариф формується залежно від станції відправлення, відстані до порту або прикордонного переходу, типу рухомого складу (хоппер 120 м³ або напіввагон), загального тоннажу партії та обраних додаткових послуг (митне декларування T1/EX1, фітосанітарний огляд, страхування).'
    },
    {
      q: 'Чи забезпечуєте ви митно-брокерське оформлення та фітосанітарний контроль?',
      a: 'Так, "Гал карго" надає повний комплекс митного експедирування: оформлення декларацій T1, EX1, EUR.1, Carnet TIR, а також проходження фітосанітарної та радіологічної експертизи з отриманням міжнародних сертифікатів GAFTA / SGS у портах.'
    },
    {
      q: 'Як відбувається перевантаження зерна з колії 1520 мм на євроколію 1435 мм?',
      a: 'Ми використовуємо власні сухі перевантажувальні термінали в Холмі, Перемишлі та Ланьцуті (Польща), де зерно перевантажується з широких хоперів безпосередньо у європейські вагони або авто-зерновози без втрати вологості та якості.'
    },
    {
      q: 'Яке страхування надається на вантаж під час транспортування?',
      a: 'Усі вантажі за замовчуванням застраховані за міжнародним полісом CMR / Railway Cargo Insurance з лімітом відповідальності експедитора до €500 000 за кожну страхову подію.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" style={{ padding: '60px 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="section-header">
        <span className="section-subtitle">FAQ • Відповіді на запитання клієнтів</span>
        <h2 className="section-title">Часті запитання щодо перевезення зерна та вагонів</h2>
        <p className="section-desc">
          Відповіді на найпопулярніші запитання зернотрейдерів, агрохолдингів та промислових підприємств.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '36px' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-main)',
                transition: 'all 0.2s ease'
              }}
            >
              <button
                onClick={() => toggleFaq(idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <HelpCircle size={20} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                  <span>{faq.q}</span>
                </div>
                <ChevronDown
                  size={20}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    color: 'var(--accent-light)',
                    flexShrink: 0
                  }}
                />
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 24px 20px 56px',
                    color: 'var(--text-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '16px'
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Call to Action for Google Ads Conversion */}
      <div style={{
        marginTop: '40px',
        background: 'var(--bg-secondary)',
        border: '1px dashed var(--accent-light)',
        borderRadius: '20px',
        padding: '24px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <div>
          <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.1rem' }}>Маєте індивідуальне запитання по маршруту?</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Черговий агро-диспетчер проконсультує вас протягом 2 хвилин</div>
        </div>

        <button className="btn-primary" onClick={onOpenQuote} style={{ padding: '12px 24px' }}>
          <PhoneCall size={18} />
          <span>Отримати консультацію</span>
        </button>
      </div>
    </section>
  );
}
