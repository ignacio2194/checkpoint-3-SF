import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar  ">
      <nav className="navBar_container d-flex justify-content-evenly">
        <div className="navBar_container-logo">
          <img
            src="https://www.bookweb.org/sites/default/files/BookshopLogoTeaserJanuary2019.png"
            alt=""
         
          />
        </div>
        <div className="navbar-container-menu">{<GiHamburgerMenu />}</div>
      </nav>
    </div>
  );
};

export default Navbar;
