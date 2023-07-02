import React from "react";
import "../../assets/Styles/header.scss";
import logo from "../../assets/images/logo/logo-kasa-header.svg";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
        <Link to="/" ><img src={logo} alt="Logo Kasa" className="logo" /></Link>
        <nav className="menu">
          <Link to="/" >ACCUEIL</Link>
          <Link to="/About" >A PROPOS</Link>
        </nav>
      </header>
    );
}

export default Header;