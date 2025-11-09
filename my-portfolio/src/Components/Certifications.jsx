import React from 'react';
import GenAi from '../assets/Certificates/GenAi.png';
import IntroSelenium from '../assets/Certificates/IntroToSelenium.png';
import IntroCoding from '../assets/Certificates/introductionToCoding.png';
import Responsive from '../assets/Certificates/ResponviWebDev.png';
import VA from '../assets/Certificates/virtualAssistance.png';
import WebDev from '../assets/Certificates/WebDev.png';
import './components.css';

function Certifications() {
  return (
    <section id="certifications" style={{ height: "100vh", padding: "2rem" }}>
      <h1>My Certifications</h1>

      <div className="cards-container">
        <div className="card">
          <h3>Gen AI Certificate</h3>
          <img src={GenAi} alt="Gen AI Certificate" />
        </div>

        <div className="card">
          <h3>Intro to Selenium</h3>
          <img src={IntroSelenium} alt="Intro to Selenium Certificate" />
        </div>

        <div className="card">
          <h3>Introduction to Coding</h3>
          <img src={IntroCoding} alt="Introduction to Coding Certificate" />
        </div>

        <div className="card">
          <h3>Responsive Web Dev</h3>
          <img src={Responsive} alt="Responsive Web Development Certificate" />
        </div>

        <div className="card">
          <h3>Virtual Assistance</h3>
          <img src={VA} alt="Virtual Assistance Certificate" />
        </div>

        <div className="card">
          <h3>Web Development</h3>
          <img src={WebDev} alt="Web Development Certificate" />
        </div>
      </div>
    </section>
  );
}

export default Certifications;
