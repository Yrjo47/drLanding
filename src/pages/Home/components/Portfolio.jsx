import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
    return (
        <section id="portfolio-section" className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.topSection}>
                        <h2 className="title">Портфолио</h2>
                        <div className={styles.bar}>
                            <div className={styles.list}>
                                <button className={styles.button}>
                                    Статьи
                                </button>
                                <button className={styles.button}>Кейсы</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomSection}></div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
