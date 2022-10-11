
import React from "react";

import logo from "../assets/bookstorelogo.png";
const Navbar = () => {
  return (
    <div className="navbar  ">
      <nav className="navbar navbar-expand-lg  navbar-dark  w-100">
        <div className="container-fluid">
          <img src={logo} width="130"></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* elements of colapse menu*/}
    <div className="collapse navbar-collapse  " id="menu">
    <ul className="navbar-nav  navbar-light ms-auto text-light">
      <li className="nav-item ms-auto m-2">Create</li>
      <li className="nav-item ms-auto m-2">Update</li>
      <li className="nav-item ms-auto m-2">Delete</li>
      <li className="nav-item ms-auto m-2">Login</li>
      <li className="nav-item ms-auto m-2">Register</li>
    </ul>
    </div>
        </div>
       
      </nav>
    </div>
  );
};

export default Navbar;
