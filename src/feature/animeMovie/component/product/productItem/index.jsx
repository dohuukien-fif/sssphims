import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
import { FcFlashOn } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
OldItems.propTypes = {
  items: PropTypes.object,
};

function OldItems({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/phim-hoat-hinh/phim/${items.id}`);
  };
  return (
    <>
      <div className="olds_adside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="olds_header" onClick={handleClick}>
        <div className="olds_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
        <div className="olds_name">
          <p>{name}</p>
        </div>
        <div className="olds_premiere">
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </>
  );
}

export default OldItems;
