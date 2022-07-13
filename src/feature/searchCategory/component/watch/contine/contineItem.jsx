import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FcFlashOn } from "react-icons/fc";
import "./styles.scss";
import ProductApi from "../../../../../api/movieHome";
ContineItem.propTypes = {
  items: PropTypes.object,
};

function ContineItem({ items }) {
  const { thumbnailUrl, premiere, name, evaluate, id } = items;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phim-le/phim/${items.id}`);
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
  const handleNavigeteCategory = (value) => {
    navigate(
      `/category/${value
        ?.replaceAll(" ", "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`
    );
  };
  return (
    <>
      <div className="video_adside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="video_header">
        <div className="video_evanta">
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
        <div className="video_name" onClick={handleClick}>
          <p>{name}</p>
        </div>
        <div
          className="video_premiere"
          onClick={() => handleNavigeteCategory(premiere)}
        >
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </>
  );
}

export default ContineItem;
