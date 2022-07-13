import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import MovieOldList from "../component/product/productList";
import FilterMovie from "../movieFilter/filterMovie";
import SeriesApi from "./../../../api/movieSeries";
import LoadingAll from "./../../../component/Loading";
import Search from "./../movieFilter/search";

OldMovieFeatures.propTypes = {};

function OldMovieFeatures(props) {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  const [OldMovieList, setOldMovieList] = useState([]);
  const [SeatchsItem, setSeatchItem] = useState("");
  const [Loading, setLoading] = useState(true);

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
        const res = await SeriesApi.getAll(filter);
        const { pagination, data } = res;
        setOldMovieList(data);
        setPaganation(pagination);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
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

  const setDataMoviList = OldMovieList.filter((item) =>
    item.name.toLowerCase().includes(SeatchsItem.toLowerCase())
  );

  const handleSubmitSearch = (value) => {
    navigate(`/phim?desCast=${value.replace(/ /g, "+")}`);
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
            <div className="old_title">PHIM MỚI CẬP NHẬT</div>

            <div className="old_left">
              {" "}
              <FilterMovie onSubmit={handleSubmit} />
            </div>
            <div className="old_right">
              {OldMovieList.length === 0 ? (
                <div className="error">
                  <BiError />
                  <span> không tìm thấy phim ?</span>
                </div>
              ) : (
                <>
                  <MovieOldList movieOldList={OldMovieList} />
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
