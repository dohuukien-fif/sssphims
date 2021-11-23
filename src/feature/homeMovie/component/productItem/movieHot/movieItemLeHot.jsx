import React from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
movieItemLeHot.propTypes = {};

function movieItemLeHot({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  return (
    <div className="movie_item" key={items.id}>
      <div className="movie_aside">
        <img
          src="https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fhoc-chau-phu-nhan-9592.jpg"
          alt=""
        />
      </div>
      <header className="movie_header">
        <div className="movie_name">
          <p>{name}</p>
        </div>
        <div className="movie_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
      </header>
    </div>
  );
}

export default movieItemLeHot;
