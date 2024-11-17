
import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Email and password are required');
            return;
        }
        const response = await fetch('http://localhost:3021/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            alert('Login successful');
            console.log(data);
            setEmail('');
            setPassword('');
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Login</h2>
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
                <button type='submit' className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
                <a href="/register" className="block text-center mt-4 text-blue-500 hover:text-blue-600">Create account</a>
                <a href='/reset-password' className="text-blue-500 hover:underline mt-4 block text-center">Forgot password?</a>
            </form>
            
        </div>
    );
}

export default Login;
