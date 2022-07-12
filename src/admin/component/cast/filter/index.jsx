import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
const FilterNation = ({ onSubmits }) => {
  const data = [
    {
      nation: "Mỹ",
    },
    {
      nation: "Trung quốc",
    },
    {
      nation: "Hàn  quốc",
    },
    {
      nation: "Việt nam",
    },
  ];

  const handleChangeValue = (e) => {
    const { value } = e.target;

    if (onSubmits) onSubmits(value);
  };
  return (
    <div className="filter__nation">
      <div className="filter__nation--title">
        <span>Quốc gia</span>
      </div>
      <div className="filter__nation--form">
        <select name="" id="" onChange={handleChangeValue}>
          {data.map((item, idx) => (
            <option value={item.nation}>{item.nation}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

FilterNation.propTypes = {};

export default FilterNation;
