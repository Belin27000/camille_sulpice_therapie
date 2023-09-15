import React from 'react';
import CSulpice_logo from '@/assets/Logo_CS.webp'
import Title from '@/assets/images/Title_CS_wcarza_c_scale,w_500.webp'
import TitleBig from '@/assets/images/Title_CS_wcarza_c_scale,w_1584.webp'
import '@/components/public/header.scss'
import NavBar from '@/components/NavBar/NavBar.js';

const Header = () => {
    return (

        <header className='Header'>
            <div>
                <img className='Logo' src={CSulpice_logo} alt='logo Camille Sulpice' />
                <img className='TitleHeader' src={TitleBig} srcSet={`${Title} 800w,${TitleBig} 1000w`} sizes="(max-width: 1584px) 100vw, 1584px" alt="logo thérapie brève stratégique et systémique" />
            </div>
            <NavBar />

        </header>
    );
};

export default Header;