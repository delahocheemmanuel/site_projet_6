import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Accommodation from "../Pages/Accommodation";
import { data } from "./Data/Data";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/accommodation">
        <Route
          path=":idLogement"
          element={<Accommodation dataCard={data} />}
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;