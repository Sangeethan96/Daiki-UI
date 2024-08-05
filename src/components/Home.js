import React ,{ useState, useEffect }from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import schoolImage from '../assets/Images/daiki.png';
import studentsImage from '../assets/Images/students.png';
import schoolImage1 from '../assets/Images/School/1.png';
import schoolImage2 from '../assets/Images/School/2.png';
import schoolImage3 from '../assets/Images/School/5.jpg';
import schoolImage4 from '../assets/Images/School/6.png';



const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, when: 'beforeChildren', staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } }
};

function Home() {
  const images = [
    { src: schoolImage1, text: 'DAIKI JAPANESE STUDIES BRIDGE TO JAPAN      日本への掛け橋 ' },
    { src: schoolImage2, text: 'You can Work in Japan' },
    { src: schoolImage3, text: 'We Provide Training' },
    { src: schoolImage4, text: 'Join Us' }
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [editableTexts, setEditableTexts] = useState(images.map(image => image.text));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleTextChange = (index, newText) => {
    setEditableTexts(prevTexts => {
      const newTexts = [...prevTexts];
      newTexts[index] = newText;
      return newTexts;
    });
  };

  return (
    <motion.div
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="colored-section gray" variants={itemVariants}>
      <h1>Welcome to Daiki Japanese Studies</h1>
      <div className="fixed-height-container">
      <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              className="image-wrapper"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
               <img
                src={images[currentImageIndex].src}
                alt={`School ${currentImageIndex + 1}`}
                className="home-image"
              />
              <div
                className="image-text"
                contentEditable="true"
                suppressContentEditableWarning={true}
                onBlur={(e) => handleTextChange(currentImageIndex, e.target.innerText)}
              >
                {editableTexts[currentImageIndex]}
              </div>
            </motion.div>
        </AnimatePresence>
        </div>
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
        <br />
        <p>
          Whether you're in the field of business, engineering, manufacturing, research, economics, or politics, chances are you will be competing with, if not working for, a Japanese entity.
        </p>
      </motion.div>
      <br />
      <motion.div className="colored-section blue" variants={itemVariants}>
        <h2>Daiki Students</h2>
        <p>
          We have our own Japanese Language School in Tokyo. Daiki Group of Japan established Daiki Japanese Language School Tokyo in Shiba, Minato-ku, Tokyo.
          We route students to Tokyo who willing to learn Japanese Language in Daiki Japanese Language School Tokyo in Japan.
        </p>
        <p>
          <strong>Requirements</strong><br />
          1. A/Levels<br />
          2. NAT 5 (We conduct classes)<br />
          3. (18-28) Age Limit
        </p>
        <img src={studentsImage} alt="Students" className="home-image animated-image" />
      </motion.div>
      <br />
      <motion.div variants={itemVariants}>
        <div className='engineer'>
        <h2>Daiki Engineers</h2>
        <p>
          We create opportunities for Engineers who willing to work in Japan as Daiki Engineers. People who have B.Sc, degree from recognized university can easily be Daiki Engineer in Japan.
        </p>
        <p>
          <strong>Requirements</strong><br />
          1. B.Sc. Degree<br />
          2. NAT 2 (We conduct classes)<br />
          3. (18-28) Age Limit
        </p>
        <img src={require('../assets/Images/Services/3.png')} alt="Students" className="home-image animated-image" />
        </div>
      </motion.div>
      <motion.div className="video-gallery" variants={containerVariants}>
        <motion.div className="video" variants={itemVariants}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eIBQcwu_cwE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
        <motion.div className="video" variants={itemVariants}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KRCOB9jCick"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
        <motion.div className="video" variants={itemVariants}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LC8PB87itbc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
        <motion.div className="video" variants={itemVariants}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5J412cXeQ5g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
