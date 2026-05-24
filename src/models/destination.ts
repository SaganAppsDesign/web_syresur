/**
 * SYRESUR S.L. — Model Layer
 * Destination: Typed data entities and static logistics repository.
 * Responsibility: Pure data definitions, zero UI logic.
 */

export interface Destination {
  id: string;
  label: string;
  time: string;
  price: string;
  /** Percentage positions for the SVG map canvas (0–100) */
  top: number;
  left: number;
}

// ─── Static Logistics Repository ─────────────────────────────────────────────

/** Syresur Hub anchor point on the map canvas (Camas, Sevilla) */
export const HUB: Pick<Destination, 'top' | 'left'> = { top: 60, left: 45 };

export const DESTINATIONS: Destination[] = [
  {
    id: 'seville',
    label: 'Sevilla Centro (Obras Locales)',
    time: '15 mins',
    price: '45€',
    top: 58,
    left: 60,
  },
  {
    id: 'huelva',
    label: 'Huelva Puerto (Enlace Exportación)',
    time: '1h 10m',
    price: '180€',
    top: 55,
    left: 20,
  },
  {
    id: 'cadiz',
    label: 'Cádiz Zona Franca (Enlace Arancelario)',
    time: '1h 25m',
    price: '240€',
    top: 85,
    left: 35,
  },
  {
    id: 'madrid',
    label: 'Madrid Hub Central (Distribución Nacional)',
    time: '5h 30m',
    price: '750€',
    top: 20,
    left: 50,
  },
];
