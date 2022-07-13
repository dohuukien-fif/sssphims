import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Choosing from "./choosingVideo";

import { useLocation } from "react-router-dom";
import CountineList from "./../contine/contineList";
import ProductApi from "./../../../../../api/movieHome";

function Video({ product, pratice }) {
  const { movie, nation } = product;
  const location = useLocation();
  console.log(location);

  const [Index, setIndex] = useState(0);
  const [MovieRandom, setMovieRandom] = useState([]);
  const videos = [
    {
      pratice: 1,
      video: "https://zembed.net/v/JaklIcjAGE.html",
    },
    {
      pratice: 2,
      video: "https://zembed.net/v/fkKCmOVzoP.html",
    },
    {
      pratice: 3,
      video: "https://zembed.net/v/iPNctLihJI.html",
    },
    {
      pratice: 4,
      video: "https://zembed.net/v/cDuLofUOnj.html",
    },
    {
      pratice: 5,
      video: "https://zembed.net/v/bMHetCqgJn.html",
    },
  ];

  useEffect(() => {
    const fetApiRandom = async () => {
      try {
        const res = await ProductApi.getAll();
        setMovieRandom(res.filter((e) => e.nation === nation));
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetApiRandom();
  }, []);
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "623414048788516",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v12.0",
      });
    };

    (function (d, s, id) {
      let nets =
        "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v12.0&appId=623414048788516&autoLogAppEvents=1";
      console.log("test");
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s);
      js.id = id;
      js.src = nets;

      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    window.FB?.XFBML.parse();
  }, [window?.FB]);
  console.log(window.FB);

  const handleChanPratice = (newIndex, newpratice) => {
    setIndex(newIndex);
    pratice(newpratice);
  };

  return (
    <div className="video">
      <header className="video_header">
        <div className="video_block">
          <div className="video_play">
            <iframe
              src={movie[Index].video}
              frameBorder="0"
              width="100%"
              height="100%"
              allowFullScreen
              style={{
                //
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
          <div className="video_pratice">
            <div className="video_choosing">
              <p>CHỌN TẬP PHIM</p>
            </div>
            <Choosing videos={movie} onChanges={handleChanPratice} />
          </div>
          <div className="video_waning">
            <p>
              <strong>CẢNH BÁO:</strong>
              Không bấm vào các đường link lạ ở khu vực bình luận. Việc truy cập
              vào các liên kết lạ ngoài ssPhim có thể khiến bạn bị hack tài
              khoản Facebook.
            </p>
          </div>
          <div className="video_comment">
            <div className="comment_title">
              <span>BÌNH LUẬN VỀ PHIM :</span>
              <img src="https://i.imgur.com/GvLWtFD.png" alt="" />
            </div>
            <div className="commet_people">
              {" "}
              <div id="fb-root">
                <div
                  className="fb-comments"
                  data-lazy="true"
                  data-href={`https://${product.id}.com`}
                  data-width="500"
                  data-numposts="5"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="video_countine">
        <div className="video_title">
          <span>CÓ THỂ BẠN CŨNG MUỐN XEM</span>
        </div>
        <CountineList MovieRandoms={MovieRandom} />
      </div>
    </div>
  );
}

export default Video;
