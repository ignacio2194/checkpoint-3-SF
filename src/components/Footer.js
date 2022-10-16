import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../styles/Footer.css";
import logoAvalith from '../assets/avalith_logo.png'
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLinkContainer">
        <div className="footerLinks">
          <a className="link" href="https://www.linkedin.com/in/ignaciobntz/">
            {<AiFillLinkedin />} Georgina Bosque
          </a>
          <a className="link" href="https://www.linkedin.com/in/ignaciobntz/">
            {<AiFillLinkedin />} Ignacio Benitez
          </a>
        </div>
        <div className="footerLinks">
          <a className="link" href="https://www.linkedin.com/in/ignaciobntz/">
            {<AiFillLinkedin />} Franco Yunes
          </a>
          <a className="link" href="https://www.linkedin.com/in/ignaciobntz/">
            {<AiFillLinkedin />} Ezequiel Rango
          </a>
        </div>
        <div className="footerLinks">
          <a className="link" href="https://www.linkedin.com/in/ignaciobntz/">
            {<AiFillLinkedin />} Fernando Clemens
          </a>
          <a className="link" href="https://www.linkedin.com/in/ignaciobntz/">
          {<AiFillGithub />} Repositorio
          </a>
        </div>
      </div>
      <div className="footerLogo">
        <img src={logoAvalith} alt='logo Avalith' className="logo"/>
        <p>Skill Factory React 2022</p>
      </div>
    </div>
  );
};

export default Footer;