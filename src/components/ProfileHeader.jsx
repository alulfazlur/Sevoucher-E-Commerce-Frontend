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
            <Link className="nav-link" to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
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
              {localStorage.getItem("status") === "buyer" ? (

              <img
                className="avatar"
                alt="avatar"
                // src={require("../images/ava.jpeg")}
                src={props.dataUser.avatar}
              />
              ) : (
                <img
                className="avatar"
                alt="avatar"
                src={require("../images/ava.jpeg")}
                // src={props.dataUser.avatar}
              />
              )}
            </Link>
            <div
              className="dropdown-menu mr-lg-auto nav-avatar-drop"
              aria-labelledby="navbarDropdown"
            >
              <p>
                <Link to="/profile" className="dropdown-item signin">
                  {props.dataUser.name}
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
              {localStorage.getItem("status") === "seller" ? (
                <p><Link
                  to="/admin"
                  className="dropdown-item"
                  >Dashboard
                </Link>
                </p>
              ) : (
                false
              )}
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ProfileHeader;
