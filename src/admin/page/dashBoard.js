import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductApi from "../../api/movieHome";
import OldApi from "../../api/movieOld";
import SeriesApi from "../../api/movieSeries";
import cinimerApi from "../../api/movieCinermer";
import AnimeApi from "../../api/movieAnime";
import "./dashboard.scss";
import { RiMovie2Line } from "react-icons/ri";
const DashBoardFeatures = (props) => {
  const [dataHome, setDataHome] = useState([]);
  const [dataLe, setDataLe] = useState([]);
  const [dataSeri, setDataSeri] = useState([]);
  const [dataAnime, setDataAnime] = useState([]);
  const [dataCinemer, setDataCinemer] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await ProductApi.getAll();
      setDataHome(data);
    };
    fetchApi();
  }, []);
  ///anime
  useEffect(() => {
    const fetchApi = async () => {
      const data = await ProductApi.getAll();
      setDataHome(data);
    };
    fetchApi();
  }, []);
  //le
  useEffect(() => {
    const fetchApi = async () => {
      const data = await OldApi.getAll();
      setDataLe(data);
    };
    fetchApi();
  }, []);
  //seri
  useEffect(() => {
    const fetchApi = async () => {
      const data = await SeriesApi.getAll();
      setDataSeri(data);
    };
    fetchApi();
  }, []);
  //cinemer
  useEffect(() => {
    const fetchApi = async () => {
      const data = await cinimerApi.getAll();
      setDataCinemer(data);
    };
    fetchApi();
  }, []);
  //cinemer
  useEffect(() => {
    const fetchApi = async () => {
      const data = await AnimeApi.getAll();
      setDataAnime(data);
    };
    fetchApi();
  }, []);

  console.log(dataHome, dataSeri, dataCinemer, dataLe);
  return (
    <div className="dashboard">
      <div className="dashbboard__swap">
        <div className="dashboard__top">
          {/* GROUP HOME */}
          <div className="dashbboard__group home">
            <div className="dashoard__left">
              <div className="dashboard__title">
                <span>Tổng phim</span>
              </div>
              <div className="dashboard__total">
                <span>{`${dataHome.length || 0} phim`}</span>
              </div>
            </div>
            <div className="dashoard__right">
              <RiMovie2Line />
            </div>
          </div>
        </div>
        <div className="dashboard__body">
          {/* GROUP LE */}
          <div className="dashbboard__group old">
            <div className="dashoard__left">
              <div className="dashboard__title">
                <span>Tổng phim lẻ</span>
              </div>
              <div className="dashboard__total">
                <span>{`${dataLe.length || 0} phim`}</span>
              </div>
            </div>
            <div className="dashoard__right">
              <RiMovie2Line className="icon__old" />
            </div>
          </div>
          {/* GROUP SERI */}
          <div className="dashbboard__group series">
            <div className="dashoard__left">
              <div className="dashboard__title">
                <span>Tổng phim bộ</span>
              </div>
              <div className="dashboard__total">
                <span>{`${dataSeri.length || 0} phim`}</span>
              </div>
            </div>
            <div className="dashoard__right">
              <RiMovie2Line className="icon__series" />
            </div>
          </div>
          {/* GROUP ANIME */}
          <div className="dashbboard__group anime">
            <div className="dashoard__left">
              <div className="dashboard__title">
                <span>Tổng phim anime</span>
              </div>
              <div className="dashboard__total">
                <span>{`${dataAnime.length || 0} phim`}</span>
              </div>
            </div>
            <div className="dashoard__right">
              <RiMovie2Line className="icon__anime" />
            </div>
          </div>
          {/* GROUP CINEMER */}
          <div className="dashbboard__group cinemer">
            <div className="dashoard__left">
              <div className="dashboard__title">
                <span>Tổng phim cinemer</span>
              </div>
              <div className="dashboard__total">
                <span>{`${dataCinemer.length || 0} phim`}</span>
              </div>
            </div>
            <div className="dashoard__right">
              <RiMovie2Line className="icon__cinemer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashBoardFeatures.propTypes = {};

export default DashBoardFeatures;
