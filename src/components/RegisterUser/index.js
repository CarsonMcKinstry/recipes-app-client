import React, { Component } from "react";
import { PropTypes } from "prop-types";
import * as actions from "../../store/actions/auth";
import { connect } from "react-redux";

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        screenName: "Carson",
        email: "carson.mckinstry@me.com",
        password: "password",
        passwordConfirm: "password"
      }
    };

    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleRegistration = () => {
    const { newUser } = this.state;
    const { history, registerUser } = this.props;

    registerUser(newUser, history);
  };

  render() {
    return <button onClick={this.handleRegistration}>Click me</button>;
  }
}

RegisterUser.propTypes = {};

export default connect(undefined, actions)(RegisterUser);
