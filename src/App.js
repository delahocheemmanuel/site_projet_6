import React from "react";
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Error from "./assets/Pages/Error";
import Accommodation from "./assets/Pages/Accommodation";
import { data } from "./assets/Data/Datas";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/accommodation">
        <Route
          path=":idLogement"
          element={<Accommodation dataCard={data} />}
        />
      </Route>
    </Routes>
  );
};


export default App;
