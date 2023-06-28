import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";


const Footer = () => {

     return (

            <footer className={styles.footer}>
                <img src="/images/logo.png" alt="logo" />
                <p>© 2020 Kasa. All rights reserved </p>
            </footer>




     )


}


export default Footer;
