import React from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

TabMenu.propTypes = {};

function TabMenu(props) {
  const location = useLocation();
  const Router = [
    {
      name: "/Trang-chu",
      nameTab: "Tất cả phim",
    },
    {
      name: "/Trang-chu/phim-bos",
      nameTab: "Sắp chiếu",
    },
    {
      name: "/Trang-chu/phim-le",
      nameTab: "Phim mới",
    },
  ];

  const activeTabb = Router.findIndex((e) => e.name === location.pathname);

  console.log(location.pathname, !!activeTabb);
  return (
    <div className="tab">
      {Router.map((item, index) => (
        <div className="tab_link" key={index}>
          <NavLink
            to={`${item.name}`}
            className={item.name === location.pathname ? "unselecteds" : ""}
          >
            {item.nameTab}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default TabMenu;
