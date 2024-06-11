// src/App.tsx
import React from 'react';
import styles from './css/App.module.css';

const App: React.FC = () => {
    return (
        <div className={styles.home}>
            <header className={styles.hero}>
                <h1>Welcome to My Portfolio</h1>
                <p>Showcasing my projects and skills</p>
            </header>
            <section className={styles.projects}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <div className={styles.projectGrid}>
                    <div className={`${styles.projectCard} ${styles.card1}`}>
                        <h3>Project One</h3>
                        <p>A brief description of Project One.</p>
                    </div>
                    <div className={`${styles.projectCard} ${styles.card2}`}>
                        <h3>Project Two</h3>
                        <p>A brief description of Project Two.</p>
                    </div>
                    <div className={`${styles.projectCard} ${styles.card3}`}>
                        <h3>Project Three</h3>
                        <p>A brief description of Project Three.</p>
                    </div>
                    <div className={`${styles.projectCard} ${styles.card4}`}>
                        <h3>Project Four</h3>
                        <p>A brief description of Project Four.</p>
                    </div>
                    <div className={`${styles.projectCard} ${styles.card5}`}>
                        <h3>Project Five</h3>
                        <p>A brief description of Project Five.</p>
                    </div>
                </div>
            </section>
            <section className={styles.about}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <p>Hello! I'm a web developer with a passion for creating stunning websites and applications.</p>
            </section>
        </div>
    );
};

export default App;
