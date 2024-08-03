import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
      <Link to="/community">Community</Link>
      <Link to="/contact" className="navbar-contact">Contact Us</Link>
    </nav>
  </header>
);

export default NavBar;
