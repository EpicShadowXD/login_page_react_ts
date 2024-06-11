// src/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/NavBar.module.css';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">MyApp</Link>
            </div>
            <ul className={styles.navLinks}>
                <li className={styles.navItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/login">Login</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
