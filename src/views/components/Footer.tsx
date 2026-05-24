/**
 * SYRESUR S.L. — View Layer
 * Footer: Premium footer using the project CSS design system.
 */

import React from 'react';

const LinkedInIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-.028-3.157-1.923-3.157-1.925 0-2.221 1.503-2.221 3.054v5.603h-3v-10h2.881v1.367h.041c.401-.761 1.378-1.562 2.836-1.562 3.032 0 3.593 1.996 3.593 4.588v5.607z" />
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.584.072-2.997.352-4.094 1.449-1.097 1.097-1.376 2.51-1.449 4.094-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.072 1.584.352 2.997 1.449 4.094 1.097 1.097 2.51 1.376 4.094 1.449 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.584-.072 2.997-.352 4.094-1.449 1.097-1.097 1.376-2.51 1.449-4.094.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.072-1.584-.352-2.997-1.449-4.094-1.097-1.097-2.51-1.376-4.094-1.449-1.28-.058-1.688-.07-4.947-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
  </svg>
);

const FOOTER_LINKS = [
  { href: '#', label: 'Política de Privacidad' },
  { href: '#', label: 'Términos de Uso' },
  { href: '#', label: 'Aviso Legal' },
];

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        {/* Brand column */}
        <div className="footer-brand">
          <a href="#inicio" className="nav-logo" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            <div className="logo-symbol">S</div>
            <span>Syresur</span>
          </a>
          <p className="footer-tagline">
            Proveedor especializado en madera de ingeniería,<br />
            materiales de construcción y accesorios de baño.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-icon"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-icon"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Nav columns */}
        <div className="footer-nav-cols">
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Empresa</h4>
            <ul className="footer-col-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#ficha-tecnica">Ficha Técnica</a></li>
              <li><a href="#materiales">Catálogo</a></li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Servicios</h4>
            <ul className="footer-col-links">
              <li><a href="#logistica">Logística</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#">Solicitar Cotización</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Syresur S.L. — Todos los derechos reservados.
        </p>
        <ul className="footer-links">
          {FOOTER_LINKS.map(({ href, label }) => (
            <li key={label}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
