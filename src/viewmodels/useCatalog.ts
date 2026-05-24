/**
 * SYRESUR S.L. — ViewModel Layer
 * useCatalog: Controls material catalog tab navigation and grid transitions.
 * Responsibility: Manages active category tab and animated grid visibility.
 */

import { useState, useCallback } from 'react';
import type { MaterialCategory } from '../models/material';

export interface CatalogViewModel {
  activeCategory: MaterialCategory;
  setCategory: (category: MaterialCategory) => void;
}

export function useCatalog(): CatalogViewModel {
  const [activeCategory, setActiveCategory] = useState<MaterialCategory>('madera');

  const setCategory = useCallback((category: MaterialCategory) => {
    setActiveCategory(category);
  }, []);

  return { activeCategory, setCategory };
}
