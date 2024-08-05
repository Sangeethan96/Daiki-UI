import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => (
  <header className="navbar">
    <div className="navbar-logo">
      <Link to="/">Daiki</Link>
    </div>
    <nav className="navbar-links">
      <Link to="/products">Products</Link>
      <Link to="/solutions">Solutions</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">AboutUS</Link>
      <Link to="/company">Company</Link>
      {/*<Link to="/community">Community</Link>*/}
      {/*<Link to="/team">Team</Link>*/}
      <Link to="/contact" className="navbar-contact">Contact Us</Link>
      
      <div className="language-switcher">
        <button className="language-button">
          <FontAwesomeIcon icon={faGlobe} className="language-icon" />
          <select onChange={(e) => handleLanguageChange(e.target.value)}>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
          </select>
        </button>
      </div>
    </nav>
  </header>
);

const handleLanguageChange = (language) => {
  // Add logic to change the language of the page content
  alert(`Language changed to: ${language}`);
};


export default NavBar;
