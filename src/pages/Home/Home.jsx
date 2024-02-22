import React from "react";
import styles from "./Home.module.css";
import Hero from "./components/Hero";
import Specializations from "./components/Specializations";
import Portfolio from "./components/Portfolio";

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Hero />
            <Specializations />
            <Portfolio />
        </div>
    );
};

export default Home;
