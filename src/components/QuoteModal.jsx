import React, { useState } from 'react';
import { X, CheckCircle2, Send, FileText, ShieldCheck, Phone, Mail, User, Building } from 'lucide-react';

export default function QuoteModal({ onClose, calcData }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    comment: calcData ? `Прорахунок для маршруту ${calcData.origin} → ${calcData.destination}. Вага: ${calcData.weight}т, Об'єм: ${calcData.volume}м³. Орієнтовна вартість калькулятора: ~€${calcData.estimatedEUR}` : ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                Форма прорахунку вартості
              </span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '4px' }}>
                Отримайте офіційну КП за 15 хвилин
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Заповніть контактні дані і наш головний логіст підготує розрахунок фрахту з фіксацією ціни.
              </p>
            </div>

            {calcData && (
              <div style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', padding: '12px 16px', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--badge-text)' }}>
                <strong>Дані з калькулятора:</strong> {calcData.origin.split(',')[0]} → {calcData.destination.split(',')[0]} | ~€{calcData.estimatedEUR} ({calcData.estimatedDays})
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="calc-row-2">
                <div className="calc-field-group">
                  <label className="calc-label">Ваше ім’я *</label>
                  <input
                    type="text"
                    required
                    className="calc-input-text"
                    placeholder="Олександр Попов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="calc-field-group">
                  <label className="calc-label">Телефон *</label>
                  <input
                    type="tel"
                    required
                    className="calc-input-text"
                    placeholder="+38 (067) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="calc-row-2">
                <div className="calc-field-group">
                  <label className="calc-label">Корпоративний Email *</label>
                  <input
                    type="email"
                    required
                    className="calc-input-text"
                    placeholder="logistics@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="calc-field-group">
                  <label className="calc-label">Назва компанії</label>
                  <input
                    type="text"
                    className="calc-input-text"
                    placeholder="ТОВ 'АгроІнвестУкраїна'"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="calc-field-group">
                <label className="calc-label">Деталі вантажу / Специфікація</label>
                <textarea
                  rows="3"
                  className="calc-input-text"
                  placeholder="Вкажіть точний характер вантажу, габарити, температурний режим..."
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                <Send size={18} />
                <span>Надіслати запит на прорахунок</span>
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#22c55e20', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>Дякуємо! Заявку прийнято</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '420px' }}>
              Менеджер GalCargo вже працює над розрахунком вашого вантажу. Комерційна пропозиція буде надіслана на <strong>{formData.email || 'вказаний Email'}</strong> протягом 15 хвилин.
            </p>
            <button className="btn-primary" onClick={onClose} style={{ marginTop: '10px' }}>
              Зрозуміло, повернутися на сайт
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
