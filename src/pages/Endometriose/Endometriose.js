import React from 'react';
import BandeVs from '@/assets/images/EndoPictures/Bandeau/Bandeau_verySmall_200.webp'
import BandeS from '@/assets/images/EndoPictures/Bandeau/Bandeau_small_826.webp'
import BandeM from '@/assets/images/EndoPictures/Bandeau/Bandeau_medium_1193.webp'
import BandeL from '@/assets/images/EndoPictures/Bandeau/Bandeau_large_1499.webp'
import BandeXl from '@/assets/images/EndoPictures/Bandeau/Bandeau_Xl_1584.webp'

import ProblemS from "@/assets/images/EndoPictures/problem/problem_small_200.avif"
import ProblemM from "@/assets/images/EndoPictures/problem/problem_medium_500.avif"
import ProblemL from "@/assets/images/EndoPictures/problem/problem_large_458.avif"

import DespressS from '@/assets/images/EndoPictures/despress/despress_small_200.webp'
import DespressM from '@/assets/images/EndoPictures/despress/despress_medium_448.webp'
import DespressL from '@/assets/images/EndoPictures/despress/despress_large_500.webp'

import InfertilityS from '@/assets/images/EndoPictures/infertility/infertility_small_200.webp'
import InfertilityM from '@/assets/images/EndoPictures/infertility/infertility_medium_447.webp'
import InfertilityL from '@/assets/images/EndoPictures/infertility/infertility_large_500.webp'

import './endometriose.scss'
import Button from '@/components/Buttons/Button/Button.js';
import ScrollToTop from '../../components/Buttons/ScrollButton/ScrollToTop.js';

const Endometriose = () => {
    return (
        <div className='endo'>
            <h1 className='sr-only' tabIndex={0}>camille sulpice therapie brève fontainebleau en seine et marne - accueil</h1>
            <h2 className='endo-title'>Endometriose</h2>
            <img className='endo-bande'
                sizes="(max-width: 1584px) 100vw, 1584px"
                srcSet={`
                ${BandeVs} 200w,
                ${BandeS} 826w,
                ${BandeM} 1193w,
                ${BandeL} 1499w,
                ${BandeXl} 1584w
                `}
                width='1584'
                height='396'
                src={BandeXl}
                alt="representation des différentes patologie de l'endometriose" />
            <h3 className='endo-subtitle'>L'endométriose et la thérapie brève stratégique & systémique</h3>
            <section className='endo-text'>
                <p>L’endométriose, cette maladie invisible et pourtant invalidante ! Nombre de femmes atteintes font face à un parcours du combattant ! Errance médicale et thérapeutique, incompréhension de l’entourage, impacts sur la vie sociale et professionnelle... nombreuses sont les conséquences psychologiques de la maladie.</p>
                <p>Quelle femme atteinte d’endomédriose ne s’est pas heurtée à des phrases du type “Vous n’avez pas mal, c’est dans votre tête !” ou bien “Avoir des douleurs pendant les règles est tout à fait normal!” de la part de son entourage ou même de professionnels du monde médical.</p>
                <p>C’est pourquoi j’ai décidé de dédier mon activité à l’accompagnement et au soutien des femmes atteintes d’endométriose. </p>
                <p>Parce que la thérapie brève systémique et stratégique peut vous aider à mieux vivre avec la maladie et vous apporter un mieux être. Tout en respectant vos émotions, votre vision du monde et de façon non pathologisante. </p>
            </section>
            <section className="endo-problem">
                <img className="endo-problem-pic"
                    sizes="(max-width: 500px) 100vw, 500px"
                    srcSet={`
                    ${ProblemS} 200w,
                    ${ProblemM} 458w,
                    ${ProblemL} 500w"
                    `}
                    width='500'
                    height='500'
                    src={ProblemL}
                    alt="Problèmes relationnels" />
                <div className="endo-problem-description">
                    <h4>Problèmes relationnels</h4>
                    <ul className='endo-text'>
                        <li className='endo-problem-item'>Couple, travail, famille, … </li>
                        <li className='endo-problem-item'>Votre conjoint, votre entourage professionnel ou votre famille ne vous comprends pas et cela crée des conflits ?</li>
                    </ul>
                    {/* <p className='endo-text'> </p> */}
                </div>
            </section>
            <section className="endo-despress">
                <img className="endo-despress-pic"
                    sizes="(max-width: 500px) 100vw, 500px"
                    srcSet={`
                    ${DespressS} 200w,
                    ${DespressM} 448w,
                    ${DespressL} 500w"
                    `}
                    width='500'
                    height='500'
                    src={DespressL}
                    alt="Problèmes relationnels" />
                <div className="endo-despress-description">
                    <h4>Dépression & anxiété</h4>
                    <p className='endo-text'>Examens médicaux, traitements, chirurgies, ... Autant d’étapes difficiles que vivent les femmes atteintes de cette maladie. </p>
                </div>
            </section>
            <section className="endo-infertility">
                <img className="endo-infertility-pic"
                    sizes="(max-width: 500px) 100vw, 500px"
                    srcSet={`
                    ${InfertilityS} 200w,
                    ${InfertilityM} 447w,
                    ${InfertilityL} 500w"
                    `}
                    width='500'
                    height='500'
                    src={InfertilityL}
                    alt="femme avec un test de grossesse négatif" />
                <div className="endo-infertility-description">
                    <h4>Infertilité</h4>
                    <p className='endo-text'>On sait que l’endométriose peut rendre la conception d’un enfant difficile mais qu’en est-il quand en plus le stress vient s’en mêler ? On connaît l’impact de la santé psychologique sur la fertilité. La thérapie brève peut vous aider dans un projet de procréation ou bien à mieux vivre avec l’infertilité.</p>
                </div>
            </section>
            <div className='endo-end'>
                <p className='endo-text'>Ce travail thérapeutique et cette approche peuvent vous aider dans votre vie avec l'endométriose. Vous êtes touchée par une autre maladie gynécologique ou bien chronique ? SOPK, adénomyose,  fibromyalgie, maladie de Crohn,...  </p>
                <Button name={'Prendre rendez-vous'} path={'/contact'} />
            </div>
            <ScrollToTop />
        </div>
    );
};

export default Endometriose;