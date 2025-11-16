import React from 'react';
import todo from '../assets/projects/molearn-todo.png';
import weather from '../assets/projects/weatherApp.png';



function Projects() {
  return (
    <section id="projects" style={{height: "100vh", padding: "2rem"}}>
      <h1>My Projects</h1>
       
      <div className="cards-container">
        
        <div className="card">
          <h3>TaskMannger</h3>
          <p>
          <img src={todo} alt="Todo-app-snippet" />
          </p>

        <h2>
          <a href="https://molu-forecast.netlify.app/" target="_blank" rel="noreferrer">Web react-link</a>
        </h2>
        </div>

        <div className="card">
          <h3>WeatherApp</h3>
          <p>
       
          <img src={weather} alt="weather-app-snippet" />
          
          </p>
          <h2>
            <a href="https://molearn-todo-app.netlify.app/" target="_blank" rel="noreferrer">web react-link</a>
          </h2>
        </div>

     
      </div>
    </section>
  );
}

export default Projects;
