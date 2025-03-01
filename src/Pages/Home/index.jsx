import React, { useEffect } from 'react';
import HeroBanner from './Components/HeroBanner';
import IntroductionSection from './Components/Introduction';
import ServicesSection from './Components/ServicesSection';
import USPSection from './Components/USPSection';
import ProjectsSection from './Components/ProjectsSection';
import Testimonials from './Components/Testimonials';
import ContactSection from './Components/ContactSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroBanner />
      <IntroductionSection />
      <ServicesSection />
      <USPSection />
      <ProjectsSection />
      {/* <Testimonials /> */}
      <ContactSection />
    </main>
  );
};

export default Home;
