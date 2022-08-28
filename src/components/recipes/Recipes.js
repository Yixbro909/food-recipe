import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AvailableRecipes from "./AvailableRecipes";
import RecipesSummary from "./RecipesSummary";
import SkeletonLoader from "../loadingAnimation/SkeletonLoader";
import displayErr from "./displayError";

const Recipes = ({ recipe, recipeChange, addFavorite }) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    axios(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
      .then((data) => {
        setData(data);
        setPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setPending(false);
      });
  }, [recipe]);

  return (
    <div className="recipes">
      <div
        className="row 
       justify-content-center flex-sm-column-reverse flex-lg-row"
      >
        <div className="col-lg-3 available-recipes ">
          <AvailableRecipes recipeChange={recipeChange} />
        </div>
        <div className="col-lg-9">
          <div className="row justify-content-sm-center justify-content-md-start">
            {pending && [...Array(6)].map((x, y) => <SkeletonLoader key={y} />)}

            {error ? displayErr(error, recipe) : ""}
            {data && (
              <RecipesSummary
                recipes={data.data.recipes}
                addFavorite={addFavorite}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
