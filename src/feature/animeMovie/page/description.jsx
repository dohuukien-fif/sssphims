import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { matchPath, useLocation, useParams } from "react-router-dom";
import useDetailProduct from "./../component/hooks/useDescription";
import ThumnaiMovie from "../component/description/thumnail";
import MoviInfor from "../component/description/movieinfo";
import "./description.scss";

import DetaiList from "./../component/description/descriptions/detailLisst";
import CountineList from "../component/description/countine/countineList";
import LoadingAll from "./../../../component/Loading";
Description.propTypes = {};

function Description(props) {
  const { animeId } = useParams();
  console.log(animeId);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // const { pathname } = useLocation();
  // const match =matchPath( pathname, routes )?.path;
  // console.log(match);
  const { product, Loading } = useDetailProduct(animeId);

  return (
    <div className="description">
      {Loading ? (
        <LoadingAll />
      ) : (
        <>
          <div className="headers">
            <div className="headers_figure">
              <img src={product.thumbnailUrl} alt="" />

              <div className="headers_content">
                <div className="headers_left">
                  <ThumnaiMovie product={product} />
                </div>
                <div className="headers_right">
                  <MoviInfor product={product} />
                </div>
              </div>
            </div>
          </div>
          <div className="body_old">
            <div className="body_contentOld">
              <DetaiList product={product} />
            </div>
          </div>
          <div className="trailer" id="trailer">
            <div className="trailer_container">
              <div className="trailer_title">
                <p>Official trailer:</p>
              </div>
              <div className="trailer_body">
                <iframe
                  width="100%"
                  height="454"
                  src={product.desTrailer}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="countine">
            <div className="countine_title">C?? TH??? B???N C??NG MU???N XEM</div>
            <div className="countine_container">
              <CountineList categoty={product.category} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Description;
