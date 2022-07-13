import React from "react";
import PropTypes from "prop-types";
import SearchItem from "./searchItem";
import "./searchList.scss";
import LoadingFileImage from "../../Loading/loadingFileImage";
const SearchList = ({ dataSearch, loading }) => {
  return (
    <div className="search__list">
      {loading ? (
        <LoadingFileImage />
      ) : (
        <div className="search__list--wap">
          {dataSearch.map((item, idx) => (
            <SearchItem item={item} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

SearchList.propTypes = {};

export default SearchList;
