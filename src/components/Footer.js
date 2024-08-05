import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Documentation</li>
            <li>Library</li>
            <li>Research</li>
            <li>Training and Certification</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Subscription</li>
            <li>Updates</li>
            <li>Consulting Services</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
          <li><Link to="/about">About Daiki</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/community">Community</Link></li>
          </ul>
        </div>
        <div className="footer-column newsletter">
          <div>
          <button className="newsletter-button">Sign Up For Our Newsletter</button>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/daikiaxis.lk/?locale=br_FR" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com/company/daiki-ai/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Daiki LLC | Legal | Do Not Sell My Personal Information | Modern Slavery Statement | Report a Problem With This Page</p>
      </div>
    </footer>
  );
}

export default Footer;
