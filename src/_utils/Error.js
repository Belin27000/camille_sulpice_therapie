import React from 'react';

import ProfilPicVs from '@/assets/images/profil/Profile_verySmall_200.webp'
import ProfilPicS from '@/assets/images/profil/Profile_small_768.webp'
import ProfilPicM from '@/assets/images/profil/Profile_medium_998.webp'
import ProfilPicL from '@/assets/images/profil/Profile_large_1262.webp'
import ProfilPicEl from '@/assets/images/profil/Profile_extraLarge_1507.webp'
import ProfilPicSl from '@/assets/images/profil/Profile_superLarge_2031.webp'
import ProfilPicXxL from '@/assets/images/profil/Profile_xxxxL_2100.webp'

import './error.scss'
import { Link } from 'react-router-dom';



const Error = () => {
    return (
        <div className='error'>
            <h1 className='sr-only' tabIndex={0}>camille sulpice therapie brève fontainebleau en seine et marne - accueil</h1>

            <p>Cette page est indisponible</p>

            <img className="error-img"
                src={ProfilPicXxL}
                sizes="(max-width: 2100px) 100vw, 2100px"
                srcSet={`
                ${ProfilPicVs} 200w,
                ${ProfilPicS} 768w,
                ${ProfilPicM} 998w,
                ${ProfilPicL} 1262w,
                ${ProfilPicEl} 1507w,
                ${ProfilPicSl} 2031w,
                ${ProfilPicSl} 2100w`}
                width='1469'
                height='1469'
                alt="Portrait de Camille Sulpice" />
            <Link to='/Contact'>Rendez-vous sur cette page pour plus d'informations</Link>
        </div>
    );
};

export default Error;