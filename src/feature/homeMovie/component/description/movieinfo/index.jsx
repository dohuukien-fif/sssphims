import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
MoviInfor.propTypes = {
  product: PropTypes.object,
};

function MoviInfor({ product }) {
  const { name, premiere, practice, nation, cast, director, year, date, time } =
    product;
  const dates = new Date();
  const dataMovie = `${dates.getDate()}/ ${dates.getDay()}/${dates.getFullYear()}`;

  return (
    <div className="info">
      <header className="info_header">
        <div className="info_name">
          <p> {product.name}</p>
        </div>
        <div className="info_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
        <div className="info_premiere">
          <img
            src="https://www.ssphim.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647446a11d19_tag.svg"
            alt=""
          />{" "}
          <span className="infor_firt">{premiere}</span>
          <img
            className="info_image"
            src="https://www.ssphim.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647cf1a11d0b_clock.svg"
            alt=""
          />
          <span>{dataMovie}</span>
        </div>
      </header>
      <div className="info_body">
        <button>Trailer</button>
        <button>Xem phim</button>
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
