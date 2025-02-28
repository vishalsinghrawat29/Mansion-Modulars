import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHeader from '../../../Components/SectionHeader';
import ResponsiveImg from '../../../Components/ResponsiveImg';
import { HomePage } from '../../../assets/Data';
import './ProjectsSection.style.css';

const ProjectsSection = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 556,
        settings: {
          centerPadding: '30px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='home-projects'>
      <SectionHeader
        title='See the Difference We Make'
        subtitle="Explore our projects to witness stunning transformations we've achieved for our clients. From elegant residential spaces to inspiring commercial interiors, each one highlights our dedication to perfection. Every design reflects our craftsmanship, creativity, and attention to detail."
      />
      <div className='projects-slider'>
        <Slider {...settings}>
          {HomePage.Projects.map((project) => (
            <div key={project.id} className='project-slide'>
              <ResponsiveImg
                desktopImg={project.desktopImage}
                mobileImg={project.mobileImage}
                alt={project.altText}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='projects-cta-container'>
        <a href='/projects' className='projects-cta'>
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
