import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/recipes";
import { chunk, map } from "lodash/fp";
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
    return map((instruction, id) => (
      <li key={"instruction-" + id}>{instruction}</li>
    ))(instructions);
  }

  renderIngredients(ingredients) {
    let chunkId = 0;
    const chunkLength = Math.floor(ingredients.length / 2 + 1);
    const ingredientChunks = chunk(chunkLength)(ingredients);
    return map((chunk, id) => {
      return <ul key={chunkId++}>{map(createDisplay)(chunk)}</ul>;
    })(ingredientChunks);

    function createDisplay(ingredient) {
      const { amount, measurement, name } = ingredient;
      let display;
      if (amount && measurement) {
        display = `${amount} ${measurement + " "}${name}`;
      } else if (amount && name) {
        display = `${amount} ${name}`;
      } else {
        display = name;
      }
      return <li key={name}>{display}</li>;
    }
  }

  render() {
    const { recipe } = this.props;

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
            <div className="ingredients">
              {this.renderIngredients(recipe.ingredients)}
            </div>
          </section>
          <section>
            <h2>Instructions</h2>
            <div>
              <ol>{this.renderInstructions(recipe.instructions)}</ol>
            </div>
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
