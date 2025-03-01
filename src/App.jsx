import React from 'react';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './Routes/AppRoutes';
import AutoPopup from './Components/AutoPopup';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import WhatsAppButton from './Components/Whatsapp';
import './App.css';

const App = () => {
  return (
    <>
      <header id='site-header' className='header'>
        <Navbar />
      </header>
      <ToastContainer
        className='toast-position'
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme='colored'
      />
      <main id='site-main' className='main-content'>
        <AppRoutes />
        {/* <AutoPopup /> */}
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default App;
