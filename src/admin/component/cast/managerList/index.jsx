import React from "react";
import PropTypes from "prop-types";
import ManagerItem from "../managerItem";
import "./styles.scss";
import CastItem from "../managerItem";
const CastList = ({ data, handleGetIdData, handleDelete }) => {
  const handleIdModals = (id) => {
    if (handleGetIdData) {
      handleGetIdData(id);
    }
  };
  const handleIdDelete = (id) => {
    if (handleDelete) {
      handleDelete(id);
    }
  };
  return (
    <div className="cast__list">
      {data.map((item, index) => (
        <CastItem item={item} key={index} handleIdModals={handleIdModals} />
      ))}
    </div>
  );
};

CastList.propTypes = {};

export default CastList;
