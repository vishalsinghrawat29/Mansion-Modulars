import React from 'react';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import { AboutPage } from '../../../assets/Data';
import './ApproachSection.style.css';

const ApproachSection = () => {
  const {
    Approach: { Approach1, Approach2 },
  } = AboutPage;
  return (
    <section className='approach-section'>
      <div className='approach-section-left'>
        <div className='approach-section-content'>
          <h2 className='approach-section-title'>Our Unique Approach</h2>
          <p className='approach-section-description'>
            What sets Mansion Modulars apart is our factory-direct model. By
            producing everything in-house, we eliminate the need for third-party
            suppliers, ensuring high-quality, custom designs at a fraction of
            the usual cost. This model allows us full control over quality and
            timelines, delivering exceptional results efficiently. Quick
            turnaround times also mean you'll experience your dream space sooner
            rather than later.
          </p>
        </div>
        <figure className='approach-image-left'>
          <ResponsiveImg
            desktopImg={Approach1.desktopImage}
            mobileImg={Approach1.mobileImage}
            alt={Approach1.altText}
          />
        </figure>
      </div>
      <div className='approach-section-right'>
        <figure className='approach-image-right'>
          <ResponsiveImg
            desktopImg={Approach2.desktopImage}
            mobileImg={Approach2.mobileImage}
            alt={Approach2.altText}
          />
        </figure>
      </div>
    </section>
  );
};

export default ApproachSection;
