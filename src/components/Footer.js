import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../styles/Footer.css";
import logoAvalith from '../assets/avalith_logo.png'
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLinkContainer">
        <div className="footerLinks">
          <a className="link" href="https://www.linkedin.com/in/georginabosque/">
            {<AiFillLinkedin />} Georgina Bosque
          </a>
          <a className="link" href="https://www.linkedin.com/in/ignaciobntz/">
            {<AiFillLinkedin />} Ignacio Benitez
          </a>
        </div>
        <div className="footerLinks">
          <a className="link" href="https://https://www.linkedin.com/in/francoyunes/">
            {<AiFillLinkedin />} Franco Yunes
          </a>
          <a className="link" href="https://www.linkedin.com/in/ezequiel-rango/">
            {<AiFillLinkedin />} Ezequiel Rango
          </a>
        </div>
        <div className="footerLinks">
          <a className="link" href="https://www.linkedin.com/in/foclemens/">
            {<AiFillLinkedin />} Fernando Clemens
          </a>
          <a className="link" href="https://github.com/ignacio2194/checkpoint-3-SF/tree/main">
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