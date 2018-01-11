import React, { Component } from "react";
// import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import "./Header.scss";

// const renderHeaderRight = authenticated => {

// };

class Header extends Component {
  constructor(props) {
    super(props);

    this.renderHeaderRight = this.renderHeaderRight.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = {
      openRecipesMenu: false
    };
  }

  handleClick = e => {
    e.preventDefault();

    this.setState({
      openRecipesMenu: true,
      anchorEl: e.currentTarget
    });
  };

  handleRequestClose = e => {
    this.setState({
      openRecipesMenu: false
    });
  };

  renderHeaderRight() {
    const { authenticated } = this.props.auth;
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
            <a onClick={this.handleClick}>My Recipes</a>
            <Popover
              open={this.state.openRecipesMenu}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              targetOrigin={{ horizontal: "left", vertical: "top" }}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <Link to="/new">
                  <MenuItem primaryText="New Recipe" />
                </Link>
              </Menu>
            </Popover>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/signout">Signout</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <header>
        <nav>
          <ul className="header-left">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          {this.renderHeaderRight()}
        </nav>
      </header>
    );
  }
}

// Header.propTypes = {};

export default connect(state => {
  return {
    auth: state.auth
  };
})(Header);
