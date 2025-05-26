
import React from 'react';
import styles from './Hero.module.css';
import image1 from "../../assets/logo.png";

function Hero() {
  return (
    <hero>
        <section className={styles.hero_logo_wrapper}>
            <img src={image1} className={styles.hero_logo} alt='logo' />
        </section>
        
        <section className={styles.hero_content}>
            <h4>Are you ready to ?</h4>
            <h1>Be a FullStack Developer</h1>
            <p>
                See how experienced developers solve problems in real-time. Watching scripted
                tutorials is great, but understanding how developers think is invaluable.
            </p>
        </section>
    </hero>
  );
}

export default Hero;
