import React from "react";
import styles from "./SpecializationCard.module.css";

const SpecializationCard = ({ image: { src, alt }, text }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Title</h2>
            {/* <img src={src} alt={alt} className={styles.image} /> */}
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default SpecializationCard;
