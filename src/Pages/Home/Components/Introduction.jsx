import React from 'react';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import { HomePage } from '../../../assets/Data';
import './Introduction.style.css';

const IntroductionSection = () => {
  const { desktopImage, mobileImage, altText } = HomePage.IntroImage;
  return (
    <section className='introduction'>
      <div className='introduction-content'>
        <h2 className='introduction-title'>Who are We?</h2>
        <p className='introduction-text'>
          At Mansion Modulars Interiors, we are passionate about turning your
          vision into reality. Our team of skilled designers and craftsmen work
          closely with you to create spaces that reflect your unique style and
          needs. By cutting out the middleman and offering factory- direct
          pricing, we provide exceptional interiors at unbeatable value.
        </p>
        <img
          src='https://res.cloudinary.com/dpghwxqij/image/upload/v1740293686/Intro-icon_iyqrqh.png'
          alt='Introduction Icon'
          className='introduction-icon'
        />
        <a href='/about' className='introduction-cta'>
          Discover More
        </a>
      </div>
      <figure className='introduction-image'>
        <ResponsiveImg
          desktopImg={desktopImage}
          mobileImg={mobileImage}
          alt={altText}
        />
      </figure>
    </section>
  );
};

export default IntroductionSection;
