import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/Styles/header.sass";
import logo from "../../assets/images/logo/logo-kasa-header.svg";

const Header = (props) => {
    const location = useLocation(); // Obtient l'URL actuelle de la page
    const { welcome, about } = props; // Extraction des propriétés welcome et about de l'objet props

    return (
        <header>
            <div className="header">
                <Link to="/"><img src={logo} alt="Logo Kasa" className="header__logo" /></Link> {/* Affiche le logo de Kasa avec un lien vers la page d'accueil */}
                <nav className="menu">
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>{welcome} Accueil</Link> {/* Affiche le lien vers la page d'accueil avec la classe "active" si la localisation correspond à "/" */}
                    <Link to="/About" className={location.pathname === "/About" ? "active" : ""}>{about} A propos</Link> {/* Affiche le lien vers la page "About" avec la classe "active" si la localisation correspond à "/About" */}
                </nav>
            </div>
        </header>
    );
}

export default Header;
