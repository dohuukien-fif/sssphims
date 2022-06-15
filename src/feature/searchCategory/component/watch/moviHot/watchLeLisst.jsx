import React from "react";
import PropTypes from "prop-types";
import WatchLeItem from "./watchLeItem";
watchLeLisst.propTypes = {
  MoviHotLe: PropTypes.array,
};

function watchLeLisst({ MoviHotLe }) {
  return (
    <div className="new_list">
      {MoviHotLe.map((items, index) => (
        <div className="new_item">
          <WatchLeItem items={items} />
        </div>
      ))}
    </div>
  );
}

export default watchLeLisst;
