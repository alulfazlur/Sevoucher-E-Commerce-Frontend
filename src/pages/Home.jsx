import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { doLogOut, getBio } from "../store/actions/userAction";
import { changeInputGame, getGameList } from "../store/actions/gameAction";

class Home extends Component {
  componentDidMount = async () => {
    await this.props.getBio();
    await this.props.getGameList();
  };

  changeRouter = (namaGame) => {
    localStorage.setItem("namaGame", namaGame);
    namaGame = namaGame.replace(/ /gi, "-");
    this.props.history.replace("/game/" + namaGame);
  };

  render() {

    let gameList = this.props.game;

      const sorted = (a, b) => {
          const gameA = a.sold;
          const gameB = b.sold;
          let comparison = 0;
          if (gameA < gameB) {
            comparison = 1;
          } else if (gameA > gameB) {
            comparison = -1;
          }
          return comparison;
      };
      gameList = gameList.sort(sorted);

    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="section1 jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h1 className="display-4 font-weight-bold">SeVoucher</h1>
            <p className="lead">
              Your In-app purchase place for better gaming experience
            </p>
            <Link
              to="/games"
              type="button"
              className="btn btn-warning home-btn"
            >
              Browse Game
            </Link>
          </div>
        </div>
        <div className="section2 container">
          <div className="row">
            <div className="container">
              <h1 className="section-title text-center my-5 font-weight-bold">
                Voucher Categories
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="card-group">
              <div className="card content">
                <div className="content-overlay"></div>
                <img
                  className="card-img-top game-cetgory"
                  src={require("../images/game-mobile.jpg")}
                  alt="mobile-banner"
                />
                <div className="card-body content-details fadeIn-bottom">
                  <h2 className="card-title text-center content-title">
                    Mobile Games
                  </h2>
                </div>
              </div>
              <div className="card content game-home-div">
                <div className="content-overlay"></div>
                <img
                  className="card-img-top game-cetgory"
                  src={require("../images/game-pc.jpg")}
                  alt="mobile-banner"
                />
                <div className="card-body content-details fadeIn-bottom">
                  <h2 className="card-title text-center content-title">
                    PC Games
                  </h2>
                </div>
              </div>
              <div className="card content">
                <div className="content-overlay"></div>
                <img
                  className="card-img-top game-cetgory"
                  src={require("../images/game-credits.jpg")}
                  alt="mobile-banner"
                />
                <div className="card-body content-details fadeIn-bottom">
                  <h2 className="card-title text-center content-title">
                    Game Credits
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section3 container">
          <div className="row">
            <div className="container">
              <h1 className="section-title text-center my-5 font-weight-bold">
                Popular Vouchers
              </h1>
            </div>
          </div>
          <div className="container mb-5">
            
            <div className="row">
            {gameList.map((el, index) => (
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6" key={index}>
                <Link onClick={() => this.changeRouter(el.name)} >
                  <img
                    className="tile"
                    src={el.tile}
                    alt="game_tile"
                  />
                </Link>
              </div>
              ))}

              {/* <div className="col">
                <Link to="/">
                  <img
                    className="tile"
                    src={require("../images/tile/steam_tile.jpg")}
                    alt="game_tile"
                  />
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img
                    className="tile"
                    src={require("../images/tile/psn_store_tile.jpg")}
                    alt="game_tile"
                  />
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img
                    className="tile"
                    src={require("../images/tile/lor_tile.jpg")}
                    alt="game_tile"
                  />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="section4 jumbotron jumbotron-fluid text-right">
          <div className="container">
            <h1 className="lead font-weight-bold ">
              Looking for the <span> DISCOUNTS?</span>
            </h1>
            <h1 className="lead font-weight-bold py-3"> Here it is!</h1>
            <Link
              to="/discount"
              type="button"
              className="btn btn-warning home-btn"
            >
              See Discounts
            </Link>
          </div>
        </div>
        <div className="section5 container text-center">
          <div className="row">
            <div className="col-sm-4">
              <i className="fas fa-stopwatch"></i>
              <p>
                <span>Fast Process</span>
              </p>
              <p>Every purchase you make will be processed at real-time.</p>
            </div>
            <div className="col-sm-4 mid-value">
              <i className="fab fa-cc-mastercard"></i>
              <p>
                <span>Secure Payment</span>
              </p>
              <p>
                Every purchase is secure thanks to our excellent online safety
                standards.
              </p>
            </div>
            <div className="col-sm-4">
              <i className="fas fa-shopping-bag"></i>
              <p>
                <span>Simple Returns</span>
              </p>
              <p>
                Every purchase you make comes with a 30-day money-back
                guarantee.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    game: state.game.gameList,
  };
};
const mapDispatchToProps = {
  changeInput: changeInputGame,
  doLogOut,
  getBio,
  getGameList
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
