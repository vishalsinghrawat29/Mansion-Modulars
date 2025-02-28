import React from 'react';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import { AboutPage } from '../../../assets/Data';
import './ValuesSection.style.css';

const ValuesSection = () => {
  const { Values } = AboutPage;
  const MissionValues = [
    {
      id: 1,
      title: 'Customer-Centricity',
      content: "Designing spaces that reflect our clients' style and needs.",
    },
    {
      id: 2,
      title: 'Quality Craftsmanship',
      content:
        'Every detail is built with precision and high-quality materials.',
    },
    {
      id: 3,
      title: 'Affordability',
      content:
        'Luxury should be accessible to everyone, and we make sure you get the best value.',
    },
    {
      id: 4,
      title: 'Innovation',
      content:
        'Evolving with the latest design trends and technology to stay ahead.',
    },
  ];
  return (
    <section className='Values-section'>
      <div className='Values-content'>
        <div className='value-header'>
          <h2 className='Values-title'>Our Mission & Values</h2>
          <p className='Values-description'>
            Our mission is to deliver exceptional, tailor-made interiors
            directly from our factory, blending style, craftsmanship, and
            unbeatable value. Whether it’s your home, office, or commercial
            space, our goal is to create environments that fit your lifestyle
            and exceed expectations—all at a price that makes sense.
          </p>
        </div>
        <div className='value-info'>
          <h5 className='value-info-header'>
            <strong>Core Values</strong>
          </h5>
          <div className='value-card-container'>
            {MissionValues.map(({ id, title, content }) => (
              <div key={id} className='value-card'>
                <p>
                  <strong>{title} :</strong>
                </p>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figure className='Values-section-image'>
        <ResponsiveImg
          desktopImg={Values.desktopImage}
          mobileImg={Values.mobileImage}
          alt={Values.altText}
        />
      </figure>
    </section>
  );
};

export default ValuesSection;
