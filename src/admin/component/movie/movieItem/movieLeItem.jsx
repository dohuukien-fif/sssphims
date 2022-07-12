import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
const MovieLeItem = ({ item, getIdMovie, getIdUpdateMovie }) => {
  const hadleClickId = (id) => {
    if (getIdMovie) getIdMovie(id);
  };
  const handleGetIdMovie = (id) => {
    console.log("item", id);
    if (getIdUpdateMovie) getIdUpdateMovie(id);
  };
  return (
    <div className="movie__item">
      <div className="movie__figust">
        <img src={item.thumbnailUrl} alt="" />

        <div className="movie__pratice" onClick={() => hadleClickId(item.id)}>
          <span>{item?.movie[item.movie.length - 1]?.pratice}</span>
        </div>
        <div
          className={item.sort !== "mới" ? "movie__sort active" : "movie__sort"}
        >
          <span>{item?.sort}</span>
        </div>
      </div>
      <div className="movie__bottom" onClick={() => handleGetIdMovie(item.id)}>
        <div className="movie__name">
          <span>{item.name}</span>
        </div>
        <div className="movie__footer">
          <div className="movie__date">
            <span>{item.date}</span>
          </div>
          <div className="movie__category">
            <span>{item.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieLeItem.propTypes = {
  item: PropTypes.object,
  getIdMovie: PropTypes.func,
};

export default MovieLeItem;
