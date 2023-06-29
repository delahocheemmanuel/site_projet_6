import React from "react";
import logo from "../images/logo/404.svg";
import { Link } from "react-router-dom";
import "../Styles/error.scss";
const Error = () => {



    return (
        <div className="error" >
            <img src={logo} alt="erreur 404" className="error404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" >Retourner sur la page d'accueil</Link>
        </div>
    );
}




export default Error;