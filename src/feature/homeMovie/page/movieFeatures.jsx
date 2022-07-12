import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import TabMenu from "../component/tabMenu";
import ProductLisst from "./../component/productLisst/index";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import All from "./../component/tabLisst/allHome/all";
import Coming from "./../component/tabLisst/comingHome/Comming";
import Old from "./../component/tabLisst/oldHome/old";
import ProductApi from "./../../../api/movieHome";
import MovieListLe from "./../component/productLisst/movieLe";
import MovieListAnime from "./../component/productLisst/movieListAnime";
import MovieListCinermer from "./../component/productLisst/movieLisstCinermer";
import MovieLisstBoHot from "../component/productLisst/movieLisstHot/movieLisstBoHot";
import MovieLisstLeHot from "../component/productLisst/movieLisstHot/movieLisstLeHot";
import LoadingAll from "./../../../component/Loading";

// import {} from "react-router-dom"
MovieFeatures.propTypes = {};

function MovieFeatures(props) {
  const navigate = useNavigate();
  const [SearchTerm, setSearchTerm] = useState("");
  const [MovieLisst, setMovieLisst] = useState([]);
  const [Loading, setLoading] = useState(true);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const fetchApiMovie = async () => {
      try {
        // setLoading(true);
        const res = await ProductApi.getAll();
        console.log(res);

        setMovieLisst(res);
        setLoading(false);
      } catch (error) {}
    };
    fetchApiMovie();
  }, []);

  //SEARCH DATA
  const handleSubmit = () => {
    navigate(`/phim?desCast=${SearchTerm.replace(/ /g, "+")}`);

    // navigate({ search: SearchTerm.trim("") });
    // location.search(`${SearchTerm}`);
  };
  return (
    <div className="movie">
      {Loading ? (
        <LoadingAll />
      ) : (
        <>
          <div className="movie_search">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Bạn muốn tìm phim gì ?"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={SearchTerm}
              />{" "}
              <button type="submit">Tìm kiếm</button>
            </form>
          </div>
          <div className="movie_container">
            <div className="movie_right">
              <div className="movie_title">
                <span> PHIM BỘ MỚI</span>
                <TabMenu />
              </div>
              <div className="movie_series">
                <Routes>
                  <Route path="/*" element={<All allMovie={MovieLisst} />} />

                  <Route
                    path="phim-bos"
                    element={<Coming comingMovie={MovieLisst} />}
                  />
                  <Route
                    path="phim-le"
                    element={<Old OldMovie={MovieLisst} />}
                  />

                  {/* <Route path="new" element={<AnimeMovie />} /> */}
                  {/* <Route element={<CinermerMovie />} /> */}
                </Routes>
              </div>
              <div className="movie_old">
                <div className="movie_titles">
                  <span> PHIM LẺ MỚI</span>
                </div>
                <div className="movie_series">
                  <MovieListLe leLisst={MovieLisst} />
                </div>
              </div>
              <div className="movie_old">
                <div className="movie_titles">
                  <span> PHIM CHIẾU RẠP</span>
                </div>
                <div className="movie_series">
                  <MovieListCinermer cinermerLisst={MovieLisst} />
                </div>
              </div>
              <div className="movie_old">
                <div className="movie_titles">
                  <span> PHIM HOẠT HÌNH</span>
                </div>
                <div className="movie_series">
                  <MovieListAnime animeLisst={MovieLisst} />
                </div>
              </div>
            </div>
            <div className="movie_left">
              <div className="movie_title">
                <span> PHIM BỘ HOT</span>
              </div>
              <div className="movie_seriesHot">
                <MovieLisstBoHot boHotLisst={MovieLisst} />
              </div>
              <div className="movie_title">
                <span> PHIM LẺ HOT</span>
              </div>
              <div className="movie_seriesHot">
                <MovieLisstLeHot leHotLisst={MovieLisst} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieFeatures;
