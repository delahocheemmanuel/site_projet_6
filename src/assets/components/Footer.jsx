import React from "react";
import "../Styles/footer.sass";
import logo from "../../assets/images/logo/logo-kasa-footer.svg";

const Footer = () => {

     return (

            <footer >
                <div className="footer" >
                <img src={logo} alt="logo kasa white" />
                <h2>© 2020 Kasa. All rights reserved </h2>
                </div>
            </footer>




     )


}


export default Footer;
