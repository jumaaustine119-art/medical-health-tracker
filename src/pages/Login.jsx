

// src/pages/Login.jsx
import React from 'react';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Log In</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
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
        <p className="mt-4 text-center text-sm text-gray-600">
          New user? <Link to="/Sign"  className="text-blue-600 hover:underline">Create an account</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;