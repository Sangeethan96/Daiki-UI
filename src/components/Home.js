import React from 'react';
import './Home.css';
//import schoolimg from '../assets/Images/school.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="home">
      <img src={require('../assets/Images/school.png')} alt="Daiki" className="home-image" />
      <h1>Welcome to Daiki Japanese Studies</h1>
      <div className="social-icons">
        <a href="https://www.facebook.com/daikiaxis.lk/?locale=br_FR" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.linkedin.com/company/daiki-ai/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <p>
        Japan is a prosperous country and has the most diverse economy in Asia. 
        The leading Japanese companies are among the largest, most efficiently run, and most well-known firms in the world. 
        Familiar names like Sony, Toshiba, Sanyo, Casio, Canon, Minolta, Honda, Toyota, Mitsubishi, and many others have infiltrated the world market in a variety of sectors. 
      </p>
      <br/>
      <p>
        Whether you're in the field of business, engineering, manufacturing, research, economics, or politics, chances are you will be competing with, if not working for, a Japanese entity.
      </p>
      <br/>
      <h2>Daiki Students</h2>
      <p>
        We have our own Japanese Language School in Tokyo. Daiki Group of Japan established Daiki Japanese Language School Tokyo in Shiba, Minato-ku, Tokyo. 
        We route students to Tokyo who willing to learn Japanese Language in Daiki Japanese Language School Tokyo in Japan.
      </p>
      <p>
        <strong>Requirements</strong><br/>
        1. A/Levels<br/>
        2. NAT 5 (We conduct classes)<br/>
        3. (18-28) Age Limit
      </p>
      <br/>
      <h2>Daiki Engineers</h2>
      <p>
        We create opportunities for Engineers who willing to work in Japan as Daiki Engineers. People who have B.Sc, degree from recognized university can easily be Daiki Engineer in Japan.
      </p>
      <p>
        <strong>Requirements</strong><br/>
        1. B.Sc. Degree<br/>
        2. NAT 2 (We conduct classes)<br/>
        3. (18-28) Age Limit
      </p>
      <div className="video-gallery">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eIBQcwu_cwE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KRCOB9jCick"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LC8PB87itbc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;