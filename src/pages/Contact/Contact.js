import React, { useState } from 'react';
import './contact.scss'
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/Buttons/ScrollButton/ScrollToTop.js';

const Contact = () => {

    const [formValid, setFormValid] = useState(false)
    const [firstNameValid, setFirstNameValid] = useState('')
    const [lastNameValid, setLastNameValid] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [phoneValid, setPhoneValid] = useState('')
    const stringRegex = /^[a-zA-Z-]+$/; //Regex champs nom & prénom
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //Regex email
    const phoneRegex = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/; //Regex phone number

    const validate = (formData) => {
        let isValid = true;
        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const phone = formData.get("phone")
        const email = formData.get("email")
        if (!firstName.match(stringRegex)) {
            setFirstNameValid("Merci de préciser votre prénom sans chiffre ou caractère spéciaux")
            isValid = false;
        }
        if (!lastName.match(stringRegex)) {
            setLastNameValid("Merci de préciser votre nom sans chiffre ou caractère spéciaux")
            isValid = false;
        }
        if (!email.match(emailRegex)) {
            setEmailValid("Merci de préciser un email valide")
            isValid = false;
        }
        if (!phone.match(phoneRegex)) {
            setPhoneValid("Merci de préciser un numero de téléphone valide")
            isValid = false;
        }
        setFormValid(isValid)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstNameValid('')
        setLastNameValid('')
        setEmailValid('')
        setPhoneValid('')
        setFormValid(false)
        const form = e.target
        const formData = new FormData(form)
        validate(formData)
        console.log(formValid);
        if (formValid) {
            alert('Tous les test sont passé')
        } else {
            alert('verifier le formulaire')
        }


        // form.reset()
    }

    return (
        <div className='contact'>
            <h1 className='sr-only' tabIndex={0}>camille sulpice therapie brève fontainebleau en seine et marne - accueil</h1>

            <h2 className='contact-title'>Contact</h2>
            <p>Vous souhaitez plus d'informations, prendre un rendez-vous ou simplement échanger ? Vous pouvez me contacter au :
            </p>
            <Link to='tel:0684624774'>06.84.62.47.74</Link>
            <p>Ou bien m'envoyer un mail via le formulaire de contact ci-dessous : </p>
            <div className='form-container'>
                <form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <div className="input-wrapper">
                            <label htmlFor="lastName">Nom</label>
                            <input name="lastName" type="text" id="lastName" />
                            {lastNameValid && <div id="lastNameErrorMSg" className="error">{lastNameValid}</div>}
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="firstName">Prénom</label>
                            <input name="firstName" type="text" id="firstName" />
                            {firstNameValid && <div id="firstNameErrorMSg" className="error">{firstNameValid}</div>}
                        </div>
                    </div>
                    <div>
                        <div className="input-wrapper">
                            <label htmlFor="phone">Téléphone</label>
                            <input name="phone" type="tel" id="phone" />
                            {phoneValid && <div id="emailErrorMSg" className="error">{phoneValid}</div>}
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">Mail</label>
                            <input name="email" type="email" id="email" ></input>
                            {emailValid && <div id="emailErrorMSg" className="error">{emailValid}</div>}
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="Message">Message</label>
                        <textarea type="text" id="Message" />
                    </div>

                    <button className="contact-send">Envoyer</button>
                </form>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default Contact;