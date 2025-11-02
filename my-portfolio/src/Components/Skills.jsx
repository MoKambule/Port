import React from "react";
import "./components.css";

function Skills() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB",
    "C#",
    "QA Testing"
  ];

  return (
    <section id="skills" style={{ height: "100vh",padding: "2rem" }}>
      <h1>My Skills</h1>
      <div className="skills-row">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>

       <div className="cards-container-importantskill"style={{ padding: "2rem" }}>
        
        <div className="importantskill">
          <h3>Python</h3>
          <p>
            A responsive portfolio built with React and CSS to showcase my
            projects and skills.
          </p>
        </div>

        <div className="importantskill">
          <h3>Java</h3>
          <p>
            A real-time chat app using React and Node.js with user
            authentication and message updates.
          </p>
        </div>

        <div className="importantskill">
          <h3>Test Automation</h3>
          <p>
            A productivity app for managing daily tasks with local storage
            support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
