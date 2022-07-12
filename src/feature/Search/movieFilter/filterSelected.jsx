import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import SeriesApi from "../../../api/movieSeries";
FilterSelected.propTypes = {};

function FilterSelected({ onchanges }) {
  const [dataCategory, setdataCategory] = useState([]);
  const [dataNation, setdataNation] = useState([]);
  const [categories, setcategories] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;
    setcategories((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmits = () => {
    if (onchanges) onchanges(categories);
    // setcategories({
    //   sort: "",
    //   category: "",
    //   year: "",
    //   nation: "",
    // });
  };
  useEffect(() => {
    const fetchApi = async () => {
      const res = await SeriesApi.getAll();

      const newCategory = res.map((item) => item.category);
      setdataCategory([...new Set(newCategory)]);

      setdataNation([...new Set(res.map((item) => item.nation))]);
    };
    fetchApi();
  }, []);
  return (
    <div className="select ">
      <div className="select_container">
        <div className="select1" onChange={handlechange}>
          <select name="sort" id="select_movie">
            <option>--Sắp xếp--</option>
            <option value="mới">mới</option>
            <option value="mới nhất">mới nhất</option>
          </select>
        </div>
        <div className="select2">
          <select name="category" id="select_movie" onChange={handlechange}>
            <option>--Thể loại--</option>
            {dataCategory.map((item, idx) => (
              <Fragment key={idx}>
                <option value={item}>{item}</option>
              </Fragment>
            ))}
          </select>
        </div>
        <div className="select3">
          <select name="nation" id="select_movie" onChange={handlechange}>
            <option>--Quốc gia--</option>
            {dataNation.map((item, idx) => (
              <Fragment key={idx}>
                <option value={item}>{item}</option>
              </Fragment>
            ))}
          </select>
        </div>
        <div className="select4">
          <select name="year" id="select_movie" onChange={handlechange}>
            <option value="">--Năm--</option>
            <option value="2021">2021</option>
            {/* <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option> */}
          </select>
        </div>
        <button onClick={handleSubmits}>Lọc phim</button>
      </div>
    </div>
  );
}

export default FilterSelected;
