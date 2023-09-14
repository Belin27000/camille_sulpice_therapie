import React, { useState } from 'react';
import './aPropos.scss'
import ProfilPic from '../../assets/images/Profile.png'
import { Link } from 'react-router-dom';

const Apropos = () => {
    const age = Date.now()
    return (
        <div className='about'>
            <h2 className='about-title'>Qui suis-je ?</h2>
            <p className="about-text">Je suis Camille Sulpice, j’ai 37 ans. </p>
            <img src={ProfilPic} alt="" className="about-img" />
            <h3>Formations :</h3>
            <ul>
                <li>Formation de formateurs / Ingénierie de formation - 2020 Attribut conseils</li>
                <li>ADVP et la démarche éducative expérientielle en orientation - 2020 Le patio formation</li>
                <li>Clinicien de la relation Niveau fondement - 2022-2023 LACT</li>
                <li>Palo Alto dans le monde médical : Pathologies et douleurs chroniques 2023 Nathalie Goujon</li>
                <li>Masterclass dépression et troubles anxieux - Septembre 2023 Giorgio Nardone</li>
            </ul>
            <p className="about-text">Depuis le début de ma carrière professionnelle, je suis dans l’accompagnement.
            </p>
            <p className="about-text">J’ai démarré ma carrière dans la gestion de projet informatique où ma mission était d’accompagner les collaborateurs de l’entreprise à définir un besoin, une solution technique, et de travailler ensuite avec les équipes informatiques au développement de la solution. Il me fallait aussi accompagner les collaborateurs dans la conduite du changement.
            </p>
            <p className="about-text">Je me suis ensuite reconverti vers l’accompagnement professionnel et entrepris un parcours de formations pour devenir Consultante en bilan de compétences, métier que j’exerce depuis 2016. Toujours dans une optique de développement, et de perfectionnement, j’ai souhaité continuer de me former afin d’avoir un accompagnement le plus précis possible, axé sur le relationnel, le cognitif, la prise en compte des émotions, et non uniquement sur l’utilisation d’outils ou de supports pédagogiques. Je voulais aller plus loin dans les bilans avec les personnes.
            </p>
            <p className="about-text">C’est pourquoi j’ai entrepris la formation de Praticien en thérapie brève stratégique et systémique, afin d’avoir une approche globale. </p>
            <h3>Et personnellement ? </h3>
            <p className="about-text">Au fur et à mesure de cette formation, des principes acquis, et des mises en pratique en bilan de compétences, j’ai ressenti l’envie d’aller plus loin, et de proposer d’autres types d’accompagnements concernant la sphère personnelle et non plus uniquement professionnelle. </p>
            <p className="about-text">Atteinte d’endométriose j’ai vécu les impacts de cette maladie, rechercher des praticiens, psychologues ou psychothérapeutes mais je n’ai jamais trouver ce qui me correspondait. Je cherchais quelqu’un capable de comprendre ce que je vivais, ce qu’était cette maladie, ce qu’elle pouvait avoir comme impact dans ma vie et m’aider à mieux vivre avec, et surtout canaliser ses impacts, pas seulement une écoute attentive pour m’apaiser. </p>
            <p className="about-text">C’est là que l’idée m’est venue, de dédier cette pratique aux femmes atteintes d’endométriose. C’est à ce moment que toute ma démarche à fait sens, c’est également un défi personnel, puisque cette maladie et tout ce qu’elle a causé dans ma vie, se transforme en quelque chose de plus positif. </p>
            <p className="about-text">Vous aussi vous êtes une endogirls ? une endowarrior ? Vous souhaitez être aidée ? </p>
            <Link to="/contact" className="contact-link">Contact-moi</Link>
        </div>
    );
};

export default Apropos;