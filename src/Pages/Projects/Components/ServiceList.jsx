import React from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import serviceIcons from '../../../assets/servicesIcon';
import './ServiceList.style.css';

const ServiceList = () => {
  return (
    <section className='services-section'>
      <SectionHeader
        title='Shaping Your Dreams into Reality with Masterful Design and Quality'
        subtitle='At Mansion Modulars Interiors, we believe that every space tells a story. Our mission is simple: to make luxury interiors accessible to everyone, without compromising on style, quality, or craftsmanship.'
      />
      <div className='services-container'>
        {serviceIcons.map((service) => (
          <div key={service.id} className='service-card'>
            <img
              src={service.icon}
              alt={service.title}
              className='service-icon'
            />
            <h5 className='service-title'>{service.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
