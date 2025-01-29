import React, { useEffect, useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

/**
 * @author
 * @description This is the Navbar component for the application.
 * @returns {JSX.Element} The Navbar component.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [sidebar, setSidebar] = useState(false)
  const nav = useNavigate()

  // Scroll listener to add/remove 'scrolled' class
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
      console.log(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Function to close the sidebar when a link is clicked
  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <img src="/images/R_logo.png" alt="Ramesh Logo" className="nav-logo" />
        <ul className={`nav-items ${sidebar ? 'show-nav-items' : ''}`}>
          <li className="nav-item" onClick={() => nav('/')}>
            Home
          </li>
          <li className="nav-item" onClick={() => nav('/about')}>
            About
          </li>
          <li className="nav-item" onClick={() => nav('/service')}>
            Services
          </li>
          <li className="nav-item" onClick={() => nav('/award')}>
            Awards
          </li>
          <li className="nav-item" onClick={() => nav('/contact')}>
            Contact
          </li>
          <button className="btn-lets-talk" onClick={() => nav('/contact')}>
            Lets&apos; Talk
          </button>
        </ul>
        <button className="hamburger" onClick={() => setSidebar(!sidebar)}>
          <MenuIcon fontSize="large" />
        </button>
      </nav>
      <div className={`sidebar ${sidebar ? 'sidebar-open' : ''}`}>
        <ul>
          <li className="nav-item" onClick={closeSidebar}>
            <a href="#home">Home</a>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <a href="#about">About</a>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <a href="#service">Services</a>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <a href="#awards">Awards</a>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
