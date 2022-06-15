import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import ProductApi from "../../../api/movieHome";
import MovieOldList from "../component/product/productList";

import FilterMovie from "../movieFilter/filterMovie";
import Search from "./../movieFilter/search";
import useSearchData from "./hooks/useSearchData";
import "./styles.scss";
import Loading from "./../../../component/Loading/index";
CategoryFeatures.propTypes = {};

function CategoryFeatures(props) {
  const location = useLocation();
  console.log(location);
  const [OldMovieList, setOldMovieList] = useState([]);
  const [SeatchsItem, setSeatchItem] = useState("");
  const navigate = useNavigate();
  // const [Loading, setLoading] = useState(true);
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
  const datasearch = location.pathname.split("=")[1];

  const params = location.pathname;

  console.log(
    "xoa day",
    "tâm lý tình cam"?.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  );

  console.log(params);
  const { dataSearch, LoadingSearch } = useSearchData(
    params?.replaceAll("-", " ").split("/")[2]
  );
  console.log("dataSearch", dataSearch);
  useEffect(() => {
    const fetchDataOldMovie = async () => {
      try {
        const res = await ProductApi.getAll();

        setOldMovieList(res);

        console.log(res);
        // setLoading(false);
      } catch (error) {}
    };
    fetchDataOldMovie();
  }, [params]);
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

  // setfilter((prev) => ({
  //   ...prev,
  //   category: cate,
  // }));
  // console.log(newSearch);

  // const { product, Loading } = useSearchBox();

  useEffect(() => {
    // window.location.search.replace("%20", " ");
  }, []);

  // params?.split("=")[1]?.replace("+", " ")

  // console.log(params.split("=")[1].replace("+", " "));

  return (
    <div className="old">
      <div className="old_container">
        <div className="old_title">PHIM MỚI</div>

        <div className="old_right">
          {LoadingSearch ? (
            <Loading />
          ) : (
            <>
              {" "}
              {dataSearch.length === 0 ? (
                <div className="error">
                  <BiError />
                  <span> không tìm thấy phim ?</span>
                </div>
              ) : (
                <>
                  <MovieOldList movieOldList={dataSearch} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryFeatures;
