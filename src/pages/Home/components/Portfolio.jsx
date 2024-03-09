import React from "react";
import styles from "./Portfolio.module.css";
import PortfolioCard from "./portfolioCard";

const Portfolio = () => {
    return (
        <section id="portfolio-section" className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.topSection}>
                        <h1 className="title">Портфолио</h1>
                        <div className={styles.bar}>
                            <div className={styles.list}>
                                <button className={styles.button}>
                                    Статьи
                                </button>
                                <button className={styles.button}>Кейсы</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomSection}>
                        <PortfolioCard
                            title="Статья о рыбах"
                            text="Тестирование на проникновение (жаргонно также называется пентест или пентестинг) — это метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленника."
                            link=""
                        />
                        <PortfolioCard
                            title="Статья для журнала о проведении внутреннего аудита"
                            text="Тестирование на проникновение (жаргонно также называется пентест или пентестинг) — это метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленника. метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленника метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленника так злоумышленника метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленник"
                            link=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
