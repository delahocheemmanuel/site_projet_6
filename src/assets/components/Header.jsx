import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/Styles/header.sass";
import logo from "../../assets/images/logo/logo-kasa-header.svg";

const Header = (props) => {
    const location = useLocation();
    const { welcome, about } = props;

    return (
        <header>
            <div className="header">
                <Link to="/"><img src={logo} alt="Logo Kasa" className="logo" /></Link>
                <nav className="menu">
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>{welcome} Accueil</Link>
                    <Link to="/About" className={location.pathname === "/About" ? "active" : ""}>{about} A propos</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
