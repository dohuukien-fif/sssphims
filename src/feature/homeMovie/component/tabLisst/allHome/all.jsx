import React from "react";
import PropTypes from "prop-types";
import AllItem from "./allItem";
import "./styles.scss";
AllTab.propTypes = {};

function AllTab({ allMovie }) {
  return (
    <div className="all_list">
      {allMovie
        .filter((x) => x.categoryName === "phim")
        .map((items, index) => (
          <AllItem items={items} key={index} />
        ))}
    </div>
  );
}

export default AllTab;
