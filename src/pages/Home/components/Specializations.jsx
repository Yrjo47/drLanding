import React from "react";
import styles from "./Specializations.module.css";
import SpecializationCard from "./SpecializationCard";
import image from "../../../assets/procedure.jpg";

const Specializations = () => {
    return (
        <section id="specializations-section" className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Специализации</h2>
                    <div className={styles.gallery}>
                        <SpecializationCard
                            image={{ src: image, alt: "lorem ipsum" }}
                            text="last thing they showed was stand one person at a            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam esse qui iste nesciunt voluptatum deserunt quis corrupti, nemo corporis. time "
                        />
                        <SpecializationCard
                            image={{ src: image, alt: "lorem ipsum" }}
                            text="last thing they            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam esse qui iste nesciunt voluptatum deserunt quis corrupti, nemo corporis. showed was stand one person at a time"
                        />
                        <SpecializationCard
                            image={{ src: image, alt: "lorem ipsum" }}
                            text="last thing they showed was stand one person at a time            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam esse qui iste nesciunt voluptatum deserunt quis corrupti, nemo corporis."
                        />
                        <SpecializationCard
                            image={{ src: image, alt: "lorem ipsum" }}
                            text="            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam esse qui iste nesciunt voluptatum deserunt quis corrupti, nemo corporis.last thing they showed was stand one person at a time"
                        />
                        <SpecializationCard
                            image={{ src: image, alt: "lorem ipsum" }}
                            text="last thing they showed was            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam esse qui iste nesciunt voluptatum deserunt quis corrupti, nemo corporis. stand one person at a time"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specializations;
