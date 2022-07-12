import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ProductApi from "../../../../../api/movieHome";
MoviItemLeHot.propTypes = {};

function MoviItemLeHot({ items }) {
  const { thumbnailUrl, premiere, name, evaluate } = items;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trang-chu/phim/${items.id}`);
  };
  const handleNavigeteCategory = (value) => {
    navigate(
      `/category/${value
        ?.replaceAll(" ", "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`
    );
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
    <div className="movie_item" key={items.id}>
      <div className="movie_aside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="movie_header">
        <div className="movie_name" onClick={handleClick}>
          <p>{name}</p>
        </div>
        <div className="movie_evanta">
          {dataIcon.map((item, idx) => (
            <p
              className={
                idx <= (inxEvalue > 0 ? inxEvalue : evaluate)
                  ? "active__evanlue"
                  : ""
              }
              onClick={() => handleClickEvanlue(items.id, idx)}
            >
              {item}
            </p>
          ))}{" "}
        </div>
      </header>
    </div>
  );
}

export default MoviItemLeHot;
