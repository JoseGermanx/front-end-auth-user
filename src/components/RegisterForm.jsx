
import React, { useState } from 'react';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        if (name === '' || email === '' || password === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        e.preventDefault();
        const response = await fetch('http://localhost:3021/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        if (data.error) {
            alert(data.message);
        } else {
            alert('Usuario registrado correctamente');
            setName('');
            setEmail('');
            setPassword('');
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Register</h2>
                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-4 border border-blue-300 rounded"
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border border-blue-300 rounded"
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-6 border border-blue-300 rounded"
                />
                <button type='submit' className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
                <a href='/login' className="text-blue-500 hover:underline mt-4 block text-center">Have a account?</a>

            </form>
        </div>
    );
    };

export default RegisterForm;