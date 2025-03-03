import React from 'react';
import Call from '../../../assets/contactIcon/Call.svg';
import Email from '../../../assets/contactIcon/Email.svg';
import Location from '../../../assets/contactIcon/Location.svg';
import './FormContact.style.css';

const FormContact = () => {
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
    <section className='contact-section'>
      <div className='contact-details'>
        <h2 className='contact-details-title'>How We Respond?</h2>
        <p className='contact-details-description'>
          Once we receive your message, our team will review your inquiry and
          get back to you promptly. Whether you're looking for a design
          consultation, have specific questions about our services, or want to
          discuss an upcoming project, we’re here to assist you every step of
          the way. You can expect a response within 1-2 business days during our
          regular business hours.
        </p>
      </div>
      <div className='contact-details-container'>
        <h2 className='contact-details-title'>Our Contact Information</h2>
        <div className='contact-items'>
          {contactDetails.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target='_blank'
              rel='noopener noreferrer'
              className='contact-item'
            >
              <img
                src={contact.icon}
                alt={contact.alt}
                className='contact-icon'
              />
              <p className='contact-value'>{contact.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormContact;
