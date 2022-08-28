import React from "react";

const Pagination = ({ recipeArray, changePage }) => {
  return (
    <div className="my-3">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center ">
          {recipeArray &&
            [...Array(Math.ceil(recipeArray.length / 20))].map((x, y) => {
              return (
                <li className="page-item" key={y}>
                  <button
                    className="page-link"
                    onClick={(e) => changePage(e, y * 10)}
                  >
                    {y + 1}
                  </button>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
