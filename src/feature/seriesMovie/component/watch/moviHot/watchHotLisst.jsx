import React from "react";
import PropTypes from "prop-types";
import WatchBoItem from "./watchHotItem";
watchHotLisst.propTypes = {
  MovieHotBo: PropTypes.array,
};

function watchHotLisst({ MovieHotBo }) {
  return (
    <div className="new_list">
      {MovieHotBo.map((items, index) => (
        <div className="new_item">
          <WatchBoItem items={items} />
        </div>
      ))}
    </div>
  );
}

export default watchHotLisst;
