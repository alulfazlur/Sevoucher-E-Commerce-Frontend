import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import PaymentMethod from "../components/PaymentMethod";
import { doLogOut, getBio } from "../store/actions/userAction";
import { getGameList } from "../store/actions/gameAction";
import { getVouchersGame } from "../store/actions/voucherAction";
import { changeInputPayment } from "../store/actions/paymentAction";

class Cart extends Component {
  componentDidMount = async () => {
    await this.props.getBio();
  };

  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="main cart-back">
        <div className="container">
          <div className="cart">
            <div className="row col mb-3 justify-content-between">
              <h2>{this.props.dataUser.name}, here is your Cart :</h2>
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div class="table-responsive-sm">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Game</th>
                    <th scope="col">ID</th>
                    <th scope="col">Voucher</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Discount (%)</th>
                    <th scope="col">Price (IDR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mobile Legend</td>
                    <td>123456789</td>
                    <td>50 Diamond</td>
                    <td>1</td>
                    <td>0</td>
                    <td>15000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <th scope="row">TOTAL PRICE</th>
                    <td>15000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="number-back m-3 text-center">
              <i class="fas fa-money-bill"></i>
            </div>
            Pilih Metode Pembayaran :
            <PaymentMethod {...this.props} />
            <div className="row col justify-content-end">

            <Link to="/checkout" type="button" className="btn btn-warning">
              Checkout
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
    payment: state.payment,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getBio,
  getGameList,
  getVouchersGame,
  changeInputPayment,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
