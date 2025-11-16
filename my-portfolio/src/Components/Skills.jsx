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
          I have a strong foundation in Python, working confidently with core data structures 
          such as lists, dictionaries, sets, and maps, as well as implementing algorithms for 
          sorting, searching, and graph-related problems. I understand object-oriented programming,
           error handling, and file management, and I focus on writing clean, efficient, and
          In addition, I place strong emphasis on Test-Driven Development (TDD), using tests to guide 
          implementation, improve code quality, and ensure reliable, predictable behaviour throughout 
          the development process.
          </p>
        </div>

        <div className="importantskill">
          <h3>Java</h3>
          <p>
          I have a basic foundation in Java, with a focus on object-oriented programming principles 
          such as inheritance, encapsulation, polymorphism, and abstraction. I concentrate on designing 
          and implementing robust, modular, and reusable code, with experience in handling exceptions,
           working with collections, and managing file input/output. Alongside this, I’ve built an 
           understanding of backend server–client architecture, learning how servers process requests, 
           handle data, and manage application flow
          </p>
        </div>

        <div className="importantskill">
          <h3>Test Automation</h3>
          <p>
           I have a basic foundation in test automation using C# and .NET, with experience in both GUI and 
           API testing. I focus on creating automated tests to ensure software quality by writing reusable 
           test scripts, handling assertions, and utilizing frameworks like NUnit, Selenium, and RestSharp 
           for API testing. My approach emphasizes building maintainable, efficient, and reliable test suites, 
           while I continue learning and gaining a deeper understanding of automated testing practices within 
           the .NET ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
