//import React, { Component } from 'react'
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types'

// export class Navbar extends Component {
const Navbar = () => {
  //   static propTypes = {}

  //render() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
        {/* <img src="./newsmonkey-logo.png" style={{margin:'5px'}} alt="Bootstrap" width="50" height="50"/> */}

        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: "#eb1a55", fontSize: "30px" }}
          >
            <strong>NewsMonkey</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item"></li>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/business"
              >
                <strong>Business</strong>
              </Link>
              <li />
              <li className="nav-item"></li>{" "}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/entertainment"
              >
                <strong>Entertainment</strong>
              </Link>
              <li />
              <li className="nav-item"></li>{" "}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/general"
              >
                <strong>General</strong>
              </Link>
              <li />
              <li className="nav-item"></li>{" "}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/health"
              >
                <strong>Health</strong>
              </Link>
              <li />
              <li className="nav-item"></li>{" "}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/science"
              >
                <strong>Science</strong>
              </Link>
              <li />
              <li className="nav-item"></li>{" "}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/sports"
              >
                <strong>Sports</strong>
              </Link>
              <li />
              <li className="nav-item"></li>{" "}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/technology"
              >
                <strong>Technology</strong>
              </Link>
              <li />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
