import React, { useEffect } from 'react';
import HeroSection from './Components/HeroSection';
import StorySection from './Components/StorySection';
import TeamSection from './Components/TeamSection';
import ApproachSection from './Components/ApproachSection';
import MachineSection from './Components/MachineSection';
import ValuesSection from './Components/ValuesSection';
import CTASection from './Components/CTASection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className='about'>
      <HeroSection />
      <StorySection />
      <TeamSection />
      <ApproachSection />
      <MachineSection />
      <ValuesSection />
      <CTASection />
    </main>
  );
};

export default About;
