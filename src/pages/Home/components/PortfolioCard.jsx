import React from "react";
import styles from "./PortfolioCard.module.css";

const portfolioCard = ({ title, text, link }) => {
    return (
        <div className={styles.line}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <a href={link} className={styles.link}></a>
        </div>
    );
};

export default portfolioCard;
