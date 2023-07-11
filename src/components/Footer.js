import React from 'react';
import github_logo from "../assets/github_logo.svg";
import pantanal_logo from "../assets/pantanal_logo.svg";
import "../styles/footer.css";
import "../styles/global.css";

function Footer() {
  return (
    <footer>
      <a href="https://pantanal.dev" target="_blank" rel="noopener noreferrer">
        <img src={pantanal_logo} alt="Pantanal Logo" className="pantanal_logo" />
      </a>
      <a href="https://github.com/4Banks" target="_blank" rel="noopener noreferrer">
        <img src={github_logo} alt="Github Logo" className="github-logo" />
      </a>
    </footer>
  );
}

export default Footer;
