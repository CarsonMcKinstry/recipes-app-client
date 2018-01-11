import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import RegisterUser from "../RegisterUser/";
// import { connect } from "react-redux";
import Home from "../Home/";
import SignOut from "../Auth/Signout";
import SignIn from "../Auth/Signin";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
      </Switch>
    );
  }
}

Main.propTypes = {};

export default Main;
