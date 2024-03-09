import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <span className={styles.logo}>
                    <a href="/">Yrjo</a>
                </span>
                <nav className={styles.nav}>
                    <a href="#about-section" className={styles.link}>
                        Обо мне
                    </a>
                    <a href="#specializations-section" className={styles.link}>
                        Что я лечу
                    </a>
                    <a href="#portfolio-section" className={styles.link}>
                        Портфолио
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
