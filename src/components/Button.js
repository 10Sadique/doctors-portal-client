import React from 'react';

const Button = ({ text }) => {
    return (
        <button className="text-white btn btn-primary bg-gradient-to-r from-secondary to-primary">
            {text}
        </button>
    );
};

export default Button;
