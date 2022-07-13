import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

import { FcFlashOn } from "react-icons/fc";
import SeriesApi from "../../../../../api/movieSeries";
CountineItem.propTypes = {};

function CountineItem({ items }) {
  const { thumbnailUrl, premiere, name, evaluate, id } = items;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phim-bo/phim/${items.id}`);
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

    await SeriesApi.update(newValue);
  };
  const handleNavigeteCategory = (value) => {
    navigate(
      `/category/${value
        ?.replaceAll(" ", "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`
    );
  };
  return (
    <div className="countine_item" key={items.id}>
      <div className="countine_adside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="countine_header">
        <div className="countine_evanta">
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
        <div className="countine_name" onClick={handleClick}>
          <p>{name}</p>
        </div>
        <div
          className="countine_premiere"
          onClick={() => handleNavigeteCategory(premiere)}
        >
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </div>
  );
}

export default CountineItem;
