import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductApi from "../../../api/movieHome";
import "./category.scss";
const CategoryFilter = ({ handleSubmitValueUp }) => {
  const [CategoryName, setCategoryName] = useState([]);
  const [Nation, setNation] = useState([]);
  const [Category, setCategory] = useState([]);
  const [year, setyear] = useState([]);
  const [value, setValue] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await ProductApi.getAll();

      const newCategory = res.map((item) => item.categoryName);
      setCategoryName([...new Set(newCategory)]);

      setNation([...new Set(res.map((item) => item.nation))]);
      setCategory([...new Set(res.map((item) => item.category))]);
      setyear([...new Set(res.map((item) => item.year))]);
    };
    fetchApi();
  }, []);

  const handleSelectChange = (e) => {
    const { value, name } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickSubmitBroveValue = () => {
    if (handleSubmitValueUp) handleSubmitValueUp(value);
  };
  return (
    <div className="filter__category">
      <div className="filter__group">
        <select name="categoryName" onChange={handleSelectChange}>
          <option value="">Vui lòng chọn phim</option>
          {CategoryName.map((item, idx) => (
            <Fragment>
              <option value={item}>{item}</option>
            </Fragment>
          ))}
        </select>
      </div>
      <div className="filter__group">
        <select name="category" onChange={handleSelectChange}>
          <option value="">Vui lòng chọn phim</option>
          {Category.map((item, idx) => (
            <Fragment>
              <option value={item}>{item}</option>
            </Fragment>
          ))}
        </select>
      </div>
      <div className="filter__group">
        <select name="nation" onChange={handleSelectChange}>
          <option value="">Chọn quốc gia</option>
          {Nation.map((item, idx) => (
            <Fragment>
              <option value={item}>{item}</option>
            </Fragment>
          ))}
        </select>
      </div>
      <div className="filter__group">
        <select name="year" onChange={handleSelectChange}>
          <option value="">Vui lòng chọn phim</option>
          {year.map((item, idx) => (
            <Fragment>
              <option value={item}>{item}</option>
            </Fragment>
          ))}
        </select>
      </div>
      <div className="filter__category--btn">
        <button onClick={handleClickSubmitBroveValue}>Lọc</button>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {};

export default CategoryFilter;
