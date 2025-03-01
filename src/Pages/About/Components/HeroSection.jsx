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
      <video
        className='hero-video'
        ref={videoRef}
        poster='https://res.cloudinary.com/dpghwxqij/image/upload/v1740807877/Thumbnail_oktdjw.png'
      >
        <source
          src='https://res.cloudinary.com/dpghwxqij/video/upload/ar_16:9,c_fill,q_auto/v1740806450/ricszky8wv8b3gsb4t7v.mp4'
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
