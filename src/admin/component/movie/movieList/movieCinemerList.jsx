import React, { useCallback } from "react";
import PropTypes from "prop-types";
import MovieItem from "../movieItem/movieItem";
import "./styles.scss";
import MovieCinemerItem from "../movieItem/movieConemerItem";
const MovieCinemerList = ({ movie, onSubmit, handleGetIdUpdate }) => {
  const getIdMovie = useCallback(
    (id) => {
      if (onSubmit) {
        onSubmit(id);
      }
    },
    [onSubmit]
  );
  const getIdUpdateMovie = useCallback(
    (id) => {
      console.log("list", id);
      if (handleGetIdUpdate) {
        handleGetIdUpdate(id);
      }
    },
    [handleGetIdUpdate]
  );
  return (
    <div className="movie__list">
      {movie.map((item, index) => (
        <MovieCinemerItem
          item={item}
          key={index}
          getIdMovie={getIdMovie}
          getIdUpdateMovie={getIdUpdateMovie}
        />
      ))}
    </div>
  );
};

MovieCinemerList.propTypes = {
  movie: PropTypes.array,
};

export default MovieCinemerList;
