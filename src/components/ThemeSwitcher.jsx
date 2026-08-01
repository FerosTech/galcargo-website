import React from 'react';
import { Palette, Check } from 'lucide-react';

const themes = [
  { id: 'executive-dark', name: 'Executive Dark', color: '#1d4ed8', bg: '#0b1120' },
  { id: 'classic-light', name: 'Classic Light', color: '#1e3a8a', bg: '#ffffff' },
  { id: 'hitech-cyan', name: 'High-Tech Cyan', color: '#06b6d4', bg: '#060b14' },
  { id: 'warm-steel', name: 'Warm Steel', color: '#d97706', bg: '#141619' },
  { id: 'glassmorphism-blue', name: 'Glass Modern', color: '#3b82f6', bg: '#050d1a' },
];

export default function ThemeSwitcher({ currentTheme, setTheme }) {
  return (
    <div className="theme-switcher-bar">
      <div className="theme-switcher-title">
        <Palette size={16} />
        <span>Тема оформлення:</span>
      </div>
      <div className="theme-options-list">
        {themes.map((t) => {
          const isActive = currentTheme === t.id;
          return (
            <button
              key={t.id}
              className={`theme-btn ${isActive ? 'active' : ''}`}
              onClick={() => setTheme(t.id)}
              title={`Переключити на тему ${t.name}`}
            >
              <span className="theme-dot" style={{ backgroundColor: t.color }}></span>
              <span>{t.name}</span>
              {isActive && <Check size={12} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
