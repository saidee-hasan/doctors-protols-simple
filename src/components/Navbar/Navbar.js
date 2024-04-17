import React from "react";
import { faClock } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-white">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link  mr-5" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mr-5 " href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mr-5 " href="#">
                Dental Services
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white mr-5" href="#">
                Reviews
                <faClock></faClock>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mr-5 " href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mr-5 disabled" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
