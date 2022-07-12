import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
const ManagerItem = ({ item, handleIdModals, handleIdDelete }) => {
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
    <div className="manager__item">
      <div className="manager__item--left">
        <div className="manager__name">
          <img src={item.image} alt="" />
          <span>{item.userName}</span>
        </div>
        <div className="manager__gender">
          <span>{item.gender}</span>
        </div>
        <div className="manager__birthDay">
          <span>{item.birthDay}</span>
        </div>
        <div className="manager__position">
          <span>{item.position}</span>
        </div>
        <div className="manager__identification">
          <span>{item.identification}</span>
        </div>
        <div className="manager__telephone">
          <span>{item.telephone}</span>
        </div>
      </div>

      <div className="manager__item--right">
        <div className="manager__adress">
          <span>{item.address}</span>
        </div>
        <div className="manager__action">
          <button onClick={() => handleClickId(item.id)}>Edit</button>
          <button onClick={() => handleClickDeleteId(item.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

ManagerItem.propTypes = {};

export default ManagerItem;
