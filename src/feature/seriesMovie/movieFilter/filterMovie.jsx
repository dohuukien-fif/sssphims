import React from "react";
import PropTypes from "prop-types";
import FileteSelected from "./filterSelected";
FilterMovie.propTypes = {
  onSubmit: PropTypes.func,
};

function FilterMovie({ onSubmit }) {
  const handleSelectedForm = (newSelect) => {
    if (onSubmit) onSubmit(newSelect);
  };
  return (
    <div>
      <FileteSelected onchanges={handleSelectedForm} />
    </div>
  );
}

export default FilterMovie;
