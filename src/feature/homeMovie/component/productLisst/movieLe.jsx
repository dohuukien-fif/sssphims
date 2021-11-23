import React from "react";
import PropTypes from "prop-types";
import MovieItemLe from "./../productItem/movieItemLe";
movieLe.propTypes = {
  leLisst: PropTypes.array,
};

function movieLe({ leLisst }) {
  return (
    <div className="all_list">
      {leLisst
        .filter((x) => x.categoryName === "le" || x.categoryName === "Clothing")
        .map((items, index) => (
          <MovieItemLe items={items} />
        ))}
    </div>
  );
}

export default movieLe;
