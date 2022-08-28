import React from "react";
import RecipeList from "./RecipeList";

const AvailableRecipes = ({ recipeChange }) => {
  return (
    <ul className="list-group">
      <li className="card-header fw-bolder">Available Recipes</li>
      <RecipeList recipeChange={recipeChange} />
    </ul>
  );
};

export default AvailableRecipes;
