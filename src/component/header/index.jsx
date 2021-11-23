import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiOutlineAlignCenter, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  const [istab, setistab] = useState(false);
  const [scroll, setscroll] = useState(false);
  useEffect(() => {
    function scrollNavabar() {
      if (window.scrollY > 100) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    }
    window.addEventListener("scroll", scrollNavabar);
    return () => {
      window.removeEventListener("scroll", scrollNavabar);
    };
  }, [scroll]);

  return (
    <nav className={scroll ? "nav activeNav" : "nav"}>
      <div className="nav_link">
        <div className="nav_figure">
          <img src="https://i.imgur.com/GvLWtFD.png" alt="" />
        </div>

        <ul className={istab ? "nav_menu actives" : " nav_menu"}>
          <li>phim mới</li>

          <li>
            <Link to="/phim-bo"> phim lẻ</Link>
          </li>
          <li>
            {" "}
            <Link to="/old"> phim bộ</Link>
          </li>
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
