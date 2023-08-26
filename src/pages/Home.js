import React from 'react';
import Smiley from '@/assets/smiley.jpg'
import '@/pages/home.css'

const Home = () => {
    return (
        <div className='Home'>
            <div>
                <blockquote className='quote'>
                    <p>"La folie c'est de faire tout le temps la même chose
                        et de s'attendre à un résultat différent" A.Einstein</p>
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
                <section>
                    <div className='difficultyList'>
                        <ul>
                            <li>Conflits relationnels personnels ou professionnels</li>
                            <li>Anxiété</li>
                            <li>Dépression</li>
                            <li>Peur & phobies</li>
                            <li>...</li>
                        </ul>
                        <p>La thérapie brève peut vous aider à surmonter ces difficultés.</p>
                    </div>
                    <div className='imgContainer'>
                        <img className='Smiley' src={Smiley} alt='smiley' />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;