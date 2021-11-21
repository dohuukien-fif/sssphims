import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/header";
import FooterFeature from "./component/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMovie from "./feature/homeMovie";
import SerieMovie from "./feature/serieMovie";
import OldMovie from "./feature/homeMovie";
import AnimeMovie from "./feature/homeMovie";

import CinermerMovie from "./feature/homeMovie";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMovie />} />
        <Route path="teams" element={<SerieMovie />} />
        <Route path="old" element={<OldMovie />} />

        <Route path="new" element={<AnimeMovie />} />
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
      <FooterFeature />
    </>
  );
}

export default App;
