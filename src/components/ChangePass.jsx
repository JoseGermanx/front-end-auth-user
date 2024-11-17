
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';


const ChangePass = () => {
        
            const [password, setPassword] = useState('');
            const [searchParams] = useSearchParams();
            const token = searchParams.get('token');
            const navigate = useNavigate();
            
            const handleSubmit = async (e) => {
                if (!password || password === '') {
                    alert('Password is required');
                    return;
                }               
                e.preventDefault();
                const response = await fetch('http://localhost:3021/api/auth/redemption-token?token=' + token, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ password }),
                });
                const data = await response.json();
                if (response.ok) {
                    alert('Password changed successfully');
                    console.log(data);
                    setPassword('');
                    navigate('/thanks');
                } else {
                    alert(data.message);
                }
            };
        
            return (
                <div className="flex items-center justify-center min-h-screen bg-blue-100">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Change Password</h2>
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-4 border border-blue-300 rounded"
                    />
                    <button type='submit' className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Reset</button>
                </form>
            </div>
            );
        }

export default ChangePass;