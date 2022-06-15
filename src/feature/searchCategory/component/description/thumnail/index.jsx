import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
ThumnaiMovie.propTypes = {
  product: PropTypes.array,
};

function ThumnaiMovie({ product }) {
  const { thumbnailUrl, premiere, name } = product;
  return (
    <div className="thumnail">
      <div className="thumani_aside">
        <img src={thumbnailUrl} alt={name} />
      </div>
    </div>
  );
}

export default ThumnaiMovie;
