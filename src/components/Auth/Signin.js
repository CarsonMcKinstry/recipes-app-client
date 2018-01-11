import React, { Component } from "react";
import { PropTypes } from "prop-types";
import * as actions from "../../store/actions/auth";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.handleSignin = this.handleSignin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSignin = user => {
    const { history, signin } = this.props;
    signin(user, history);
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
        <SignInForm
          handleSignin={this.handleSignin}
          handleSigninErrors={authError}
        />
      </div>
    );
  }
}

SignIn.propTypes = {};

function mapStateToProps(state) {
  return {
    errors: state.auth.error
  };
}

export default connect(mapStateToProps, actions)(SignIn);
