import React from "react";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest, BsInstagram } from "react-icons/bs";
// import Logo from "../../public/images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="logo">
          <img src="./images/logo-white.svg" alt="logo" />
        </span>
        <nav className="navigation">
          <ul className="nav-links">
            <li className="lead-link">
              <p>features</p>
            </li>
            <li className="nav-link">
              <a href="">link shortening</a>
            </li>
            <li className="nav-link">
              <a href="">branded links</a>
            </li>
            <li className="nav-link">
              <a href="">analytics</a>
            </li>
          </ul>
          <ul className="nav-links">
            <li className="lead-link">
              <p>resources</p>
            </li>
            <li className="nav-link">
              <a href="">blog</a>
            </li>
            <li className="nav-link">
              <a href="">developer</a>
            </li>
            <li className="nav-link">
              <a href="">support</a>
            </li>
          </ul>
          <ul className="nav-links">
            <li className="lead-link">
              <p>company</p>
            </li>
            <li className="nav-link">
              <a href="">about</a>
            </li>
            <li className="nav-link">
              <a href="">our team</a>
            </li>
            <li className="nav-link">
              <a href="">careers</a>
            </li>
            <li className="nav-link">
              <a href="">contact</a>
            </li>
          </ul>
        </nav>
        <div className="social-icons">
          <AiFillFacebook />
          <AiOutlineTwitter />
          <BsPinterest />
          <BsInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
