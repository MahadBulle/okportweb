import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/320830186_716016596533598_1247553631676251335_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=DzXGEV7MP-sAX_oBpPh&_nc_ht=scontent.fmgq1-2.fna&oh=00_AfAGI6AugXDXNVtix-26RYIV9p21ZJagvFZOcA9KU9BFxw&oe=6527D3DB"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Full Stack Developer adept in working in both front-end and
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
