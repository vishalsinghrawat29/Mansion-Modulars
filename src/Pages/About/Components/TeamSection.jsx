import React from 'react';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import { AboutPage } from '../../../assets/Data';
import './TeamSection.style.css';

const TeamSection = () => {
  const {
    Team: { Team1, Team2 },
  } = AboutPage;
  return (
    <section className='team-section'>
      <div className='team-section-left'>
        <figure className='team-image-left'>
          <ResponsiveImg
            desktopImg={Team1.desktopImage}
            mobileImg={Team1.mobileImage}
            alt={Team1.altText}
          />
        </figure>
      </div>
      <div className='team-section-right'>
        <div className='team-section-content'>
          <h2 className='team-section-title'>Our Passionate Team</h2>
          <p className='team-section-description'>
            Behind every design at Mansion Modulars is a team of passionate
            professionals dedicated to transforming spaces. Our interior
            designers craft spaces that not only look beautiful but are tailored
            to your unique needs. Our skilled carpenters use advanced technology
            to ensure precision and quality in every detail. Together, we make
            your vision come to life.
          </p>
        </div>
        <figure className='team-image-right'>
          <ResponsiveImg
            desktopImg={Team2.desktopImage}
            mobileImg={Team2.mobileImage}
            alt={Team2.altText}
          />
        </figure>
      </div>
    </section>
  );
};

export default TeamSection;
