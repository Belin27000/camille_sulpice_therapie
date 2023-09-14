import React from 'react';
import conflict from '@/assets/images/conflits.avif'
import despress from '@/assets/images/Dépression.avif'
import Phobies from '@/assets/images/phobies.avif'
import Disease from '@/assets/images/maladie.avif'
import '@/pages/home.scss'
import { useTypingeffect } from '../hooks/typing-effect.js';
import { Link } from 'react-router-dom';

const Home = () => {

    const text = useTypingeffect(" \"La folie c'est de faire tout le temps la même chose et de s'attendre à un résultat différent\" A.Einstein", 125);
    return (
        <div className='Home'>
            <section className='Home-intro'>
                <blockquote className='quote'>
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
                <div className="difficulty-head">
                    <p>Vous rencontrez une difficulté de vie ou un problème ? Vous avez tout essayer ? Vous vous sentez coincé dans une situation, épuisé et avez l’impression que rien ne pourra changer ?</p>
                </div>
                <div className="damier">
                    <div className="damier-Left">

                        <div className="conflict">
                            <div className="conflict-Pic">
                                <img src={conflict} alt='conflits-relationnels' />
                            </div>
                            <div className="conflict-Des">
                                <h3 className='TitleDifficulties'>CONFLITS RELATIONNELS PROFESSIONNELS OU PERSONNELS</h3>
                            </div>
                        </div>
                        <div className="despress">
                            <div className="despress-Des">
                                <h3 className='TitleDifficulties'>DÉPRESSION, STRESS, ANXIÉTÉ</h3>
                            </div>
                            <div className="despress-Pic">
                                <img src={despress} alt='depression' />
                            </div>
                        </div>
                    </div>
                    <div className="damier-Right">

                        <div className="Phobies">
                            <div className="Phobies-Pic">
                                <img src={Phobies} alt='peur et phobies' />
                            </div>
                            <div className="Phobies-Des">
                                <h3 className='TitleDifficulties'>PEURS ET PHOBIES</h3>
                            </div>
                        </div>
                        <div className="Disease">
                            <div className="Disease-Des">
                                <h3 className='TitleDifficulties'>MALADIES CHRONIQUES</h3>
                            </div>
                            <div className="Disease-Pic">
                                <img src={Disease} alt='maladie chronique' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="more">
                <p>La thérapie brève peut vous aider à surmonter ces difficultés.</p>
                <Link to="/accompagnement">Plus d'informations</Link>
            </div>
        </div>
    );
};

export default Home;