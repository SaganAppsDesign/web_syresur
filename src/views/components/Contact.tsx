/**
 * SYRESUR S.L. — View Layer
 * Contact: Premium contact section using the project CSS design system.
 */

import React from 'react';
import { useContact } from '../../viewmodels/useContact';

const PhoneIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const Contact: React.FC = () => {
  const { formData, errors, handleChange, handleSubmit, isSubmitting, formStatus } = useContact();

  return (
    <section className="section" id="contacto">
      <div className="container">

        <div className="section-header reveal">
          <div className="section-header-left">
            <div className="eyebrow">Contacto Directo</div>
            <h2 className="title-medium">¿Hablamos?</h2>
            <p className="section-header-desc">
              Nuestro equipo de especialistas está disponible para asesorarte en cada etapa de tu proyecto,
              desde la selección de materiales hasta la logística de entrega.
            </p>
          </div>
        </div>

        <div className="contact-grid">

          {/* Left: Contact info */}
          <div className="contact-info reveal">
            <div className="contact-item">
              <div className="contact-icon"><PhoneIcon /></div>
              <div className="contact-details">
                <h4>Teléfono</h4>
                <p><a href="tel:+34600000000">+34 600 000 000</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><MailIcon /></div>
              <div className="contact-details">
                <h4>Correo electrónico</h4>
                <p><a href="mailto:info@syresur.es">info@syresur.es</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><MapPinIcon /></div>
              <div className="contact-details">
                <h4>Ubicación</h4>
                <p>Polígono Industrial Camas, Sevilla</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact-map-frame bezel-outer reveal delay-200">
              <div className="bezel-inner" style={{ padding: '1.5rem', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                  <MapPinIcon />
                  <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', fontWeight: 500 }}>Camas, Sevilla — ES</p>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Polígono Industrial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bezel-outer reveal delay-100">
            <div className="bezel-inner" style={{ padding: '2.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Formulario de Contacto</div>

              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    Mensaje enviado
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Nos pondremos en contacto contigo pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="contact-form-row">
                    <div className="input-bezel-outer">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-bezel-inner"
                      />
                    </div>
                    <div className="input-bezel-outer">
                      <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-bezel-inner"
                      />
                    </div>
                  </div>

                  <div className="input-bezel-outer">
                    <textarea
                      name="message"
                      placeholder="Cuéntanos sobre tu proyecto…"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-bezel-inner"
                      style={{ resize: 'none', width: '100%' }}
                    />
                  </div>

                  {errors.global && (
                    <p style={{ color: '#DC2626', fontSize: '0.82rem', marginBottom: '1rem' }}>
                      {errors.global}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta"
                    style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    <span>{isSubmitting ? 'Enviando…' : 'Enviar Mensaje'}</span>
                    <div className="btn-icon-wrapper"><SendIcon /></div>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
