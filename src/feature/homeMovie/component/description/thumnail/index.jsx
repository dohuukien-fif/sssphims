import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
ThumnaiMovie.propTypes = {
  product: PropTypes.object,
};

function ThumnaiMovie({ product }) {
  return (
    <div className="thumnail">
      <div className="thumani_aside">
        <img
          src="https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fhoc-chau-phu-nhan-9592.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default ThumnaiMovie;
