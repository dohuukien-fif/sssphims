import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CountineItem from "./couuntineItem";
import cinimerApi from "./../../../../../api/movieCinermer";
CountineList.propTypes = {};

function CountineList() {
  const [MovieCountine, setMovieCountine] = useState([]);
  useEffect(() => {
    const fetchApiMovie = async () => {
      try {
        const res = await cinimerApi.getAll();
        console.log(res);
        setMovieCountine(res);
      } catch (error) {}
    };
    fetchApiMovie();
  }, []);
  return (
    <div className="countine_list">
      {MovieCountine.slice(2, 6).map((items, index) => (
        <CountineItem items={items} />
      ))}
    </div>
  );
}

export default CountineList;
