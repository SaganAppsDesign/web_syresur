/**
 * SYRESUR S.L. — ViewModel Layer
 * useContact: Manages the main contact form state and submission lifecycle.
 * Responsibility: Field state, validation feedback, and simulated async send.
 */

import { useState, useCallback } from 'react';

export type ContactFormStatus = 'idle' | 'submitting' | 'success';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactViewModel {
  formData: ContactFormData;
  errors: { global?: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  formStatus: ContactFormStatus;
}

export function useContact(): ContactViewModel {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ global?: string }>({});
  const [formStatus, setFormStatus] = useState<ContactFormStatus>('idle');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFormStatus('submitting');
      setErrors({});

      // Simulated async submission
      setTimeout(() => {
        // Simple validation example
        if (!formData.name || !formData.email) {
          setErrors({ global: 'Nombre y correo son obligatorios.' });
          setFormStatus('idle');
          return;
        }
        setFormStatus('success');
        // Reset form after success
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      }, 1500);
    },
    [formData]
  );

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting: formStatus === 'submitting',
    formStatus,
  };
}
