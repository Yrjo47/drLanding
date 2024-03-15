import React from "react";
import styles from "./SpecializationCard.module.css";

const SpecializationCard = ({ image: { src, alt }, text, title }) => {
    return (
        <div style={{ backgroundImage: src }} className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            {/* <div className={styles.front}>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div style={{ display: "none" }} className={styles.back}>
                <p className={styles.text}>{text}</p>
            </div> */}
        </div>
    );
};

export default SpecializationCard;
