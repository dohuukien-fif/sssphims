import React from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
MoviItemLeHot.propTypes = {};

function MoviItemLeHot({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trang-chu/phim/${items.id}`);
  };
  return (
    <div className="movie_item" key={items.id}>
      <div className="movie_aside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="movie_header" onClick={handleClick}>
        <div className="movie_name">
          <p>{name}</p>
        </div>
        <div className="movie_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
      </header>
    </div>
  );
}

export default MoviItemLeHot;
