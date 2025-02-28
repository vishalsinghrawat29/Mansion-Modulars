import React from 'react';
import PageCTA from '../../../Components/PageCTA';

const CTASection = () => {
  return (
    <section className='page-cta-contianer'>
      <PageCTA
        imageUrl='https://res.cloudinary.com/dpghwxqij/image/upload/v1740576195/ServiceCTA_zoohdg.png'
        heading='Let’s Transform Your Space'
        subheading='At Mansion Modulars Interiors, we believe in creating spaces that go beyond mere functionality—they should inspire, comfort, and reflect who you are. Whether you’re renovating your home or redesigning your office, we’re here to help bring your vision to life. Let’s work together to create a space that’s perfectly suited to your needs.'
        ctaText='📅 Get a Free Design Consultation'
      />
    </section>
  );
};

export default CTASection;
