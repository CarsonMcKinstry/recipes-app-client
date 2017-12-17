import React, { Component } from "react";
import { PropTypes } from "prop-types";
import * as actions from "../../store/actions/auth";
import { connect } from "react-redux";
import RegistrationForm from "./RegistrationForm";

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.handleRegistration = this.handleRegistration.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleRegistration = newUser => {
    const { history, registerUser } = this.props;
    registerUser(newUser, history);
  };

  renderErrors = () => {
    const { errors } = this.props;
    return errors && <p>{errors}</p>;
  };

  render() {
    const { authError } = this.props;
    return (
      <div>
        {this.renderErrors()}
        <RegistrationForm
          handleRegistration={this.handleRegistration}
          handleRegistrationErrors={authError}
        />
      </div>
    );
  }
}

RegisterUser.propTypes = {};

function mapStateToProps(state) {
  return {
    errors: state.auth.error
  };
}

export default connect(mapStateToProps, actions)(RegisterUser);
