import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiPlay } from 'react-icons/fi';
import SectionHeader from '../../../Components/SectionHeader';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import VideoModal from '../../../Components/VideoModal';
import { HomePage } from '../../../assets/Data';
import './Testimonials.style.css';

const Testimonials = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (url) => {
    setVideoUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setVideoUrl('');
    setModalOpen(false);
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    centerPadding: '100px',
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 950, settings: { slidesToShow: 2 } },
      {
        breakpoint: 556,
        settings: { centerPadding: '30px', slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className='home-testimonials'>
      <SectionHeader
        title='What Our Clients Are Saying'
        subtitle='We take pride in the trust our clients place in us  Here’s what they have to say about working with Mansion Modulars Interiors.'
      />
      <div className='testimonials-slider'>
        <Slider {...settings}>
          {HomePage.Testimoials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='testimonial-slide'
              onClick={() => openModal(testimonial.videoUrl)}
            >
              <ResponsiveImg
                desktopImg={testimonial.thumbnail}
                mobileImg={testimonial.thumbnail}
                alt={`testimonial-${testimonial.id}`}
              />
              <div className='play-icon'>
                <FiPlay />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <VideoModal isOpen={modalOpen} videoUrl={videoUrl} onClose={closeModal} />
    </section>
  );
};

export default Testimonials;
