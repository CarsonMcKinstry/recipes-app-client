import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import RegisterUser from "../RegisterUser/";
import { connect } from "react-redux";
import Home from "../Home/";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={RegisterUser} />
      </Switch>
    );
  }
}

Main.propTypes = {};

export default connect(state => state)(Main);
