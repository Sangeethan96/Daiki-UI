import React from 'react';
import './Services.css';
import consultingImage1 from '../assets/Images/Services/1.png';
import consultingImage2 from '../assets/Images/Services/2.png';
import consultingImage3 from '../assets/Images/Services/3.png';
import consultingImage4 from '../assets/Images/Services/1.png';
import languageSchoolImage1 from '../assets/Images/Services/l2.png';
import languageSchoolImage2 from '../assets/Images/Services/l3.png';
import officialImage from '../assets/Images/daikiteam.png'; // Using the same image for demonstration

function Services() {
  return (
    <div className="services">
      <div className="service-section consulting">
        <div className="service-images">
          <img src={consultingImage1} alt="Consulting 1" className="service-image" />
          <img src={consultingImage2} alt="Consulting 2" className="service-image" />
          <img src={consultingImage3} alt="Consulting 3" className="service-image" />
          <img src={consultingImage4} alt="Consulting 4" className="service-image" />
        </div>
        <div className="service-content">
          <h2>Consulting to build your career in Japan</h2>
          <p>
            We are representing Daiki Group of Japan in Sri Lanka. Being a bridge between Sri Lanka and Japan we found a number of similarities and differences in both countries. As a result of that, we were able to create opportunities for Sri Lankans who are willing to learn/work in Japan.
          </p>
        </div>
      </div>

      <div className="service-section language-school">
        <div className="service-content">
          <h2>Daiki Japanese Language School Tokyo</h2>
          <p>
            Our school aims to educate foreign students wishing to further their aspirations at universities, colleges, and professional training schools in Japan with a focus on Japanese Language, Japanese culture. In addition, the school provides career guidance according to each student’s goals.
          </p>
          <p>
            Outputs:
            <ul>
              <li>Qualify to enter institutions of higher education such as universities, colleges, and professional training colleges.</li>
              <li>Success in Japanese Language Proficiency Tests (JLPT/NAT).</li>
              <li>Success in qualification tests.</li>
              <li>World-class human resources development for employment purposes.</li>
            </ul>
          </p>
        </div>
        <div className="service-images">
          <img src={languageSchoolImage1} alt="Language School 1" className="service-image" />
          <img src={languageSchoolImage2} alt="Language School 2" className="service-image" />
        </div>
      </div>

      <div className="service-section engineering">
        <div className="service-images">
          <img src={require('../assets/Images/Services/se1.png')} className="service-image" />
          <img src={require('../assets/Images/Services/se2.png')} className="service-image" />
          <img src={require('../assets/Images/Services/se3.png')} alt="Engineering 3" className="service-image" />
        </div>
        <div className="service-content">
          <h2>Daiki Engineering Co. Ltd.</h2>
          <p>
            Provides the latest technologies to various manufactures including Automobiles, Ships, Air Crafts and all IT services.
          </p>
          <p>
            Head Office: Hiroshima<br />
            Branches: Tokyo, Tokai, Osaka, Tohoku, Nagasaki, Fukuoka<br />
            Clients: Toyota, Mitsubishi, Hitachi, IHI, Kawasaki, Mazda, etc.
          </p>
        </div>
      </div>

      <div className="service-section officials">
        <h2>With Officials</h2>
        <div className="official-images">
          <img src={require('../assets/Images/Services/off1.png')} alt="Official 1" className="service-image" />
          <img src={require('../assets/Images/Services/off2.png')} className="service-image" />
          <img src={require('../assets/Images/Services/off3.png')} className="service-image" />
          <img src={require('../assets/Images/Services/off3.png')} className="service-image" />
          <img src={require('../assets/Images/Services/off4.png')} className="service-image" />
          <img src={require('../assets/Images/Services/off5.png')} className="service-image" />
        </div>
      </div>
    </div>
  );
}

export default Services;
