/**
 * SYRESUR S.L. — ViewModel Layer
 * useLogistics: Manages the logistics calculator and interactive SVG map.
 * Responsibility: Tracks selected destination, computes SVG Bézier route path,
 * and handles animated value transitions.
 */

import { useState, useCallback, useEffect } from 'react';
import { DESTINATIONS, HUB } from '../models/destination';
import type { Destination } from '../models/destination';

export interface LogisticsViewModel {
  selectedDestination: Destination;
  selectDestination: (id: string) => void;
  routePath: string;
  isTransitioning: boolean;
}

function computeBezierPath(dest: Destination): string {
  const startX = HUB.left;
  const startY = HUB.top;
  const endX = dest.left;
  const endY = dest.top;
  const cpX = (startX + endX) / 2;
  const cpY = (startY + endY) / 2 - 5;
  return `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
}

export function useLogistics(): LogisticsViewModel {
  const initialDestination = DESTINATIONS[0];

  const [selectedDestination, setSelectedDestination] = useState<Destination>(initialDestination);
  const [routePath, setRoutePath] = useState<string>(computeBezierPath(initialDestination));
  const [isTransitioning, setIsTransitioning] = useState(false);

  const selectDestination = useCallback((id: string) => {
    const dest = DESTINATIONS.find((d) => d.id === id);
    if (!dest) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedDestination(dest);
      setRoutePath(computeBezierPath(dest));
      setIsTransitioning(false);
    }, 200);
  }, []);

  // Initialize route on mount
  useEffect(() => {
    setRoutePath(computeBezierPath(initialDestination));
  }, [initialDestination]);

  return { selectedDestination, selectDestination, routePath, isTransitioning };
}
