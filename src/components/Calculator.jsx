import React, { useState } from 'react';
import { Calculator as CalcIcon, Truck, Anchor, Train, ArrowRight, ShieldCheck, Thermometer, FileText } from 'lucide-react';

export default function Calculator({ t, onOpenQuoteWithData }) {
  const [transport, setTransport] = useState('truck');
  const [origin, setOrigin] = useState('Львів, Україна');
  const [destination, setDestination] = useState('Варшава, Польща');
  const [weight, setWeight] = useState(12); // tons
  const [volume, setVolume] = useState(45); // m³
  const [needCustoms, setNeedCustoms] = useState(true);
  const [needInsurance, setNeedInsurance] = useState(true);
  const [needTemp, setNeedTemp] = useState(false);

  // Calculation Logic
  const getEstimatedPrice = () => {
    let baseRate = 0;
    if (transport === 'truck') baseRate = 850;
    else if (transport === 'sea') baseRate = 1600;
    else if (transport === 'rail') baseRate = 1200;

    let weightMult = weight * 45;
    let volMult = volume * 8;

    let addons = 0;
    if (needCustoms) addons += 180;
    if (needInsurance) addons += 120;
    if (needTemp) addons += 250;

    let isOverseas = destination.includes('Китай') || destination.includes('США') || origin.includes('Китай');
    let routeMult = isOverseas ? 1.8 : 1.0;

    return Math.round((baseRate + weightMult + volMult + addons) * routeMult);
  };

  const getEstimatedDays = () => {
    if (destination.includes('Китай') || origin.includes('Китай')) {
      if (transport === 'sea') return '28 - 35 days';
      if (transport === 'rail') return '14 - 18 days';
      return '10 - 14 days';
    }
    if (transport === 'truck') return '2 - 4 days';
    if (transport === 'rail') return '5 - 7 days';
    return '12 - 16 days';
  };

  const handleBookEstimate = () => {
    const data = {
      transport,
      origin,
      destination,
      weight,
      volume,
      addons: {
        needCustoms,
        needInsurance,
        needTemp
      },
      estimatedEUR: getEstimatedPrice(),
      estimatedDays: getEstimatedDays()
    };
    onOpenQuoteWithData(data);
  };

  return (
    <section className="calculator-section" id="calculator">
      <div className="section-header">
        <span className="section-subtitle">{t('calc_subtitle')}</span>
        <h2 className="section-title">{t('calc_title')}</h2>
        <p className="section-desc">
          {t('calc_desc')}
        </p>
      </div>

      <div className="calc-card">
        {/* Left Form Side */}
        <div className="calc-form-side">
          <div className="calc-field-group">
            <label className="calc-label">{t('calc_select_transport')}</label>
            <div className="modes-tabs-header" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <button
                type="button"
                className={`mode-tab-btn ${transport === 'truck' ? 'active' : ''}`}
                onClick={() => setTransport('truck')}
              >
                <Truck size={18} />
                <span>{t('tab_truck')}</span>
              </button>
              <button
                type="button"
                className={`mode-tab-btn ${transport === 'sea' ? 'active' : ''}`}
                onClick={() => setTransport('sea')}
              >
                <Anchor size={18} />
                <span>{t('tab_sea')}</span>
              </button>
              <button
                type="button"
                className={`mode-tab-btn ${transport === 'rail' ? 'active' : ''}`}
                onClick={() => setTransport('rail')}
              >
                <Train size={18} />
                <span>{t('tab_rail')}</span>
              </button>
            </div>
          </div>

          <div className="calc-row-2">
            <div className="calc-field-group">
              <label className="calc-label">{t('calc_origin')}</label>
              <select className="calc-select" value={origin} onChange={(e) => setOrigin(e.target.value)}>
                <option value="Львів, Україна">Львів, Україна</option>
                <option value="Київ, Україна">Київ, Україна</option>
                <option value="Одеса (Порт), Україна">Одеса (Порт), Україна</option>
                <option value="Варшава, Польща">Варшава, Польща</option>
                <option value="Нінбо / Шанхай, Китай">Нінбо / Шанхай, Китай</option>
                <option value="Гамбург, Німеччина">Гамбург, Німеччина</option>
              </select>
            </div>
            <div className="calc-field-group">
              <label className="calc-label">{t('calc_dest')}</label>
              <select className="calc-select" value={destination} onChange={(e) => setDestination(e.target.value)}>
                <option value="Варшава, Польща">Варшава, Польща</option>
                <option value="Гамбург, Німеччина">Гамбург, Німеччина</option>
                <option value="Роттердам, Нідерланди">Роттердам, Нідерланди</option>
                <option value="Київ, Україна">Київ, Україна</option>
                <option value="Нінбо / Шанхай, Китай">Нінбо / Шанхай, Китай</option>
                <option value="Чикаго, США">Чикаго, США</option>
              </select>
            </div>
          </div>

          <div className="calc-row-2">
            <div className="calc-field-group">
              <div className="calc-label">
                <span>{t('calc_weight')}</span>
                <span className="calc-slider-val">{weight} T</span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="calc-range"
              />
            </div>

            <div className="calc-field-group">
              <div className="calc-label">
                <span>{t('calc_vol')}</span>
                <span className="calc-slider-val">{volume} m³</span>
              </div>
              <input
                type="range"
                min="5"
                max="120"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="calc-range"
              />
            </div>
          </div>

          <div className="calc-field-group">
            <label className="calc-label">{t('calc_addons')}</label>
            <div className="calc-checkboxes">
              <label className="checkbox-chip">
                <input
                  type="checkbox"
                  checked={needCustoms}
                  onChange={(e) => setNeedCustoms(e.target.checked)}
                />
                <FileText size={16} />
                <span>{t('addon_customs')}</span>
              </label>

              <label className="checkbox-chip">
                <input
                  type="checkbox"
                  checked={needInsurance}
                  onChange={(e) => setNeedInsurance(e.target.checked)}
                />
                <ShieldCheck size={16} />
                <span>{t('addon_insurance')}</span>
              </label>

              <label className="checkbox-chip">
                <input
                  type="checkbox"
                  checked={needTemp}
                  onChange={(e) => setNeedTemp(e.target.checked)}
                />
                <Thermometer size={16} />
                <span>{t('addon_temp')}</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Calculation Result Box */}
        <div className="calc-result-side">
          <div>
            <div className="calc-price-badge">{t('calc_est_price')}</div>
            <div className="calc-price-amount">~ €{getEstimatedPrice()}</div>
            <div className="calc-price-sub">{t('calc_tax_note')}</div>
          </div>

          <div className="calc-specs-list">
            <div className="calc-spec-item">
              <span>{t('calc_spec_time')}</span>
              <span style={{ color: 'var(--accent-light)' }}>{getEstimatedDays()}</span>
            </div>
            <div className="calc-spec-item">
              <span>{t('calc_spec_type')}</span>
              <span style={{ textTransform: 'capitalize' }}>
                {transport === 'truck' ? t('tab_truck') : transport === 'sea' ? t('tab_sea') : t('tab_rail')}
              </span>
            </div>
            <div className="calc-spec-item">
              <span>{t('calc_spec_weight')}</span>
              <span>{weight} t / {volume} m³</span>
            </div>
            <div className="calc-spec-item">
              <span>{t('calc_spec_route')}</span>
              <span>{origin.split(',')[0]} → {destination.split(',')[0]}</span>
            </div>
          </div>

          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleBookEstimate}>
            <span>{t('btn_fix_price')}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
