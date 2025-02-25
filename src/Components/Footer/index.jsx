import './footer.style.css'
import FooterLogo from '../../assets/images/Footer-Logo.png'

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
        <></>
        <p className='footer-info'>
          At Mansion Modulars Interiors, we offer premium, bespoke designs at
          unbeatable factory-direct prices, crafted to your style.
        </p>
      </div>
      <div className='footer-links'>
        <p>
          <strong>Company</strong>
        </p>
        <p>
          <a href='/about' className='footer-link'>
            About Us
          </a>
        </p>
        <p>
          <a href='/projects' className='footer-link'>
            Projects
          </a>
        </p>
        <p>
          <a href='/services' className='footer-link'>
            Services
          </a>
        </p>
        <p>
          <a href='/contact' className='footer-link'>
            Contact Us
          </a>
        </p>
      </div>
      <div className='footer-social'>
        <p>
          <strong>Social</strong>
        </p>
        <div className='social-media-icons'>
          <a href='#' target='_blank' className='social-link'>
            <img
              src='https://res.cloudinary.com/dpghwxqij/image/upload/v1740505125/Facebook_i8glgo.png'
              alt='Facebook'
              className='social-icon'
            />
          </a>
          <a href='#' target='_blank' className='social-link'>
            <img
              src='https://res.cloudinary.com/dpghwxqij/image/upload/v1740505126/Instagram_vyzdsz.png'
              alt='Instagram'
              className='social-icon'
            />
          </a>
          <a
            href='https://wa.me/7892069534'
            target='_blank'
            className='social-link'
          >
            <img
              src='https://res.cloudinary.com/dpghwxqij/image/upload/v1740505125/Whatsapp_sinozh.png'
              alt='WhatsApp'
              className='social-icon'
            />
          </a>
          <a
            href='https://www.google.com/maps/place/MANSION+MODULARS/@12.845203,77.615199,17z/data=!4m6!3m5!1s0x3bae6b661e4fcf8f:0x5fe8e31d47a4ffab!8m2!3d12.8450252!4d77.6140191!16s%2Fg%2F11krb7_nmt?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D'
            target='_blank'
            className='social-link'
          >
            <img
              src='https://res.cloudinary.com/dpghwxqij/image/upload/v1740505125/Maps_onoywc.png'
              alt='Maps'
              className='social-icon'
            />
          </a>
        </div>
        <p className='footer-copyright'>
          All rights reserved to Mansion Modulars © 2025
        </p>
      </div>
    </footer>
  )
}

export default Footer
