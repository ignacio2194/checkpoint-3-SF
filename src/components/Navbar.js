
import React from "react";

import logo from "../assets/bookstorelogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar  ">
      <nav className="navbar navbar-expand-lg  navbar-dark  w-100">
        <div className="container-fluid">
          <img src={logo} alt='logo' width="130"></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* elements of colapse menu*/}
    <div className="collapse navbar-collapse  " id="menu">
    <ul className="navbar-nav  navbar-light ms-auto text-light">

        <Link to='/createbook' className="text-light ms-auto">
        <li className="nav-item  m-3">Add book</li>
        </Link>
   
      <li className="nav-item ms-auto m-3">Login</li>
      <li className="nav-item ms-auto m-3">Register</li>
    </ul>
    </div>
        </div>
       
      </nav>
    </div>
  );
};

export default Navbar;
