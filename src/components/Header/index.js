import React, { Component } from "react";
// import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import "./Header.scss";
import IconButton from "material-ui/IconButton";
import { ActionAccountCircle } from "material-ui/svg-icons";

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
            <IconButton onClick={this.handleClick}>
              <ActionAccountCircle />
            </IconButton>
            <Popover
              open={this.state.openRecipesMenu}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              targetOrigin={{ horizontal: "right", vertical: "top" }}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <Link to="/signout">
                  <MenuItem primaryText="Signout" />
                </Link>
                <Link to="/account">
                  <MenuItem primaryText="My Account" />
                </Link>
              </Menu>
            </Popover>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <header className="main-header">
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
