import React, { useState } from 'react';
import { Palette, Check, X, Sparkles } from 'lucide-react';

const themes = [
  // --- Dark / Night Themes ---
  { 
    id: 'executive-dark', 
    name: 'Executive Dark 🌙', 
    desc: 'Глибокий темно-синій фон, неонові елементи та сапфіровий лого-акцент',
    primaryColor: '#1d4ed8', 
    bgColor: '#0b1120' 
  },
  { 
    id: 'hitech-cyan', 
    name: 'High-Tech Cyan ⚡', 
    desc: 'Футуристичний дизайн з лазурно-ціановими неоновими індикаторами',
    primaryColor: '#06b6d4', 
    bgColor: '#060b14' 
  },
  { 
    id: 'warm-steel', 
    name: 'Warm Steel 🪵', 
    desc: 'Преміальний сталевий slate фон з бронзово-золотистими акцентами',
    primaryColor: '#d97706', 
    bgColor: '#141619' 
  },
  { 
    id: 'glassmorphism-blue', 
    name: 'Glass Modern 🧊', 
    desc: 'Скляний модерн з напівпрозорими frosted-glass картками',
    primaryColor: '#3b82f6', 
    bgColor: '#050d1a' 
  },
  { 
    id: 'crimson-red', 
    name: 'Crimson Red Dark 🔴', 
    desc: 'Динамічний темно-червоний стиль для експрес-доставок',
    primaryColor: '#dc2626', 
    bgColor: '#12090b' 
  },
  { 
    id: 'emerald-green', 
    name: 'Emerald Eco-Green 💚', 
    desc: 'Екологічний смарагдово-зелений стиль сталого транспорту',
    primaryColor: '#059669', 
    bgColor: '#07130e' 
  },
  { 
    id: 'obsidian-gold', 
    name: 'Obsidian Luxury Gold 👑', 
    desc: 'Преміальний королівський чорний з чисто золотими акцентами (без синього)',
    primaryColor: '#d97706', 
    bgColor: '#0a0a0c' 
  },

  // --- NEW: Light / White Themes (No Blue!) ---
  { 
    id: 'classic-light', 
    name: 'Classic Light ⚪', 
    desc: 'Класичний білосніжний B2B стиль з глибоким синім корпоративним шрифтом',
    primaryColor: '#1e3a8a', 
    bgColor: '#ffffff' 
  },
  { 
    id: 'light-crimson-red', 
    name: 'Light Crimson Red ⚪🔴', 
    desc: 'НОВИНКА: Чистий білосніжний фон з яскравими червоними акцентами та кнопками',
    primaryColor: '#dc2626', 
    bgColor: '#ffffff' 
  },
  { 
    id: 'light-emerald-green', 
    name: 'Light Emerald Eco ⚪💚', 
    desc: 'НОВИНКА: Світло-м\'ятний білий фон зі смарагдово-зеленими кнопочками',
    primaryColor: '#059669', 
    bgColor: '#ffffff' 
  },
  { 
    id: 'light-luxury-gold', 
    name: 'Light Luxury Gold ⚪👑', 
    desc: 'НОВИНКА: Преміальний слонова кість / білий з бурштиновим золотом та графітом',
    primaryColor: '#d97706', 
    bgColor: '#fafaf9' 
  },
  { 
    id: 'light-royal-purple', 
    name: 'Light Royal Purple ⚪💜', 
    desc: 'НОВИНКА: Білий фон з королівськими пурпурно-фіолетовими кнопками',
    primaryColor: '#7e22ce', 
    bgColor: '#ffffff' 
  },
];

export default function LeftThemeDrawer({ currentTheme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Left Vertical Floating Trigger Button */}
      <button 
        className={`left-theme-trigger-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Відкрити панель вибору тем"
        type="button"
      >
        <Palette size={18} />
        <span className="trigger-text">Теми (12)</span>
        <span className="trigger-badge">{themes.length}</span>
      </button>

      {/* Backdrop overlay when open on mobile */}
      {isOpen && (
        <div className="left-drawer-backdrop" onClick={() => setIsOpen(false)} />
      )}

      {/* Left Drawer Panel */}
      <aside className={`left-theme-drawer-panel ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-header-title">
            <Palette size={20} style={{ color: 'var(--accent-light)' }} />
            <div>
              <h3>Галерея тем (12 вариантів)</h3>
              <p>Клацніть будь-яку тему для миттєвої зміни</p>
            </div>
          </div>
          <button className="drawer-close-btn" onClick={() => setIsOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="drawer-themes-list">
          {themes.map((t) => {
            const isActive = currentTheme === t.id;
            return (
              <div
                key={t.id}
                className={`drawer-theme-card ${isActive ? 'active' : ''}`}
                onClick={() => setTheme(t.id)}
              >
                <div className="theme-preview-swatch" style={{ backgroundColor: t.bgColor }}>
                  <div className="swatch-accent" style={{ backgroundColor: t.primaryColor }} />
                </div>

                <div className="theme-card-info">
                  <div className="theme-card-name">
                    <span>{t.name}</span>
                    {isActive && (
                      <span className="active-badge">
                        <Check size={12} />
                        Обрана
                      </span>
                    )}
                  </div>
                  <div className="theme-card-desc">{t.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="drawer-footer">
          <span>Оберіть тему для затвердження</span>
        </div>
      </aside>
    </>
  );
}
