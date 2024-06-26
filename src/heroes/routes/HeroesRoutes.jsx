import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero/:Id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
