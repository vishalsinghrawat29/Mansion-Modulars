import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { MdOutlineClose } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderModal.style.css';

const SliderModal = ({ isOpen, images, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const Arrow = ({ onClick, direction }) => (
    <div className={`custom-arrow ${direction}-arrow`} onClick={onClick}>
      {direction === 'next' ? <GrNext /> : <GrPrevious />}
    </div>
  );

  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <Arrow direction='next' />,
    prevArrow: <Arrow direction='prev' />,
  };

  return (
    <div className='slider-modal-overlay' onClick={onClose}>
      <div
        className='slider-modal-content'
        onClick={(e) => e.stopPropagation()}
      >
        <MdOutlineClose className='slider-modal-close' onClick={onClose} />
        <Slider {...sliderSettings}>
          {images.map((img, index) => (
            <div key={index} className='slider-modal-slide'>
              <img src={img} alt={`slide-${index}`} className='slider-image' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderModal;
