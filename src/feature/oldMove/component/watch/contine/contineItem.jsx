import React from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FcFlashOn } from "react-icons/fc";
import "./styles.scss";
ContineItem.propTypes = {
  items: PropTypes.object,
};

function ContineItem({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phim-le/phim/${items.id}`);
  };
  return (
    <>
      <div className="video_adside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="video_header" onClick={handleClick}>
        <div className="video_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
        <div className="video_name">
          <p>{name}</p>
        </div>
        <div className="video_premiere">
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </>
  );
}

export default ContineItem;
