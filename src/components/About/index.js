import React from 'react';

function About() {

  return (
    <section className="my-5">
      <h1 className="page-header">About Me</h1>
      <div className = "about-container">
        <div className="about-image">
          <img src={require("../../assets/pfp.jpeg").default} alt="Profile Picture" />
        </div>
        <h3 className="about-description">
              I'm have lately graduated with a Bussiness Administration graduate from Pacific Union College. 
              I have experience in full-stack web development, Business Management, and Real Estate Management. 
              I love soccer, videogames, and TV.
          </h3>
      </div>
    </section>
  );
}

export default About;
