import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../assets/Pages/Home";
import About from "../assets/Pages/About";
import Error from "../assets/Pages/Error";
import Accommodation from "../assets/Pages/Accommodation";

function App() {
  return (
    <Routes>
      {/* Rediriger vers la page d'accueil */}
      <Route path="/home" index element={<Home />} />
      <Route path="/home" element={<Home />} /> {/* Route pour la page d'accueil */}
      <Route path="/about" element={<About />} /> {/* Route pour la page "About" */}
      <Route path="/error" element={<Error />} /> {/* Route pour la page d'erreur */}
      <Route exact path="/accommodation/:cardId" element={<Accommodation />} /> {/* Route pour la page de l'hébergement avec l'ID de la carte spécifié */}

      {/* Route par défaut pour toutes les adresses non spécifiées */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;


