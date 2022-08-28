import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { ADDFAV } from "../../actions/actionCreator";
import displayErr from "./displayError";

const RecipeDetails = ({ addFav }) => {
  const [data, setData] = useState();
  const [err, setErr] = useState(null);
  const [pending, setPending] = useState(true);
  const [servingsCount, setServingsCount] = useState(1);

  const { id } = useParams();
  useEffect(() => {
    axios(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((err) => {
        setErr(err);
        setPending(false);
      });
  }, [id]);

  //ADDING TO CART
  const addCarts = (items) => addFav(items);

  //HANDLING THE NUMBERS OF SERVINGS
  const handleServings = (type) => {
    type == "add"
      ? setServingsCount(servingsCount + 1)
      : setServingsCount(servingsCount - 1);
  };

  const displayFoodImage = (recipe) => {
    return (
      <div className="food-img-wrapper">
        <img
          src={recipe.recipe.image_url}
          alt=""
          className="img-fluid food-img"
        />
        ;<div className="food-img-title">{recipe.recipe.title}</div>
      </div>
    );
  };
  return (
    <div className="recipe-details text-center">
      {err && displayErr(err, null)}
      {pending && (
        <div className="spinner-border mt-5 text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="row">
        <div className="col-lg-3">
          <div className="chef-info mt-3">
            {data && (
              <>
                <div className="info-title mb-2 text-uppercase text-start fs-5 ms-3">
                  chef info
                </div>
                <div className="info d-flex flex-column text-secondary">
                  <div className="mb-2 text-start">
                    <span className="fw-bolder me-2">Publisher</span>
                    <span>{data.data.recipe.publisher}</span>
                  </div>
                  <div className="mb-2 text-start">
                    <span className="fw-bolder me-2">Publisher URL</span>
                    <a href={data.data.recipe.publisher}>
                      {data.data.recipe.publisher}
                    </a>
                  </div>
                  <div className="mb-2 text-start">
                    <span className="fw-bolder me-2">Social Rank</span>
                    <a href={data.data.recipe.social}>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </a>
                  </div>
                  <div className="mb-2 text-start">
                    <span className="fw-bolder me-2">Title</span>
                    <span>{data.data.recipe.title}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-lg-6">{data && displayFoodImage(data.data)}</div>
        <div className="col-lg-3 bg-light">
          <div className="display-6 recipe-details-ingredients">
            {data && (
              <>
                {/* <div className="info-title mt-2 text-uppercase fw-bolder text-start fs-5">
                  ingredients
                </div>
                <div className="ingredient-list mt-3 d-flex flex-wrap">
                  {data.data.recipe.ingredients.map((ing, ind) => {
                    return (
                      <div
                        className="ing-item text-start ms-3 my-3 d-flex align-items-center"
                        key={ind}
                      >
                        {ing}
                      </div>
                    );
                  })}
                </div>
                <hr /> */}

                <div
                  class="accordion accordion-flush mt-3"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <div className="info-title mt-2 text-uppercase fw-bolder text-start fs-5">
                          ingredients
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="ingredient-list mt-3 d-flex flex-wrap">
                          {data.data.recipe.ingredients.map((ing, ind) => {
                            return (
                              <div
                                className="ing-item text-start ms-3 my-3 d-flex align-items-center"
                                key={ind}
                              >
                                {ing}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (items) => dispatch(ADDFAV(items)),
  };
};
export default connect(null, mapDispatchToProps)(RecipeDetails);
