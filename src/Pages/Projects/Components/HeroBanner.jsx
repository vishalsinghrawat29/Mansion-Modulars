import React from 'react';
import HeroSection from '../../../Components/HeroSection';
import { ProjectPage } from '../../../assets/Data';

const HeroBanner = () => {
  const { desktopImage, mobileImage, altText } = ProjectPage.HeadersImage;
  return (
    <section className='hero-banner'>
      <HeroSection
        desktopImg={desktopImage}
        mobileImg={mobileImage}
        altText={altText}
        title='Our Work Speaks for Itself'
        subtitle="At Mansion Modulars Interiors, we take pride in every project, showcasing the transformation of spaces into living works of art. From residential to commercial spaces, each project is a testament to our commitment to quality and design excellence. Explore our key projects below, where we've blended creativity, functionality, and style to bring our clients' visions to life."
        ctaText='📅 Get a Free Design Consultation'
      />
    </section>
  );
};

export default HeroBanner;
