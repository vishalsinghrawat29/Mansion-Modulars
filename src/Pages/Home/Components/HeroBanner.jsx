import React from 'react';
import HeroSection from '../../../Components/HeroSection';
import { HomePage } from '../../../assets/Data';

const HeroBanner = () => {
  const { desktopImage, mobileImage, altText } = HomePage.HeadersImage;
  return (
    <section className='hero-banner'>
      <HeroSection
        desktopImg={desktopImage}
        mobileImg={mobileImage}
        altText={altText}
        title='Luxury Interiors Crafted for You: Affordable, Functional, Stylish'
        subtitle='At Mansion Modulars, we bring your dream space to life with precision craftsmanship and personalized design—without the luxury price tag. From concept to completion, we deliver stunning interiors directly from our factory to your door.'
        ctaText='📅 Get a Free Design Consultation'
      />
    </section>
  );
};

export default HeroBanner;
