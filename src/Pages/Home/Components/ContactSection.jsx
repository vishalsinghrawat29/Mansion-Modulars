import React from 'react';
import { HomePage } from '../../../assets/Data';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import Call from '../../../assets/contactIcon/Call.svg';
import Email from '../../../assets/contactIcon/Email.svg';
import Location from '../../../assets/contactIcon/Location.svg';
import './ContactSection.style.css';

const ContactSection = () => {
  const { desktopImage, mobileImage, altText } = HomePage.Contact;

  const contactDetails = [
    {
      icon: Call,
      alt: 'Phone Icon',
      text: '+91-7892069534',
      link: 'tel:+918851935588',
    },
    {
      icon: Call,
      alt: 'Phone Icon',
      text: '+91-8073334571',
      link: 'tel:+918073334571',
    },
    {
      icon: Email,
      alt: 'Email Icon',
      text: 'mansionmodulars2023@gmail.com',
      link: 'mailto:mansionmodulars2023@gmail.com',
    },
    {
      icon: Location,
      alt: 'Location Icon',
      text: '#230, Mylsandra Dinne, Vistra Resorts and Hotels, Basaveshwara Circle, E-city, Bangalore-560068.',
      link: 'https://www.google.com/maps/place/MANSION+MODULARS/@12.845203,77.615199,17z/data=!4m6!3m5!1s0x3bae6b661e4fcf8f:0x5fe8e31d47a4ffab!8m2!3d12.8450252!4d77.6140191!16s%2Fg%2F11krb7_nmt?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D',
    },
  ];

  return (
    <section className='home-contact'>
      <div className='home-contact-content'>
        <div className='home-contact-header'>
          <h2 className='home-contact-title'>Let’s Create Your Dream Space</h2>
          <p className='home-contact-text'>
            Whether you’re ready to transform your home or office, we’re here to
            help. Contact us today for a free quote or consultation, and let’s
            start designing the space of your dreams.
          </p>
        </div>
        <div className='home-contact-info'>
          {contactDetails.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className='contact-card'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={contact.icon}
                alt={contact.alt}
                className='home-mobile-icon'
              />
              <p>{contact.text}</p>
            </a>
          ))}
        </div>
      </div>
      <figure className='home-contact-image'>
        <ResponsiveImg
          desktopImg={desktopImage}
          mobileImg={mobileImage}
          alt={altText}
        />
      </figure>
    </section>
  );
};

export default ContactSection;
