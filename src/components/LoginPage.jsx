// import React from "react";

// const LoginPage = () => {
//   return (
//     <div>
//       <h1>Login Page</h1>
//     </div>
//   );
// };

// export default LoginPage;


// src/pages/Login.jsx (Simplified for demonstration)
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AUTH_URL = 'http://127.0.0.1:8000/api/auth/token/'; // Django DRF Simple JWT endpoint

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // 1. Send credentials to Django
      const response = await axios.post(AUTH_URL, {
        email: email, // Use 'username' if your Django setup requires it
        password: password,
      });

      // 2. Extract and store the JWT access token
      const { access, refresh } = response.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // 3. Navigate to the Home Page (Patient Profile) upon success
      navigate('/'); 
      
    } catch (err) {
      console.error("Login failed:", err);
      // Display a user-friendly error message
      setError('Login failed. Check your email and password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Log In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;