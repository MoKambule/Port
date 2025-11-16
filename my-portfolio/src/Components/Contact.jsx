import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{height: "100vh", padding: "2rem"}}>
      <h1>My contact</h1>
      <div className="cards-container">
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p>
            Feel free to reach out to me for collaboration,work opportunities, or just to connect!
          </p>
          <ul>
            <li><strong>Email:</strong> kambulemokgethwa@gmail.com</li>
            <li><strong>Phone:</strong> +2760 415 8227</li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kambule-mokgethwa/" target='_blank' rel="noreferrer">Kambule-Mokgethwa</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/MoKambule" target='_blank' rel="noreferrer">MoKambule</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
