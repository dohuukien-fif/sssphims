import React from "react";
import PropTypes from "prop-types";
import MovieItemBoHot from "./../../productItem/movieHot/movieItemBoHot";
movieLisstBoHot.propTypes = {
  boHotLisst: PropTypes.array,
};

function movieLisstBoHot({ boHotLisst }) {
  return (
    <div className="movie_list">
      {boHotLisst
        .filter((x) => x.categoryName === "phim")
        .map((items, index) => (
          <MovieItemBoHot items={items} key={index} />
        ))}
    </div>
  );
}

export default movieLisstBoHot;
