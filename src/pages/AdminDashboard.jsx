import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import { doLogOut, getBio, doDeleteUser } from "../store/actions/userAction";
import {
  doRegisterGame,
  changeInputGame,
  deleteGame,
  doEditGame,
} from "../store/actions/gameAction";
import {
  doRegisterVoucher,
  changeInputVoucher,
  deleteVoucher,
  doEditVoucher,
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
  editGame = async () => {
    await this.props.doEditGame();
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
  editVoucher = async () => {
    await this.props.doEditVoucher();
    this.props.history.push("/admin");
  };
  delUser = async () => {
    await this.props.doDeleteUser();
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
              <div className="row col-lg mb-3 justify-content-center">
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
                    <h4 className="panel-title text-center">
                      <a
                        className="collapsed request-name"
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
                            <div className="form-group">
                              <label for="gameName">Game Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="gameName"
                                name="gameName"
                                aria-describedby="emailHelp"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="tileUrl">Tile</label>
                              <input
                                type="text"
                                className="form-control"
                                id="tileUrl"
                                name="tile"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="bannerUrl">Banner</label>
                              <input
                                type="text"
                                className="form-control"
                                name="banner"
                                id="bannerUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="gamePublisher">Publisher</label>
                              <input
                                type="text"
                                className="form-control"
                                name="publisher"
                                id="gamePublisher"
                                placeholder="input the publisher"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="gameDescription">Description</label>
                              <textarea
                                className="form-control"
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
                            <div className="form-group">
                              <label for="gplayUrl">Google Play Website</label>
                              <input
                                type="text"
                                className="form-control"
                                name="gplay"
                                id="gplayUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="appstoreUrl">App Store Website</label>
                              <input
                                type="text"
                                className="form-control"
                                name="appstore"
                                id="appstoreUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="bannerUrl">Website</label>
                              <input
                                type="text"
                                className="form-control"
                                name="website"
                                id="bannerUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="communityUrl">Community</label>
                              <input
                                type="text"
                                className="form-control"
                                name="community"
                                id="communityUrl"
                                placeholder="input the publisher"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <fieldset className="form-group">
                              <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">
                                  Category
                                </legend>
                                <div className="col-sm-10">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="category"
                                      id="gridRadios1"
                                      value="mobile"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios1"
                                    >
                                      Mobile
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="category"
                                      id="gridRadios2"
                                      value="pc"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios2"
                                    >
                                      PC
                                    </label>
                                  </div>
                                  <div className="form-check disabled">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="category"
                                      id="gridRadios3"
                                      value="credits"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios3"
                                    >
                                      Credits
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <fieldset className="form-group">
                              <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">
                                  Promo
                                </legend>
                                <div className="col-sm-10">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="promo"
                                      id="gridRadios1"
                                      value="true"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios1"
                                    >
                                      True
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="promo"
                                      id="gridRadios2"
                                      value="false"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios2"
                                    >
                                      False
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <div className="form-group">
                              <label for="discount">Discount</label>
                              <input
                                type="text"
                                className="form-control"
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
                              className="btn btn-warning"
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

            {/* ===============================EDIT A GAME=================================== */}

            <div className="container mb-5">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading1">
                    <h4 className="panel-title text-center">
                      <a
                        className="collapsed request-name"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#editGame"
                        aria-expanded="false"
                        aria-controls="editGame"
                      >
                        PUT
                        <i className="fas fa-caret-down ml-2" />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="editGame"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div className="panel-body">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label for="gameName">Game Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="gameName"
                                name="gameName"
                                aria-describedby="emailHelp"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="newGameName">New Game Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="newGameName"
                                name="newGameName"
                                aria-describedby="emailHelp"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="tileUrl">Tile</label>
                              <input
                                type="text"
                                className="form-control"
                                id="tileUrl"
                                name="tile"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="bannerUrl">Banner</label>
                              <input
                                type="text"
                                className="form-control"
                                name="banner"
                                id="bannerUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="gamePublisher">Publisher</label>
                              <input
                                type="text"
                                className="form-control"
                                name="publisher"
                                id="gamePublisher"
                                placeholder="input the publisher"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="gameDescription">Description</label>
                              <textarea
                                className="form-control"
                                id="gameDescription"
                                name="description"
                                placeholder="input the description"
                                rows="5"
                                cols="50"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label for="gplayUrl">Google Play Website</label>
                              <input
                                type="text"
                                className="form-control"
                                name="gplay"
                                id="gplayUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="appstoreUrl">App Store Website</label>
                              <input
                                type="text"
                                className="form-control"
                                name="appstore"
                                id="appstoreUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="bannerUrl">Website</label>
                              <input
                                type="text"
                                className="form-control"
                                name="website"
                                id="bannerUrl"
                                placeholder="input the url"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="communityUrl">Community</label>
                              <input
                                type="text"
                                className="form-control"
                                name="community"
                                id="communityUrl"
                                placeholder="input the publisher"
                                onChange={(e) => this.props.changeInputGame(e)}
                              />
                            </div>
                            <fieldset className="form-group">
                              <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">
                                  Category
                                </legend>
                                <div className="col-sm-10">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="category"
                                      id="gridRadios1"
                                      value="mobile"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios1"
                                    >
                                      Mobile
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="category"
                                      id="gridRadios2"
                                      value="pc"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios2"
                                    >
                                      PC
                                    </label>
                                  </div>
                                  <div className="form-check disabled">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="category"
                                      id="gridRadios3"
                                      value="credits"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios3"
                                    >
                                      Credits
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <fieldset className="form-group">
                              <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">
                                  Promo
                                </legend>
                                <div className="col-sm-10">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="promo"
                                      id="gridRadios1"
                                      value="true"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios1"
                                    >
                                      True
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="promo"
                                      id="gridRadios2"
                                      value="false"
                                      onChange={(e) =>
                                        this.props.changeInputGame(e)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="gridRadios2"
                                    >
                                      False
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <div className="form-group">
                              <label for="discount">Discount</label>
                              <input
                                type="text"
                                className="form-control"
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
                              className="btn btn-warning"
                              onClick={() => this.editGame()}
                            >
                              Put
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
                    <h4 className="panel-title text-center">
                      <a
                        className="collapsed request-name"
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
                            <div className="form-group">
                              <label for="gameNameDel">Game Name</label>
                              <input
                                type="text"
                                className="form-control"
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
                                className="btn btn-warning"
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
              <div className="row col-lg mb-3 justify-content-center">
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
                    <h4 className="panel-title text-center">
                      <a
                        className="collapsed request-name"
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
                            <div className="form-group">
                              <label for="gameVoucherName">Game Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="gameVoucherName"
                                name="gameVoucherName"
                                aria-describedby="emailHelp"
                                placeholder="input the game name"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>
                            <div className="form-group">
                              <label for="voucherName">Voucher Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="voucherName"
                                name="voucherName"
                                aria-describedby="emailHelp"
                                placeholder="input the voucher name"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>
                            <div className="form-group">
                              <label for="voucherPrice">Price</label>
                              <input
                                type="text"
                                className="form-control"
                                id="voucherPrice"
                                name="voucherPrice"
                                aria-describedby="emailHelp"
                                placeholder="input price"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>
                            <div className="row col justify-content-center">
                              <button
                                type="submit"
                                className="btn btn-warning"
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

            {/* ===============================EDIT A VOUCHER=================================== */}

            <div className="container mb-5">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading1">
                    <h4 className="panel-title text-center">
                      <a
                        className="collapsed request-name"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#putVoucher"
                        aria-expanded="false"
                        aria-controls="putVoucher"
                      >
                        PUT
                        <i className="fas fa-caret-down ml-2" />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="putVoucher"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div className="panel-body">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                          <div className="col-lg">
                            <div className="form-group">
                              <label for="gameVoucherName">Game Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="gameVoucherName"
                                name="gameVoucherName"
                                aria-describedby="emailHelp"
                                placeholder="input the game name"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>
                            <div className="form-group">
                              <label for="voucherName">Voucher Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="voucherName"
                                name="voucherName"
                                aria-describedby="emailHelp"
                                placeholder="input the voucher name"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>
                            <div className="form-group">
                              <label for="newVoucherName">
                                New Voucher Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="newVoucherName"
                                name="newVoucherName"
                                aria-describedby="emailHelp"
                                placeholder="input the voucher name"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>
                            <div className="form-group">
                              <label for="voucherPrice">Price</label>
                              <input
                                type="text"
                                className="form-control"
                                id="voucherPrice"
                                name="voucherPrice"
                                aria-describedby="emailHelp"
                                placeholder="input price"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>
                            <div className="row col justify-content-center">
                              <button
                                type="submit"
                                className="btn btn-warning"
                                onClick={() => this.editVoucher()}
                              >
                                Put
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
                    <h4 className="panel-title text-center">
                      <a
                        className="collapsed request-name"
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
                            <div className="form-group">
                              <label for="gameNameDel">Game Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="gameNameDel"
                                name="gameNameDel"
                                aria-describedby="emailHelp"
                                placeholder="input the game name"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>
                            <div className="form-group">
                              <label for="voucherNameDel">Voucher Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="voucherNameDel"
                                name="voucherNameDel"
                                aria-describedby="emailHelp"
                                placeholder="input the voucher name"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>

                            <div className="row col justify-content-center">
                              <button
                                type="submit"
                                className="btn btn-warning"
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

            {/* ===============================DELETE USER=================================== */}
            <div className="container mb-5">
              <div className="row col-lg mb-3 justify-content-center">
                <h1>USER</h1>
              </div>
            </div>
            <div className="container mb-5">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading1">
                    <h4 className="panel-title text-center">
                      <a
                        className="collapsed request-name"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#delUser"
                        aria-expanded="false"
                        aria-controls="delUser"
                      >
                        DELETE
                        <i className="fas fa-caret-down ml-2" />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="delUser"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div className="panel-body">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                          <div className="col-lg">
                            <div className="form-group">
                              <label for="username">Username</label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                aria-describedby="emailHelp"
                                placeholder="input the username"
                                onChange={(e) =>
                                  this.props.changeInputVoucher(e)
                                }
                              />
                            </div>

                            <div className="row col justify-content-center">
                              <button
                                type="submit"
                                className="btn btn-warning"
                                onClick={() => this.delUser()}
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
  deleteVoucher,
  doLogOut,
  getBio,
  doEditGame,
  doEditVoucher,
  doDeleteUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
