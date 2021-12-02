import React from "react";
import PropTypes from "prop-types";
import { BiTimeFive } from "react-icons/bi";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
// InforWatch.propTypes = {
//   product: PropTypes.array,
// };

function InforWatch({ product, Pratice }) {
  const { name, premiere, practice, nation, cast, director, year, date, time } =
    product;
  const dates = new Date();
  const getDay = dates.getDate() < 10 ? `0${dates.getDate()}` : dates.getDate();
  const getmonth =
    dates.getMonth() + 1 < 10
      ? `0${dates.getMonth() + 1}`
      : dates.getMonth() + 1;
  const dataMovie = `${getDay}/ ${getmonth}/${dates.getFullYear()}`;
  const safeDescription = DOMPurify.sanitize(product.description);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trang-chu/phim/${product.id}`);
  };
  return (
    <div className="watch_contents">
      <div className="watch_name">
        <p>
          {" "}
          {name} - TẬP {Pratice === undefined ? 1 : Pratice}
        </p>
      </div>
      <div className="watch_time">
        <span>Thời lượng :</span>
        <p> {time}</p>
      </div>
      {director !== "" && (
        <div className="watch_director">
          <span>Đạo diễn :</span>
          <p> {director}</p>
        </div>
      )}
      <div className="watch_day">
        <BiTimeFive style={{ fontSize: "17px", color: "rgb(255, 193, 7)" }} />{" "}
        <span>{dataMovie}</span>
      </div>
      <div className="watch_description">
        {" "}
        <span dangerouslySetInnerHTML={{ __html: safeDescription }}></span>
        <span onClick={handleClick}> [Xem thêm]</span>
      </div>
    </div>
  );
}

export default InforWatch;
