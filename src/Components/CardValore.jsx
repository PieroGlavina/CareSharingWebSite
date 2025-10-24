import { useState } from 'react';

const CardValore = ({ title, description }) => {
    return (
        <div
            className="relative bg-white shadow-xl rounded-2xl p-12 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 group"
        >
            {/* Titolo */}
            <h3
                className="text-xl font-semibold text-center z-10 relative font-preuksa_regular text-custom-blue transition-opacity duration-300 group-hover:opacity-0"
            >
                {title}
            </h3>

            {/* Descrizione */}
            <p
                className="absolute inset-0 flex items-center justify-center text-gray-600 text-center font-preuksa_regular transition-opacity duration-300 px-4 border-2 border-custom-blue bg-white rounded-2xl z-20 opacity-0 group-hover:opacity-100"
            >
                {description}
            </p>
        </div>
    );
};

export default CardValore;