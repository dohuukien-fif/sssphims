import React from "react";
import PropTypes from "prop-types";
import ManagerItem from "../managerItem";
import "./styles.scss";
const ManagerList = ({ data, handleIdModal, handleDelete }) => {
  const handleIdModals = (id) => {
    if (handleIdModal) {
      handleIdModal(id);
    }
  };
  const handleIdDelete = (id) => {
    if (handleDelete) {
      handleDelete(id);
    }
  };
  return (
    <div className="manager__list">
      {data.map((item, index) => (
        <ManagerItem
          item={item}
          key={index}
          handleIdModals={handleIdModals}
          handleIdDelete={handleIdDelete}
        />
      ))}
    </div>
  );
};

ManagerList.propTypes = {};

export default ManagerList;
