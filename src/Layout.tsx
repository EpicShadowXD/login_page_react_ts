// src/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout: React.FC = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
