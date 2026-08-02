import React, { useState } from 'react';
import { Train, Wheat, Truck, Anchor, Warehouse, ShieldCheck, CheckCircle2, ArrowRight, Package } from 'lucide-react';

export default function ServicesPage({ t, onOpenQuote }) {
  const [activeSubTab, setActiveSubTab] = useState('grain-hoppers');

  return (
    <div className="tab-page-container" style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div className="section-header">
        <span className="section-subtitle">Спеціалізована Агро & Промислова Логістика</span>
        <h2 className="section-title">Перевезення пшениці, зерна та оперування напіввагонами</h2>
        <p className="section-desc">
          Комплексний експорт сільськогосподарських та насипних вантажів залізницею, морем та автотранспортом від лінійних елеваторів до морських портів ЄС.
        </p>
      </div>

      {/* Services Sub-Tabs */}
      <div className="modes-tabs-header" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '30px' }}>
        <button
          className={`mode-tab-btn ${activeSubTab === 'grain-hoppers' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('grain-hoppers')}
        >
          <Wheat size={20} />
          <span>Зерновози-Хопери</span>
        </button>

        <button
          className={`mode-tab-btn ${activeSubTab === 'gondolas' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('gondolas')}
        >
          <Train size={20} />
          <span>Напіввагони</span>
        </button>

        <button
          className={`mode-tab-btn ${activeSubTab === 'auto-grain' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('auto-grain')}
        >
          <Truck size={20} />
          <span>Авто-Зерновози</span>
        </button>

        <button
          className={`mode-tab-btn ${activeSubTab === 'port-elevators' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('port-elevators')}
        >
          <Anchor size={20} />
          <span>Портові Елеватори</span>
        </button>
      </div>

      {/* Sub-Tab Detailed Content */}
      <div className="service-detail-card" style={{
        marginTop: '24px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '24px',
        padding: '36px',
        boxShadow: 'var(--shadow-main)'
      }}>
        {activeSubTab === 'grain-hoppers' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
                <Wheat size={36} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Залізничні Зерновози-Хопери (Пшениця, Кукурудза, Олійні)</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Спеціалізований бункерний рухомий склад для захищеного транспортування зерна без втрат якості</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-light)', fontSize: '1rem', marginBottom: '12px' }}>Ключові переваги:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Верхнє завантаження через завантажувальні люки з ущільнювачами від вологи</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Гравітаційне самопливне розвантаження через 6 бункерних шиберів</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Маршрутні відправки поїздами (по 54 хопери = 3 800+ тонн пшениці за 1 рейс)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>100% збереження вологості, протеїну та натури пшениці</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '12px' }}>Специфікація хоперів зерновозів:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <div>• Моделі: 19-752, 19-7053 (збільшений кубатурник)</div>
                  <div>• Корисний об'єм кузова: 116 – 120 м³</div>
                  <div>• Вантажопідйомність: 70.5 – 72 тонни</div>
                  <div>• Транзитні маршрути: Лінійний елеватор ➔ Порти Одеса / Гданськ</div>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenQuote} style={{ width: 'fit-content' }}>
              <span>Забронювати вагони-зерновози</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {activeSubTab === 'gondolas' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
                <Train size={36} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Вантажні Напіввагони (Люкові та Глуходонні Gondola Cars)</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Оперування парком напіввагонів для насипних вантажів, пшениці в біг-бегах, руди та вугілля</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-light)', fontSize: '1rem', marginBottom: '12px' }}>Ключові переваги:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Люкові напіввагони з розвантажувальними люками в підлозі (14 люків)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Нарощені борти для перевезення пшениці, ячменю та соняшнику у тенті</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Транспортування фасованої агропродукції в Біг-Бегах (Big-Bags по 1000 кг)</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '12px' }}>Технічна характеристика напіввагона:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <div>• Вантажопідйомність: 69 – 71 тонна</div>
                  <div>• Об'єм кузова: 76 – 88 м³ (зі знімним укриттям)</div>
                  <div>• Колія: 1520 мм (УЗ) та переставляння на 1435 мм (PKP)</div>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenQuote} style={{ width: 'fit-content' }}>
              <span>Отримати графік подачі напіввагонів</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {activeSubTab === 'auto-grain' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
                <Truck size={36} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Автомобільні Зерновози-Самоскиди (Агро-Самосвали)</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Пряме вивезення пшениці з комбайнів та токів до залізничних станцій або порту</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-light)', fontSize: '1rem', marginBottom: '12px' }}>Ключові переваги:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Самоскиди з боковим та заднім розвантаженням (об'єм кузова 45-55 м³)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Ущільнені захисні тентові пологи для запобігання видуванню зерна</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Подача машин безпосередньо в поле або на фермерські склади</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '12px' }}>Характеристики зерновозів:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <div>• Вантажопідйомність: 24 – 26 тонн (в межах вагових норм)</div>
                  <div>• Алюмінієві та сталеві самоскидні напівпричепи</div>
                  <div>• GPS трекінг кожної машини з контролем зважування</div>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenQuote} style={{ width: 'fit-content' }}>
              <span>Замовити авто-зерновози</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {activeSubTab === 'port-elevators' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
                <Anchor size={36} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Портові Зернові Елеватори & Морська Перевалка</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Прийом залізничних вагонів, стафіровка у контейнери та навантаження на судна Panamax/Handysize</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-light)', fontSize: '1rem', marginBottom: '12px' }}>Ключові переваги:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Швидке розвантаження залізничних хоперів на портових станціях (до 1000 т/год)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Стафіровка пшениці у 20' морські контейнери з вкладками Flexi-Bag / Liner-Bag</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Лабораторні сертифікати GAFTA, SGS, сертифікація фітосанітарії та походження</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '12px' }}>Портові хаби:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <div>• Чорноморські термінали: Одеса, Чорноморськ, Южний</div>
                  <div>• Балтійські порти: Гданськ, Гдиня, Свіноуйсьце (PL)</div>
                  <div>• Дунайські порти: Ізмаїл, Рені, Констанца (RO)</div>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenQuote} style={{ width: 'fit-content' }}>
              <span>Замовити перевалку в порту</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
