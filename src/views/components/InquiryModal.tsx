/**
 * SYRESUR S.L. — View Layer
 * InquiryModal: Premium modal overlay using the project CSS design system.
 */

import React from 'react';
import type { InquiryViewModel } from '../../viewmodels/useInquiry';

interface InquiryModalProps {
  vm: InquiryViewModel;
}

const CloseIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const InquiryModal: React.FC<InquiryModalProps> = ({ vm }) => {
  const { activeMaterial, isOpen, formStatus, closeModal, submitInquiry } = vm;

  return (
    <div
      className={`modal-overlay${isOpen && activeMaterial ? ' active' : ''}`}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Solicitud de cotización"
    >
      <div className="modal-container bezel-outer" onClick={(e) => e.stopPropagation()}>
        <div className="bezel-inner">
          <button className="modal-close-btn" onClick={closeModal} aria-label="Cerrar modal">
            <CloseIcon />
          </button>

          {activeMaterial && (
            <div className="modal-content-grid">
              {/* Left: Product info */}
              <div className="modal-left">
                <img
                  src={activeMaterial.imageUrl}
                  alt={activeMaterial.name}
                  className="modal-img"
                />
                <h2 className="modal-title">{activeMaterial.name}</h2>
                <p className="modal-desc">{activeMaterial.fullDescription}</p>
              </div>

              {/* Right: Form */}
              <div className="modal-right">
                <div>
                  <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Solicitar Cotización</div>

                  <form onSubmit={submitInquiry} noValidate>
                    <div className="input-bezel-outer">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        required
                        className="input-bezel-inner"
                      />
                    </div>
                    <div className="input-bezel-outer">
                      <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        required
                        className="input-bezel-inner"
                      />
                    </div>
                    <div className="input-bezel-outer">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Teléfono (opcional)"
                        className="input-bezel-inner"
                      />
                    </div>
                    <div className="input-bezel-outer">
                      <textarea
                        name="message"
                        placeholder="Detalles del pedido o consulta…"
                        rows={4}
                        className="input-bezel-inner"
                        style={{ resize: 'none', width: '100%' }}
                      />
                    </div>

                    {formStatus === 'success' && (
                      <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 600 }}>
                        ✓ ¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="btn-cta"
                      style={{ width: '100%', justifyContent: 'center', opacity: formStatus === 'submitting' ? 0.7 : 1 }}
                    >
                      <span>{formStatus === 'submitting' ? 'Enviando…' : 'Enviar Solicitud'}</span>
                      <div className="btn-icon-wrapper">
                        <SendIcon />
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;
