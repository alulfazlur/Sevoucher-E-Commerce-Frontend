import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import {
  doRegisterGame,
  changeInputGame,
  deleteGame,
} from "../store/actions/gameAction";
import {
  doRegisterVoucher,
  changeInputVoucher,
  deleteVoucher
} from "../store/actions/voucherAction";

class AdminDashboard extends Component {
  inputGame = async () => {
    await this.props.doRegisterGame();
    this.props.history.push("/admin");
  };
  delGame = async () => {
    await this.props.deleteGame();
    this.props.history.push("/admin");
  };
  inputVoucher = async () => {
    await this.props.doRegisterVoucher();
    this.props.history.push("/admin");
  };
  delVoucher = async () => {
    await this.props.deleteVoucher();
    this.props.history.push("/admin");
  };

  render() {
    if (localStorage.getItem("status") === "buyer") {
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
          <Header {...this.props} />
          <div className="main">
            <div className="container mb-5">
              <div className="row col-lg mb-3">
                <h1>GAME</h1>
              </div>
            </div>

            {/* ===============================REGISTER A GAME=================================== */}

            <div className="container mb-5">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading1">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#createGame"
                        aria-expanded="false"
                        aria-controls="createGame"
                      >
                        POST
                        <i className="fas fa-caret-down ml-2" />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="createGame"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div className="panel-body">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div class="form-group">
                              <label for="gameName">Game Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="gameName"
                                name="gameName"
                                aria-describedby="emailHelp"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="tileUrl">Tile</label>
                              <input
                                type="text"
                                class="form-control"
                                id="tileUrl"
                                name="tile"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="bannerUrl">Banner</label>
                              <input
                                type="text"
                                class="form-control"
                                name="banner"
                                id="bannerUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="gamePublisher">Publisher</label>
                              <input
                                type="text"
                                class="form-control"
                                name="publisher"
                                id="gamePublisher"
                                placeholder="input the publisher"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="gameDescription">Description</label>
                              <textarea
                                class="form-control"
                                id="gameDescription"
                                name="description"
                                placeholder="input the description"
                                rows="7"
                                cols="50"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div class="form-group">
                              <label for="gplayUrl">Google Play Website</label>
                              <input
                                type="text"
                                class="form-control"
                                name="gplay"
                                id="gplayUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="appstoreUrl">App Store Website</label>
                              <input
                                type="text"
                                class="form-control"
                                name="appstore"
                                id="appstoreUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="bannerUrl">Website</label>
                              <input
                                type="text"
                                class="form-control"
                                name="website"
                                id="bannerUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="communityUrl">Community</label>
                              <input
                                type="text"
                                class="form-control"
                                name="community"
                                id="communityUrl"
                                placeholder="input the publisher"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <fieldset class="form-group">
                              <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0">
                                  Category
                                </legend>
                                <div class="col-sm-10">
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="category"
                                      id="gridRadios1"
                                      value="mobile"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      class="form-check-label"
                                      for="gridRadios1"
                                    >
                                      Mobile
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="category"
                                      id="gridRadios2"
                                      value="pc"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      class="form-check-label"
                                      for="gridRadios2"
                                    >
                                      PC
                                    </label>
                                  </div>
                                  <div class="form-check disabled">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="category"
                                      id="gridRadios3"
                                      value="credits"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      class="form-check-label"
                                      for="gridRadios3"
                                    >
                                      Credits
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <fieldset class="form-group">
                              <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0">
                                  Promo
                                </legend>
                                <div class="col-sm-10">
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="promo"
                                      id="gridRadios1"
                                      value="true"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      class="form-check-label"
                                      for="gridRadios1"
                                    >
                                      True
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="promo"
                                      id="gridRadios2"
                                      value="false"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      class="form-check-label"
                                      for="gridRadios2"
                                    >
                                      False
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <div class="form-group">
                              <label for="discount">Discount</label>
                              <input
                                type="text"
                                class="form-control"
                                name="discount"
                                id="discount"
                                placeholder="input the discount"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                          </div>
                          <div className="row col justify-content-center">
                            <button
                              type="submit"
                              class="btn btn-warning"
                              onClick={() => this.inputGame()}
                            >
                              Post
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===============================DELETE A GAME=================================== */}

            <div className="container mb-5">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading1">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#deleteGame"
                        aria-expanded="false"
                        aria-controls="deleteGame"
                      >
                        DELETE
                        <i className="fas fa-caret-down ml-2" />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="deleteGame"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div className="panel-body">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                          <div className="col-lg">
                            <div class="form-group">
                              <label for="gameNameDel">Game Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="gameNameDel"
                                name="gameNameDel"
                                aria-describedby="emailHelp"
                                placeholder="input the game name"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="row col justify-content-center">
                              <button
                                type="submit"
                                class="btn btn-warning"
                                onClick={() => this.delGame()}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===============================VOUCHER=================================== */}

            <div className="container mb-5">
              <div className="row col-lg mb-3">
                <h1>VOUCHER</h1>
              </div>
            </div>
            {/* ===============================POST A VOUCHER=================================== */}
            
            <div className="container mb-5">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading1">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#postVoucher"
                        aria-expanded="false"
                        aria-controls="postVoucher"
                      >
                        POST
                        <i className="fas fa-caret-down ml-2" />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="postVoucher"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div className="panel-body">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                          <div className="col-lg">
                            <div class="form-group">
                              <label for="gameVoucherName">Game Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="gameVoucherName"
                                name="gameVoucherName"
                                aria-describedby="emailHelp"
                                placeholder="input the game name"
                                onChange={(e) => this.props.changeInputVoucher(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="voucherName">Voucher Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="voucherName"
                                name="voucherName"
                                aria-describedby="emailHelp"
                                placeholder="input the voucher name"
                                onChange={(e) => this.props.changeInputVoucher(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="voucherPrice">Price</label>
                              <input
                                type="text"
                                class="form-control"
                                id="voucherPrice"
                                name="voucherPrice"
                                aria-describedby="emailHelp"
                                placeholder="input price"
                                onChange={(e) => this.props.changeInputVoucher(e)}
                              />
                            </div>
                            <div className="row col justify-content-center">
                              <button
                                type="submit"
                                class="btn btn-warning"
                                onClick={() => this.inputVoucher()}
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===============================DELETE A VOUCHER=================================== */}
            
            <div className="container mb-5">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading1">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#delVoucher"
                        aria-expanded="false"
                        aria-controls="delVoucher"
                      >
                        DELETE
                        <i className="fas fa-caret-down ml-2" />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="delVoucher"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div className="panel-body">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                          <div className="col-lg">
                            <div class="form-group">
                              <label for="gameNameDel">Game Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="gameNameDel"
                                name="gameNameDel"
                                aria-describedby="emailHelp"
                                placeholder="input the game name"
                                onChange={(e) => this.props.changeInputVoucher(e)}
                              />
                            </div>
                            <div class="form-group">
                              <label for="voucherNameDel">Voucher Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="voucherNameDel"
                                name="voucherNameDel"
                                aria-describedby="emailHelp"
                                placeholder="input the voucher name"
                                onChange={(e) => this.props.changeInputVoucher(e)}
                              />
                            </div>
                            
                            <div className="row col justify-content-center">
                              <button
                                type="submit"
                                class="btn btn-warning"
                                onClick={() => this.delVoucher()}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
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
  doRegisterGame,
  changeInputGame,
  deleteGame,
  doRegisterVoucher,
  changeInputVoucher,
  deleteVoucher
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
