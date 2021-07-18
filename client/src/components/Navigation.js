import { Alert } from "bootstrap";
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
              to="/movie"
            >
              Movies
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

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 float-right"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Navigation;
