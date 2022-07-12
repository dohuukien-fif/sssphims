import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ProductApi from "./../../../../../api/movieHome";
import CountineItem from "./couuntineItem";
CountineList.propTypes = {
  categoty: PropTypes.string,
};

function CountineList({ categoty }) {
  const [MovieCountine, setMovieCountine] = useState([]);
  useEffect(() => {
    const fetchApiMovie = async () => {
      try {
        const res = await ProductApi.getAll();
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
