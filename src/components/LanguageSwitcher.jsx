import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const languages = [
  { code: 'ua', name: 'Українська' },
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
  { code: 'ru', name: 'Русский' },
];

export default function LanguageSwitcher({ currentLang, setLang }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="lang-switcher-wrap">
      <button 
        className="lang-switcher-btn"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        type="button"
        title="Змінити мову / Change language"
      >
        <Globe size={14} style={{ color: 'var(--accent-light)' }} />
        <span className="lang-name-display">{activeLangObj.name}</span>
        <ChevronDown size={12} className={`lang-chevron ${dropdownOpen ? 'open' : ''}`} />
      </button>

      {dropdownOpen && (
        <>
          <div className="lang-dropdown-backdrop" onClick={() => setDropdownOpen(false)} />
          <div className="lang-dropdown-menu">
            {languages.map((l) => (
              <button
                key={l.code}
                className={`lang-option-btn ${currentLang === l.code ? 'active' : ''}`}
                onClick={() => {
                  setLang(l.code);
                  setDropdownOpen(false);
                }}
                type="button"
              >
                <span>{l.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
