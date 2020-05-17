import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import Bio from "../pages/Bio";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Games from "../pages/Games";
import Discount from "../pages/Discount";
import GameDetails from "../pages/GameDetails";
import Cart from "../pages/Cart";
import History from "../pages/CartHistory";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import AdminDashboard from "../pages/AdminDashboard";

import { Provider } from "react-redux";
import store from "../store";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/games/:filter" component={Games} />
          <Route exact path="/discount" component={Discount} />
          <Route exact path="/game/:name" component={GameDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/cart/history" component={History} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
