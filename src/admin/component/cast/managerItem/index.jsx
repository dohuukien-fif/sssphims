import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiFillEye } from "react-icons/ai";
const CastItem = ({ item, handleIdModals, handleIdDelete }) => {
  const handleClickId = (id) => {
    if (handleIdModals) {
      handleIdModals(id);
    }
  };
  const handleClickDeleteId = (id) => {
    if (handleIdDelete) {
      handleIdDelete(id);
    }
  };
  return (
    <div className="cast__item" onClick={() => handleClickId(item.id)}>
      <div className="cast__figust">
        <img src={item.image} alt="" />
        <AiFillEye />
      </div>
      <div className="cast__name">
        <span>{item.name}</span>
      </div>
    </div>
  );
};

CastItem.propTypes = {};

export default CastItem;
