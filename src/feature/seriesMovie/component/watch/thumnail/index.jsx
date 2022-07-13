import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function ThumnailWatch({ product }) {
  const { thumbnailUrl, name } = product;
  return (
    <div className="watch_thumnails">
      <div className="watch_aside">
        <img src={thumbnailUrl} alt={name} />
      </div>
    </div>
  );
}

export default ThumnailWatch;
