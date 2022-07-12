import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
import { FcFlashOn } from "react-icons/fc";
import { BiTimeFive } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ProductApi from "../../../../../api/movieHome";
MoviInfor.propTypes = {
  product: PropTypes.array,
};

function MoviInfor({ product }) {
  const {
    name,
    premiere,
    practice,
    nation,
    cast,
    director,
    year,
    date,
    time,
    evaluate,
    id,
  } = product;
  const dates = new Date();
  const dataMovie = `${dates.getDate()}/ ${
    dates.getMonth() + 1
  }/${dates.getFullYear()}`;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phim/p/${product.id}`);
  };
  const handleNavigeteCategory = (value) => {
    navigate(
      `/category/${value
        ?.replaceAll(" ", "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`
    );
  };
  const dataIcon = [
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
  ];

  const [inxEvalue, setIdxEvanlue] = useState(0);

  const handleClickEvanlue = async (id, evaluate) => {
    setIdxEvanlue(evaluate);

    const newValue = { id, evaluate };

    await ProductApi.update(newValue);
  };
  return (
    <div className="info">
      <header className="info_header">
        <div className="info_name">
          <p> {product.name}</p>
        </div>
        <div className="info_user">
          <div className="info_evanta">
            {dataIcon.map((item, idx) => (
              <p
                className={
                  idx <= (inxEvalue > 0 ? inxEvalue : evaluate)
                    ? "active__evanlue"
                    : ""
                }
                onClick={() => handleClickEvanlue(id, idx)}
              >
                {item}
              </p>
            ))}{" "}
          </div>
          <div className="info_premiere">
            <FcFlashOn style={{ fontSize: "17px" }} />
            <span
              className="infor_firt"
              onClick={() => handleNavigeteCategory(premiere)}
            >
              {premiere}
            </span>
            <BiTimeFive
              style={{ fontSize: "17px", color: "rgb(255, 193, 7)" }}
            />
            <span>{dataMovie}</span>
          </div>
        </div>
      </header>
      <div className="info_body">
        <button>
          <a href="#trailer">Trailer</a>
        </button>
        <button onClick={handleClick}>Xem phim</button>
      </div>
      <div className="info_footer">
        {director !== "" && (
          <p className="info_director">Đạo diên : {director}</p>
        )}
        {time !== "" && <p className="info_time">Thời lượng : {time}</p>}
        {practice !== "" && (
          <p className="info_practive">Số tập : {practice}</p>
        )}
        {year !== "" && <p className="info_year">Năm : {year}</p>}
        {date !== "" && <p className="info_date">Ngày : {date}</p>}
        {nation !== "" && <p className="info_nation">Quốc gia : {nation}</p>}
        {cast !== "" && <p className="info_nation">Diễn viên : {cast}</p>}
      </div>
    </div>
  );
}

export default MoviInfor;
