import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBuilding, faGlobe, faExchangeAlt, faShieldAlt, faHandHoldingHeart, faBalanceScale, faRocket, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-us">
      <section className="hero">
        <div className="hero-content">
          <h1>Daiki is the Leader in Digital Transformation Technology</h1>
          <div className="hero-stats">
            <div className="stat">
              <FontAwesomeIcon icon={faUsers} size="2x" className="stat-icon" />
              <span>700+</span>
              <p>Direct Customers</p>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faBuilding} size="2x" className="stat-icon" />
              <span>5000+</span>
              <p>OEM Customers</p>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faUsers} size="2x" className="stat-icon" />
              <span>25k+</span>
              <p>Open Source Customers</p>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faGlobe} size="2x" className="stat-icon" />
              <span>90+</span>
              <p>Countries</p>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faExchangeAlt} size="2x" className="stat-icon" />
              <span>60 trillion+</span>
              <p>Transactions</p>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" className="stat-icon" />
              <span>1 billion+</span>
              <p>Identities</p>
            </div>
          </div>
          <p className="hero-description">
            Founded in 2005, Daiki was initially an open source middleware company. Our business strategy has progressed beyond just building great open source software. Today, we offer a suite of application development and IAM technologies, available as open source or SaaS, enabling enterprises to create digital experiences quickly, easily, and securely.
          </p>
        </div>
      </section>
      <section className="video-section">
        <h2>Watch Our Story Unfold: The Daiki Journey</h2>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Vkq1EpbpMzE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="values-section">
        <h2>We 'Treat People the Way You Want to Be Treated'</h2>
        <p>Our <a href="/value-statement">value statement</a> is supported by our maxims, which forms the foundation of our unique culture.</p>
        <div className="values-cards">
          <div className="card">
            <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" className="card-icon" />
            <h3>Trust and Openness</h3>
            <p>We enable fluidity of information, give and receive feedback, and refrain from micromanaging teams.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faBalanceScale} size="2x" className="card-icon" />
            <h3>Courageous Honesty</h3>
            <p>We don’t have hidden agendas, we’re honest with ourselves and others, and discuss successes and failures openly.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faRocket} size="2x" className="card-icon" />
            <h3>Purpose and Passion</h3>
            <p>We nurture a culture of meritocracy where performance and meaningful contribution are valued and rewarded.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faUsersCog} size="2x" className="card-icon" />
            <h3>One Team</h3>
            <p>We don’t have space for ‘jerks’ - we respect each other, even if we disagree, and focus on solutions instead of pointing fingers.</p>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="team-content">
          <div className="team-text">
            <h2>Meet Our Global Team</h2>
            <p>At Daiki, titles don’t matter because we believe that with our collective mind power we can do great things - and we have! We embrace what each team member has to offer and work as one team to support the growth of the company. We have over 900 employees worldwide with offices in Australia, Brazil, Germany, India, Malaysia, Sri Lanka, Singapore, the UAE, the UK, and the US.</p>
            <Link to="/team">
            <button className="btn btn-primary">Meet Team</button>
            </Link>
          </div>
          <div className="team-image">
            <img src={require('../assets/Images/daikiteam.png')} alt="Global Team" />
          </div>
        </div>
      </section>
      <section className="culture-section">
        <div className="culture-content">
          <div className="culture-image">
            <img src={require('../assets/Images/team.png')} alt="Culture" />
          </div>
          <div className="culture-text">
            <h2>Explore Our Culture and Career Opportunities</h2>
            <p>Every employee is important at Daiki, whether you’re building products, marketing or selling, supporting customers, or taking care of people and the offices across our locations. We all work in collaboration toward achieving a common goal.</p>
            <button className="btn btn-secondary">Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
