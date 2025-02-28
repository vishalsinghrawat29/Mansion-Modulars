import React, { useEffect } from 'react';
import HeroBanner from './Components/HeroBanner';
import ProjectsCards from './Components/ProjectCards';
import ServiceList from './Components/ServiceList';
import CTASection from './Components/CTASection';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <HeroBanner />
      <ProjectsCards />
      <ServiceList />
      <CTASection />
    </main>
  );
};

export default Projects;
