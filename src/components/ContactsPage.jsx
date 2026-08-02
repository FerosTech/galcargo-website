import React from 'react';
import ContactSection from './ContactSection';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';

export default function ContactsPage({ t, onOpenQuote }) {
  return (
    <div className="tab-page-container" style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <ContactSection t={t} onOpenQuote={onOpenQuote} />

      {/* Direct Messengers & Dispatcher Desk */}
      <div style={{
        marginTop: '60px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '24px',
        padding: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        boxShadow: 'var(--shadow-main)'
      }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>Оперативна дежурна служба логістики 24/7</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '6px' }}>
            Потрібна термінова подача авто або інформація щодо дислокації контейнера? Напишіть черговому логісту.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '12px 24px' }}>
            <MessageSquare size={18} />
            <span>Telegram 24/7</span>
          </a>
          <a href="tel:+380448002424" className="btn-secondary" style={{ padding: '12px 24px' }}>
            <Phone size={18} />
            <span>+38 (044) 800-24-24</span>
          </a>
        </div>
      </div>
    </div>
  );
}
