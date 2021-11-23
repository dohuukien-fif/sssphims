import React from "react";
import PropTypes from "prop-types";
import MovieItemAnime from "./../productItem/moveItemAnime";
movieListAnime.propTypes = {
  animeLisst: PropTypes.array,
};

function movieListAnime({ animeLisst }) {
  return (
    <div className="all_list">
      {animeLisst
        .filter((x) => x.categoryName === "anime" || x.categoryName === "Toys")
        .map((items, index) => (
          <MovieItemAnime items={items} />
        ))}
    </div>
  );
}

export default movieListAnime;
