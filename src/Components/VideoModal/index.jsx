import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import './VideoModal.css';

const VideoModal = ({ isOpen, videoUrl, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='video-modal-overlay' onClick={onClose}>
      <div className='video-modal-content' onClick={(e) => e.stopPropagation()}>
        <FiX className='video-modal-close' onClick={onClose} />
        <iframe title='Project Video' src={videoUrl} allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
