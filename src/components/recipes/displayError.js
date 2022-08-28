import React from "react";
import networkErr from "../../img/animated/network-error.gif";
import notfound from "../../img/animated/notfound.gif";

const displayErr = (err, recipe) => {
  if (err.message == "Network Error") {
    return (
      <div className="network-err text-center mt-5">
        <img src={networkErr} style={{ width: "100px", height: "100px" }} />
        <p className="fw-bolder">Check your internet connection ! ! !</p>
      </div>
    );
  } else {
    return (
      <div className="network-err text-center mt-5">
        <img src={notfound} style={{ width: "100px", height: "100px" }} />
        <p className="fw-bolder">
          <span className="text-danger">{recipe}</span> not available now
        </p>
      </div>
    );
  }
};

export default displayErr;
