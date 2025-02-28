import React from 'react';
import './PageCTA.style.css';

const PageCTA = ({
  imageUrl = '',
  heading = '',
  subheading = '',
  ctaText = 'Get Started',
}) => (
  <div
    className='page-cta'
    style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
  >
    <div className='overlay'></div>
    <div className='content'>
      <h2 className='heading'>{heading}</h2>
      <p className='subheading'>{subheading}</p>
      <a
        href='https://calendly.com/mansionmodulars2023/30min'
        target='_blank'
        rel='noopener noreferrer'
        className='page-cta-button'
      >
        {ctaText}
      </a>
    </div>
  </div>
);

export default PageCTA;
