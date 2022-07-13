import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { matchPath, useLocation, useParams } from "react-router-dom";
import useDetailProduct from "./../component/hooks/useDescription";
import ThumnailWatch from "../component/watch/thumnail";
import InforWatch from "../component/watch/info";

import Video from "../component/watch/video";
import WatchContainer from "./../component/watch/moviHot/index";
import LoadingAll from "./../../../component/Loading";
WatchTv.propTypes = {};

function WatchTv(props) {
  const { watchId } = useParams();
  const [Pratice, setPratice] = useState();
  console.log(watchId);
  const { product, Loading } = useDetailProduct(watchId);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const handleChangePratice = (newValue) => {
    setPratice(newValue);
  };
  return (
    <div className="watch">
      {Loading ? (
        <LoadingAll />
      ) : (
        <div className="watch_container">
          <header className="watch_header">
            <img src={product.thumbnailUrl} alt="" />
            <div className="watch_content">
              <div className="watch_thumnail">
                <ThumnailWatch product={product} />
              </div>
              <div className="watch_info">
                <InforWatch Pratice={Pratice} product={product} />
              </div>
            </div>
          </header>
          <div className="watch_body">
            <div className="watch_video">
              <Video product={product} pratice={handleChangePratice} />
            </div>
            <div className="watch_new">
              {/* <h2>cos</h2> */}
              <WatchContainer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchTv;
