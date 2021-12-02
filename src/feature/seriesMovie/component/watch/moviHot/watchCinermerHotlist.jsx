import React from "react";
import PropTypes from "prop-types";
import WatchBoItem from "./watchCinermerItem";
watchHotLisst.propTypes = {
  MoviHotCinermer: PropTypes.array,
};

function watchHotLisst({ MoviList }) {
  return (
    <div className="new_list">
      {MoviList.map((items, index) => (
        <div className="new_item">
          <WatchBoItem items={items} />
        </div>
      ))}
    </div>
  );
}

export default watchHotLisst;
