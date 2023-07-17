import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar container">
      <span className="logo">
        <img src="./images/logo.svg" alt="logo" />
      </span>
      <nav className="navigation">
        <div className="nav-links">
          <a href="">features</a>
          <a href="">pricing</a>
          <a href="">resources</a>
        </div>
        <div className="user-options">
          <button className="btn-small btn login">login</button>
          <button className="btn-small btn signup">sign up</button>
        </div>
      </nav>
      <FaBars className="bars" />
    </header>
  );
};

export default Navbar;
