import React from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
MoviItemBoHot.propTypes = {
  items: PropTypes.object,
};

function MoviItemBoHot({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phim-chieu-rap/phim/${items.id}`);
  };
  return (
    <>
      <div className="new_aside">
        <img src={thumbnailUrl} alt={name} onClick={handleClick} />
      </div>
      <header className="new_header" onClick={handleClick}>
        <div className="new_name">
          <p>{name}</p>
        </div>
        <div className="new_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
      </header>
    </>
  );
}

export default MoviItemBoHot;
