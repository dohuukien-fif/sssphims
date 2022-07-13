import React from "react";
import PropTypes from "prop-types";
import ContineItem from "./contineItem";
import { useNavigate } from "react-router-dom";
ContineList.propTypes = {
  MovieRandom: PropTypes.array,
};

function ContineList({ MovieRandoms }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="video_list">
        {MovieRandoms.filter((x) => x.categoryName === "phim")
          .slice(0, 4)
          .map((items, index) => (
            <div className="video_item" key={index}>
              <ContineItem items={items} />
            </div>
          ))}
      </div>
      <div className="video_list">
        {MovieRandoms.filter((x) => x.categoryName === "cinermer")
          .slice(0, 4)
          .map((items, index) => (
            <div className="video_item" key={index}>
              <ContineItem items={items} />
            </div>
          ))}
      </div>
      <div className="video_list">
        {MovieRandoms.filter((x) => x.categoryName === "anime")
          .slice(0, 4)
          .map((items, index) => (
            <div className="video_item" key={index}>
              <ContineItem items={items} />
            </div>
          ))}
      </div>
    </>
  );
}

export default ContineList;
