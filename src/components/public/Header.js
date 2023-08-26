import React from 'react';
import { Link } from 'react-router-dom';
import CSulpice_logo from '@/assets/CSulpice_logo.png'
import '@/components/public/header.css'

const Header = () => {
    return (
        <header className='Header'>
            <div>
                <img className='Logo' src={CSulpice_logo} alt='main logo' />
            </div>
            <nav>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/accompagnement">Accompagnement</Link></li>
                    <li><Link to="/apropos">Qui suis-je ?</Link></li>
                    <li><Link to="/endometriose">Endométriose</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;