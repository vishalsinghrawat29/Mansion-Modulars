import React from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import './ServicesSection.style.css';

const ServiceCard = ({ imageUrl, alt, title, text }) => (
  <div className='home-service-card'>
    <div className='home-service-image'>
      <img src={imageUrl} alt={alt} className='home-service-icon' />
    </div>
    <div className='home-service-info'>
      <h3
        className='home-service-title'
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <p className='home-service-text'>{text}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      imageUrl:
        'https://res.cloudinary.com/dpghwxqij/image/upload/v1740401596/service-1_yhh26q.png',
      alt: 'Residential Design Icon',
      title: 'Residential <br /> Design',
      text: 'Transform your home into a cozy, stylish, and inviting space that beautifully reflects your personality.',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dpghwxqij/image/upload/v1740401604/Group_24_iz3msg.png',
      alt: 'Commercial Interiors Icon',
      title: 'Commercial <br /> Interiors',
      text: 'Designing functional, aesthetic workspaces that inspire productivity and align with your brand identity.',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dpghwxqij/image/upload/v1740401603/Group_24_1_bd4uzn.png',
      alt: 'Design Consultation Icon',
      title: 'Design <br /> Consultation',
      text: 'Expert guidance to craft personalized design plans, balancing style, functionality, and your vision.',
    },
  ];

  return (
    <section className='home-services'>
      <SectionHeader
        title='Design Services for Every Space'
        subtitle='From personalized residential designs to dynamic commercial spaces, we
          offer tailored solutions for every project.'
      />
      <div className='home-services-list'>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
