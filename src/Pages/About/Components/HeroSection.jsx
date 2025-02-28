import React, { useRef, useState } from 'react';
import './HeroSection.style.css';
import { IoPlayCircleOutline } from 'react-icons/io5';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [showPlayIcon, setShowPlayIcon] = useState(true);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.controls = true;
      setShowPlayIcon(false);
    }
  };

  return (
    <section className='about-hero-section'>
      <video className='hero-video' ref={videoRef}>
        <source
          src='https://res.cloudinary.com/dpghwxqij/video/upload/ar_16:9,c_fill,q_auto/v1740544610/oteanm7kvdlv5exout8z.mp4'
          type='video/mp4'
        />
      </video>
      {showPlayIcon && (
        <div className='play-icon' onClick={handlePlay}>
          <IoPlayCircleOutline className='play-button' />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
