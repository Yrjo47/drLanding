import React from "react";
import vk from "../../../assets/vk-icon.svg";
import telegram from "../../../assets/telegram-icon.svg";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.mediaIcons}>
                        <a href="">
                            <img src={vk} alt="Изображение со значком ВК" />
                        </a>
                        <a href="">
                            <img
                                src={telegram}
                                alt="Изображение со значком ВК"
                            />
                        </a>
                    </div>
                    <div className={styles.navigationList}>
                        <a href="#about-section">Обо мне</a>
                        <a href="#specializations-section">Что я лечу</a>
                        <a href="#protfolio-section">Мои работы</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
