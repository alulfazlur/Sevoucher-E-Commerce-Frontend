import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { doLogOut, getBio } from "../store/actions/userAction";
import { getCartResume, doCheckout } from "../store/actions/paymentAction";

class Checkout extends Component {
  componentDidMount = async () => {
    await this.props.getBio();
    await this.props.getCartResume();
  };
  postCheckout = async () => {
    await this.props.doCheckout();
    await alert("Congrats!");
    this.props.history.push("/games");
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
      const cartResume = this.props.cartResume;
      return (
        <React.Fragment>
          <Header {...this.props} />
          <div className="main cart-back check">
            <div className="container">
              <div className="checkout">
                <div className="row col mb-3 justify-content-center">
                  <h4>
                    {this.props.dataUser.name}, you'll checkout with this
                    details:
                  </h4>
                </div>
                <div class="table-responsive-sm">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Game</th>
                        <th scope="col">Total Price per Game (IDR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartResume.map((el, index) => (
                        <tr key={index}>
                          <td>{el.game_id.name}</td>
                          <td>{el.total_price_item}</td>
                        </tr>
                      ))}
                      {/* <td></td> */}
                      {cartResume.slice(-1).map((el, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <th scope="row">TOTAL PRICE</th>
                            <td>{el.total_price}</td>
                          </tr>
                          <tr>
                            <th scope="row">PAYMENT METHOD</th>
                            <td>{el.payment.toUpperCase()}</td>
                          </tr>
                          <tr>
                            <th scope="row">OPERATOR</th>
                            <td>{el.operator.toUpperCase()}</td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify content-between mb-4 mt-5">
                  <div className="number-back mr-2">
                    <i class="fas fa-phone mt-1"></i>
                  </div>
                  <div>Your phone number : {this.props.dataUser.phone}</div>
                  {/* <form>
                  <input type="text" className="ml-3 form-control input-id-1" />
                </form> */}
                </div>
                <p className="id-input-detail text-justify">
                  Your phone number is used to confirm the transaction
                </p>

                <div className="d-flex justify content-between mb-4 mt-5">
                  <div className="number-back mr-2">
                    <i class="fas fa-envelope mt-1"></i>
                  </div>
                  <div>Your email : {this.props.dataUser.email}</div>
                  {/* <form>
                  <input type="text" className="ml-3 form-control input-id-1" />
                </form> */}
                </div>
                <p className="id-input-detail text-justify">
                  Your email is used to confirm the transaction
                </p>

                <div className="row justify-content-center">
                  <Link
                    onClick={() => this.postCheckout()}
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
  };
};
const mapDispatchToProps = {
  doLogOut,
  getBio,
  getCartResume,
  doCheckout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
