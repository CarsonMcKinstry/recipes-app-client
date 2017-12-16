import React from "react";
// import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => (
  <div className="container">
    <header>
      <ul className="header-left">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul className="header-right">
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </header>
  </div>
);

// Header.propTypes = {};

export default Header;
