import React from 'react';
import HeroSection from '../../../Components/HeroSection';
import { ServicePage } from '../../../assets/Data';

const HeroBanner = () => {
  const { desktopImage, mobileImage, altText } = ServicePage.HeadersImage;
  return (
    <section className='hero-banner'>
      <HeroSection
        desktopImg={desktopImage}
        mobileImg={mobileImage}
        altText={altText}
        title='Crafting Unique Interiors that Reflect Your Style and Needs'
        subtitle="At Mansion Modulars Interiors, we specialize in crafting unique, functional, and aesthetically pleasing interiors. Whether you're designing your dream home, a modern office, or a commercial space, our expert team ensures that every detail is thoughtfully curated to bring your vision to life. Explore our core services below and discover how we can transform your space."
        ctaText='🏠 Design Your Space'
      />
    </section>
  );
};

export default HeroBanner;
