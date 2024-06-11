// src/Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Menu.module.css';

const Menu: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
