import React from 'react';
import CSulpice_logo from '@/assets/images/logo/Logo_CS_small.webp'
import Title from '@/assets/images/Title/Title_CS_nlh8su_c_scale,w_764.webp'
import TitleBig from '@/assets/images/Title/Title_CS_wcarza_c_scale,w_1584.webp'
import '@/components/public/header.scss'
import NavBar from '@/components/NavBar/NavBar.js';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <header className='Header'>
            <div>
                <Link to="/home" className='Logo'>
                    <img className='Logo-img' src={CSulpice_logo}
                        sizes="(max-width: 500px) 100vw, 500px"
                        srcSet=
                        {`${CSulpice_logo} 500w`}
                        width='500'
                        height='500'
                        alt='logo Camille Sulpice' />
                </Link>
                <img className='TitleHeader' src={TitleBig}
                    sizes="(min-width: 964px) 1200vw,
                    (min-width: 500px) 764px, 100vw"
                    srcSet=
                    {`${Title} 764w,
                ${TitleBig} 1584w`}
                    width='1584'
                    height='396'
                    alt="logo thérapie brève stratégique et systémique" />
            </div>
            <NavBar />

        </header>
    );
};

export default Header;