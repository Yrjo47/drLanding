import React from "react";
import styles from "./Hero.module.css";
import image from "../../../assets/hero.png";

const Hero = () => {
    return (
        <section id="about-section" className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.imageBlock}>
                        <img
                            src={image}
                            alt="hero image"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.aboutBlock}>
                        <h1 className={styles.aboutTitle}>
                            About whatever is on the picture
                        </h1>
                        <p className={styles.aboutText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officia at molestiae cupiditate quasi, dicta
                            aut illum quibusdam blanditiis, deleniti magnam sit
                            iusto, quos dolorem. Corporis reprehenderit sit
                            voluptas hic aut natus soluta similique ipsam
                            repellendus. Porro provident, odit veritatis,
                            mollitia iusto perspiciatis ratione vero cum dolores
                            ipsam voluptate voluptates unde!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
