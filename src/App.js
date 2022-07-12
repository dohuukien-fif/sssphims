import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/header";
import FooterFeature from "./component/footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomeMovie from "./feature/homeMovie";
import SerieMovie from "./feature/seriesMovie";
import OldMovie from "./feature/oldMove";
import AnimeMovie from "./feature/animeMovie";
import SearchMovie from "./feature/Search/index";
import CinermerMovie from "./feature/cinermerMovie";
import CategoryFeatures from "./feature/searchCategory/page/animEMovie";
import Admin from "./admin";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />

      <Routes>
        <Route path="Trang-chu/*" element={<HomeMovie />} />
        <Route path="/" element={<Navigate replace to="Trang-chu" />} />
        <Route path="/phim-bo/*" element={<SerieMovie />} />
        <Route path="/phim-le/*" element={<OldMovie />} />
        <Route path="/phim-hoat-hinh/*" element={<AnimeMovie />} />
        <Route path="/phim-chieu-rap/*" element={<CinermerMovie />} />
        <Route path="/phim/*" element={<SearchMovie />} />

        <Route path="/category/*" element={<CategoryFeatures />} />
        <Route path="/admin/*" element={<Admin />} />
        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
      <FooterFeature />
    </>
  );
}

export default App;
