import { logDOM } from "@testing-library/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/bookstorelogo.png";
const Navbar = () => {
  return (
    <div className="navbar  ">
      <nav className="navbar navbar-expand-lg container-fluid ">
        <div className="container-fluid">
          <div className="image_logo">
          <img src={logo} width="130" height="100"></img>
          </div>
       <div>
       <button
            className="navbar-toggler ms-10"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <span className="navbar-toggler-icon"></span>
          </button> 
       </div>
          
          
          <div className="collapse " id="navbarNav">
            <ul className="navbar-nav navbar-collapse">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
