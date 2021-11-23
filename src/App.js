import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/header";
import FooterFeature from "./component/footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeMovie from "./feature/homeMovie";
import SerieMovie from "./feature/serieMovie/index";
import OldMovie from "./feature/oldMove";
import AnimeMovie from "./feature/animeMovie";

import CinermerMovie from "./feature/homeMovie";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/*" element={<HomeMovie />} />

        <Route path="/phim-bo" element={<SerieMovie />} />
        <Route path="/old" element={<OldMovie />} />

        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
      <FooterFeature />
    </>
  );
}

export default App;
