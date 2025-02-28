import React from 'react';
import SectionHeader from '../../../Components/SectionHeader';
import ResponsiveCardCarousel from '../../../Components/ResponsiveCardCarousel';
import { AboutPage } from '../../../assets/Data';
import './MachineSection.style.css';

const MachineSection = () => {
  const { Machines } = AboutPage;
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '30px',
  };

  return (
    <section className='machine-section'>
      <SectionHeader
        title='In-House Facility & Technology'
        subtitle='At Mansion Modulars, we are proud of our state-of-the-art in-house facility, where skilled craftsmen, advanced technology, and cutting-edge machinery come together to create top-notch designs. Our world-class machines ensure every project is executed with precision, efficiency, and quality.'
      />
      <div className='machine-card-container'>
        <ResponsiveCardCarousel settings={sliderSettings}>
          {Machines.map(({ id, name, category, image }) => (
            <div key={id} className='machine-card'>
              <div className='machine-card-content'>
                <h5>
                  <strong>{category}: </strong>
                </h5>
                <p>{name}</p>
              </div>
              <img src={image} alt={name} className='machine-img' />
            </div>
          ))}
        </ResponsiveCardCarousel>
      </div>
    </section>
  );
};

export default MachineSection;
