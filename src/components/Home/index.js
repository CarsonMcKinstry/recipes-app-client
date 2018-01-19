import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import SplitJumbotron from "./SplitJumbotron";
import * as actions from "../../store/actions/recipes";

// this is going to handle showing stuffs
import "./Home.scss";

class Home extends Component {
  componentDidMount() {
    this.props.getFeatured();
  }

  render() {
    return (
      <main>
        <SplitJumbotron recipes={this.props.featured} />
      </main>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = state => ({
  featured: state.recipes.featured.map(recipe => ({
    _id: recipe._id,
    name: recipe.name,
    author: recipe.author.screenName,
    likes: recipe.likes.length,
    image: recipe.displayImage || "https://source.unsplash.com/random"
  }))
});

export default connect(mapStateToProps, actions)(Home);
