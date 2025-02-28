import React from 'react';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import { HomePage } from '../../../assets/Data';
import './USPSection.style.css';

const USPCard = ({ imageUrl, alt, text }) => (
  <div className='usp-card'>
    <img src={imageUrl} alt={alt} className='usp-icon' />
    <p dangerouslySetInnerHTML={{ __html: text }}></p>
  </div>
);

const USPSection = () => {
  const { desktopImage, mobileImage, altText } = HomePage.USP;

  const usps = [
    {
      imageUrl:
        'https://res.cloudinary.com/dpghwxqij/image/upload/v1740418586/Tick_uevle1.png',
      alt: 'Tick',
      text: '<strong>Factory-Direct Production:</strong> <br /> No middleman, just high-quality, custom designs at the best prices',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dpghwxqij/image/upload/v1740418586/Tick_uevle1.png',
      alt: 'Tick',
      text: '<strong>Fast Turnaround:</strong> <br /> On-time delivery and flawless installation for quicker enjoyment of your space.',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dpghwxqij/image/upload/v1740418586/Tick_uevle1.png',
      alt: 'Tick',
      text: '<strong>Cutting-Edge Technology:</strong> <br /> Precision-driven designs powered by advanced machinery.',
    },
  ];

  return (
    <section className='home-usp'>
      <figure className='home-usp-image'>
        <ResponsiveImg
          desktopImg={desktopImage}
          mobileImg={mobileImage}
          alt={altText}
        />
      </figure>
      <div className='home-usp-content'>
        <div className='home-usp-header'>
          <h2>What Sets Us Apart?</h2>
          <h5>
            We’re not just another interior design company. <br /> Here's what
            makes Mansion Modulars unique.
          </h5>
        </div>
        <div className='home-usp-list'>
          {usps.map((usp, index) => (
            <USPCard key={index} {...usp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
