import React, { useEffect } from 'react';
import HeroBanner from './Components/HeroBanner';
import RightImageService from './Components/RightImageService';
import LeftImageService from './Components/LeftImageService';
import CTASection from './Components/CTASection';
import { ServicePage } from '../../assets/Data';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    Services: { Residential, Commercial, Consultation },
  } = ServicePage;
  return (
    <main>
      <HeroBanner />
      <RightImageService service={Residential} />
      <LeftImageService service={Commercial} />
      <RightImageService service={Consultation} />
      <CTASection />
    </main>
  );
};

export default Services;
