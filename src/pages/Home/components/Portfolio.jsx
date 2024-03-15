import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import PortfolioCard from "./portfolioCard";

const Portfolio = () => {
    let [showWorks, setShowWorks] = useState(true);

    return (
        <section id="portfolio-section" className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.topSection}>
                        <h2 className="title">Портфолио</h2>
                        <div className={styles.bar}>
                            <div className={styles.list}>
                                <button
                                    className={`${styles.button} ${
                                        showWorks && styles.activeButton
                                    }`}
                                    onClick={() => setShowWorks(true)}
                                >
                                    Статьи
                                </button>
                                <button
                                    className={`${styles.button} ${
                                        !showWorks && styles.activeButton
                                    }`}
                                    onClick={() => setShowWorks(false)}
                                >
                                    Кейсы
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomSection}>
                        <div
                            className="works"
                            style={{ display: showWorks ? "block" : "none" }}
                        >
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
                            <PortfolioCard
                                title="Статья о рыбах"
                                text="Тестирование на проникновение (жаргонно также называется пентест или пентестинг) — это метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленника."
                                link=""
                            />
                        </div>
                        <div
                            className="cases"
                            style={{ display: showWorks ? "none" : "block" }}
                        >
                            <PortfolioCard
                                title="Статья о рыбах 2"
                                text="Тестирование на проникновение (жаргонно также называется пентест или пентестинг) — это метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленника."
                                link=""
                            />
                            <PortfolioCard
                                title="Статья для журнала о проведении внутреннего аудита 2"
                                text="Тестирование на проникновение (жаргонно также называется пентест или пентестинг) — это метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленника. метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленника метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленника так злоумышленника метод оценки безопасности компьютерных систем или сетей с помощью моделирования атак злоумышленник"
                                link=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
