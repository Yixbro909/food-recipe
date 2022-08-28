import React from "react";
import { useEffect, useState } from "react";
import { recipeArray } from "./RecipesArray";
import Pagination from "../page/Pagination";

const RecipeList = ({ recipeChange }) => {
  const [page, setPage] = useState(0);

  const changePage = (e, pg) => {
    setPage(pg);

    //removing the active class when moving to the next page
    document.querySelectorAll(".recipes-list").forEach((ele) => {
      ele.childNodes.forEach((child) => {
        child.classList.remove("pinned");
      });
    });
  };
  const displayRecipesArray = (array, pageNumber) => {
    return (
      <>
        {array.slice(pageNumber, 10 + pageNumber).map((ele, ind) => {
          return (
            <li
              className="list-group-item list-group-action"
              onClick={(e) => recipeChange(e)}
              key={ind}
              style={{ cursor: "pointer" }}
            >
              {ele}
            </li>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <ul className="list-group list-group-flush recipes-list">
        {displayRecipesArray(recipeArray, page)}
      </ul>
      <Pagination recipeArray={recipeArray} changePage={changePage} />
    </div>
  );
};
export default RecipeList;
