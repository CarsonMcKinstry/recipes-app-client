import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../store/actions/recipes";

class Recipe extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getRecipe(id);
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

    return recipe ? (
      <div>
        <img
          src={recipe.displayImage || "https://source.unsplash.com/random"}
          alt={recipe.name}
        />
        <h1>{recipe.name}</h1>
        <p>By: {recipe.author.screenName}</p>
        <p>{recipe.likes.length} people liked this recipe.</p>
        <p>{recipe.description}</p>
        <ul>{this.renderIngredients(recipe.ingredients)}</ul>
        <ol>{this.renderInstructions(recipe.instructions)}</ol>
      </div>
    ) : (
      <h1>Loading</h1>
    );
  }
}

Recipe.propTypes = {};

const mapStateToProps = state => ({ recipe: state.recipes.current });

export default connect(mapStateToProps, actions)(Recipe);
