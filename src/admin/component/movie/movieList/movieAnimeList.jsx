import React, { useCallback } from "react";
import PropTypes from "prop-types";
import MovieItem from "../movieItem/movieItem";
import "./styles.scss";
import MovieAnimeItem from "../movieItem/movieAnimeItem";
const MovieAnimeList = ({ movie, onSubmit, handleGetIdUpdate }) => {
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
        <MovieAnimeItem
          item={item}
          key={index}
          getIdMovie={getIdMovie}
          getIdUpdateMovie={getIdUpdateMovie}
        />
      ))}
    </div>
  );
};

MovieAnimeList.propTypes = {
  movie: PropTypes.array,
};

export default MovieAnimeList;
