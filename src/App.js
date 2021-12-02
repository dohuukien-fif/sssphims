import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/header";
import FooterFeature from "./component/footer";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import HomeMovie from "./feature/homeMovie";
import SerieMovie from "./feature/seriesMovie";
import OldMovie from "./feature/oldMove";
import AnimeMovie from "./feature/animeMovie";

import CinermerMovie from "./feature/cinermerMovie";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="trang-chu/*" element={<HomeMovie />} />
        <Route path="/" element={<Navigate replace to="Trang-chu" />} />
        <Route path="/phim-bo/*" element={<SerieMovie />} />
        <Route path="/phim-le/*" element={<OldMovie />} />
        <Route path="/phim-hoat-hinh/*" element={<AnimeMovie />} />
        <Route path="/phim-chieu-rap/*" element={<CinermerMovie />} />

        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
      <FooterFeature />
    </>
  );
}

export default App;
