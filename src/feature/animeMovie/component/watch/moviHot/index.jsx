import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WatchBoHot from "./watchHotLisst";
import WatchLeHot from "./watchLeLisst";
import WatchCinermerHot from "./watchCinermerHotlist";
import SeriesApi from "./../../../../../api/movieSeries";
import OldApi from "./../../../../../api/movieOld";
import cinimerApi from "./../../../../../api/movieCinermer";
import "./styles.scss";
ContainerHot.propTypes = {};

function ContainerHot(props) {
  const [MovieHotBo, setMovieHotBo] = useState([]);
  const [MoviHotLe, setMoviHotLe] = useState([]);
  const [MoviHotCinermer, setMoviHotCinermer] = useState([]);
  useEffect(() => {
    const fetchApiMoviBo = async () => {
      try {
        const res = await SeriesApi.getAll();
        setMovieHotBo(res);
      } catch (error) {}
    };
    fetchApiMoviBo();
  }, []);
  useEffect(() => {
    const fetchApiMoviLe = async () => {
      try {
        const res = await OldApi.getAll();
        setMoviHotLe(res);
      } catch (error) {}
    };
    fetchApiMoviLe();
  }, []);
  useEffect(() => {
    const fetchApiMoviLe = async () => {
      try {
        const res = await cinimerApi.getAll();
        setMoviHotCinermer(res);
      } catch (error) {}
    };
    fetchApiMoviLe();
  }, []);
  return (
    <>
      <h2>PHIM BỘ HOT TRONG TUẦN</h2>
      <WatchBoHot MovieHotBo={MovieHotBo} />
      <h2>PHIM LẺ HOT TRONG TUẦN</h2>
      <WatchLeHot MoviHotLe={MoviHotLe} />
      <h2>PHIM CHINERMER HOT TRONG TUẦN</h2>
      <WatchCinermerHot MoviList={MoviHotCinermer} />
    </>
  );
}

export default ContainerHot;
