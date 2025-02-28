import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { FiX } from 'react-icons/fi';
import './AutoPopup.css';

const AutoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowPopup(false);
    const timer = setTimeout(() => setShowPopup(true), 12000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <div className='popup-overlay'>
      <div className='popup-container'>
        <button className='popup-close' onClick={() => setShowPopup(false)}>
          <FiX size={24} />
        </button>
        <div className='popup-content'>
          <div className='popup-img'>
            <img
              src='https://res.cloudinary.com/dpghwxqij/image/upload/v1740730658/Popup_img_ayw2a0.png'
              alt='popup-image'
            />
          </div>
          <div className='popup-text'>
            <h2>🏡 Ready for Your Dream Space? ✨</h2>
            <p>
              A beautiful, high-end interior design (e.g., a stylish living room
              or modern office) that represents your brand's elegance and
              quality.
            </p>
            <a
              href='https://calendly.com/mansionmodulars2023/30min'
              target='_blank'
              rel='noopener noreferrer'
              className='popup-button'
            >
              📅 Get a Free Quote Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPopup;
