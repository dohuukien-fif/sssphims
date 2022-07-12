import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CountineItem from "./couuntineItem";
import SeriesApi from "./../../../../../api/movieSeries";
CountineList.propTypes = {};

function CountineList({ categoty }) {
  const [MovieCountine, setMovieCountine] = useState([]);
  useEffect(() => {
    const fetchApiMovie = async () => {
      try {
        const res = await SeriesApi.getAll();
        console.log(res);
        setMovieCountine(res.filter((e) => e.category !== categoty));
      } catch (error) {}
    };
    fetchApiMovie();
  }, [categoty]);
  const randomMovie = Math.floor(Math.random() * MovieCountine.length);
  return (
    <div className="countine_list">
      {MovieCountine.slice(
        randomMovie < 4 ? 0 : randomMovie - 4,
        randomMovie < 4 ? MovieCountine.length : randomMovie
      ).map((items, index) => (
        <CountineItem items={items} />
      ))}
    </div>
  );
}

export default CountineList;
