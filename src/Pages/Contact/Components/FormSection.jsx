import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactPage } from '../../../assets/Data';
import SectionHeader from '../../../Components/SectionHeader';
import './FormSection.style.css';

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });

  const handleChange = ({ target: { id, value } }) => {
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailParams = {
      to_name: 'Mansion Modulars Team',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      category: formData.category,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success('Message sent! Our team will reach out soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <section className='form-section'>
      <SectionHeader
        title='Get in Touch with Us'
        subtitle='We’d love to hear from you! Whether you have a question, a project in mind, or just want to explore the possibilities for transforming your space, our team at Mansion Modulars Interiors is here to help.'
      />
      <div className='form-container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='you@gmail.com'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='tel'
              id='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='+91-0000-0000-00'
              pattern='[0-9]{10}'
              maxLength='10'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='category'>Category</label>
            <select
              id='category'
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value=''>Select a category</option>
              <option value='interior-design'>Design Consultation</option>
              <option value='modular-kitchen'>Residential Interiors</option>
              <option value='furniture'>Commercial Interiors</option>
              <option value='others'>Others</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Leave Us a Message.....'
              required
            />
          </div>
          <button type='submit' className='submit-button'>
            Send Message
          </button>
        </form>
        <div className='form-image'>
          <img src={ContactPage?.contactImg} alt='Contact Us' />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
