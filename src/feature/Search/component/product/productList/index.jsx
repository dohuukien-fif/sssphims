import React from "react";
import PropTypes from "prop-types";
import OldItemMovie from "./../productItem/index";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
MovieOldList.propTypes = {
  movieOldList: PropTypes.array,
};

function MovieOldList({ movieOldList }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/phim-hoat-hinh/phim/${id}`);
  };
  return (
    <div className="olds_list">
      {movieOldList.map((items, index) => (
        <div className="olds_item">
          <OldItemMovie items={items} />
        </div>
      ))}
    </div>
  );
}

export default MovieOldList;
