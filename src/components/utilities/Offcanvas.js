import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { REMOVEFAV } from "../../actions/actionCreator";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import formatTitle from "./formatTitle";

const Offcanvas = ({ favorite, removeFav }) => {
  //REMIVING CART FROM CART LIST
  const removeFavorite = (id) => removeFav(id);

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title text-uppercase fw-bolder fs-2"
            id="offcanvasExampleLabel"
          >
            <i className="bi bi-heart-fill fs-3  me-2"></i>
            Favorites
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body mt-2 position-relative">
          <div className="cartItems-list">
            {favorite.length > 0 ? (
              favorite.map((item, ind) => {
                return (
                  <div key={ind}>
                    <div className="cartItem-wrapper d-flex ">
                      <img src={item.image} alt={item.title} />
                      <Link
                        to={"/recipedetails/" + item.id}
                        className="nav-link"
                      >
                        <div className="d-flex flex-column justify-content-center">
                          <div className="title">{formatTitle(item.title)}</div>
                          <div className="publisher">{item.publisher}</div>
                        </div>
                      </Link>
                      <button
                        type="button"
                        className="text-end ms-auto align-self-center "
                        aria-label="Close"
                        onClick={() => removeFavorite(item.id)}
                      >
                        <i className="bi bi-x-circle"></i>
                      </button>
                    </div>
                    <hr />
                  </div>
                );
              })
            ) : (
              <div className="position-absolute text-secondary translate-middle top-50 start-50">
                Cart empty ...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => dispatch(REMOVEFAV(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    favorite: state,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Offcanvas);
