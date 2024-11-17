
import React from 'react';

const Home = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-4 text-blue-700">Bienvenido a la app de gestión de autenticación</h1>
                <p className="text-blue-600 mb-4">Esta aplicación te permite gestionar el inicio de sesión, registro y recuperación de contraseña de tus usuarios.</p>
                <p className="text-blue-600">Para comenzar, puedes <a href="/login" className="text-blue-700 underline">iniciar sesión</a>, <a href="/register" className="text-blue-700 underline">registrarte</a> o <a href="/forgot-password" className="text-blue-700 underline">recuperar tu contraseña</a>.</p>
            </div>
        </div>
    );
}

export default Home;