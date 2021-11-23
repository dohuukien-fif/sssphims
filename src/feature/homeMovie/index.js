import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieFeatures from "./page/movieFeatures";
import Description from "./page/description";
HomeMovieFeatures.propTypes = {};

function HomeMovieFeatures(props) {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomeMovie />} /> */}
        <Route path="/*" element={<MovieFeatures />} />
        {/* <Route path="/lll" element={<MovieFeatures />} /> */}
        <Route path=":movieId" element={<Description />} />

        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
    </div>
  );
}

export default HomeMovieFeatures;
