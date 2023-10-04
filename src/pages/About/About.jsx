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
                src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/386590646_1695005177686371_7593954392170464747_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=8xxP04cnuBoAX-dryOn&_nc_ht=scontent.fmgq1-2.fna&oh=00_AfBleix5ki5K-ARrLX6-_hphb4uaoOVfxba843aCMWjAbQ&oe=652251F7"
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
