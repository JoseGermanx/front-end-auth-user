

// componente con el formulario para reset password, debe tener solo un input para el email
// usar fech para enviar los datos al servidor a una ruta post /reset

import React, { useState } from 'react';

const ResetPass = () => {
    
        const [email, setEmail] = useState('');
    
        const handleSubmit = async (e) => {
            if (!email) {
                alert('Email is required');
                return;
            }
            e.preventDefault();
            const response = await fetch('http://localhost:3021/api/auth/lose-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Check your email');
                console.log(data);
                setEmail('');
            } else {
                alert(data.message);
            }
        };
    
        return (
            <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Reset Password</h2>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border border-blue-300 rounded"
                />
                <button type='submit' className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Reset</button>
                <a href="/login" className="block text-center mt-4 text-blue-500 hover:text-blue-600">Back to login</a>
            </form>
        </div>
        );
    }

export default ResetPass;