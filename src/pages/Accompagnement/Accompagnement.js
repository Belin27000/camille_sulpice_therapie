import React from 'react';
import '@/pages/Accompagnement/accompagnement.scss'
import stepByStepVs from '@/assets/images/stepByStep/stepByStep_verySmall_300.avif'
import stepByStepS from '@/assets/images/stepByStep/stepByStep_small_983.avif'
import stepByStepM from '@/assets/images/stepByStep/stepBystep_medium_1232.avif'
import stepByStepL from '@/assets/images/stepByStep/stepBystep_large_1280.avif'
import grassGrowL from '@/assets/images/grassGrows/grassGrow_large_1280.avif'
import grassGrowM from '@/assets/images/grassGrows/grassGrow_medium_1137.avif'
import grassGrowS from '@/assets/images/grassGrows/grassGrow_small_300.avif'

const Accompagnement = () => {
    return (
        <div className='accompagnement'>
            <h2 className='accompagnement-title'>Accompagnement</h2>
            <p className="accompagnement-text">L’accompagnement que je vous propose est basé sur le modèle de Palo Alto, ensemble nous définissons votre problème, nous étudions son fonctionnement et comment il se maintient puis nous définissons des objectifs à atteindre. </p>
            <div className='accompagnement-imgContainer'>
                <img
                    src={stepByStepL}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    srcSet={`
                ${stepByStepVs} 300w,
                ${stepByStepS} 983w,
                ${stepByStepM} 1232w,
                ${stepByStepL} 1280w`}
                    width='983'
                    height='655'
                    alt="homme montant un escalier step by step" className="accompagnement-img" />
            </div>
            <p className="accompagnement-text">La thérapie brève stratégique et systémique est une thérapie dynamique, en effet entre chaque je peux vous prescrire des “tâches” à effectuer qui vous permettront de vivre des expériences différentes, de modifier la vision de votre problème, et de mettre en place des stratégies alternatives parfois à l'opposer de ce qui a déjà été tenter. Tout cela dans l'objectif qu'un changement durable s'installe</p>
            <div className='accompagnement-imgContainer'>
                <img
                    src={stepByStepL}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    srcSet={`
                ${grassGrowS} 300w,
                ${grassGrowM}  1137w,
                ${grassGrowL}  1280w`}
                    width='1280'
                    height='853'
                    alt="arbre sortant a peine de terre" className="accompagnement-img" />
            </div>
            <p className="accompagnement-text">La systémie s’attarde à prendre en compte vos émotions, vos pensées, votre vision du monde, votre contexte relationnel, c’est pourquoi il n’existe pas une solution unique pour un problème, chaque situation, bien qu’elle est des éléments commun, doit faire l’objet d’une anamnèse précise et particulière. </p>
            <p className="accompagnement-text">ien que son nom indique qu’elle est “brève” la thérapie brève stratégique et systémique va de 1 à 10 séances espacées d’environ 15 jours, en fonction des situations et peut donc s’étaler sur plusieurs mois. </p>
            <p className="accompagnement-text">Afin de rester accessible au plus grand nombre, je vous propose des séances en visio via l’application Zoom, entièrement gratuite. Ces séances durent entre 45 minutes et 1 heure.
            </p>
            <p className="accompagnement-text_price">1 séance individuelle de thérapie brève : 60€ </p>
            <p className="accompagnement-text">J'ai pris rendez-vous, comment cela va se passer ? </p>
            <ul className='accompagnement-list'>
                <li>Le règlement par virement ou paypal vous sera demandé avant le rendez-vous</li>
                <li>Vous recevez un lien pour rejoindre la visioconférence le jour du rendez-vous.</li>
                <li>La veille ou le jour J de votre rendez-vous je vous envoi un questionnaire en ligne à remplir afin de récolter des informations sur la manière dont vous vous sentez avant d’aborder votre séance.</li>
                <li>A l’heure du rendez-vous, nous nous rejoignons en visio et la séance démarre. </li>
            </ul>

        </div>
    );
};

export default Accompagnement;