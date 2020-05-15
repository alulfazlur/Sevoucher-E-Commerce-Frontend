import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Games from "../pages/Games";
import GameDetails from "../pages/GameDetails";
// import NotMatch from "../pages/NotMatch";
import Profile from "../pages/Profile";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
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
          <Route exact path="/game/:name" component={GameDetails} />
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
