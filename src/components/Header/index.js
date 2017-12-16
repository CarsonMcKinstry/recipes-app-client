import React from "react";
// import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.scss";

const Header = props => {
  return (
    <header>
      <nav>
        <ul className="header-left">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul className="header-right">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Header.propTypes = {};

export default connect(state => state)(Header);
