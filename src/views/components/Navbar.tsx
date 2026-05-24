/**
 * SYRESUR S.L. — View Layer
 * Navbar: Floating island navigation bar with mobile drawer.
 * Self-contained: manages its own mobile menu state.
 */

import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#ficha-tecnica', label: 'Ficha Técnica' },
  { href: '#materiales', label: 'Catálogo' },
  { href: '#logistica', label: 'Logística' },

];

const ArrowIcon: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll-spy: track the active section
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const line0Style: React.CSSProperties = isMobileMenuOpen
    ? { transform: 'translateY(6px) rotate(45deg)' } : {};
  const line1Style: React.CSSProperties = isMobileMenuOpen ? { opacity: 0 } : {};
  const line2Style: React.CSSProperties = isMobileMenuOpen
    ? { transform: 'translateY(-6px) rotate(-45deg)' } : {};

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" id="main-nav">
        {/* Logo */}
        <a href="#inicio" className="nav-logo" onClick={closeMobileMenu}>
          <div className="logo-symbol">S</div>
          <span>Syresur</span>
        </a>

        {/* Nav Links */}
        <ul className={`nav-links${isMobileMenuOpen ? ' active' : ''}`} id="nav-links">
          {NAV_LINKS.map(({ href, label }) => {
            const sectionId = href.replace('#', '');
            return (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === sectionId ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="mobile-nav-toggle"
          id="mobile-toggle"
          aria-label="Abrir menú de navegación"
          onClick={toggleMobileMenu}
        >
          <span style={line0Style} />
          <span style={line1Style} />
          <span style={line2Style} />
        </button>

        {/* CTA Button */}
        <a href="#contacto" className="btn-cta" onClick={closeMobileMenu}>
          <span>Contacto</span>
          <div className="btn-icon-wrapper">
            <ArrowIcon />
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
