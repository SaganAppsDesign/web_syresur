import React, { useEffect } from 'react';
import Navbar from './views/components/Navbar';
import Hero from './views/components/Hero';
import BentoGrid from './views/components/BentoGrid';
import Catalog from './views/components/Catalog';
import Logistics from './views/components/Logistics';
import Contact from './views/components/Contact';
import Footer from './views/components/Footer';
import InquiryModal from './views/components/InquiryModal';

import { useBento } from './viewmodels/useBento';
import { useCatalog } from './viewmodels/useCatalog';
import { useLogistics } from './viewmodels/useLogistics';
import { useInquiry } from './viewmodels/useInquiry';

const App: React.FC = () => {
  const bentoVm = useBento();
  const catalogVm = useCatalog();
  const logisticsVm = useLogistics();
  const inquiryVm = useInquiry();

  useEffect(() => {
    // Scroll reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoGrid vm={bentoVm} />
        <Catalog vm={catalogVm} onMaterialClick={inquiryVm.openModal} />
        <Logistics vm={logisticsVm} />
        <Contact />
      </main>
      <Footer />
      <InquiryModal vm={inquiryVm} />
    </>
  );
};

export default App;
