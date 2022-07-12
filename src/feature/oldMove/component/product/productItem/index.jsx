import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
import { FcFlashOn } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import ProductApi from "../../../../../api/movieHome";

OldItems.propTypes = {
  items: PropTypes.object,
};

function OldItems({ items }) {
  const { thumbnailUrl, premiere, name, evaluate } = items;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/phim-le/phim/${items.id}`);
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
    <>
      <div className="olds_adside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="olds_header">
        <div className="olds_evanta">
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
        <div className="olds_name" onClick={handleClick}>
          <p>{name}</p>
        </div>
        <div
          className="olds_premiere"
          onClick={() => handleNavigeteCategory(premiere)}
        >
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </>
  );
}

export default OldItems;
