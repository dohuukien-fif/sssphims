import React, { useEffect, useState } from "react";
import {
  AiOutlineAlignCenter,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductApi from "../../api/movieHome";
import SearchList from "./search/searchList";
import "./styles.scss";
Header.propTypes = {};

function Header(props) {
  const [istab, setistab] = useState(false);
  const [scroll, setscroll] = useState(false);
  const [screen, setScreen] = useState(0);

  const [openSearch, setopenSearch] = useState(false);
  const [SearchTerm, setSearchTerm] = useState("");
  const [dataSearch, setdataSearch] = useState([]);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      const reponse = await ProductApi.getAll();
      setdataSearch(
        reponse.filter((e) =>
          e?.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .replace(/ /g, "")
            ?.toLowerCase()
            .includes(
              SearchTerm.replaceAll("+", "")
                .replace(/ /g, "")

                ?.toLowerCase()
            )
        )
      );
      setLoading(false);
    };
    fetchApi();
  }, [SearchTerm]);

  console.log(dataSearch);
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
    setSearchTerm("");
    setopenSearch(false);
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
          <div className="search__block">
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
            {SearchTerm !== "" && dataSearch.length > 0 && (
              <SearchList dataSearch={dataSearch} loading={Loading} />
            )}
          </div>
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
          <li className="admin__hidden">
            {" "}
            <Link to="/admin">admin</Link>
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
