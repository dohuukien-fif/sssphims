import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import "./styles.scss";
import { FcFlashOn } from "react-icons/fc";
CountineItem.propTypes = {};

function CountineItem({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phim-bo/phim/${items.id}`);
  };
  return (
    <div className="countine_item" key={items.id} onClick={handleClick}>
      <div className="countine_adside">
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="countine_header">
        <div className="countine_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
        <div className="countine_name">
          <p>{name}</p>
        </div>
        <div className="countine_premiere">
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </div>
  );
}

export default CountineItem;
