import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./searchItem.scss";
const SearchItem = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/trang-chu/phim/${id}`);
  };
  return (
    <div className="search__item" onClick={() => handleClick(item.id)}>
      <div className="search__figust">
        <img src={item.thumbnailUrl} alt="" />
      </div>
      <div className="search__content">
        <div className="search__name">
          <span>{item.name}</span>
        </div>
        <div className="search__practice">
          <span>{`Tập: ${item?.movie[item?.movie?.length - 1]?.pratice}`}</span>
        </div>
        <div className="search__category">
          <span>{item.category}</span>
        </div>
      </div>
    </div>
  );
};

SearchItem.propTypes = {};

export default SearchItem;
