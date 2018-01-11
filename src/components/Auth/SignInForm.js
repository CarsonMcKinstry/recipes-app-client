import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { every, identity } from "lodash/fp";
import { connect } from "react-redux";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.setFormProperties = this.setFormProperties.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setFormProperties = event => {
    const propName = event.target.id;
    const inputValue = event.target.value;

    this.setState({
      [propName]: inputValue
    });
  };

  handleSubmit(event) {
    const { handleSignin, handleSigninErrors } = this.props;

    event.preventDefault();
    const check = every(identity)(this.state);
    if (!check) {
      this.props.dispatch(handleSigninErrors("You must fill out all fields"));
    } else {
      handleSignin(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={this.setFormProperties}
            value={this.state.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            onChange={this.setFormProperties}
            value={this.state.password}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

SignInForm.propTypes = {};

export default connect()(SignInForm);
