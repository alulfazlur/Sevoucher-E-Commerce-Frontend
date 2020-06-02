import React from "react";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

const Header = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light py-0 bg-light">
        {/* <div className="container"> */}
        <Link to="/" className="navbar-brand ml-lg-5" >
          <img
            className="navbar-brand"
            src={require("../images/logo/Logo_Full.png")}
            alt="logo"
          />
        </Link>
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
          <ul className="nav navbar-nav navbar-center mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/games">
                Shop
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li> */}
          </ul>
          {localStorage.getItem("login_status") ? (
            <div className="ml-lg-auto mr-lg-5">
              <ProfileHeader {...props} />
            </div>
          ) : (
            <ul className="nav navbar-nav navbar-right mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/signin" className="nav-link">
                  Sign In
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* </div> */}
      </nav>
    </React.Fragment>
  );
};

export default Header;
