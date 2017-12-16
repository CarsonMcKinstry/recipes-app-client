import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { every, identity } from "lodash/fp";
import { connect } from "react-redux";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenName: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
    this.setFormProperties = this.setFormProperties.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegistrationErrors = props.handleRegistrationErrors;
    this.handleRegistration = props.handleRegistration;
  }

  setFormProperties = event => {
    const propName = event.target.id;
    const inputValue = event.target.value;
    this.setState({
      [propName]: inputValue
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const check = every(identity)(this.state);
    const { password, passwordConfirm } = this.state;
    if (password !== passwordConfirm) {
      this.props.dispatch(
        this.handleRegistrationErrors("Passwords must match")
      );
    } else if (!check) {
      this.props.dispatch(
        this.handleRegistrationErrors("You must fill out all fields")
      );
    } else {
      this.handleRegistration(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="screenName">ScreenName</label>
          <input
            type="text"
            id="screenName"
            onChange={this.setFormProperties}
            value={this.state.screenName}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={this.setFormProperties}
            value={this.state.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={this.setFormProperties}
            value={this.state.password}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            id="passwordConfirm"
            onChange={this.setFormProperties}
            value={this.state.passwordConfirm}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

RegistrationForm.propTypes = {};

export default connect()(RegistrationForm);
