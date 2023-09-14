import React from 'react';
import CSulpice_logo from '@/assets/Logo_CS.png'
import Title from '@/assets/Title_CS.png'
import '@/components/public/header.scss'
import NavBar from '@/components/NavBar/NavBar.js';

const Header = () => {
    return (
        <header className='Header'>
            <div>
                <img className='Logo' src={CSulpice_logo} alt='logo Camille Sulpice' />
                <img className='TitleHeader' src={Title} alt='logo thérapie brève stratégique et systémique' />
            </div>
            <NavBar />

        </header>
    );
};

export default Header;