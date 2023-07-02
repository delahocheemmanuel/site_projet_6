import React from "react";
import "../Styles/footer.scss";
import logo from "../../assets/images/logo/logo-kasa-footer.svg";

const Footer = () => {

     return (

            <footer >
                <div className="footer" >
                <img src={logo} alt="logo" />
                <p>© 2020 Kasa. All rights reserved </p>
                </div>
            </footer>




     )


}


export default Footer;
