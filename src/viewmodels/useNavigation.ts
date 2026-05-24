/**
 * SYRESUR S.L. — ViewModel Layer
 * useNavigation: Manages floating navbar state, active section highlighting,
 * and mobile menu open/close logic.
 */

import { useState, useEffect, useCallback } from 'react';

export interface NavigationViewModel {
  isMobileMenuOpen: boolean;
  activeSection: string;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const NAV_SECTIONS = ['inicio', 'ficha-tecnica', 'materiales', 'logistica', 'contacto'];

export function useNavigation(): NavigationViewModel {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Scroll-spy: detect which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when window is resized beyond mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobileMenuOpen, activeSection, toggleMobileMenu, closeMobileMenu };
}
