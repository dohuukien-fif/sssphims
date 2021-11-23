import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

TabMenu.propTypes = {};

function TabMenu(props) {
  return (
    <div className="tab">
      <div className="tab_link">
        <NavLink to="/" className="unselecteds">
          Tất cả phim
        </NavLink>
      </div>
      <div className="tab_link">
        <NavLink to="/phim-bos">Sắp chiếu</NavLink>
      </div>
      <div className="tab_link">
        <NavLink to="/phim-le">Phim mới</NavLink>
      </div>
    </div>
  );
}

export default TabMenu;
