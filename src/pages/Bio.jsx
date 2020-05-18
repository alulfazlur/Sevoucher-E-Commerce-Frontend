import React, { Component } from "react";
import { connect } from "react-redux";

import { changeInputUser, doEditBioBuyer,getBio } from "../store/actions/userAction";

class Bio extends Component {
  componentDidMount = async () => {
    await this.props.getBio();
  };

  postEdit = async () => {
    await this.props.doEditBioBuyer();
    this.props.history.push("/profile");
  };

  goHome = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <React.Fragment>
        <div className="page-wrapper bg-gra-02 p-t-180 p-b-100 font-poppins signin">
            <div className="card card-3">
              <div className="card-heading"></div>
              <div className="card-body">
                <h2 className="title">Edit your Biodata</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder={this.props.dataUser.name}
                      name="name"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder={this.props.dataUser.email}
                      name="email"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Avatar"
                      name="avatar"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder={this.props.dataUser.address}
                      name="address"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder={this.props.dataUser.phone}
                      name="phone"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="p-t-10">
                    <button
                      className="btn btn--pill btn--green mr-5 mt-3"
                      onClick={() => this.postEdit()}
                    >
                      Done!
                    </button>
                    <button
                      className="btn btn--pill btn--green ghost mt-3"
                      onClick={() => this.goHome()}
                    >
                      Not Now! Go Home
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.user.login_status,
    dataUser: state.user,

  };
};

const mapDispatchToProps = {
  changeInput : changeInputUser,
  doEditBioBuyer,
  getBio
};

export default connect(mapStateToProps, mapDispatchToProps)(Bio);
