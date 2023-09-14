import React from 'react';
import '@/pages/Accompagnement/accompagnement.scss'
import stepByStep from '@/assets/images/stepByStep.jpg'
import grassGrow from '@/assets/images/grassGrow.jpg'

const Accompagnement = () => {
    return (
        <div className='accompagnement'>
            <h2 className='accompagnement-title'>Accompagnement</h2>
            <p className="accompagnement-text">L’accompagnement que je vous propose est basé sur le modèle de Palo Alto, ensemble nous définissons votre problème, nous étudions son fonctionnement et comment il se maintient puis nous définissons des objectifs à atteindre. </p>

            <img src={stepByStep} alt="homme montant un escalier step by step" className="accompagnement-img" />
            <p className="accompagnement-text">La thérapie brève stratégique et systémique est une thérapie dynamique, en effet entre chaque je peux vous prescrire des “tâches” à effectuer qui vous permettront de vivre des expériences différentes, de modifier la vision de votre problème, et de mettre en place des stratégies alternatives parfois à l'opposer de ce qui a déjà été tenter. Tout cela dans l'objectif qu'un changement durable s'installe</p>
            <img src={grassGrow} alt="arbre sortant a peine de terre" className="accompagnement-img" />
            <p className="accompagnement-text">La systémie s’attarde à prendre en compte vos émotions, vos pensées, votre vision du monde, votre contexte relationnel, c’est pourquoi il n’existe pas une solution unique pour un problème, chaque situation, bien qu’elle est des éléments commun, doit faire l’objet d’une anamnèse précise et particulière. </p>
            <p className="accompagnement-text">ien que son nom indique qu’elle est “brève” la thérapie brève stratégique et systémique va de 1 à 10 séances espacées d’environ 15 jours, en fonction des situations et peut donc s’étaler sur plusieurs mois. </p>
            <p className="accompagnement-text">Afin de rester accessible au plus grand nombre, je vous propose des séances en visio via l’application Zoom, entièrement gratuite. Ces séances durent entre 45 minutes et 1 heure.
            </p>
            <p className="accompagnement-text_price">1 séance individuelle de thérapie brève : 60€ </p>
            <p className="accompagnement-text">J'ai pris rendez-vous, comment cela va se passer ? </p>
            <ul>
                <li>Le règlement par virement ou paypal vous sera demandé avant le rendez-vous</li>
                <li>Vous recevez un lien pour rejoindre la visioconférence le jour du rendez-vous.</li>
                <li>La veille ou le jour J de votre rendez-vous je vous envoi un questionnaire en ligne à remplir afin de récolter des informations sur la manière dont vous vous sentez avant d’aborder votre séance.</li>
                <li>A l’heure du rendez-vous, nous nous rejoignons en visio et la séance démarre. </li>
            </ul>

        </div>
    );
};

export default Accompagnement;