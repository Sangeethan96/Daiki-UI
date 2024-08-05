import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import NavBar from './components/Navbar';
import Team from './components/Team';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;