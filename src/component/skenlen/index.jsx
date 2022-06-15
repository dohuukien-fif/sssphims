import React, { memo } from "react";
import PropTypes from "prop-types";

const index = memo((props) => {
  const arrSkeleton = [
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },

    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
    {
      imgage:
        "https://vn-live.slatic.net/other/roc/52d81745fab90ec4f08e4ab871603e55.jpg",
    },
  ];
  return (
    <div className="skeleton">
      <div className="skeleton__list">
        {arrSkeleton.map((item, index) => (
          <img src={item.imgage} alt="" />
        ))}
      </div>
    </div>
  );
});

index.propTypes = {};

export default index;
