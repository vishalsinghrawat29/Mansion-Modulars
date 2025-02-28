import React from 'react';
import './WhatsAppButton.css';
import Whatsapp from '../../assets/socialMedia/whatsapp.png';

const WhatsAppButton = () => {
  const phoneNumber = '+917892069534';

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target='_blank'
      rel='noopener noreferrer'
      className='whatsapp-button'
    >
      <img src={Whatsapp} alt='WhatsApp' />
    </a>
  );
};

export default WhatsAppButton;
