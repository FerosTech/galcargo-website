import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ t, onOpenQuote }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', msg: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', msg: '' });
    }, 4000);
  };

  return (
    <section className="contacts-section" id="contacts">
      <div className="section-header">
        <span className="section-subtitle">{t('cont_subtitle')}</span>
        <h2 className="section-title">{t('cont_title')}</h2>
        <p className="section-desc">
          {t('cont_desc')}
        </p>
      </div>

      <div className="contacts-grid">
        {/* Offices Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{t('cont_offices_title')}</h3>

          <div className="contact-info-card">
            <MapPin size={24} style={{ color: 'var(--accent-light)' }} />
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Головний офіс & Логістичний центр (Львів)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>вул. Городоцька, 355, м. Львів, 79040, Україна</div>
            </div>
          </div>

          <div className="contact-info-card">
            <MapPin size={24} style={{ color: 'var(--accent-light)' }} />
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Київський представницький офіс</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>вул. Бориспільська, 9, м. Київ, 02099, Україна</div>
            </div>
          </div>

          <div className="contact-info-card">
            <Phone size={24} style={{ color: 'var(--accent-light)' }} />
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Гаряча лінія 24/7</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--accent-light)', fontWeight: 800 }}>+38 (044) 800-24-24</div>
            </div>
          </div>

          <div className="contact-info-card">
            <Mail size={24} style={{ color: 'var(--accent-light)' }} />
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Електронна пошта</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>info@galcargo.com • sales@galcargo.com</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{t('cont_form_title')}</h3>

          {submitted ? (
            <div style={{ padding: '30px', textAlign: 'center', color: '#10b981', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 size={48} />
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Дякуємо! Повідомлення успішно надіслано.</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Наш диспетчер зателефонує вам протягом 10 хвилин.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="calc-field-group">
                <label className="calc-label">{t('cont_name_label')}</label>
                <input
                  type="text"
                  required
                  className="calc-select"
                  placeholder="Олексій"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="calc-field-group">
                <label className="calc-label">{t('cont_phone_label')}</label>
                <input
                  type="text"
                  required
                  className="calc-select"
                  placeholder="+380 67 000 00 00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="calc-field-group">
                <label className="calc-label">{t('cont_msg_label')}</label>
                <textarea
                  rows="3"
                  className="calc-select"
                  style={{ resize: 'none' }}
                  placeholder="Потрібно опрацювати доставку контейнера з Китаю..."
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                <Send size={16} />
                <span>{t('btn_send_msg')}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
