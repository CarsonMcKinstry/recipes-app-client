import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/recipes";
import { chunk } from "lodash/fp";
import { RESET_RECIPE } from "../../store/types";

import "./Recipe.scss";

class Recipe extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getRecipe(id);
  }

  componentWillMount() {
    this.props.dispatch({ type: RESET_RECIPE });
  }

  renderInstructions(instructions) {
    return instructions.map((instruction, id) => (
      <li key={"instruction-" + id}>{instruction}</li>
    ));
  }

  renderIngredients(ingredients) {
    return ingredients.map((ingredient, id) => {
      const { amount, measurement, name } = ingredient;
      let display;
      if (amount && measurement) {
        display = `${amount} ${measurement} of ${name}`;
      } else if ((amount, name)) {
        display = `${amount} ${name}`;
      }

      return <li>{display}</li>;
    });
  }

  render() {
    const { recipe } = this.props;

    if (recipe) {
      const columnLength = Math.floor(recipe.ingredients.length / 2 + 1);
      console.log(chunk(columnLength)(recipe.ingredients));
    }

    return recipe ? (
      <div className="recipe-page">
        <article className="recipe">
          <header className="recipe-header">
            <div className="recipe-meta">
              <h1>{recipe && recipe.name}</h1>
              <p>{recipe && recipe.likes.length} Likes</p>
              <p>Created By: {recipe && recipe.author.screenName}</p>
              <p>{recipe && recipe.description}</p>
            </div>
            <div className="recipe-image">
              <img
                src={recipe.image || "https://source.unsplash.com/random"}
                alt={recipe.name}
              />
            </div>
          </header>
          <section>
            <h2>Ingredients</h2>
          </section>
        </article>
        <aside className="recommended" />
      </div>
    ) : (
      <h1>Loading</h1>
    );
  }
}

Recipe.propTypes = {};

const mapStateToProps = state => ({ recipe: state.recipes.current });
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ ...actions }, dispatch),
  dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
