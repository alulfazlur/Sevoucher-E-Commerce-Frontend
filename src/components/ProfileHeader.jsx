import React from "react";
import { Link } from "react-router-dom";

const ProfileHeader = (props) => {
  return (
    <React.Fragment>
      <div
        className="collapse navbar-collapse nav-profile"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle mr-lg-5"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="avatar"
                alt="avatar"
                src={require("../images/ava.jpeg")}
                // src={props.avatar}
              />
            </Link>
            <div
              className="dropdown-menu mr-lg-auto nav-avatar-drop"
              aria-labelledby="navbarDropdown"
            >
              <p>
                <Link to="/profile" className="dropdown-item signin">
                  {/* {props.dataUser.name} */}
                  Profile
                </Link>
              </p>
              <hr />
              <p>
                <Link
                  to="/signin"
                  onClick={props.doLogOut}
                  className="dropdown-item"
                >
                  Logout
                </Link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ProfileHeader;
