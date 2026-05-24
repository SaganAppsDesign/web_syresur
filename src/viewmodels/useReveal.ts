/**
 * SYRESUR S.L. — ViewModel Layer
 * useReveal: Scroll-reveal animation observer hook.
 * Responsibility: Attaches IntersectionObserver to a container ref,
 * adding the 'revealed' class to children with the 'reveal' class.
 */

import { useEffect, useRef } from 'react';

export function useReveal() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
