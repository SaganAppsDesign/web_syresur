/**
 * SYRESUR S.L. — View Layer
 * Logistics: Interactive SVG map + logistics calculator (Camas Hub).
 */

import React from 'react';
import { DESTINATIONS } from '../../models/destination';
import type { LogisticsViewModel } from '../../viewmodels/useLogistics';

interface LogisticsProps {
  vm: LogisticsViewModel;
}

/* ─── Map Node ────────────────────────────────────────────────────────────── */

interface MapNodeProps {
  id: string;
  top: number;
  left: number;
  label: string;
  isActive: boolean;
  isHub?: boolean;
  onClick?: () => void;
}

const MapNode: React.FC<MapNodeProps> = ({ id, top, left, label, isActive, isHub = false, onClick }) => {
  const nodeStyle: React.CSSProperties = {
    top: `${top}%`,
    left: `${left}%`,
    ...(isActive && !isHub
      ? { backgroundColor: 'var(--accent)', boxShadow: '0 0 15px var(--accent)', transform: 'scale(1.3)' }
      : {}),
  };

  return (
    <>
      <div
        className={`map-node${isHub ? ' hub' : ` node-${id}`}`}
        data-city={id}
        style={nodeStyle}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
        aria-label={onClick ? `Seleccionar destino: ${label}` : undefined}
      />
      <div
        className={`map-label${isHub ? ' hub-label' : ''}`}
        style={{ top: `${top}%`, left: `${left}%` }}
      >
        {label}
      </div>
    </>
  );
};

/* ─── Logistics Component ─────────────────────────────────────────────────── */

const Logistics: React.FC<LogisticsProps> = ({ vm }) => {
  const { selectedDestination, selectDestination, routePath, isTransitioning } = vm;

  return (
    <section className="section" id="logistica">
      <div className="container">

        <div className="section-header reveal">
          <div className="section-header-left">
            <div className="eyebrow">Calculadora Logística</div>
            <h2 className="title-medium">Sevilla Hub Camas</h2>
            <p className="section-header-desc">
              Introduce el punto de destino para calcular el tiempo estimado de tránsito y la
              viabilidad de entrega terrestre directa desde nuestro centro en Camas.
            </p>
          </div>
        </div>

        <div className="bezel-outer reveal">
          <div className="bezel-inner" style={{ padding: '3rem' }}>
            <div className="logistics-calculator">

              {/* Interactive SVG Map */}
              <div className="map-simulation">
                <div className="map-canvas">
                  {/* Hub Node */}
                  <MapNode id="camas" top={60} left={45} label="Syresur Hub (Camas)" isActive={false} isHub />

                  {/* Destination Nodes */}
                  {DESTINATIONS.map((dest) => (
                    <MapNode
                      key={dest.id}
                      id={dest.id}
                      top={dest.top}
                      left={dest.left}
                      label={dest.id === 'seville' ? 'Sevilla' : dest.id === 'huelva' ? 'Huelva Puerto' : dest.id === 'cadiz' ? 'Cádiz Z.F.' : 'Madrid'}
                      isActive={selectedDestination.id === dest.id}
                      onClick={() => selectDestination(dest.id)}
                    />
                  ))}

                  {/* Animated Route Path */}
                  <div className="map-path-line">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path
                        d={routePath}
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        style={{ animation: 'drawRoute 1s forwards ease-out' }}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Calculator Controls */}
              <div className="calc-inputs">
                <div className="calc-group">
                  <label htmlFor="calc-origin">Centro Logístico (Origen)</label>
                  <select className="calc-select" id="calc-origin" disabled>
                    <option>Syresur Hub — Camas (Sevilla), España</option>
                  </select>
                </div>

                <div className="calc-group">
                  <label htmlFor="calc-dest">Destino de la Carga</label>
                  <select
                    className="calc-select"
                    id="calc-dest"
                    value={selectedDestination.id}
                    onChange={(e) => selectDestination(e.target.value)}
                  >
                    {DESTINATIONS.map((dest) => (
                      <option key={dest.id} value={dest.id}>
                        {dest.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="calc-result-box">
                  <div>
                    <div className="calc-result-label">Tiempo Estimado</div>
                    <div
                      className="calc-result-value"
                      id="transit-value"
                      style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.2s ease' }}
                    >
                      {selectedDestination.time}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="calc-result-label">Coste Estimado</div>
                    <div
                      className="calc-result-value"
                      id="price-value"
                      style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.2s ease' }}
                    >
                      {selectedDestination.price}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5, textAlign: 'center' }}>
                  * Cifras estimadas de enlace logístico local. Sujeto a tarifas de peajes y combustible.
                  Para contratos a largo plazo, contacte con nuestra oficina.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Inject drawRoute keyframe dynamically */}
      <style>{`
        @keyframes drawRoute {
          from { stroke-dashoffset: 200; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default Logistics;
