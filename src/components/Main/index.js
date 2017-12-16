import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import RegisterUser from "../RegisterUser/";

class Main extends Component {
  // componentDidMount() {
  //   setTimeout() {

  //   }
  // }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            console.log(props);
            return <h1>Home Component goes here</h1>;
          }}
        />
        <Route path="/register" component={RegisterUser} />
      </Switch>
    );
  }
}

Main.propTypes = {};

export default Main;
