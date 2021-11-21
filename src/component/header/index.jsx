import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiOutlineAlignCenter, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  const [istab, setistab] = useState(false);
  return (
    <nav className="nav">
      <div className="nav_link">
        <div className="nav_figure">
          <img src="https://i.imgur.com/GvLWtFD.png" alt="" />
        </div>

        <ul className={istab ? "nav_menu actives" : " nav_menu"}>
          <li>phim mới</li>
          <li>
            <Link to="teams"></Link> phim lẻ
          </li>
          <li>phim bộ</li>
          <li>phim anime</li>
          <li>phim chiếu rạp</li>
        </ul>
      </div>

      <div className="nav_icon">
        {istab ? (
          <AiOutlineClose onClick={() => setistab(false)} />
        ) : (
          <AiOutlineAlignCenter onClick={() => setistab(true)} />
        )}
      </div>
    </nav>
  );
}

export default Header;
