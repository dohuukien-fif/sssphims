import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import AnimeApi from "./../../../api/movieAnime";
import MovieOldList from "../component/product/productList";
import FilterMovie from "../movieFilter/filterMovie";
import "./styles.scss";
import { BiError } from "react-icons/bi";
import Search from "./../movieFilter/search";
import Pagination from "@mui/material/Pagination";
import LoadingAll from "./../../../component/Loading";
OldMovieFeatures.propTypes = {};

function OldMovieFeatures(props) {
  const navigate = useNavigate();
  const [SearchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  console.log(location);
  const [OldMovieList, setOldMovieList] = useState([]);
  const [SeatchsItem, setSeatchItem] = useState("");
  const [Loading, setLoading] = useState(true);
  // const [Paganation, setPaganation] = useState({
  //   _page:1,
  //   _limit:10
  // })
  const [filter, setfilter] = useState({
    _page: 1,
    _limit: 12,
  });
  const [pagination, setPaganation] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 10,
  });
  useEffect(() => {
    const fetchDataOldMovie = async () => {
      try {
        const res = await AnimeApi.getAll(filter);
        const { pagination, data } = res;
        setOldMovieList(data);
        setPaganation(pagination);
        console.log(data);
        setLoading(false);
      } catch (error) {}
    };
    fetchDataOldMovie();
  }, [filter]);
  const handlePage = (e, page) => {
    setfilter((prev) => ({
      ...prev,
      _page: page,
    }));
  };
  const handleSubmit = (newfilter) => {
    setfilter((prev) => ({
      ...prev,
      ...newfilter,
    }));
  };

  const handleSearch = (newSearch) => {
    setSeatchItem(newSearch);
  };
  const setDataMoviList = OldMovieList.filter((item) =>
    item.name.toLowerCase().includes(SeatchsItem.toLowerCase())
  );
  // setfilter((prev) => ({
  //   ...prev,
  //   category: cate,
  // }));
  // console.log(newSearch);
  //SEARCH
  const handleSubmitSearch = (value) => {
    navigate(`/phim?desCast=${value.replace(/ /g, "+")}`);

    // navigate({ search: SearchTerm.trim("") });
    // location.search(`${SearchTerm}`);
  };
  return (
    <div className="old">
      {Loading ? (
        <LoadingAll />
      ) : (
        <>
          <div className="old_container">
            <div className="old_search">
              <Search onSubmits={handleSubmitSearch} />
            </div>
            <div className="old_title">PHIM M???I C???P NH???T</div>

            <div className="old_left">
              {" "}
              <FilterMovie onSubmit={handleSubmit} />
            </div>
            <div className="old_right">
              {setDataMoviList.length === 0 ? (
                <div className="error">
                  <BiError />
                  <span> kh??ng t??m th???y phim ?</span>
                </div>
              ) : (
                <>
                  <MovieOldList movieOldList={setDataMoviList} />
                </>
              )}
            </div>
          </div>
          <Pagination
            className="old_pagination"
            count={Math.ceil(pagination?._totalRows / pagination?._limit)}
            page={pagination?._page}
            onChange={handlePage}
            shape="rounded"
            color="secondary"
          />
        </>
      )}
    </div>
  );
}

export default OldMovieFeatures;
