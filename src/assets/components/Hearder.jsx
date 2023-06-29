import React from "react";
import "../../assets/Styles/header.scss";
import logo from "../../assets/images/logo/logo-kasa-header.svg";
import { Link,NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header>
        <Link to="/" ><img src={logo} alt="Logo Kasa" className="logo" /></Link>
        <nav className="menu">
          <NavLink to="/" >Accueil</NavLink>
          <NavLink to="/à-propos" >À propos</NavLink>
        </nav>
      </header>
    );
}

export default Header;