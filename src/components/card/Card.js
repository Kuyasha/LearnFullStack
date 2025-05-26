import React from "react";
import styles from "./Card.module.css";


function Card({ title, img, id }){
    return(
        <>
        <div className={styles.card_container} style={{ cursor: "pointer" }}>
            <div className={styles.card_image}>
                <div className={styles.image_container}>
                    <img src={img} alt="icons" />
                </div>
            </div>

            <div className={styles.card_content}>
                <h1 className={styles.card_title}>{title}</h1>
            </div>
        </div>
        </>
    )
}

export default Card;