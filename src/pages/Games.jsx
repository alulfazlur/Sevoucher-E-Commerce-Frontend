import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import GameList from "../components/GameList";
import Search from "../components/Search";
import { doLogOut, getBio } from "../store/actions/userAction";
import {
  getGameList,
  changeInputGame,
  checkedFilter,
} from "../store/actions/gameAction";

class Games extends Component {
  componentDidMount = async () => {
    await this.props.getGameList();
    if (localStorage.getItem("login_status")) {await this.props.getBio()};
  };

  changeRouterFilter = async (e) => {
    await this.props.changeInputGame(e);
    const category = this.props.category;
    this.props.history.replace("/games/" + category);
  };

  render() {
    const categoryParams = this.props.match.params.filter;
    console.warn(this.props)
    let gameList = this.props.game;
    if (this.props.search && this.props.search.length > 2) {
      gameList = gameList.filter((item) => {
        if (
          item.name.toLowerCase().match(this.props.search.toLowerCase()) ||
          item.publisher.toLowerCase().match(this.props.search.toLowerCase())
        ) {
          return item;
        }
        return false;
      });
    }

    if (categoryParams) {
      gameList = gameList.filter((item) => {
        if (item.category === categoryParams) {
          return item;
        }
        return false;
      });
    }

    if (this.props.sortby) {
      const sorted = (a, b) => {
        if (this.props.sortby === "sort") {
          const gameA = a.name;
          const gameB = b.name;
          let comparison = 0;
          if (gameA > gameB) {
            comparison = 1;
          } else if (gameA < gameB) {
            comparison = -1;
          }
          return comparison;
        } else if (this.props.sortby === "popular") {
          const gameA = a.sold;
          const gameB = b.sold;
          let comparison = 0;
          if (gameA < gameB) {
            comparison = 1;
          } else if (gameA > gameB) {
            comparison = -1;
          }
          return comparison;
        }
      };
      gameList = gameList.sort(sorted);
    }
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="main category-page mb-0">
          <div className="container">
            <div className="row ">
              <div className="container">
                <h1 className="section-title text-center my-5 font-weight-bold">
                  Voucher Categories
                </h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="btn-group btn-group-toggle col-lg"
                data-toggle="buttons"
              >
                <label className="btn btn-outline-warning active category-btn">
                  <input
                    type="radio"
                    name="category"
                    id="option1"
                    autoComplete="off"
                    value=""
                    onClick={(e) => this.changeRouterFilter(e)}
                    checked={categoryParams ? false : true}
                  />
                  All
                </label>
                <label className="btn btn-outline-warning category-btn">
                  <input
                    type="radio"
                    name="category"
                    id="option2"
                    autoComplete="off"
                    value="mobile"
                    onClick={(e) => this.changeRouterFilter(e)}
                    checked={categoryParams === "mobile" ? true : false}
                  />
                  Mobile
                </label>
                <label className="btn btn-outline-warning category-btn">
                  <input
                    type="radio"
                    name="category"
                    id="option3"
                    autoComplete="off"
                    value="pc"
                    onClick={(e) => this.changeRouterFilter(e)}
                    checked={categoryParams === "pc" ? true : false}
                  />
                  PC
                </label>
                <label className="btn btn-outline-warning category-btn">
                  <input
                    type="radio"
                    name="category"
                    id="option3"
                    autoComplete="off"
                    value="credits"
                    onClick={(e) => this.changeRouterFilter(e)}
                    checked={categoryParams === "credits" ? true : false}
                  />
                  Credits
                </label>
              </div>
              <div
                className="btn-group btn-group-toggle second-category col-lg"
                data-toggle="buttons"
              >
                <label className="btn btn-outline-warning active category-btn-2">
                  <input
                    type="radio"
                    name="sortby"
                    id="option1"
                    autoComplete="off"
                    value="sort"
                    onClick={(e) => this.props.changeInputGame(e)}
                  />
                  Sort
                </label>
                <label className="btn btn-outline-warning category-btn-2">
                  <input
                    type="radio"
                    name="sortby"
                    id="option2"
                    autoComplete="off"
                    value="popular"
                    onClick={(e) => this.props.changeInputGame(e)}
                  />
                  Popular
                </label>
              </div>
              <Search {...this.props} />
            </div>
          </div>
        </div>

        <div className="container py-5 px-5 mt-5">
          <div className="row">
            {gameList.map((el, index) => (
              <GameList
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
                discount={el.discount}
                {...this.props}
              />
            ))}
          </div>
        </div>
        <div className="row col justify-content-center">
          <Link to="/discount" type="button" className="btn btn-warning">
            Discount Games
          </Link>
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
    category: state.game.category,
    search: state.game.search,
    sortby: state.game.sortby,
    promo: state.game.promo,
  };
};
const mapDispatchToProps = {
  changeInputGame,
  doLogOut,
  getBio,
  getGameList,
  checkedFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Games);
