/**
 * SYRESUR S.L. — View Layer
 * Catalog: Material portfolio grid with animated tab navigation.
 */

import React, { useEffect, useRef, useState } from 'react';
import type { CatalogViewModel } from '../../viewmodels/useCatalog';
import { MATERIALS } from '../../models/material';
import type { Material, MaterialCategory } from '../../models/material';

interface CatalogProps {
  vm: CatalogViewModel;
  onMaterialClick: (material: Material) => void;
}

/* ─── Material Card ───────────────────────────────────────────────────────── */

interface MaterialCardProps {
  material: Material;
  onClick: (material: Material) => void;
  delay?: string;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material, onClick, delay }) => (
  <div
    className={`material-card-outer reveal${delay ? ` ${delay}` : ''}`}
    onClick={() => onClick(material)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick(material)}
    aria-label={`Ver detalles de ${material.name}`}
  >
    <div className="material-card-inner">
      <div className="material-img-frame">
        <div
          className="material-vector"
          style={{ backgroundImage: `url('${material.imageUrl}')` }}
        />
      </div>
      <div className="material-info">
        <div>
          <h3>{material.name}</h3>
          <p>{material.shortDescription}</p>
        </div>
        <div className="material-meta">
          <span className="material-spec-label">{material.specLabel}</span>
          <span className="material-spec-val">{material.specValue}</span>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Catalog Component ───────────────────────────────────────────────────── */

const CATEGORY_TABS: { label: string; value: MaterialCategory }[] = [
  { label: 'Madera', value: 'madera' },
  { label: 'Construcción', value: 'construccion' },
  { label: 'Accesorios de Baño', value: 'bano' },
];

const DELAYS = ['', 'delay-100', 'delay-200', 'delay-300'];

const Catalog: React.FC<CatalogProps> = ({ vm, onMaterialClick }) => {
  const { activeCategory, setCategory } = vm;
  const [isVisible, setIsVisible] = useState(true);
  const prevCategory = useRef<MaterialCategory>(activeCategory);

  const filteredMaterials = MATERIALS.filter((m) => m.category === activeCategory);

  // Fade-out → swap → fade-in on category change
  useEffect(() => {
    if (prevCategory.current !== activeCategory) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        prevCategory.current = activeCategory;
        setIsVisible(true);
      }, 280);
      return () => clearTimeout(timer);
    }
  }, [activeCategory]);

  return (
    <section className="section" id="materiales">
      <div className="container">

        <div className="section-header reveal">
          <div className="section-header-left">
            <div className="eyebrow">Exposición de Materiales</div>
            <h2 className="title-medium">Portafolio de Comercio</h2>
            <p className="section-header-desc">
              Intermediamos en la distribución de madera noble de ingeniería, materiales de
              construcción y una selecta gama de accesorios de baño exclusivos para proyectos de
              arquitectura contemporánea.
            </p>
          </div>

          <div className="section-tabs">
            {CATEGORY_TABS.map(({ label, value }) => (
              <button
                key={value}
                className={`tab-btn${activeCategory === value ? ' active' : ''}`}
                onClick={() => setCategory(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid with CSS fade transition */}
        <div
          className="materials-grid"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          {filteredMaterials.map((material, i) => (
            <MaterialCard
              key={material.id}
              material={material}
              onClick={onMaterialClick}
              delay={DELAYS[i] ?? ''}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Catalog;
