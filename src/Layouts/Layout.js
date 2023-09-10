import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/public/Header.js';
import Footer from '../components/public/Footer.js';
import '@/Layouts/layout.css'

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;