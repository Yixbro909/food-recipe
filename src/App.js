import React from "react";
import "./style.css";
import "./responsive.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Starter from "./components/layout/Starter";
import Footer from "./components/layout/Footer";
import Recipes from "./components/recipes/Recipes";
import RecipeDetails from "./components/recipes/RecipeDetails";
import { connect } from "react-redux";
import { ADDFAV } from "./actions/actionCreator";

const App = ({ addFavorites }) => {
  const [recipe, setRecipe] = useState("pizza");
  const handleSearchRecipe = (value) => setRecipe(value);

  const recipeChange = (e) => {
    setRecipe(e.target.innerHTML);
    e.target.parentNode.childNodes.forEach((ele) => {
      if (ele.innerHTML == e.target.innerHTML) {
        ele.classList.add("pinned");
      } else {
        ele.classList.remove("pinned");
      }
    });
  };

  const addFavorite = (fav) => {
    addFavorites(fav);
  };
  return (
    <Router>
      <div className="app-container container-fluid">
        <Navbar handleSearchRecipe={handleSearchRecipe} />
        <Switch>
          <Route exact path="/">
            <Starter />
          </Route>
          <Route path="/recipes">
            <Recipes
              recipe={recipe}
              recipeChange={recipeChange}
              addFavorite={addFavorite}
            />
          </Route>
          <Route path="/recipedetails/:id">
            <RecipeDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (favorite) => dispatch(ADDFAV(favorite)),
  };
};
export default connect(null, mapDispatchToProps)(App);
