import React from 'react';
import PageCTA from '../../../Components/PageCTA';
import './CTASection.style.css';

const CTASection = () => {
  return (
    <section className='page-cta-contianer'>
      <PageCTA
        imageUrl='https://res.cloudinary.com/dpghwxqij/image/upload/v1740553749/AboutCTA_xnw7wk.png'
        heading='Creating Spaces That Inspire'
        subheading='At Mansion Modulars, we don’t just design spaces—we create environments that inspire and elevate your lifestyle. Whether it’s a home, office, or commercial space, we bring your vision to life with designs that truly reflect your style.'
        ctaText='📅 Get a Free Design Consultation'
      />
    </section>
  );
};

export default CTASection;
