import React, { useEffect, useState } from 'react';
import '@/components/NavBar/navBar.scss'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [toggleMenu, setToogleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState
        (window.innerWidth)


    const toggleNav = () => {
        setToogleMenu(!toggleMenu)

    }



    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener("resize", changeWidth)
        }
    }, [])
    return (
        <nav>
            {(toggleMenu || screenWidth > 769) && (
                <ul className="list">
                    <li><Link to="/home" onClick={toggleNav} className="items">Accueil</Link></li>
                    <li><Link to="/accompagnement" onClick={toggleNav} className="items">Accompagnement</Link></li>
                    <li><Link to="/apropos" onClick={toggleNav} className="items">Qui suis-je ?</Link></li>
                    <li><Link to="/endometriose" onClick={toggleNav} className="items">Endométriose</Link></li>
                    <li><Link to="/contact" onClick={toggleNav} className="items">Contact</Link></li>
                </ul>
            )}
            <button onClick={toggleNav} className="btn" aria-label='menu' >
                <FaBars className={!toggleMenu ? 'iconMenu isActive' : 'iconMenu'} />
                <FaTimes className={toggleMenu ? 'closeIconMenu isActive' : 'iconMenu'} />
            </button>

        </nav >
    );
};


export default NavBar;