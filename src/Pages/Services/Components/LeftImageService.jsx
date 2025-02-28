import React from 'react';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import './LeftImageService.style.css';

const LeftImageService = ({ service }) => {
  if (!service) return null;

  const { title, subtitle, content, mobileImage, desktopImage, features } =
    service;

  return (
    <section className='left-image-service-container'>
      <div className='image-wrapper'>
        <figure className='image-frame'>
          <ResponsiveImg
            desktopImg={desktopImage}
            mobileImg={mobileImage}
            alt={title || 'Service Image'}
          />
        </figure>
      </div>
      <div className='content-wrapper'>
        <div className='text-content'>
          {subtitle && <h5 className='subtitle'>{subtitle}</h5>}
          {title && <h2 className='title'>{title}</h2>}
          {content && <p className='description'>{content}</p>}
        </div>

        {Array.isArray(features) && features.length > 0 && (
          <div className='features-list'>
            {features.map((feature, index) => (
              <div key={index} className='feature-item'>
                <p className='feature-text'>{`${String(index + 1).padStart(2, '0')}. ${feature}`}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LeftImageService;
