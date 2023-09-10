import React, { useEffect, useState } from 'react';
import '@/components/NavBar/navBar.css'
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
            {(toggleMenu || screenWidth > 500) && (
                <ul className="list">
                    <Link to="/home" onClick={toggleNav} className="items"><li >Accueil</li></Link>
                    <Link to="/accompagnement" onClick={toggleNav} className="items"><li>Accompagnement</li></Link>
                    <Link to="/apropos" onClick={toggleNav} className="items"><li>Qui suis-je ?</li></Link>
                    <Link to="/endometriose" onClick={toggleNav} className="items"><li>Endométriose</li></Link>
                    <Link to="/contact" onClick={toggleNav} className="items"><li>Contact</li></Link>
                </ul>
            )}
            <button onClick={toggleNav} className="btn" >
                <FaBars className={!toggleMenu ? 'iconMenu isActive' : 'iconMenu'} />
                <FaTimes className={toggleMenu ? 'closeIconMenu isActive' : 'iconMenu'} />
            </button>

        </nav >
    );
};


export default NavBar;