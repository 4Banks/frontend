import React from "react";
import github_logo_dark from "../assets/github_logo_dark.svg";
import linkedin from "../assets/linkedin.svg";
import  "../styles/about-us-profile.css";
function AboutUsProfile({ name, description, url_photo, link_linkedin, link_github }) {
    return (
      <div className="about_us_profile">
        <div className="about_us_profile_container">
          <div className="about_us_profile_names_links">
              <p className="about_us_profile_name">{name}</p>
              <a href={link_linkedin} target="_blank" rel="noreferrer" className="linkedin-logo" >
                <img src={linkedin} alt="Linkedin Logo"/>
              </a>
              <a href={link_github} target="_blank" rel="noreferrer" className="github-logo">
                <img src={github_logo_dark} alt="Github Logo" />
              </a>
          </div>
          <p className="about_us_profile_description">
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
          </p>
          </div>
          <div className="about_us_photo_container">
          <img src={url_photo} alt="User" className="about_us_profile_photo" />
          </div>
      </div>
    );
  }
    
export default AboutUsProfile;