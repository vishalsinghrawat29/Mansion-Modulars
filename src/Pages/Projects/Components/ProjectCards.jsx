import React, { useState } from 'react';
import SliderModal from '../../../Components/SliderModal';
import { ProjectPage } from '../../../assets/Data';
import './ProjectCards.style.css';

const ProjectsCards = () => {
  const { Projects } = ProjectPage;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className='projects-container'>
      {Projects.map(({ id, title, subtitle, content, cover, images }) => (
        <div key={id} className='project-card'>
          <div className='project-header'>
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
          </div>
          <div className='project-content'>
            <div className='project-cover'>
              <img
                src={cover}
                alt={`project-cover-${id}`}
                className='project-cover-image'
              />
            </div>
            <div className='project-description'>
              <div className='project-header mobile-project-header'>
                <h2>{title}</h2>
                <h5>{subtitle}</h5>
              </div>
              <p>{content}</p>
              {images && images.length > 0 && (
                <a className='preview-btn' onClick={() => openModal(images)}>
                  Preview
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <SliderModal
          isOpen={isModalOpen}
          images={selectedImages}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default ProjectsCards;
