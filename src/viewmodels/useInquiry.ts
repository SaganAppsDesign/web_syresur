/**
 * SYRESUR S.L. — ViewModel Layer
 * useInquiry: Controls the material inquiry modal state.
 * Responsibility: Open/close modal, populate material context,
 * and manage the inquiry form submission lifecycle.
 */

import { useState, useCallback } from 'react';
import type { Material } from '../models/material';

export type InquiryFormStatus = 'idle' | 'submitting' | 'success';

export interface InquiryViewModel {
  activeMaterial: Material | null;
  isOpen: boolean;
  formStatus: InquiryFormStatus;
  openModal: (material: Material) => void;
  closeModal: () => void;
  submitInquiry: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function useInquiry(): InquiryViewModel {
  const [activeMaterial, setActiveMaterial] = useState<Material | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<InquiryFormStatus>('idle');

  const openModal = useCallback((material: Material) => {
    setActiveMaterial(material);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
    // Reset form status after transition
    setTimeout(() => setFormStatus('idle'), 400);
  }, []);

  const submitInquiry = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFormStatus('submitting');

      // Simulated async submission
      setTimeout(() => {
        setFormStatus('success');
        setTimeout(() => {
          closeModal();
        }, 1500);
      }, 1500);
    },
    [closeModal]
  );

  return { activeMaterial, isOpen, formStatus, openModal, closeModal, submitInquiry };
}
