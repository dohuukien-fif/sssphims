import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { FcFlashOn } from "react-icons/fc";
import ProductApi from "../../../../../api/movieHome";

ComingItem.propTypes = {
  items: PropTypes.object,
};

function ComingItem({ items }) {
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
    <div className="coming_item" key={items.id}>
      <div className="coming_adside" onClick={handleClick}>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <header className="coming_header">
        <div className="coming_evanta">
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
        <div className="coming_name" onClick={handleClick}>
          <p>{name}</p>
        </div>
        <div
          className="coming_premiere"
          onClick={() => handleNavigeteCategory(premiere)}
        >
          <FcFlashOn style={{ fontSize: "17px" }} />
          <p>{premiere}</p>
        </div>
      </header>
    </div>
  );
}

export default ComingItem;
