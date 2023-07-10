import React from 'react';
import github_logo from "../assets/github_logo.svg";
import pantanal_logo from "../assets/pantanal_logo.svg";
import "../styles/footer.css";
import "../styles/global.css";
function Footer() {
  return (
    <footer>
        <img src={pantanal_logo} alt="Pantanal Logo" className="pantanal_logo" />
        <img src={github_logo} alt="Github Logo" className="github-logo" />
    </footer>
  );
}

export default Footer;