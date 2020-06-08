import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import GameDescription from "../components/GameDescription";
import { doLogOut, getBio } from "../store/actions/userAction";
import { getGameList } from "../store/actions/gameAction";
import {
  getVouchersGame,
  changeInputVoucher,
} from "../store/actions/voucherAction";
import { addToCart } from "../store/actions/paymentAction"
class GameDetails extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem("login_status")) {await this.props.getBio()};
    await this.props.getGameList();
    await this.props.getVouchersGame();
  };

  render() {
    let gameList = this.props.game;
    gameList = gameList.filter((item) => {
      if (item.name === localStorage.getItem("namaGame")) {
        return item;
      }
      return false;
    });
    let gameVoucher = this.props.voucher;
    // console.log("gameList", gameList)
    console.log("gameVoucher", gameVoucher);
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
            <div className="col-lg-6 voucher-input">
              <div className="order-input order-input-id mb-4">
                <div className="number-back mr-2 mb-3">1</div>Input Game ID
                <form className="container">
                  <div className="row">
                    <input
                      type="text"
                      className="form-control input-id-1"
                      placeholder="ID"
                      name="ign"
                      onChange={(e) => this.props.changeInputVoucher(e)}
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
                    {gameVoucher.map((el, index) => (
                      <label
                        className="btn btn-warning voucher-radio mt-1 p-1"
                        key={index}
                      >
                        <input
                          type="radio"
                          name="voucherChosen"
                          value={el.voucher}
                          id="option1"
                          autoComplete="off"
                          onClick={(e) => this.props.changeInputVoucher(e)}
                        />
                        {el.voucher}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="add-to-cart justify-content-center">
                <Link onClick={()=> this.props.addToCart()} type="button" className="btn btn-warning">
                  <i className="fas fa-shopping-cart add-to-cart-logo mr-1"></i>
                  Add to cart
                </Link>
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
    voucher: state.voucher.voucherGame,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getBio,
  getGameList,
  getVouchersGame,
  changeInputVoucher,
  addToCart
};
export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
