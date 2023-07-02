import React from "react";
import "../../assets/Styles/header.sass";
import logo from "../../assets/images/logo/logo-kasa-header.svg";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
          <div className="header" >
        <Link to="/" ><img src={logo} alt="Logo Kasa" className="logo" /></Link>
        <nav className="menu">
          <Link to="/" className="accueil" >ACCUEIL </Link>
          <Link to="/About" >A PROPOS</Link>
        </nav>
        </div>
      </header>
    );
}

export default Header;