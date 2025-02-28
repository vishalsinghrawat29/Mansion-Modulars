import React from 'react'
import ResponsiveImg from '../ResponsiveImg';
import './HeroSection.css';

const HeroSection = ({
  desktopImg,
  mobileImg,
  altText,
  title,
  subtitle,
  ctaText,
}) => {
  return (
    <section className='hero-section'>
      <div className='hero-image-container'>
        <ResponsiveImg
          desktopImg={desktopImg}
          mobileImg={mobileImg}
          alt={altText}
        />
        <div className='hero-overlay'>
          <div className='hero-content'>
            <h1 className='hero-title'>{title}</h1>
            <h6 className='hero-subtitle'>{subtitle}</h6>
            <a
              href='https://calendly.com/mansionmodulars2023/30min'
              target='_blank'
              rel='noopener noreferrer'
              className='hero-cta'
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
