import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import { doLogOut, getBio } from "../store/actions/userAction";
import { getGameList } from "../store/actions/gameAction";
import { getVouchersGame } from "../store/actions/voucherAction";
import { changeInputPayment } from "../store/actions/paymentAction";

class Checkout extends Component {
  componentDidMount = async () => {
    await this.props.getBio();
  };

  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="main cart-back check">
          <div className="container">
            <div className="checkout">
              <div className="row col mb-3 justify-content-center">
                <h4>
                  {this.props.dataUser.name}, you'll checkout with this details:
                </h4>
              </div>
              <div class="table-responsive-sm">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Game</th>
                      <th scope="col">ID</th>
                      <th scope="col">Price (IDR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mobile Legend</td>
                      <td>123456789</td>
                      <td>15000</td>
                    </tr>
                    <tr>
                      <td></td>
                      <th scope="row">TOTAL PRICE</th>
                      <td>15000</td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <div className="d-flex justify content-between mb-4">
                <div className="number-back mr-2 mb-3">
                  <i class="fas fa-phone mt-1"></i>
                </div>
                <div>Input your phone number</div>
                <form>
                  <input type="text" className="ml-3 form-control input-id-1" />
                </form>
              </div>
              <p className="id-input-detail text-justify">
                Your phone number is used to confirm the transaction
              </p>

              <div className="d-flex justify content-between mb-4">
                <div className="number-back mr-2 mb-3">
                  <i class="fas fa-envelope mt-1"></i>
                </div>
                <div>Input your email</div>
                <form>
                  <input type="text" className="ml-3 form-control input-id-1" />
                </form>
              </div>
              <p className="id-input-detail text-justify">
                Your email is used to confirm the transaction
              </p>
              
              <div className="row justify-content-center">
                <button className="btn btn-warning">Checkout</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
