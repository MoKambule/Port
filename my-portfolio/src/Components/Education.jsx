import React from 'react';

function Education() {
  return (
    <section id="education" style={{height: "100vh", padding: "2rem"}}>
      <h2>My Education</h2>
      <div className="cards-container">
        
        <div className="card">
          <h3>2019 High School</h3>
          <p>
           During high school, I pursued a science stream, which helped me develop a strong
            analytical and problem-solving mindset. Alongside academics, I was actively involved
             in various extracurricular activities. These experiences taught me teamwork, 
             leadership, and time management, and helped me build a well-rounded foundation that 
             complements my technical skills and drives my continuous learning.
          </p>
        </div>

        <div className="card">
          <h3>2020-2022 Witwatersrand University</h3>
          <p>
          During my tertiary studies in Biomedical Engineering, I was first formally introduced
           to coding. I took courses in software development using C++ and learned about microprocessors,
            which gave me a foundational understanding of programming and system logic. Although I did 
            not fully immerse myself in coding at the time, I recognized its value and potential, and it 
            sparked a determination to continue learning and developing my programming skills beyond the 
            curriculum. This experience laid the groundwork for my ongoing interest in software development
          </p>
        </div>

        <div className="card">
          <h3>2024-2025 WeThinkCode_</h3>
          <p>
            At Wethinkcode, my first year focused on building a strong foundation in Python, followed by Java
             in the second year, where I deepened my understanding of object-oriented programming and software
              design principles. Currently, in my elective, I am gaining hands-on experience in test automation. 
              Throughout the program, group projects introduced me to Agile development methodologies, where I 
              learned collaborative workflows, sprint planning, and iterative development, strengthening both my 
              technical and teamwork skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
