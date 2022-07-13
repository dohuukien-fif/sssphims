import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import MovieList from "../component/movie/movieList";
import ProductApi from "./../../api/movieHome";
import "./movieStyles.scss";
import LoadingFeatures from "./../../component/Loading/index";

import MovieModal from "../component/movie/modal/movie";
import MovieUpdate from "../component/movie/update/movie";
import NewMovieFeatures from "./newMovie/index";
import MovieCinemerList from "../component/movie/movieList/movieCinemerList";
import cinimerApi from "../../api/movieCinermer";
import FilterMovie from "../component/filterMovie";
import FilterCategoryMovie from "../component/filterMovie/indexCategoryMovie";

const MovieFeatures = (props) => {
  const [movie, setMovie] = useState([]);
  const [LoadingModal, setLoadingModal] = useState(false);
  const [Modal, setModal] = useState(false);
  const [isOpenInput, setisOpenInput] = useState(false);
  const [dataItem, setDataItem] = useState({});
  const [Loading, setLoading] = useState(true);
  const [isUpdate, setisUpdate] = useState(false);
  const [isNewMovie, setIsNewMovie] = useState(false);
  const closeRef = useRef(null);
  const updateRef = useRef(null);
  const newMovieRef = useRef(null);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 10,
  });
  const handleIsOpenInput = () => {
    setisOpenInput(true);
  };
  const handleIsCloseUpdate = () => {
    setisUpdate(false);
  };
  const handleIsOpenNewMovie = () => {
    console.log("new");
    setIsNewMovie(true);
  };
  const handleIsCloseModal = () => {
    setModal(false);
    setDataItem({});
    setisOpenInput(false);
  };
  useEffect(() => {
    const fetchApi = async () => {
      const data = await cinimerApi.getAll(filter);
      console.log(data);
      setMovie(data);
      setLoading(false);
    };
    fetchApi();
  }, [filter]);

  const handleChangeFilter = (value) => {
    setFilter((prev) => ({
      ...prev,
      ...value,
    }));
  };
  const handleGetIdMovie = async (id) => {
    setLoadingModal(true);

    const data = await cinimerApi.get(id);
    setModal(true);
    setDataItem(data);
    setLoadingModal(false);
  };
  const handleGetIdUpdate = async (id) => {
    setLoadingModal(true);

    const data = await cinimerApi.get(id);
    console.log("update", data);
    setisUpdate(true);
    setDataItem(data);
  };
  useEffect(() => {
    const hanndleWindowClose = (e) => {
      if (e.target === closeRef.current) {
        setModal(false);
        setDataItem({});
        setisOpenInput(false);
      }
    };
    window.addEventListener("click", hanndleWindowClose);

    return () => window.removeEventListener("click", hanndleWindowClose);
  }, []);
  useEffect(() => {
    const hanndleWindowClose = (e) => {
      if (e.target === updateRef.current) {
        setisUpdate(false);
        setLoadingModal(false);
        setDataItem({});
      }
    };
    window.addEventListener("click", hanndleWindowClose);

    return () => window.removeEventListener("click", hanndleWindowClose);
  }, []);
  useEffect(() => {
    const hanndleWindowClose = (e) => {
      if (e.target === newMovieRef.current) {
        setIsNewMovie(false);
        setDataItem({});
      }
    };
    window.addEventListener("click", hanndleWindowClose);

    return () => window.removeEventListener("click", hanndleWindowClose);
  }, []);

  const handleChangeInput = (value) => {
    if (value) {
      setModal(false);
    }
    console.log("value", value);
  };
  const handleChangeUpdate = (value) => {
    if (value) {
      setModal(false);
    }
    console.log("value", value);
  };
  const handleSubmitValueMovieNew = async (value) => {
    console.log("[nnewValueajfanfkanf]", value);
    await cinimerApi.add(value);
    setIsNewMovie(false);
  };
  const ApiFilter = cinimerApi;
  return (
    <div className="movie__admin">
      <div className="movie__swapper">
        <div className="movie__new">
          <button onClick={handleIsOpenNewMovie}>Thêm mới</button>
          <button>Quản lý chất lượng</button>
        </div>
        <FilterCategoryMovie
          onSubmit={handleChangeFilter}
          ApiFilter={ApiFilter}
        />
        {Loading ? (
          <LoadingFeatures />
        ) : (
          <MovieCinemerList
            movie={movie}
            onSubmit={handleGetIdMovie}
            handleGetIdUpdate={handleGetIdUpdate}
          />
        )}
      </div>

      {/* MODAL PHIM */}

      {LoadingModal ? (
        <LoadingFeatures />
      ) : (
        <MovieModal
          isOpenInput={isOpenInput}
          dataItem={dataItem}
          Modal={Modal}
          closeRef={closeRef}
          handleIsOpenInput={handleIsOpenInput}
          handleIsCloseModal={handleIsCloseModal}
          onSubmit={handleChangeInput}
        />
      )}
      {/*  MODAL UPDATE */}
      <MovieUpdate
        dataItem={dataItem}
        isUpdate={isUpdate}
        updateRef={updateRef}
        onSubmits={handleChangeUpdate}
        handleIsCloseUpdate={handleIsCloseUpdate}
      />
      {/*  new  Movie */}
      <NewMovieFeatures
        onSubmits={handleSubmitValueMovieNew}
        newMovieRef={newMovieRef}
        isNewMovie={isNewMovie}
      />
    </div>
  );
};

MovieFeatures.propTypes = {};

export default MovieFeatures;
