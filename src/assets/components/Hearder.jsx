import React from "react";
import styles from "../Styles/header.module.scss";

import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className={styles.header}>
        <nav className={styles.nav}>
            <Link to="/" className={styles.logo}>
            <img src="/images/logo.png" alt="logo" />
            </Link>
            <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link to="/" className={styles.navLink}>
                Accueil
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link to="/about" className={styles.navLink}>
                A propos
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link to="/accommodation" className={styles.navLink}>
                Logements
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );













}

export default Header;