import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning px-2 font-weight-bold ">
      <button
        className="navbar-toggler px-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        // aria-controls="navbarSupportedContent"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown px-2">
            <Link
              style={{
                color: "black",
                textDecoration: "none",
                backgroundcolor: "black",
              }}
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item dropdown px-2">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/signup"
            >
              Sign-Up
            </Link>
          </li>
          <li className="nav-item dropdown px-2">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/login"
            >
              Login
            </Link>
          </li>
          <li className="nav-item dropdown px-2">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
