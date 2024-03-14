import React from "react";
import styles from "./SpecializationCard.module.css";

const SpecializationCard = ({ image: { src, alt }, text, title }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {/* <img src={src} alt={alt} className={styles.image} /> */}
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default SpecializationCard;
