import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FcFlashOn } from "react-icons/fc";
AllItem.propTypes = {
  items: PropTypes.object,
};

function AllItem({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trang-chu/phim/${items.id}`);
  };
  return (
    <div className="all_item" key={items.id}>
      <div className="all_adside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="all_header" onClick={handleClick}>
        <div className="all_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
        <div className="all_name">
          <p>{name}</p>
        </div>
        <div className="all_premiere">
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </div>
  );
}

export default AllItem;
