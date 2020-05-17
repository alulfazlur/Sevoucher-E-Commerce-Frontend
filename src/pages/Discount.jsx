import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import { doLogOut, getBio } from "../store/actions/userAction";
import { getGameList } from "../store/actions/gameAction";

class Discount extends Component {
  componentDidMount = async () => {
    await this.props.getGameList();
    await this.props.getBio();
  };

  changeRouter = (namaGame) => {
    localStorage.setItem("namaGame", namaGame);
    namaGame = namaGame.replace(/ /gi, "-");
    this.props.history.replace("/game/" + namaGame);
  };

  render() {
    let gameList = this.props.game;

    gameList = gameList.filter((item) => {
      if (item.promo) {
        return item;
      }
      return false;
    });

    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="main category-page mb-0">
          <div className="container">
            <div className="row ">
              <div className="container">
                <h1 className="section-title text-center my-5 font-weight-bold">
                  Discount Games
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {gameList.map((el, index) => (
              <React.Fragment>
                <div className="col-6 mb-5 div-promo-banner" key={index}>
                  <Link onClick={() => this.changeRouter(el.name)}>
                    <img
                      src={el.banner}
                      alt="promo-banner"
                      className="promo-banner"
                    />
                  </Link>
                  <div className="text-center">
                    <h3>{el.discount}% OFF!</h3>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    game: state.game.gameList,
    promo: state.game.promo,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getBio,
  getGameList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Discount);
