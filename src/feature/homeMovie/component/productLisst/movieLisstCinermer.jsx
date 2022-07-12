import React from "react";
import PropTypes from "prop-types";
import MovieItemCinermer from "./../productItem/movieItemCinermer";
movieLisstCinermer.propTypes = {
  cinermerLisst: PropTypes.array,
};

function movieLisstCinermer({ cinermerLisst }) {
  return (
    <div className="all_list">
      {cinermerLisst
        .filter((x) => x.categoryName === "cinermer")
        .map((items, index) => (
          <MovieItemCinermer items={items} key={index} />
        ))}
    </div>
  );
}

export default movieLisstCinermer;
