import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
// ThumnailWatch.propTypes = {
//   product: PropTypes.array,
// };

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
