import React from "react";
import image2 from "../../img/image2.jpg";
import image6 from "../../img/image6.jpg";
import image5 from "../../img/image5.jpg";
import { Link } from "react-router-dom";

const WelcomeGreetings = () => {
  return (
    <>
      <div className="display-6 fw-bolder text-uppercase">
        Welcome to Our Food Recipes
      </div>
      <p className="lead text-secondary">
        We provide over 100,000 food recipes , as well as all the ingredient
        available for your Delicious Meal, Explore our new Kitchen Chef
      </p>
      <Link to="/recipes">Explore Now</Link>
    </>
  );
};
const Starter = () => {
  return (
    <div className="starter-container container-fluid">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image2}
              className="d-block w-100 position-relative"
              alt="..."
            />
            <div className="carousel-caption">
              <WelcomeGreetings />
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={image5}
              className="d-block w-100 position-relative"
              alt="..."
            />
            <div className="carousel-caption">
              <WelcomeGreetings />
            </div>
          </div>
          <div className="carousel-item">
            <img src={image6} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <WelcomeGreetings />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Starter;
