/**
 * SYRESUR S.L. — ViewModel Layer
 * useBento: Manages the Ficha Técnica bento-grid filter state.
 * Responsibility: Controls which filter tab is active and computes
 * the visibility state for each bento card category.
 */

import { useState, useCallback } from 'react';

export type BentoFilter = 'all' | 'logistica' | 'madera';

export interface BentoViewModel {
  activeFilter: BentoFilter;
  setFilter: (filter: BentoFilter) => void;
  isCardVisible: (category: string) => boolean;
}

export function useBento(): BentoViewModel {
  const [activeFilter, setActiveFilter] = useState<BentoFilter>('all');

  const setFilter = useCallback((filter: BentoFilter) => {
    setActiveFilter(filter);
  }, []);

  const isCardVisible = useCallback(
    (category: string): boolean => {
      if (activeFilter === 'all') return true;
      return category === activeFilter;
    },
    [activeFilter]
  );

  return { activeFilter, setFilter, isCardVisible };
}
