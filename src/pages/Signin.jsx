import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { doLogIn, changeInputUser } from "../store/actions/userAction";

class SignIn extends Component {
  postLogin = async () => {
    await this.props.doLogIn();
    // console.warn("storage login", localStorage.getItem("login_status"));
    if (localStorage.getItem("login_status")) {
      this.props.history.push("/profile");
    }
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
      const message = this.props.location.state
        ? this.props.location.state.message
        : "";

      return (
        <React.Fragment>
          <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins signin">
            <div className="wrapper wrapper--w780">
              <div className="card card-3">
                <div className="card-heading"></div>
                <div className="card-body">
                  <h2 className="title">Sign In</h2>
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
                    <div className="p-t-10">
                      <button
                        className="btn btn--pill btn--green"
                        // onClick={() => this.props.doLogIn()}
                        onClick={() => this.postLogin()}
                      >
                        Sign In
                      </button>
                      <p style={{color:"white", marginTop : "20px"}}>Didn't have have an account yet? <br/> <a href="/signup" style={ { color: "rgb(255, 145, 0)" }}>Sign Up</a></p>
                      <p style={{ color: "red", marginTop: "10px" }}>
                        {message}
                      </p>
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
  changeInput: changeInputUser,
  doLogIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
