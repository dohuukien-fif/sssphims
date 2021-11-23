import React from "react";
import PropTypes from "prop-types";
import { matchPath, useLocation, useParams } from "react-router-dom";
import useDetailProduct from "./../component/hooks/useDescription";
import ThumnaiMovie from "../component/description/thumnail";
import MoviInfor from "../component/description/movieinfo";
import "./description.scss";
Description.propTypes = {};

function Description(props) {
  const { movieId } = useParams();
  console.log(movieId);

  // const { pathname } = useLocation();
  // const match =matchPath( pathname, routes )?.path;
  // console.log(match);
  const { product, Loading } = useDetailProduct(movieId);
  return (
    <div className="description">
      <div className="header">
        <div className="header_figure">
          <img
            src="https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimage.motphim.net%2Fposter%2Fhoc-chau-phu-nhan-9592.jpg"
            alt=""
          />
        </div>
        <div className="header_content">
          <div className="header_left">
            <ThumnaiMovie product={product} />
          </div>
          <div className="header_right">
            <MoviInfor product={product} />
          </div>
        </div>
      </div>
      <div className="body"></div>
    </div>
  );
}

export default Description;
