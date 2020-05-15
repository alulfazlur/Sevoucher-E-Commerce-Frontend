import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import GameDescription from "../components/GameDescription";
import DropdownTransfer from "../components/DropdownTransfer";
import { doLogOut, getBio } from "../store/actions/userAction";
import { getGameList } from "../store/actions/gameAction";

class GameDetails extends Component {
  componentDidMount = async () => {
    await this.props.getBio();
    await this.props.getGameList();
  };

  render() {
    let gameList = this.props.game;
    gameList = gameList.filter((item) => {
        if (item.name == localStorage.getItem("namaGame")) {
          return item;
        }
        return false;
      });
    
    console.warn("gameList", gameList[0])
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="main container">
          <div className="row">
            <div className="col-lg-5">
            {gameList.map((el, index) => (
              <GameDescription 
              key={index}
                  name={el.name}
                  url={el.url}
                  tile={el.tile}
                  banner={el.banner}
                  publisher={el.publisher}
                  description={el.description}
                  category={el.category}
                  gplay={el.gplay}
                  appstore={el.appstore}
                  website={el.website}
                  community={el.community}
                  {...this.props}
              />
            ))}
            </div>
            <div className="col-1"></div>
            <div className="col-lg-6">
              <div className="order-input order-input-id mb-4">
                <div className="number-back mr-2 mb-3">1</div>Input User ID
                <form className="container">
                  <div className="row">
                    <input
                      type="text"
                      className="form-control input-id-1"
                      placeholder="ID"
                    />
                    <input
                      type="text"
                      className="form-control input-id-2"
                      placeholder="(Zone ID)"
                    />
                  </div>
                </form>
                <p className="id-input-detail text-justify">
                  Untuk menemukan ID Pengguna Anda, klik avatar Anda di sudut
                  kiri atas layar. Lalu buka tab Basic Info. ID Pengguna Anda
                  akan terlihat dibawah nickname Anda. Silahkan input ID
                  Pengguna lengkap Anda disini, e.g. 12345678(1234).
                </p>
              </div>
              <div className="order-input order-input-voucher mb-4">
                <div className="number-back mr-2 mb-2">2</div>Pilih Voucher
                <div className="row my-4 game-links d-flex justify-content-center">
                  <div
                    className="row btn-group btn-group-toggle col-lg"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-warning active voucher-radio">
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        autoComplete="off"
                      />{" "}
                      30 Diamond
                    </label>
                    <label className="btn btn-warning voucher-radio">
                      <input
                        type="radio"
                        name="options"
                        id="option2"
                        autoComplete="off"
                      />{" "}
                      50 Diamond
                    </label>
                    <label className="btn btn-warning voucher-radio">
                      <input
                        type="radio"
                        name="options"
                        id="option3"
                        autoComplete="off"
                      />{" "}
                      120 Diamond
                    </label>
                    <label className="btn btn-warning voucher-radio">
                      <input
                        type="radio"
                        name="options"
                        id="option3"
                        autoComplete="off"
                      />{" "}
                      250 Diamond
                    </label>
                  </div>
                </div>
              </div>
              <div className="order-input order-input-payment">
                <div className="number-back mr-2 mb-3">3</div>Pilih Pembayaran
                <DropdownTransfer />
              </div>
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
  doLogOut,
  getBio,
  getGameList
};
export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
