import React from 'react';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import SectionHeader from '../../../Components/SectionHeader';
import { AboutPage } from '../../../assets/Data';
import './StorySection.style.css';

const StorySection = () => {
  const {
    Story: { desktopImage, mobileImage, altText },
  } = AboutPage;

  return (
    <section className='story'>
      <SectionHeader
        title='Shaping Your Dreams into Reality with Masterful Design and Quality'
        subtitle='At Mansion Modulars Interiors, we believe that every space tells a story. Our mission is simple: to make luxury interiors accessible to everyone, without compromising on style, quality, or craftsmanship.'
      />
      <div className='story-content'>
        <figure className='story-image'>
          <ResponsiveImg
            desktopImg={desktopImage}
            mobileImg={mobileImage}
            alt={altText}
          />
        </figure>
        <div className='story-text'>
          <h2 className='story-title'>Our Story</h2>
          <p className='story-description'>
            Founded with the belief that great design shouldn't come with an
            inflated price tag, Mansion Modulars was created to simplify the
            interior design process while maintaining excellence. From homes to
            offices, we craft stunning, functional spaces that reflect each
            client’s unique personality and lifestyle. By eliminating the
            middleman, we offer factory-direct pricing, ensuring your dream
            space is affordable without compromising on quality.
          </p>
          <p className='story-description'>
            Over the years, Mansion Modulars has grown into a trusted interior
            solutions provider, committed to delivering tailored designs that
            exceed expectations. Our focus on craftsmanship, personalized
            service, and exceptional value has remained unchanged, ensuring
            every project reflects our dedication to creating spaces that truly
            feel like home.
          </p>
        </div>
        <img
          src='https://res.cloudinary.com/dpghwxqij/image/upload/v1740548321/StoryObj_pt7o79.png'
          alt='Story Icon'
          className='story-icon'
        />
      </div>
    </section>
  );
};

export default StorySection;
