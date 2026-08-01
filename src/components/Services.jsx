import React from 'react';
import { Truck, Anchor, Train, Box, ShieldCheck, CheckCircle, ArrowRight, Layers, Warehouse, Clock } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const servicesList = [
    {
      id: 'truck',
      icon: <Truck size={32} />,
      title: 'Автомобільні перевезення (Фури)',
      description: 'Швидка та гнучка доставка вантажів будь-якої складності власним та партнерським автопарком євростандарту (Euro 6).',
      features: [
        'Тентовані причепи (86 – 120 м³) для будь-яких палетних вантажів',
        'Рефрижераторні фури з контрольним термописцем (-20°C...+25°C)',
        'Контейнероплато для перевезення 20’ та 40’ контейнерів з портів',
        'Доставка комплектних вантажів (FTL) та збірних партій (LTL)'
      ]
    },
    {
      id: 'sea',
      icon: <Anchor size={32} />,
      title: 'Морський фрахт (Карго)',
      description: 'Економічні контейнерні та суднорічні перевезення по всьому світу. Прямі агенти у портах Одеса, Гданськ, Роттердам, Нінбо.',
      features: [
        'Повна завантажка контейнерів FCL (20’GP, 40’HC, Flat Rack)',
        'Збірні морські вантажі LTL — оплата лише за фактичний об’єм',
        'Портове експедирування, сюрвей та перевалка вантажів',
        'Прямі контракти з лініями Maersk, MSC, COSCO, CMA CGM'
      ]
    },
    {
      id: 'rail',
      icon: <Train size={32} />,
      title: 'Залізничні перевезення (Поїзди)',
      description: 'Надійне транспортування великих обсягів товарів з фіксованим розкладом. Прямі контейнерні поїзди з Китаю до України та ЄС.',
      features: [
        'Контейнерні залізничні експреси (Китай — ЄС за 14-18 днів)',
        'Криті вагони, хопери для зернових та цистерни для наливів',
        'Власна залізнична гілка та критичний перевантажувальний термінал',
        'Незалежність від погодних умов та черг на автокордонах'
      ]
    },
    {
      id: 'customs',
      icon: <Warehouse size={32} />,
      title: 'Складська логістика & Митниця',
      description: 'Комплексний супровід від митного розмитнення до відповідального зберігання на сучасних складах класу "А".',
      features: [
        'Швидке митне оформлення за 2-4 години (акредитовані брокери)',
        'Митний склад та склад тимчасового зберігання (СТЗ)',
        'Крос-докінг, консолідація, маркування та пакування вантажів',
        'Страхування від провідних міжнародних страховиків (All Risks)'
      ]
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-subtitle">Основні напрямки</span>
          <h2 className="section-title">Мультимодальний комплекс послуг GalCargo</h2>
          <p className="section-desc">
            Ми комбінуємо переваги автомобільного, морського та залізничного транспорту для створення оптимального маршруту під ваші задачі.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((s) => (
            <div key={s.id} className="service-card">
              <div className="service-icon-box">
                {s.icon}
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-description">{s.description}</p>
              
              <ul className="service-features-list">
                {s.features.map((feat, idx) => (
                  <li key={idx} className="service-feature-item">
                    <CheckCircle size={16} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="btn-secondary" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
                onClick={onOpenQuote}
              >
                <span>Детальніше про послугу</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
