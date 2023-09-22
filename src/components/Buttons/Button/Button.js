import React from 'react';
import './button.scss'
import { Link } from 'react-router-dom';

const Button = ({ name, path, href }) => {
    console.log(href);
    return (
        <button className='button-end'>
            <Link to={path} reloadDocument>{name}</Link>
        </button>
    );
};

export default Button;