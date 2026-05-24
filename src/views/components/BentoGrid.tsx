/**
 * SYRESUR S.L. — View Layer
 * BentoGrid: Interactive technical data sheet with filterable bento cards.
 */

import React from 'react';
import type { BentoViewModel, BentoFilter } from '../../viewmodels/useBento';

interface BentoGridProps {
  vm: BentoViewModel;
}

/* ─── Icon Components ─────────────────────────────────────────────────────── */

const TruckIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const LayersIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const MapPinIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ShieldIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UsersIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ─── Card Data ───────────────────────────────────────────────────────────── */

interface BentoCardData {
  id: string;
  category: 'logistica' | 'madera';
  colClass: string;
  rowClass?: string;
  icon: React.ReactNode;
  tag: string;
  metric?: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const BENTO_CARDS: BentoCardData[] = [
  {
    id: 'transport',
    category: 'logistica',
    colClass: 'col-8',
    rowClass: 'row-2',
    icon: <TruckIcon />,
    tag: 'Transporte',
    metric: (
      <div className="bento-metric-sub">
        <span className="bento-metric">14K+</span>
        <p style={{ marginTop: '0.5rem', fontSize: '1rem', fontWeight: 500 }}>Toneladas anuales coordinadas</p>
      </div>
    ),
    title: 'Red de Transporte Terrestre',
    description: 'Gestionamos la logística de enlace para el transporte de materias primas pesadas, conectando puertos andaluces con centros de transformación de madera y polígonos constructivos.',
  },
  {
    id: 'certified',
    category: 'madera',
    colClass: '',
    icon: <LayersIcon />,
    tag: 'Intermediación',
    metric: <div className="bento-metric">98%</div>,
    title: 'Madera Certificada',
    description: 'Solo intermediamos con aserraderos que cuentan con certificaciones forestales sostenibles FSC y PEFC.',
    delay: 'delay-100',
  },
  {
    id: 'location',
    category: 'logistica',
    colClass: '',
    icon: <MapPinIcon />,
    tag: 'Sede Central',
    title: 'P.I. Los Girasoles',
    description: 'Nuestra base en Camas, Sevilla, sirve de punto neurálgico para la coordinación logística y el enlace comercial en el sur de España.',
    delay: 'delay-200',
  },
  {
    id: 'quality',
    category: 'madera',
    colClass: '',
    icon: <ShieldIcon />,
    tag: 'Garantía',
    metric: <div className="bento-metric">Calidad</div>,
    title: 'Normativa Europea',
    description: 'Todos los materiales estructurales cumplen rigurosamente con el marcado CE y el Código Técnico de la Edificación (CTE).',
    delay: 'delay-100',
  },
  {
    id: 'brokerage',
    category: 'madera',
    colClass: 'col-8',
    icon: <UsersIcon />,
    tag: 'Suministros',
    title: 'Intermediación sin Fricciones',
    description: 'Nuestra experiencia como intermediarios comerciales asegura un flujo constante entre los grandes productores de madera y materiales constructivos con las constructoras locales, optimizando plazos, almacenaje y costes arancelarios.',
    delay: 'delay-200',
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

const BentoGrid: React.FC<BentoGridProps> = ({ vm }) => {
  const { activeFilter, setFilter, isCardVisible } = vm;

  const filters: { label: string; value: BentoFilter }[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Logística', value: 'logistica' },
    { label: 'Materiales', value: 'madera' },
  ];

  return (
    <section className="section" id="ficha-tecnica">
      <div className="container">

        <div className="section-header reveal">
          <div className="section-header-left">
            <div className="eyebrow">Ficha Técnica</div>
            <h2 className="title-medium">Dimensión & Operaciones</h2>
            <p className="section-header-desc">
              Razón social: <strong>Syresur S.L.</strong> | Empresa líder en materiales de construcción y accesorios de cuarto de baño
            </p>
          </div>

          <div className="section-tabs">
            {filters.map(({ label, value }) => (
              <button
                key={value}
                className={`tab-btn${activeFilter === value ? ' active' : ''}`}
                data-filter={value}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="bento-grid">
          {BENTO_CARDS.map((card) => {
            const visible = isCardVisible(card.category);
            return (
              <div
                key={card.id}
                className={`bezel-outer bento-card${card.colClass ? ` ${card.colClass}` : ''}${card.rowClass ? ` ${card.rowClass}` : ''} reveal${card.delay ? ` ${card.delay}` : ''}`}
                data-category={card.category}
                style={{
                  opacity: visible ? undefined : 0,
                  transform: visible ? undefined : 'scale(0.95)',
                  display: visible ? undefined : 'none',
                  transition: 'opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <div className="bezel-inner bento-inner">
                  <div className="bento-top">
                    <div className="bento-icon">{card.icon}</div>
                    <span className="bento-tag">{card.tag}</span>
                  </div>
                  {card.metric}
                  <div className="bento-bottom">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
