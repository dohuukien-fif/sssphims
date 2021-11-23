import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { AiOutlineStar } from "react-icons/ai";
oldItem.propTypes = {
  items: PropTypes.object,
};

function oldItem({ items }) {
  const { thumbnailUrl, premiere, name } = items;
  return (
    <div className="old_item">
      <div className="old_adside">
        <img
          src="https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fhoc-chau-phu-nhan-9592.jpg"
          alt=""
        />
      </div>
      <header className="old_header">
        <div className="old_evanta">
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
          <AiOutlineStar style={{ fontSize: "17px", color: "yellow" }} />
        </div>
        <div className="old_name">
          <p>{name}</p>
        </div>
        <div className="old_premiere">
          <img
            src="https://www.ssphim.net/static/5fe2d564b3fa64a886a11cee/5fe2d564b3fa647446a11d19_tag.svg"
            alt=""
          />{" "}
          <p>{premiere}</p>
        </div>
      </header>
    </div>
  );
}

export default oldItem;
