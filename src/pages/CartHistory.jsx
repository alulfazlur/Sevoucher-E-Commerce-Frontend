import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PaymentMethod from "../components/PaymentMethod";
import { doLogOut, getBio } from "../store/actions/userAction";
import {
  getCartHistory,
  changeInputSort,
} from "../store/actions/paymentAction";

class History extends Component {
  componentDidMount = async () => {
    await this.props.getBio();
    await this.props.getCartHistory();
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
      let cartHistory = this.props.cartHistory;

      if (this.props.sortCart) {
        const sorted = (a, b) => {
          if (this.props.sortCart === "latest") {
            const transactionA = a.updated_at;
            const transactionB = b.updated_at;
            let comparison = 0;
            if (transactionA > transactionB) {
              comparison = 1;
            } else if (transactionA < transactionB) {
              comparison = -1;
            }
            return comparison;
          } else if (this.props.sortCart === "newest") {
            const transactionA = a.updated_at;
            const transactionB = b.updated_at;
            let comparison = 0;
            if (transactionA < transactionB) {
              comparison = 1;
            } else if (transactionA > transactionB) {
              comparison = -1;
            }
            return comparison;
          } else if (this.props.sortCart === "low") {
            const transactionA = a.price;
            const transactionB = b.price;
            let comparison = 0;
            if (transactionA > transactionB) {
              comparison = 1;
            } else if (transactionA < transactionB) {
              comparison = -1;
            }
            return comparison;
          } else if (this.props.sortCart === "high") {
            const transactionA = a.price;
            const transactionB = b.price;
            let comparison = 0;
            if (transactionA < transactionB) {
              comparison = 1;
            } else if (transactionA > transactionB) {
              comparison = -1;
            }
            return comparison;
          }
        };
        cartHistory = cartHistory.sort(sorted);
      }

      return (
        <React.Fragment>
          <Header {...this.props} />
          <div className="main cart-back">
            <div className="container">
              <div className="cart">
                <div className="row col mb-3">
                  <div className="row col mb-3 justify-content-between">
                    <h2>{this.props.dataUser.name}, here is your History Cart :</h2>
                  </div>
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
                        <th scope="col">Checkout Date</th>
                        <th scope="col">Price (IDR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartHistory.map((el, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{el.game_id.name}</td>
                            <td>{el.ign}</td>
                            <td>{el.voucher_id.voucher}</td>
                            <td>{el.quantity}</td>
                            <td>
                              {el.updated_at.substring(
                                0,
                                el.updated_at.length - 9
                              )}
                            </td>
                            <td>{el.price}</td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="btn-group btn-group-toggle col-lg mt-5"
                data-toggle="buttons"
              >
                <label className="btn btn-outline-warning active category-btn">
                  <input
                    type="radio"
                    name="sortCart"
                    id="option1"
                    autocomplete="off"
                    value="latest"
                    onClick={(e) => this.props.changeInputSort(e)}
                  />
                  Latest
                </label>
                <label className="btn btn-outline-warning category-btn">
                  <input
                    type="radio"
                    name="sortCart"
                    id="option2"
                    autocomplete="off"
                    value="newest"
                    onClick={(e) => this.props.changeInputSort(e)}
                  />
                  Newest
                </label>
                <label className="btn btn-outline-warning active category-btn">
                  <input
                    type="radio"
                    name="sortCart"
                    id="option1"
                    autocomplete="off"
                    value="high"
                    onClick={(e) => this.props.changeInputSort(e)}
                  />
                  High Price
                </label>
                <label className="btn btn-outline-warning active category-btn">
                  <input
                    type="radio"
                    name="sortCart"
                    id="option1"
                    autocomplete="off"
                    value="low"
                    onClick={(e) => this.props.changeInputSort(e)}
                  />
                  Low Price
                </label>
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
    cartHistory: state.payment.cartHistory,
    sortCart: state.payment.sortCart,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getBio,
  getCartHistory,
  changeInputSort,
};
export default connect(mapStateToProps, mapDispatchToProps)(History);
