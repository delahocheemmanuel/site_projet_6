import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../assets/Pages/Home";
import About from "../assets/Pages/About";
import Error from "../assets/Pages/Error";
import Accommodation from "../assets/Pages/Accommodation";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error />} />
      <Route exact path="/accommodation/:cardId" element={<Accommodation />} />

      {/* Route par défaut pour toutes les adresses non spécifiées */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

