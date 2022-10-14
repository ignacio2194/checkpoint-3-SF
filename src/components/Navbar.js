import React from "react";
import '../styles/Navbar.css'
import logo from "../assets/bookstorelogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/"><img src={logo} alt="logo" width="190"></img></Link>
        <button className="navbar-toggler border-warning bg-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end bg-secondary" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close bg-warning" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-dark ms-auto text-light">
              <Link to="/createbook" className="text-light ms-auto">
                <li className="btnNavbar">Add book</li>
              </Link>
              <Link to="/login" className="text-light ms-auto">
                <li className="btnNavbar">Login</li>
              </Link>
              <Link to="/register" className="text-light ms-auto">
              <li className="btnNavbar">Register</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    );
  };
    {/* <div className="navbar">
      <nav className="navbar navbar-expand-lg  navbar-dark  w-100">
        <div className="container-fluid">
          <Link to="/"><img src={logo} alt="logo" width="190"></img></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menu"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav  navbar-light ms-auto text-light">
              <Link to="/createbook" className="text-light ms-auto">
                <li className="btnNavbar">Add book</li>
              </Link>
              <Link to="/login" className="text-light ms-auto">
                <li className="btnNavbar">Login</li>
              </Link>
              <Link to="/register" className="text-light ms-auto">
              <li className="btnNavbar">Register</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div> */}

export default Navbar;
