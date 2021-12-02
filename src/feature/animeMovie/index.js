import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieFeatures from "./page/animEMovie";
import Description from "./page/description";
import WatchTv from "./page/watchTv";
HomeMovieFeatures.propTypes = {};

function HomeMovieFeatures(props) {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomeMovie />} /> */}
        <Route path="/*" element={<MovieFeatures />} />
        {/* <Route path="/lll" element={<MovieFeatures />} /> */}
        <Route path="/phim/:animeId" element={<Description />} />
        <Route path="/p/:watchId" element={<WatchTv animate={true} />} />
        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
    </div>
  );
}

export default HomeMovieFeatures;
