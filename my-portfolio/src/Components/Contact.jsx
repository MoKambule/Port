import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{height: "100vh", padding: "2rem"}}>
      <h1>My contact</h1>
      <div className="cards-container">
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p>
            Feel free to reach out to me for collaboration, opportunities, or just to connect!
          </p>
          <ul>
            <li><strong>Email:</strong> mokgethwa@example.com</li>
            <li><strong>Phone:</strong> +27 123 456 7890</li>
            <li><strong>LinkedIn:</strong> linkedin.com/in/mokgethwa</li>
            <li><strong>GitHub:</strong> github.com/mokgethwa</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
