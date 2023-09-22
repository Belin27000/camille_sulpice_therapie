import React from 'react';
import './contact.scss'
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/Buttons/ScrollButton/ScrollToTop.js';

const Contact = () => {
    return (
        <div className='contact'>
            <h1 className='sr-only' tabIndex={0}>camille sulpice therapie brève fontainebleau en seine et marne - accueil</h1>

            <h2 className='contact-title'>Contact</h2>
            <p>Vous souhaitez plus d'informations, prendre un rendez-vous ou simplement échanger ? Vous pouvez me contacter au :
            </p>
            <Link to='tel:0684624774'>06.84.62.47.74</Link>
            <p>Ou bien m'envoyer un mail via le formulaire de contact ci-dessous : </p>
            <div className='form-container'>
                <form className='contact-form'>
                    <div>
                        <div className="input-wrapper">
                            <label htmlFor="firstName">Nom</label>
                            <input type="text" id="firstName" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastName">Prénom</label>
                            <input type="text" id="lastName" />
                        </div>
                    </div>
                    <div>
                        <div className="input-wrapper">
                            <label htmlFor="phone">Téléphone</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">Mail</label>
                            <input type="email" id="email" name="email"></input>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="Message">Message</label>
                        <input type="text" id="Message" />
                    </div>

                    <button className="contact-send">Envoyer</button>
                </form>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default Contact;