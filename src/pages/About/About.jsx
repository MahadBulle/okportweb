import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import sawirkeyga from "../../assets/img/sawirkeyga.jpeg";
import nadiif from "../../assets/img/nadiif.jpg"
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={nadiif}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Full Stack web & app Developer adept in working in both front-end and
                back-end development processes. Highly skilled in programẤ
                ming design, development, and implementation of functional
                specifications.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
