import React from 'react';

function Resume() {

  return (
    <section className="resume">
      <h1 className = "page-header">Resume</h1>
      <div className = "resume-text">
        <h3>Download my resume <a href = {require("../../assets/Resume.pdf").default} download="Resume.pdf"> here </a></h3>
        <div className = "resume-filler">
          <h6>Languages: </h6>
          <h5>Python, Javascript, HTML/CSS, React, Excel</h5>
        </div>
        <div className = "resume-filler">
          <h6>Frameworks: </h6>
          <h5>MongoDB, Express.js, React.js, Redux, Node.js, GraphQL, MySQL</h5>
        </div>
        <div className = "resume-filler">
          <h6>Coursework: </h6>
          <h5>Organic Chemistry, Chemistry, Business, Excel, Acounting, Health Care, Finance</h5>
        </div>
        <div className = "resume-filler">
          <h6>Personal Skills: </h6>
          <h5>Works Well with Others, Friendly, Reliable</h5>
        </div>
        <div className = "resume-filler">
          <h6>Research: </h6>
          <h5>Brazil Missionary, Homeless Ministries, Liquid Metal Research, Health Care Law</h5>
        </div>
      </div>
    </section>
  );
}

export default Resume;