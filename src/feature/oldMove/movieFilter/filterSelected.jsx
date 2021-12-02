import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
FilterSelected.propTypes = {};

function FilterSelected({ onchanges }) {
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
            <option value="Phim tình cảm">Phim tình cảm</option>

            <option value="Phim kinh dị">Phim kinh dị</option>
            <option value="Phim cổ trang">Phim cổ trang</option>

            {/* <option value="Phim hoạt hình">Phim hoạt hình</option> */}
            <option value="Phim hành động">Phim hành động</option>
          </select>
        </div>
        <div className="select3">
          <select name="nation" id="select_movie" onChange={handlechange}>
            <option>--Quốc gia--</option>
            <option value="Mỹ">Mỹ</option>
            <option value="Trung Quốc">Trung Quốc</option>
            <option value="Nga">Nga</option>
            {/* <option value="2018">2018</option>
          <option value="2017">2017</option> */}
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
