import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ onOpenQuote }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const offices = [
    {
      city: 'Львів (Головний Офіс & З/Д Термінал)',
      address: 'м. Львів, вул. Городоцька, 286/Б',
      phone: '+38 (032) 299-40-40',
      email: 'lviv@galcargo.ua'
    },
    {
      city: 'Київ (Представництво)',
      address: 'м. Київ, вул. Велика Васильківська, 72',
      phone: '+38 (044) 800-24-24',
      email: 'kyiv@galcargo.ua'
    },
    {
      city: 'Одеса (Морський Портовий Офіс)',
      address: 'м. Одеса, Митна площа, 1 (Порт)',
      phone: '+38 (048) 730-11-22',
      email: 'sea@galcargo.ua'
    },
    {
      city: 'Варшава (Європейський Офіс)',
      address: 'Warszawa, ul. Aleje Jerozolimskie 180',
      phone: '+48 22 490 88 00',
      email: 'eu@galcargo.eu'
    }
  ];

  return (
    <section className="contacts-section" id="contacts">
      <div className="section-header">
        <span className="section-subtitle">Зв'язок з нами</span>
        <h2 className="section-title">Контакти та логістичні центри</h2>
        <p className="section-desc">
          Зв'яжіться з нашими фахівцями для консультації або завітайте до одного з наших регіональних офісів.
        </p>
      </div>

      <div className="contacts-grid">
        {/* Contact info list */}
        <div className="contacts-info-card">
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Наші представництва</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {offices.map((o, idx) => (
              <div key={idx} style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--accent-light)' }}>{o.city}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  <MapPin size={14} />
                  <span>{o.address}</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-main)', marginTop: '6px' }}>
                  <a href={`tel:${o.phone}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>
                    {o.phone}
                  </a>
                  <span>•</span>
                  <a href={`mailto:${o.email}`} style={{ color: 'var(--accent-light)', textDecoration: 'none' }}>
                    {o.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-primary)', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <Clock size={20} style={{ color: 'var(--accent-light)' }} />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Графік роботи диспетчерського центру:</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Целодобово 24/7 без вихідних для всіх активних рейсів</div>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="calc-card" style={{ gridTemplateColumns: '1fr', padding: '32px' }}>
          {!sent ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Надіслати пряме повідомлення</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Є запитання або потрібен спеціальний договір? Напишіть нам і ми відповімо за 10 хвилин.
                </p>
              </div>

              <div className="calc-field-group">
                <label className="calc-label">Ваше ім’я</label>
                <input
                  type="text"
                  required
                  className="calc-input-text"
                  placeholder="Петро Іваненко"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="calc-field-group">
                <label className="calc-label">Телефон або Telegram</label>
                <input
                  type="text"
                  required
                  className="calc-input-text"
                  placeholder="+38 (050) 123-45-67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="calc-field-group">
                <label className="calc-label">Повідомлення / Запитання</label>
                <textarea
                  rows="4"
                  required
                  className="calc-input-text"
                  placeholder="Опишіть ваше логістичне завдання..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                <Send size={18} />
                <span>Надіслати менеджеру</span>
              </button>
            </form>
          ) : (
            <div style={{ textTransform: 'none', textAlign: 'center', padding: '40px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <CheckCircle2 size={48} style={{ color: '#22c55e' }} />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Повідомлення доставлено!</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Дякуємо, {name || 'партнере'}. Наш черговий диспетчер зв'яжеться з вами за номером {phone}.
              </p>
              <button className="btn-secondary" onClick={() => setSent(false)}>
                Надіслати ще одне повідомлення
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
