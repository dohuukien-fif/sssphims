import React from "react";
import PropTypes from "prop-types";
import { BsPersonDash } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { GiCastleRuins } from "react-icons/gi";
import "./styles.scss";
import { Link } from "react-router-dom";
const SideBar = (props) => {
  return (
    <div className="sideBar">
      <div className="sideBar__swap">
        <div className="sideBar__group">
          <div className="sideBar__icon">
            <BsPersonDash />
          </div>
          <div className="sideBar__name">
            <span>
              <Link to="/admin">DashBoard</Link>
            </span>
          </div>
        </div>
        <div className="sideBar__group">
          <div className="sideBar__icon">
            <MdPeopleOutline />
          </div>
          <div className="sideBar__name">
            <span>
              <Link to="/admin/quan-ly">Quản lý</Link>
            </span>
          </div>
        </div>
        <div className="sideBar__group">
          <div className="sideBar__icon">
            <GiCastleRuins />
          </div>
          <div className="sideBar__name">
            <span>
              <Link to="/admin/dien-vien">Diễn viên</Link>
            </span>
          </div>
        </div>
        <div className="sideBar__group">
          <div className="sideBar__icon">
            <RiMovie2Line />
          </div>
          <div className="sideBar__name">
            <span>Movie</span>
          </div>
          <div className="sideBar__group--second">
            <ul>
              <li>
                <Link to="/admin/phim">Phim</Link>
              </li>
              <li>
                <Link to="/admin/phim-bo">Phim bộ</Link>
              </li>
              <li>
                <Link to="/admin/phim-le">Phim lẻ</Link>
              </li>
              <li>
                <Link to="/admin/phim-anime">Phim anime</Link>
              </li>
              <li>
                <Link to="/admin/phim-cinemer">Phim Cinermer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
