import React ,{ useEffect } from 'react';
import './Team.css';
import { motion } from 'framer-motion';
import teamImage from '../assets/Images/team.png'; // Importing the header image
import img1 from '../assets/Images/Team/nakumara.png';
import img2 from '../assets/Images/Team/mine-sa.png';
import img3 from '../assets/Images/Team/ran.png';
import img4 from '../assets/Images/Team/sada.png';
import img5 from '../assets/Images/Team/sirisena.png';
import img6 from '../assets/Images/Team/mr-saman.png';
import img7 from '../assets/Images/Team/akila.png';
import img8 from '../assets/Images/Team/madhu.png';

const teamMembers = [
  {
    name: 'Yosuke Nakamura',
    title: 'Managing Director Daiki Lanka (PVT) Ltd',
    image: img1
  },
  {
    name: 'Soichiro Mine',
    title: 'Manager Daiki Lanka (PVT) Ltd.',
    image: img2
  },
  {
    name: 'Ranil Nimalasena',
    title: 'Manager Daiki Lanka (PVT) Ltd.',
    image: img3
  },
  {
    name: 'M.A.L. Sandaruwan',
    title: 'Accountant Daiki Lanka (PVT) Ltd.',
    image: img4
  },
  {
    name: 'A.A. Sirisena',
    title: 'Financial Adviser Daiki Lanka (PVT) Ltd.',
    image: img5
  },
  {
    name: 'Saman De Silva',
    title: 'Legal Adviser Daiki Lanka (PVT) Ltd..',
    image: img6
  },
  {
    name: 'Akila Dulanjali',
    title: 'Japanese Lecturer Daiki Lanka (PVT) Ltd.',
    image: img7
  }
  ,{
    name: 'M.S.A. Madhushani',
    title: 'Japanese Lecturer Daiki Lanka (PVT) Ltd.',
    image: img8
  }
];

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, when: 'beforeChildren', staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
    className="team-page"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <motion.div className="team-header" variants={itemVariants}>
      <h1>Daiki Team</h1>
      <p>Innovative. Passionate. Committed.</p>
      <div className="team-image">
        <img src={teamImage} alt="Team" />
      </div>
    </motion.div>
    <motion.div className="team-search" variants={itemVariants}>
      <div className="team-search-group">
        <label>Search by Team</label>
        <select>
          <option>Senior Leadership</option>
          {/* Add other team options here */}
        </select>
      </div>
      <div className="team-search-group">
        <label>Search by Name</label>
        <input type="text" placeholder="Search" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M10,17C6.13,17,3,13.87,3,10S6.13,3,10,3s7,3.13,7,7-3.13,7-7,7Zm0-12C7.24,5,5,7.24,5,10s2.24,5,5,5,5-2.24,5-5S12.76,5,10,5Zm11,16l-4.35-4.35c.89-1.1,1.35-2.48,1.35-3.9,0-3.87-3.13-7-7-7s-7,3.13-7,7,3.13,7,7,7c1.42,0,2.8-.46,3.9-1.35L21,21Zm-4-6.41c-1.19,1.19-2.76,1.86-4.41,1.86-3.31,0-6-2.69-6-6s2.69-6,6-6,6,2.69,6,6c0,1.65-.67,3.22-1.86,4.41Z"
            />
          </svg>
        </button>
      </div>
    </motion.div>
    <motion.div className="team-list" variants={itemVariants}>
      <h2>Senior Leadership Team</h2>
      <motion.div className="team-members">
        {teamMembers.map((member, index) => (
          <motion.div key={index} className="team-member" variants={itemVariants}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
);
}


export default Team;
