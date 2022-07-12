import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import ProductApi from "../../../../../api/movieHome";
MoviItemBoHot.propTypes = {
  items: PropTypes.object,
};

function MoviItemBoHot({ items }) {
  const { thumbnailUrl, premiere, name, evaluate, id } = items;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phim-chieu-rap/phim/${items.id}`);
  };
  const dataIcon = [
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
  ];

  const [inxEvalue, setIdxEvanlue] = useState(0);

  const handleClickEvanlue = async (id, evaluate) => {
    setIdxEvanlue(evaluate);

    const newValue = { id, evaluate };

    await ProductApi.update(newValue);
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
          {dataIcon.map((item, idx) => (
            <p
              className={
                idx <= (inxEvalue > 0 ? inxEvalue : evaluate)
                  ? "active__evanlue"
                  : ""
              }
              onClick={() => handleClickEvanlue(id, idx)}
            >
              {item}
            </p>
          ))}{" "}
        </div>
      </header>
    </>
  );
}

export default MoviItemBoHot;
