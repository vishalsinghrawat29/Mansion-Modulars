import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import MansionModularsLogo from '../../assets/images/MansionModularsLogo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand center'>
          <NavLink to='/' onClick={() => setMenuOpen(false)}>
            <img
              src={MansionModularsLogo}
              alt='Mansion Modulars'
              className='logo'
            />
          </NavLink>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {menuOpen && (
          <div
            className='menu-overlay'
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map(({ path, label }) => (
              <li key={path} className='center'>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='navbar-cta'>
          <a
            href='https://calendly.com/mansionmodulars2023/30min'
            target='_blank'
            rel='noopener noreferrer'
            className='cta-button'
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
