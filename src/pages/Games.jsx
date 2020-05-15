import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/HeaderOrange";
import Footer from "../components/Footer";
import GameList from "../components/GameList";
import Search from "../components/Search";
import { doLogOut, getBio } from "../store/actions/userAction";
import { getGameList, changeInputGame } from "../store/actions/gameAction";

class Games extends Component {
  componentDidMount = async () => {
    await this.props.getGameList();
    await this.props.getBio();
  };

  render() {
    let gameList = this.props.game;
    if (this.props.search && this.props.search.length > 2) {
      gameList = gameList.filter((item) => {
        if (item.name.toLowerCase().includes(...this.props.search.toLowerCase())) {
          return item;
        }
        return false;
      });
    }

    if (this.props.category){
      gameList = gameList.filter((item) => {
        if (item.category == this.props.category) {
          return item;
        }
        return false;
      });
    }

    if (this.props.sortby) {
      const sorted = (a, b) => {
        if (this.props.sortby == "sort") {
          const gameA = a.name;
          const gameB = b.name;
          let comparison = 0;
          if (gameA > gameB) {
            comparison = 1;
          } else if (gameA < gameB) {
            comparison = -1;
          }
          return comparison;
        } else if (this.props.sortby == "popular") {
          const gameA = a.name;
          const gameB = b.name;
          let comparison = 0;
          if (gameA > gameB) {
            comparison = 1;
          } else if (gameA < gameB) {
            comparison = -1;
          }
          return comparison;
        } else if (this.props.sortby == "discounts") {
          const gameA = a.name;
          const gameB = b.name;
          let comparison = 0;
          if (gameA > gameB) {
            comparison = 1;
          } else if (gameA < gameB) {
            comparison = -1;
          }
          return comparison;
        }
      };
      gameList.sort(sorted);
    }

    console.warn("gameList", gameList);

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
                    autocomplete="off"
                    value=""
                    onClick={(e) => this.props.changeInput(e)}
                  />
                  All
                </label>
                <label className="btn btn-outline-warning category-btn">
                  <input
                    type="radio"
                    name="category"
                    id="option2"
                    autocomplete="off"
                    value="mobile"
                    onClick={(e) => this.props.changeInput(e)}
                  />
                  Mobile
                </label>
                <label className="btn btn-outline-warning category-btn">
                  <input
                    type="radio"
                    name="category"
                    id="option3"
                    autocomplete="off"
                    value="pc"
                    onClick={(e) => this.props.changeInput(e)}
                  />
                  PC
                </label>
                <label className="btn btn-outline-warning category-btn">
                  <input
                    type="radio"
                    name="category"
                    id="option3"
                    autocomplete="off"
                    value="credits"
                    onClick={(e) => this.props.changeInput(e)}
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
                    autocomplete="off"
                    value="sort"
                    onClick={(e) => this.props.changeInput(e)}
                  />
                  Sort
                </label>
                <label className="btn btn-outline-warning category-btn-2">
                  <input
                    type="radio"
                    name="sortby"
                    id="option2"
                    autocomplete="off"
                    value="popular"
                    onClick={(e) => this.props.changeInput(e)}
                  />
                  Popular
                </label>
                <label className="btn btn-outline-warning category-btn-2">
                  <input
                    type="radio"
                    name="sortby"
                    id="option3"
                    autocomplete="off"
                    value="discounts"
                    onClick={(e) => this.props.changeInput(e)}
                  />
                  Discounts
                </label>
              </div>
              <Search {...this.props}/>
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
  };
};
const mapDispatchToProps = {
  changeInput: changeInputGame,
  doLogOut,
  getBio,
  getGameList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Games);
