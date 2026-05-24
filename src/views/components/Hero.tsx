/**
 * SYRESUR S.L. — View Layer
 * Hero: Cinematic hero section with stacked polaroid cards and animated stats.
 */

import React from 'react';

const ArrowIcon: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const HERO_FEATURES = [
  'Madera de ingeniería certificada',
  'Accesorios de baño de alta gama',
  'Material de construcción estructural',
];

const Hero: React.FC = () => (
  <section className="hero" id="inicio">
    <div className="container">
      <div className="hero-grid">

        {/* Left: Content */}
        <div className="hero-content reveal">
          <div className="eyebrow">Estándar de Excelencia</div>
          <h1 className="title-medium">
            Proveedor de Accesorios de cuarto de baño y material de obra.
          </h1>
          <p className="hero-description">
            Conectamos infraestructuras terrestres con el comercio global de madera de ingeniería,
            materiales estructurales de construcción y accesorios de baño de diseño de alta gama.
          </p>

          {/* Feature list */}
          <ul className="hero-features">
            {HERO_FEATURES.map((f) => (
              <li key={f} className="hero-feature-item">
                <span className="hero-feature-icon"><CheckIcon /></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="hero-ctas">
            <a href="#materiales" className="btn-cta">
              <span>Ver Materiales</span>
              <div className="btn-icon-wrapper">
                <ArrowIcon />
              </div>
            </a>
            <a href="#contacto" className="hero-link-secondary">
              Solicitar información
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero-trust-row reveal delay-300">
            <div className="hero-trust-item">
              <span className="hero-trust-num">+20</span>
              <span className="hero-trust-label">Años de experiencia</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-num">500+</span>
              <span className="hero-trust-label">Proyectos completados</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-num">EU</span>
              <span className="hero-trust-label">Certificado europeo</span>
            </div>
          </div>
        </div>

        {/* Right: Stacked Polaroid Cards */}
        <div className="hero-media-wrapper reveal delay-200">
          <div className="bezel-outer hero-main-card">
            <div className="bezel-inner">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80"
                alt="Instalaciones Logísticas Syresur"
                loading="lazy"
              />
            </div>
          </div>

          {/* Floating stat badge */}
          <div className="hero-badge-card">
            <div className="hero-badge-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <div>
              <div className="hero-badge-val">+35%</div>
              <div className="hero-badge-desc">Crecimiento anual</div>
            </div>
          </div>

          <div className="hero-sub-card">
            <img
              src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=300&q=80"
              alt="Detalle de Madera Noble Syresur"
              loading="lazy"
            />
            <div className="hero-sub-card-caption">Madera Natural</div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
