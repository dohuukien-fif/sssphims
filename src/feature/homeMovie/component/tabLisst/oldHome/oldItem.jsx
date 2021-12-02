import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FcFlashOn } from "react-icons/fc";
OldItem.propTypes = {
  items: PropTypes.object,
};

function OldItem({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/trang-chu/phim/${items.id}`);
  };
  return (
    <div className="old_item">
      <div className="old_adside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="old_header" onClick={handleClick}>
        <div className="old_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
        <div className="old_name">
          <p>{name}</p>
        </div>
        <div className="old_premiere">
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </div>
  );
}

export default OldItem;
