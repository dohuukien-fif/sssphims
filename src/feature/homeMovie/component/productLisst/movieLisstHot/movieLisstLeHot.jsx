import React from "react";
import PropTypes from "prop-types";
import MovieItemBoHot from "./../../productItem/movieHot/movieItemLeHot";
movieLisstLeHot.propTypes = {
  leHotLisst: PropTypes.array,
};

function movieLisstLeHot({ leHotLisst }) {
  return (
    <div className="movie_list">
      {leHotLisst
        .filter((x) => x.categoryName === "le")
        .map((items, index) => (
          <MovieItemBoHot items={items} />
        ))}
    </div>
  );
}

export default movieLisstLeHot;
