import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { changeInputUser, doSignUpBuyer } from "../store/actions/userAction";

class SignUp extends Component {
  postSignup = async () => {
    await this.props.doSignUpBuyer();
    this.props.history.push("/signin");
  };

  render() {
    if (localStorage.getItem("login_status")) {
      return (
        <Redirect
          to={{
            pathname: "/profile",
          }}
        />
      );
    } else {
    return (
      <React.Fragment>
        <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins signin">
          <div className="wrapper wrapper--w780">
            <div className="card card-3">
              <div className="card-heading"></div>
              <div className="card-body">
                <h2 className="title">Sign Up</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Username"
                      name="userName"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="password"
                      placeholder="Password"
                      name="passWord"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  {/* <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Avatar"
                      name="avatar"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div> */}
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Address"
                      name="address"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="p-t-10">
                    <button
                      className="btn btn--pill btn--green"
                      onClick={() => this.postSignup()}
                    >
                      Sign Up
                    </button>
                    <p style={{color:"white", marginTop : "20px"}}>Already have an account? <a href="/signin" style={ { color: "rgb(255, 145, 0)" }}>Sign In</a></p>
                  </div>
                </form>
              </div>
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
    userName: state.user.userName,
    passWord: state.user.passWord,
    login: state.user.login_status,
  };
};

const mapDispatchToProps = {
  changeInput : changeInputUser,
  doSignUpBuyer
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
