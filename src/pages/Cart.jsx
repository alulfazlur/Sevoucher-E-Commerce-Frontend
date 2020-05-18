import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PaymentMethod from "../components/PaymentMethod";
import { doLogOut, getBio } from "../store/actions/userAction";
import {
  getCartDetail,
  getCartResume,
  changeInputPayment,
  addPayment,
  deleteDetail,
  changeInputDelete,
  deleteCart
} from "../store/actions/paymentAction";

class Cart extends Component {
  componentDidMount = async () => {
    await this.props.getBio();
    await this.props.getCartResume();
    await this.props.getCartDetail();
  };

  goToCheckout = async () => {
    await this.props.addPayment();
    this.props.payment.payment && this.props.payment.operator
      ? this.props.history.push("/checkout")
      : alert("Please choose payment method");
  };

  render() {
    if (!localStorage.getItem("login_status")) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "You must sign in first!" },
          }}
        />
      );
    } else {
      const cartDetail = this.props.cartDetail;
      const cartResume = this.props.cartResume;
      return (
        <React.Fragment>
          <Header {...this.props} />
          <div className="main cart-back">
            <div className="container">
              <div className="cart">
                <div className="row col mb-3">
                  <h2>{this.props.dataUser.name}, here is your Cart :</h2>
                  </div>
                  <div className="row col mb-3 justify-content-between">
                  <i className="fas fa-shopping-cart"></i>
                  <Link onClick={() => this.props.deleteCart()}>
                    <i
                      className="fas fa-trash pt-2"
                      style={{ color: "rgb(255, 145, 0)", fontSize:"20px" }}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="empty item"
                    >Empty Cart</i>
                  </Link>
                </div>
                <div className="table-responsive-sm">
                  <table className="table">
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
                      {cartDetail.map((el, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{el.game_id.name}</td>
                            <td>{el.ign}</td>
                            <td>{el.voucher_id.voucher}</td>
                            <td>{el.quantity}</td>
                            <td>{el.game_id.discount}</td>
                            <td>{el.price}</td>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="gridRadios1"
                                  value={el.id}
                                  onClick={(e) =>
                                    this.props.changeInputDelete(e)
                                  }
                                />
                              </div>
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th scope="row">TOTAL PRICE</th>
                        {cartResume.slice(-1).map((el, index) => (
                          <td key={index}>{el.total_price}</td>
                        ))}
                        <td>
                          <Link onClick={() => this.props.deleteDetail()}>
                            <i
                              className="fas fa-trash"
                              style={{ color: "rgb(255, 145, 0)" }}
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete item"
                            ></i>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="number-back m-3 text-center">
                  <i className="fas fa-money-bill"></i>
                </div>
                Pilih Metode Pembayaran :
                <PaymentMethod {...this.props} />
                <div className="row col justify-content-end">
                  <Link
                    onClick={() => this.goToCheckout()}
                    type="button"
                    className="btn btn-warning"
                  >
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
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    game: state.game.gameList,
    voucher: state.voucher.voucherGame,
    payment: state.payment,
    cartResume: state.payment.cartResume,
    cartDetail: state.payment.cartDetail,
    trans_id: state.payment.trans_id,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getBio,
  getCartDetail,
  getCartResume,
  changeInputPayment,
  addPayment,
  deleteDetail,
  changeInputDelete,
  deleteCart
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
