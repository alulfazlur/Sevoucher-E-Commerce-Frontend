import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { doLogOut, getBio } from "../store/actions/userAction";

class Profile extends Component {
  componentDidMount = async () => {
    await this.props.getBio();
  };

  goHome = () => {
    this.props.history.push("/");
  };

  goBio = () => {
    this.props.history.push("/bio");
  };
  goHistory = () => {
    this.props.history.push("/cart/history");
  };
  logOut = async () => {
    await this.props.doLogOut();
    this.props.history.push("/signin");
  };

  render() {
    if (!localStorage.getItem("login_status")) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "You must sign in first!" },
          }}
        />
      );
    } 
    if (localStorage.getItem("status") !== "buyer") {
      return (
        <Redirect
          to={{
            pathname: "/admin",
          }}
        />
      );
    } 
    else {
      return (
        <React.Fragment>
          <div className="page-wrapper bg-gra-02 profile font-poppins">
            <div className="card-container">
              <span className="pro">PRO</span>
              
              {/* <img src={require("../images/ava.jpeg")} alt="user" /> */}
              <img src={this.props.dataUser.avatar} alt="user" />
              <h3>{this.props.dataUser.name}</h3>
              <h6>{this.props.dataUser.address}</h6>
              <p>{this.props.dataUser.email}</p>
              <div className="buttons mb-5">
                <button className="primary ghost col" onClick={this.goHome}>
                  Home
                </button>
                 <button className="primary ghost col" onClick={this.goBio}>
                  Edit Bio
                </button>
                <button className="primary ghost col" onClick={this.logOut}>
                  Logout
                </button>
                <button className="primary ghost col" onClick={this.goHistory}>
                  Cart History
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getBio,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
