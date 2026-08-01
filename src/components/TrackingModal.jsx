import React from 'react';
import { X, CheckCircle2, Clock, MapPin, Truck, ShieldCheck, AlertCircle } from 'lucide-react';

export default function TrackingModal({ trackCode, onClose, onOpenQuote }) {
  // Simulated tracking dataset
  const mockDatabase = {
    'GC-884920-UA': {
      code: 'GC-884920-UA',
      route: 'Варшава (Польща) → Київ (Україна)',
      transport: 'Авто (Фура 92 м³ / BC 8492 EE)',
      cargo: 'Обладнання для харчової промисловості (18.4 тонн)',
      eta: 'Сьогодні о 16:30',
      status: 'В дорозі (Проходженні митного поста "Ягодин")',
      steps: [
        { title: 'Завантаження на складі у Варшаві', time: '01.08 09:00', done: true },
        { title: 'Оформлення декларації T1 / EX1', time: '01.08 14:20', done: true },
        { title: 'Транзит по Польщі A2 / S17', time: '01.08 21:00', done: true },
        { title: 'Митний огляд на Краківці / Ягодині', time: '02.08 07:15', current: true },
        { title: 'Фінальна доставка на склад у Києві', time: 'Очікується', done: false }
      ]
    },
    'GC-104922-EU': {
      code: 'GC-104922-EU',
      route: 'Нінбо (Китай) → Львів (Україна)',
      transport: 'Залізничний контейнерний поїзд (Con-Express #449)',
      cargo: 'Електроніка та компоненти (24.0 тонн / 40’HC)',
      eta: 'Через 4 дні (06.08)',
      status: 'Транзит залізницею через Казахстан / Польщу',
      steps: [
        { title: 'Прийом контейнера в порту Нінбо', time: '22.07 10:00', done: true },
        { title: 'Відправлення контейнерного поїзда', time: '24.07 18:00', done: true },
        { title: 'Перестановки колісних пар на кордоні', time: '30.07 11:30', done: true },
        { title: 'Транзитний рух до терміналу Малашевичі', time: '02.08 03:00', current: true },
        { title: 'Перевантаження та доставка до Львова', time: 'Очікується 06.08', done: false }
      ]
    }
  };

  const currentData = mockDatabase[trackCode] || {
    code: trackCode || 'GC-CUSTOM-SEARCH',
    route: 'Львів (Україна) → Роттердам (Нідерланди)',
    transport: 'Морський контейнер / Автоекспедиція',
    cargo: 'Агропродукція у біг-бегах (22.5 тонн)',
    eta: 'Через 2 дні',
    status: 'Активний транзит (GPS зв’язок підтверджено)',
    steps: [
      { title: 'Реєстрація вантажу в системі GalCargo', time: 'Вчора 10:00', done: true },
      { title: 'Передано під відповідальне зберігання', time: 'Вчора 16:00', done: true },
      { title: 'Транзитний рух за графіком', time: 'Сьогодні 08:00', current: true },
      { title: 'Розвантаження в пункті призначення', time: 'Очікується', done: false }
    ]
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="service-icon-box" style={{ width: '44px', height: '44px', fontSize: '1.2rem' }}>
            <Truck size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-light)', fontWeight: 700 }}>
              Live Cargo Tracking System
            </div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>
              Трекінг: {currentData.code}
            </h3>
          </div>
        </div>

        <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: '14px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Маршрут:</span>
            <strong style={{ color: 'var(--text-main)' }}>{currentData.route}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Транспорт:</span>
            <span style={{ color: 'var(--text-main)' }}>{currentData.transport}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Очікуване прибуття (ETA):</span>
            <span style={{ color: 'var(--accent-light)', fontWeight: 700 }}>{currentData.eta}</span>
          </div>
        </div>

        {/* Steps Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-main)' }}>Етапи транспортування:</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentData.steps.map((st, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: st.done ? '#22c55e' : st.current ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {st.done ? <CheckCircle2 size={16} /> : i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: st.current ? 700 : 500, color: st.current ? 'var(--accent-light)' : 'var(--text-main)' }}>
                    {st.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{st.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
          <button className="btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => { onClose(); onOpenQuote(); }}>
            Отримати консультацію логіста
          </button>
          <button className="btn-secondary" onClick={onClose}>
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
}
