import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import {
  AiOutlineAlignCenter,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
Header.propTypes = {};

function Header(props) {
  const [istab, setistab] = useState(false);
  const [scroll, setscroll] = useState(false);
  const [screen, setScreen] = useState(0);

  const [openSearch, setopenSearch] = useState(false);
  const [SearchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    function scrollNavabar() {
      if (window.scrollY > 0) {
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
  // console.log(navigate);
  // console.log(location.search);
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/phim?desCast=${SearchTerm.replace(/ /g, "+")}`);

    setopenSearch(false);
    setSearchTerm("");
    // navigate({ search: SearchTerm.trim("") });
    // location.search(`${SearchTerm}`);
  };

  //CLOSE  TABB

  useEffect(() => {
    const screenWidth = () => {
      setScreen(window.innerWidth);
    };

    window.addEventListener("resize", screenWidth);
    screenWidth();
    return () => window.removeEventListener("resize", screenWidth);
  }, []);
  useEffect(() => {
    if (screen > 700) {
      setistab(false);
    }
  }, [screen]);
  useEffect(() => {
    setistab(false);
  }, [location.pathname]);
  const handleOpenSearch = () => {
    setopenSearch((x) => !x);
  };

  return (
    <nav className={scroll ? "nav activeNav" : "nav"}>
      <div className="nav_link">
        <div className="nav_figure">
          <Link to="Trang-chu">
            {" "}
            <img src="https://i.imgur.com/GvLWtFD.png" alt="" />
          </Link>
        </div>

        <div className="search">
          <AiOutlineSearch onClick={handleOpenSearch} />
        </div>
        <div
          className={
            openSearch ? "search__swapper activeSearch" : "search__swapper"
          }
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              placeholder="tìm kiếm phim...?"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={SearchTerm}
              id=""
            />

            <button type="submit">search</button>
          </form>
        </div>
        <ul className={istab ? "nav_menu actives" : " nav_menu"}>
          <li>
            <Link to="trang-chu">phim mới</Link>
          </li>

          <li>
            <Link to="/phim-le"> phim lẻ</Link>
          </li>
          <li>
            {" "}
            <Link to="/phim-bo"> phim bộ</Link>
          </li>
          <li>
            {" "}
            <Link to="/phim-hoat-hinh">phim anime</Link>
          </li>
          <li>
            {" "}
            <Link to="/phim-chieu-rap">phim chiếu rạp</Link>
          </li>
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
