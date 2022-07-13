import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CategoryFilter from "./category";
import "./styles.scss";
const FilterMovie = ({ onSubmit }) => {
  const handleSubmitValueUp = (value) => {
    if (onSubmit) onSubmit(value);
  };

  return (
    <div className="filter">
      <CategoryFilter handleSubmitValueUp={handleSubmitValueUp} />
    </div>
  );
};

FilterMovie.propTypes = {};

export default FilterMovie;
