import React from "react";
import PropTypes from "prop-types";
import ComingItem from "./comingItem";

Comming.propTypes = {};

function Comming({ comingMovie }) {
  return (
    <div className="coming_list">
      {comingMovie
        .filter((x) => x.categoryName === "coming")
        .map((items, index) => (
          <ComingItem items={items} key={index} />
        ))}
    </div>
  );
}

export default Comming;
