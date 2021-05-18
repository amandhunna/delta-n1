import React from 'react';
import './button.css';

function Button(props) {
    const { onClick, label} = props;
    return (
        <button 
            className="button" 
            onClick={onClick}><span>{label}</span>
        </button>
    );
}

export default Button;