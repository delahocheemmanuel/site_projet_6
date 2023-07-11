import React from "react";
import "../Styles/footer.sass";
import logo from "../../assets/images/logo/logo-kasa-footer.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={logo} alt="logo kasa white" /> {/* Affiche le logo de Kasa en utilisant l'image spécifiée */}
        <h2>© 2020 Kasa. All rights reserved</h2> {/* Affiche le texte du droit d'auteur */}
      </div>
    </footer>
  );
};

export default Footer;
