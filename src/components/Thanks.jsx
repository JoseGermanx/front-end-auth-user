
// rederizará un mensaje de agradecimiento

import React from 'react';

const Thanks = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-4 text-blue-700">Gracias por tu gestión</h1>
                <p className="text-blue-600 mb-4">Agradecemos que hayas utilizado nuestros servicios. Tu apoyo es muy importante para nosotros.</p>
                <p className="text-blue-600">Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
            </div>
        </div>
    );
}

export default Thanks;