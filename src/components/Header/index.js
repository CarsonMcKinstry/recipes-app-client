import React from "react";
// import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.scss";

const renderHeaderRight = authenticated => {
  if (!authenticated) {
    return (
      <ul className="header-right">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="header-right">
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/signout">Signout</Link>
        </li>
      </ul>
    );
  }
};

const Header = props => {
  const { authenticated } = props.auth;
  return (
    <header>
      <nav>
        <ul className="header-left">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        {renderHeaderRight(authenticated)}
      </nav>
    </header>
  );
};

// Header.propTypes = {};

export default connect(state => {
  return {
    auth: state.auth
  };
})(Header);
