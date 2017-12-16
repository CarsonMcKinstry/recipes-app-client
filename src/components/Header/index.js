import React from "react";
// import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => (
  <header>
    <nav>
      <ul className="header-left">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul className="header-right">
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      </ul>
    </nav>
  </header>
);

// Header.propTypes = {};

export default Header;
