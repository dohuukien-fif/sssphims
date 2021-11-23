import React from "react";
import PropTypes from "prop-types";
import OldItem from "./oldItem";

Old.propTypes = {};

function Old({ OldMovie }) {
  return (
    <div className="old_list">
      {OldMovie.filter((x) => x.categoryName === "moi").map((items, index) => (
        <OldItem items={items} />
      ))}
    </div>
  );
}

export default Old;
