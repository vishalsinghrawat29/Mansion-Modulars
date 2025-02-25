import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi' // Import icons
import './Navbar.css'
import MansionModularsLogo from '../../assets/images/MansionModularsLogo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand center'>
          <img
            src={MansionModularsLogo}
            alt='Mansion Modulars'
            className='logo'
          />
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {menuOpen && <div className='menu-overlay' onClick={closeMenu}></div>}

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li className='center'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className='center'>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </li>
            <li className='center'>
              <NavLink
                to='/services'
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li className='center'>
              <NavLink
                to='/projects'
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className='center'>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='navbar-cta'>
          <a href='/get-quote' className='cta-button'>
            Get a Free Quote
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
