import React from "react";
import logo from "../../img/logo.png";
import cart from "../../img/icons/cart.gif";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import Offcanvas from "../utilities/Offcanvas";

const Navbar = ({ handleSearchRecipe, favCount }) => {
  const [searchValue, setSearchValue] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchRecipe(searchValue);
    history.push("./recipes");
  };

  return (
    <>
      <nav className="navbar sticky-top  navbar-light navbar-expand-lg bg-light border-bottom border-5 border-white">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bolder me-5 nav-logo">
            New Kitchen
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mg-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recipes">
                  Our Recipes
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  About Us
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search Recipes"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="btn search-recipes btn-warning" type="submit">
                Search
              </button>
              <a
                className="position-relative mt-2"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <i className="ms-2  bi bi-heart-fill favorite"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {favCount}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </a>
            </form>
          </div>
        </div>
      </nav>
      {/* OFFCANVAS */}
      <Offcanvas />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    favCount: state.length,
  };
};
export default connect(mapStateToProps)(Navbar);
