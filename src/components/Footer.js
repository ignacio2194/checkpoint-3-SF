import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import "../styles/Footer.css";
import logoAvalith from '../assets/avalith_logo.png'
const Footer = () => {
  return (
    <div className="footer d-flex justify-content-between p-3 container-fluid">
      {/* <div className="footer-container">
        <h4>Contact us</h4>
        <ul className=" list-unstyled">
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/ignaciobntz/">
              {<AiFillLinkedin />} Ignacio Benitez
            </a>
          </li>
          <li>
            {" "}
            <a href="https://https://www.linkedin.com/in/francoyunes/">
              {<AiFillLinkedin />} Franco Yunes
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/foclemens/">
              {<AiFillLinkedin />} Fernando Clemens
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/ezequiel-rango/">{<AiFillLinkedin />} Ezequiel Rango</a>
          </li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/georginabosque/">{<AiFillLinkedin />} Georgina Bosque</a>
          </li>
        </ul>
      </div>
      <div className="text-footer xs">
        <div> <p>Derechos reservados Avalith© skill factory Reactjs 2022</p> </div>
       
      </div>
      <div className="footer_logo ">
        <img src={logoAvalith} alt=""></img>
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="row-4 text-white">
          <ul className=" list-unstyled ">
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/ignaciobntz/">
              {<AiFillLinkedin />} Ignacio Benitez
            </a>
          </li>
          <li>
            {" "}
            <a href="https://https://www.linkedin.com/in/francoyunes/">
              {<AiFillLinkedin />} Franco Yunes
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/foclemens/">
              {<AiFillLinkedin />} Fernando Clemens
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/ezequiel-rango/">{<AiFillLinkedin />} Ezequiel Rango</a>
          </li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/georginabosque/">{<AiFillLinkedin />} Georgina Bosque</a>
          </li>
        </ul>
          </div>
          <div className="row-4 text-white">
          <p>Derechos reservados Avalith© skill factory Reactjs 2022</p> 
          </div>
          <div className="col-4 w-auto mx-auto">
          <img src={logoAvalith}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
