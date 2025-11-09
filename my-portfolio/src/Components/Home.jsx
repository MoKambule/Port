import React from 'react';
import './components.css';
import moPicture from './luaghingMo2.JPG';

function Home() {
  return (
<section id="home" style={{ height: "100vh", padding: "0 2rem 2rem 2rem" }}>
      <div className="row">
        <div className="column" id="aboutme">
          <h1>Hi, I'm Mokgethwa Kambule</h1>
          <p>
            I am a front-end developer with experience in Java, Python, JavaScript, React, HTML, CSS, and Node.js.
            I have also looked into MongoDB for backend integration. My current interests include learning C# and
            expanding my knowledge of software quality assurance (QA). I've been a student at WeThinkCode for almost
            a year, and my projects at the institution have mostly focused on object-oriented programming (OOP) and
            Java client-server architecture.
          </p>
        </div>
        <div className="column" id="mypicture">
          <img src={moPicture} alt="A picture of Mo"  />
        </div>
      </div>
    </section>
  );
}

export default Home;
