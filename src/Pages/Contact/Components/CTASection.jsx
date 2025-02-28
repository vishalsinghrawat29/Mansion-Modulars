import React from 'react';
import PageCTA from '../../../Components/PageCTA';

const CTASection = () => {
  return (
    <section className='page-cta-contianer'>
      <PageCTA
        imageUrl='https://res.cloudinary.com/dpghwxqij/image/upload/v1740681880/ContactCTA_mwlb6x.png'
        heading='Ready to transform your space?'
        subheading='We look forward to hearing from you! Fill out the contact form or reach out to us via email or phone, and let’s begin creating a space that reflects your style and enhances your lifestyle.'
        ctaText='📅 Get a Free Design Consultation'
      />
    </section>
  );
};

export default CTASection;
