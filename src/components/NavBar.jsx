import React, { useState } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
    let [mobileIsOpen, setMobileIsOpen] = useState(false);

    const handleClick = () => {
        if (mobileIsOpen) {
            setMobileIsOpen(false);
            document.body.style.overflow = "visible";
        } else {
            setMobileIsOpen(true);
            document.body.style.overflow = "hidden";
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <span className={styles.logo}>
                    <a href="/">Yrjo</a>
                </span>
                <nav
                    className={`${styles.nav} ${
                        mobileIsOpen && styles.mobileNav
                    }`}
                >
                    <a href="#about-section" className={styles.link}>
                        Обо мне
                    </a>
                    <a href="#specializations-section" className={styles.link}>
                        Что я лечу
                    </a>
                    <a href="#portfolio-section" className={styles.link}>
                        Портфолио
                    </a>
                    <a href="#form" className={styles.link}>
                        Контакты
                    </a>
                    <a href="#form" className={styles.bookLink}>
                        Записаться
                    </a>
                </nav>
                <button
                    className={`${styles.burger} ${
                        mobileIsOpen && styles.cross
                    }`}
                    onClick={handleClick}
                >
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </button>
            </div>
        </header>
    );
};

export default NavBar;
