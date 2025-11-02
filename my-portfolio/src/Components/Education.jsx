import React from 'react';

function Education() {
  return (
    <section id="education" style={{height: "100vh", padding: "2rem"}}>
      <h2>My Education</h2>
      <div className="cards-container">
        
        <div className="card">
          <h3>2019 High School</h3>
          <p>
            A responsive portfolio built with React and CSS to showcase my
            projects and skills.
          </p>
        </div>

        <div className="card">
          <h3>2020-2022 Witwatersrand University</h3>
          <p>
            A real-time chat app using React and Node.js with user
            authentication and message updates.
          </p>
        </div>

        <div className="card">
          <h3>2024-2025 WeThinkCode_</h3>
          <p>
            A productivity app for managing daily tasks with local storage
            support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
