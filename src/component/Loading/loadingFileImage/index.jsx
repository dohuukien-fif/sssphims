import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
const LoadingFileImage = (props) => {
  return (
    <div className="loading__file">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

LoadingFileImage.propTypes = {};

export default LoadingFileImage;
