import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'ua', label: 'UA', name: 'Українська', flag: '🇺🇦' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'pl', label: 'PL', name: 'Polski', flag: '🇵🇱' },
  { code: 'ru', label: 'RU', name: 'Русский', flag: '🌐' },
];

export default function LanguageSwitcher({ currentLang, setLang }) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const activeLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="lang-switcher-wrap">
      <button 
        className="lang-switcher-btn"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        type="button"
        title="Змінити мову / Change language"
      >
        <span className="lang-flag">{activeLangObj.flag}</span>
        <span className="lang-code">{activeLangObj.label}</span>
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
                <span className="lang-flag">{l.flag}</span>
                <span>{l.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
