import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CategoryFilter from "./category";
import "./styles.scss";
import CategoryMovie from "./categoryMovie";
const FilterCategoryMovie = ({ onSubmit, ApiFilter }) => {
  const handleSubmitValueUp = (value) => {
    if (onSubmit) onSubmit(value);
  };

  return (
    <div className="filter">
      <CategoryMovie
        handleSubmitValueUp={handleSubmitValueUp}
        ApiFilter={ApiFilter}
      />
    </div>
  );
};

FilterCategoryMovie.propTypes = {};

export default FilterCategoryMovie;
