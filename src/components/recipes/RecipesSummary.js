import React from "react";
import formatTitle from "../utilities/formatTitle";
import { Link } from "react-router-dom";

const RecipesSummary = ({ recipes, addFavorite }) => {
  return recipes.map((recipe) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-8" key={recipe.recipe_id}>
        <div className="card recipe-card mb-4">
          <img
            src={recipe.image_url}
            alt=""
            className="card-img-top card-img"
          />
          <div className="card-body">
            <h5 className="card-title fw-bolder text-muted">
              {formatTitle(recipe.title)}
            </h5>
            <div className="card-footer bg-white">
              <Link
                to={"/recipedetails/" + recipe.recipe_id}
                className="btn-sm"
              >
                See More
              </Link>
              <button
                type="button"
                onClick={() =>
                  addFavorite({
                    title: recipe.title,
                    id: recipe.recipe_id,
                    publisher: recipe.publisher,
                    image: recipe.image_url,
                  })
                }
                className="btn-cart float-end  flex-column"
              >
                <i className="bi bi-heart-fill fs-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default RecipesSummary;
