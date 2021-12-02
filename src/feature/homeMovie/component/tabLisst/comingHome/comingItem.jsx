import React from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { FcFlashOn } from "react-icons/fc";

ComingItem.propTypes = {
  items: PropTypes.object,
};

function ComingItem({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/trang-chu/phim/${items.id}`);
  };
  return (
    <div className="coming_item" key={items.id}>
      <div className="coming_adside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="coming_header" onClick={handleClick}>
        <div className="coming_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
        <div className="coming_name">
          <p>{name}</p>
        </div>
        <div className="coming_premiere">
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </div>
  );
}

export default ComingItem;
