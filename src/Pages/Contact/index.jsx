import React, { useEffect } from 'react';
import FormSection from './Components/FormSection';
import FormContact from './Components/FormContact';
import CTASection from './Components/CTASection';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <FormSection />
      <FormContact />
      <CTASection />
    </main>
  );
};

export default Contact;
