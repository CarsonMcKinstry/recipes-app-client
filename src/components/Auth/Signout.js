import React, { Component } from "react";
import { PropTypes } from "prop-types";

import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

class SignOut extends Component {
  componentDidMount() {
    this.props.signout();
    setTimeout(() => {
      this.props.history.push("/");
    }, 5000);
  }

  render() {
    return <h2>Sorry to see you go!</h2>;
  }
}

SignOut.propTypes = {};

export default connect(null, actions)(SignOut);
