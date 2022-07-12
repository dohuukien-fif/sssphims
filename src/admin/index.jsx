import React, { useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Route, Routes, useLocation } from "react-router-dom";
import SideBar from "./component/sideBar";
import CastFeatures from "./page/cast";
import DashBoardFeatures from "./page/dashBoard";
import ManaersDiretor from "./page/manaersDiretor";
import MovieFeatures from "./page/movie";
import MovieAnimeFeatures from "./page/movieAnime";
import MovieBoFeatures from "./page/movieBo";
import MovieCinermerFeatures from "./page/movieCinnemer";
import MovieLeFeatures from "./page/movieLe";
import "./styles.scss";

const Admin = (props) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [screen, setScreen] = React.useState(0);
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClickClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getScreenWidth = () => {
      setScreen(window.innerWidth);
    };

    window.addEventListener("resize", getScreenWidth);
    getScreenWidth();
    return () => window.removeEventListener("resize", getScreenWidth);
  });
  useEffect(() => {
    if (screen > 1024) {
      setIsOpen(false);
    }
  }, [screen, location.pathname]);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="admin">
      <div className="admin__container">
        <div className={isOpen ? "admin__left active" : "admin__left"}>
          <div className="admin__left--logo">
            <img src="https://i.imgur.com/GvLWtFD.png" alt="" />
          </div>
          <SideBar />
        </div>

        <div className="admin__right">
          <div className="admin__navTop">
            {!isOpen ? (
              <AiOutlineMenu onClick={handleClickOpen} />
            ) : (
              <AiOutlineClose onClick={handleClickClose} />
            )}
          </div>
          <Routes>
            <Route path="/*" element={<DashBoardFeatures />} />
            <Route path="quan-ly/*" element={<ManaersDiretor />} />
            <Route path="dien-vien/*" element={<CastFeatures />} />
            <Route path="phim/*" element={<MovieFeatures />} />
            <Route path="phim-le/*" element={<MovieLeFeatures />} />
            <Route path="phim-bo/*" element={<MovieBoFeatures />} />
            <Route path="phim-cinemer/*" element={<MovieCinermerFeatures />} />
            <Route path="phim-anime/*" element={<MovieAnimeFeatures />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

Admin.propTypes = {};

export default Admin;
