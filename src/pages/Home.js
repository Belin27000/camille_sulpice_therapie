import React from 'react';
import conflict from '@/assets/images/damier/conflits.avif'
import despress from '@/assets/images/damier/Dépression.avif'
import Phobies from '@/assets/images/damier/phobies.avif'
import Disease from '@/assets/images/damier/maladie.avif'
import '@/pages/home.scss'
import { useTypingeffect } from '../hooks/typing-effect.js';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.js';

const Home = () => {

    const text = useTypingeffect(" \"La folie c'est de faire tout le temps la même chose et de s'attendre à un résultat différent\" A.Einstein", 125);
    return (
        <div className='Home'>
            <h1 className='sr-only' tabIndex={0}>camille sulpice therapie brève fontainebleau en seine et marne - accueil</h1>
            <section className='Home-intro' tabIndex={0}>
                <blockquote className='quote' tabIndex={0} >
                    <p>{text}</p>
                </blockquote>
                <p>Cette citation résume à elle seule très bien la thérapie brève systémique et stratégique !
                </p>
                <p>
                    Le travail que je vous propose est d’analyser ensemble ce qui <span className='textHightLight'>dysfonctionne, maintient ou aggrave </span>
                    le problème dans le but de co-construire, ensemble, une <span className='textHightLight'>stratégie différente.</span>
                </p>
                <p>
                    Cette approche conduit à un <span className='textHightLight'>changement durable</span> par une intervention brève allant de <span className='textHightLight'>1 à 10 séances.</span> Il ne s'agit pas ici d'analyser pourquoi le problème est apparu ou bien où il trouve ses origines mais de comprendre <span className='textHightLight'>comment il fonctionne</span> et surtout <span className='textHightLight'>comment il se maintient.</span>
                </p>
            </section>
            <section className="difficulty">
                <div className="difficulty-head" tabIndex={0}>
                    <p>Vous rencontrez une difficulté de vie ou un problème ? Vous avez tout essayer ? Vous vous sentez coincé dans une situation, épuisé et avez l’impression que rien ne pourra changer ?</p>
                </div>
                <div className="damier">
                    <div className="damier-Left">

                        <div className="conflict">
                            <div className="conflict-Pic">
                                <img src={conflict} width='500' height='500' alt='conflits-relationnels' />
                            </div>
                            <div className="conflict-Des">
                                <h2 className='TitleDifficulties'>CONFLITS RELATIONNELS PROFESSIONNELS OU PERSONNELS</h2>
                            </div>
                        </div>
                        <div className="despress">
                            <div className="despress-Des">
                                <h2 className='TitleDifficulties'>DÉPRESSION, STRESS, ANXIÉTÉ</h2>
                            </div>
                            <div className="despress-Pic">
                                <img src={despress} width='500px' height='500px' alt='depression' />
                            </div>
                        </div>
                    </div>
                    <div className="damier-Right">

                        <div className="Phobies">
                            <div className="Phobies-Pic">
                                <img src={Phobies} width='500px' height='500px' alt='peur et phobies' />
                            </div>
                            <div className="Phobies-Des">
                                <h2 className='TitleDifficulties'>PEURS ET PHOBIES</h2>
                            </div>
                        </div>
                        <div className="Disease">
                            <div className="Disease-Des">
                                <h2 className='TitleDifficulties'>MALADIES CHRONIQUES</h2>
                            </div>
                            <div className="Disease-Pic">
                                <img src={Disease} width='500px' height='500px' alt='maladie chronique' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="more">
                <p>La thérapie brève peut vous aider à surmonter ces difficultés.</p>
                <Button name={'Plus d\'informations'} path={"/accompagnement"} />
            </div>
        </div>
    );
};

export default Home;