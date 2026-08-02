import React, { useState } from 'react';
import { Truck, Anchor, Train, ShieldCheck, FileText, ArrowRight, CheckCircle2, Package, Warehouse } from 'lucide-react';

export default function ServicesPage({ t, onOpenQuote }) {
  const [activeSubTab, setActiveSubTab] = useState('truck');

  return (
    <div className="tab-page-container" style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div className="section-header">
        <span className="section-subtitle">Логістичні рішення B2B</span>
        <h2 className="section-title">Мультимодальний комплекс послуг "Гал Карго"</h2>
        <p className="section-desc">
          Оберіть вид транспорту або комплексне експедирування для розрахунку оптимального маршруту вашої поставки.
        </p>
      </div>

      {/* Services Sub-Tabs */}
      <div className="modes-tabs-header" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '30px' }}>
        <button
          className={`mode-tab-btn ${activeSubTab === 'truck' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('truck')}
        >
          <Truck size={20} />
          <span>Авто перевезення</span>
        </button>

        <button
          className={`mode-tab-btn ${activeSubTab === 'sea' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('sea')}
        >
          <Anchor size={20} />
          <span>Морський фрахт</span>
        </button>

        <button
          className={`mode-tab-btn ${activeSubTab === 'rail' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('rail')}
        >
          <Train size={20} />
          <span>З/Д поїзди</span>
        </button>

        <button
          className={`mode-tab-btn ${activeSubTab === 'customs' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('customs')}
        >
          <Warehouse size={20} />
          <span>Склади & Митниця</span>
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
        {activeSubTab === 'truck' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
                <Truck size={36} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Автомобільні вантажні перевезення (FTL & LTL)</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Пряма доставка фурами Euro-6 по Україні, ЄС, СНД та Балканах з GPS-моніторингом</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-light)', fontSize: '1rem', marginBottom: '12px' }}>Ключові переваги:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>FTL (повна завантаження фури) та LTL (збірні дрібні вантажі від 100 кг)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Рефрижератори з термописцями (-25°C до +25°C) для фарми та продуктів</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Негабаритні трали для важкої сільгосптехніки та обладнання</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>CMR страхування відповідальності експедитора до €500,000</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '12px' }}>Специфікація автопарку:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <div>• Стандартний тент: 86 м³, до 22 тонн (33 європалети)</div>
                  <div>• Мега-тент (Jumbo): 100 - 120 м³, висота 3.0 м</div>
                  <div>• Склади консолідації: Львів, Київ, Холм (PL), Перемишль</div>
                  <div>• Середній транзитний час: 2 - 4 дні (Україна — ЄС)</div>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenQuote} style={{ width: 'fit-content' }}>
              <span>Замовити розрахунок автоперевезення</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {activeSubTab === 'sea' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
                <Anchor size={36} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Морські контейнерні перевезення (FCL & LCL)</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Глобальні морські фрахтові лінії через порти Гданськ, Гамбург, Роттердам та Чорне Море</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-light)', fontSize: '1rem', marginBottom: '12px' }}>Ключові переваги:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Прямі сервісні контракти з Maersk, MSC, CMA CGM, COSCO, ONE</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>FCL (повний контейнер) та LCL (збірний вантаж у контейнері) з Азії та США</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Власне внутрипортове експедирування та митне очищення</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '12px' }}>Типи контейнерів:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <div>• 20' Dry Van: 33.2 м³, payload до 28 тонн</div>
                  <div>• 40' High Cube: 76.4 м³, payload до 28.5 тонн</div>
                  <div>• 40' Reefer: Температурний контейнер з холодильною установкою</div>
                  <div>• Транзит Китай ➔ ЄС: 25 - 35 днів</div>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenQuote} style={{ width: 'fit-content' }}>
              <span>Замовити розрахунок морського фрахту</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {activeSubTab === 'rail' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
                <Train size={36} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Залізничні контейнерні поїзди (Китай — ЄС — Україна)</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Оптимальний баланс між швидкістю авіа та вартістю морського фрахту</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-light)', fontSize: '1rem', marginBottom: '12px' }}>Ключові переваги:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Фіксований тижневий розклад відправки з Нінбо, Шанхаю, Сіаня, Ченду</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Термін транзиту всього 14 - 18 днів до сухих портів у Холмі та Ланьцуті</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Економія до 40% коштів у порівнянні з терміновою авіадоставкою</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '12px' }}>Характеристики сервісу:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <div>• Власні залізничні платформи та криті вагони</div>
                  <div>• Перевантажувальний термінал: колія 1520 мм ➔ 1435 мм</div>
                  <div>• Моніторинг дислокації вагона на всій дистанції</div>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenQuote} style={{ width: 'fit-content' }}>
              <span>Замовити З/Д перевезення</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {activeSubTab === 'customs' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--badge-bg)', color: 'var(--accent-light)' }}>
                <Warehouse size={36} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Митне оформлення & Складська логістика</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Власна брокерська служба та консолідаційні митні склади класу А</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-light)', fontSize: '1rem', marginBottom: '12px' }}>Ключові переваги:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Оформлення декларацій T1, EX1, EUR.1, Carnet TIR у найкоротші терміни</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Акцизні та митно-ліцензійні склади у Львові, Києві, Холмі (PL)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                    <span>Повний комплекс стикування: крос-докінг, палетування, маркування, стрейчування</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '12px' }}>Митний сервіс:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <div>• Цілодобові митні комплекси з охороною</div>
                  <div>• Сертифіковані митні брокери із досвідом від 10 років</div>
                  <div>• Попереднє декларування вантажів перед перетином кордону</div>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={onOpenQuote} style={{ width: 'fit-content' }}>
              <span>Отримати консультацію брокера</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
