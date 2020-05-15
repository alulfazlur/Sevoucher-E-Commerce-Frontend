import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import GameList from "../components/ProductList";
import { doRegisterGame, changeInputGame, deleteGame } from "../store/actions/gameAction";

class AdminDashboard extends Component {
  inputGame = async () => {
    await this.props.doRegisterGame();
    this.props.history.push("/admin");
  };
  delGame = async () => {
    await this.props.deleteGame();
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
          <div className="main container">
          <div className="row col-lg mb-3">
            REGISTER GAME
          </div>
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
                      onChange={(e) => this.props.changeInput(e)}
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
                      onChange={(e) => this.props.changeInput(e)}
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
                      onChange={(e) => this.props.changeInput(e)}
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
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="gameDescription">Description</label>
                    <textarea
                      class="form-control"
                      id="gameDescription"
                      name="description"
                      placeholder="input the description"
                      rows="4"
                      cols="50"
                      onChange={(e) => this.props.changeInput(e)}
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
                      onChange={(e) => this.props.changeInput(e)}
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
                      onChange={(e) => this.props.changeInput(e)}
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
                      onChange={(e) => this.props.changeInput(e)}
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
                      onChange={(e) => this.props.changeInput(e)}
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
                            onChange={(e) => this.props.changeInput(e)}
                          />
                          <label class="form-check-label" for="gridRadios1">
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
                            onChange={(e) => this.props.changeInput(e)}
                          />
                          <label class="form-check-label" for="gridRadios2">
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
                            onChange={(e) => this.props.changeInput(e)}
                          />
                          <label class="form-check-label" for="gridRadios3">
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
                            onChange={(e) => this.props.changeInput(e)}
                          />
                          <label class="form-check-label" for="gridRadios1">
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
                            onChange={(e) => this.props.changeInput(e)}
                          />
                          <label class="form-check-label" for="gridRadios2">
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
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => this.inputGame()}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>

            {/* ===============================DELETE A GAME=================================== */}
            <div className="row col-lg mb-3">
            DELETE GAME
          </div>
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
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => this.delGame()}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </form>
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
  changeInput: changeInputGame,
  deleteGame
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
