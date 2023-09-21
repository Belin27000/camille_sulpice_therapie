import React from 'react';
import './button.scss'
import { Link } from 'react-router-dom';

const Button = ({ name, path }) => {
    return (
        <button className='button-end'>
            <Link to={path}>{name}</Link>
        </button>
    );
};

export default Button;