import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Education from './Components/Education';
import Certifications from './Components/Certifications';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
