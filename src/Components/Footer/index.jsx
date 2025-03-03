import React from 'react';
import Facebook from '../../assets/socialMedia/facebook.png';
import Instagram from '../../assets/socialMedia/instagram.png';
import Maps from '../../assets/socialMedia/maps.png';
import Whatsapp from '../../assets/socialMedia/whatsapp.png';
import FooterLogo from '../../assets/images/Footer-Logo.png';
import './footer.style.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-intro'>
        <a href='/'>
          <img
            src={FooterLogo}
            alt='Mansion Modulars'
            className='footer-logo'
          />
        </a>
        <p className='footer-info'>
          At Mansion Modulars Interiors, we offer premium, bespoke designs at
          unbeatable factory-direct prices, crafted to your style.
        </p>
      </div>

      <div className='footer-links'>
        <p>
          <strong>Company</strong>
        </p>
        {[
          { label: 'About Us', href: '/about' },
          { label: 'Projects', href: '/projects' },
          { label: 'Services', href: '/services' },
          { label: 'Contact Us', href: '/contact' },
        ].map(({ label, href }) => (
          <p key={href}>
            <a href={href} className='footer-link'>
              {label}
            </a>
          </p>
        ))}
      </div>

      <div className='footer-social'>
        <p>
          <strong>Social</strong>
        </p>
        <div className='social-media-icons'>
          {[
            {
              href: 'https://www.facebook.com/profile.php?id=61572938764926',
              imgSrc: Facebook,
              alt: 'Facebook',
            },
            {
              href: 'https://www.instagram.com/mansionmodulars/',
              imgSrc: Instagram,
              alt: 'Instagram',
            },
            {
              href: 'https://wa.me/7892069534',
              imgSrc: Whatsapp,
              alt: 'WhatsApp',
            },
            {
              href: 'https://www.google.com/maps/place/MANSION+MODULARS/@12.845203,77.615199,17z/data=!4m6!3m5!1s0x3bae6b661e4fcf8f:0x5fe8e31d47a4ffab!8m2!3d12.8450252!4d77.6140191!16s%2Fg%2F11krb7_nmt?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D',
              imgSrc: Maps,
              alt: 'Maps',
            },
          ].map(({ href, imgSrc, alt }, index) => (
            <a
              key={index}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'
              aria-label={alt}
            >
              <img src={imgSrc} alt={alt} className='social-icon' />
            </a>
          ))}
        </div>
        <p className='footer-copyright'>
          All rights reserved to Mansion Modulars © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
