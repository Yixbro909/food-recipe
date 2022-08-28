import React from "react";
const SkeletonLoader = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8 mb-4">
      <div className="skeleton-card loading">
        <div className="image"></div>
        <div className="content">
          <h4></h4>
          <div className="description"></div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonLoader;
