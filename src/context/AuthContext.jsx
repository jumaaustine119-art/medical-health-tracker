// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import api  from "./../lib/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    setLoading(true);
    try {
      const data = await api.login(username, password);
      setToken(data.access);
      localStorage.setItem("token", data.access);
      setUser({ username });
      localStorage.setItem("user", JSON.stringify({ username }));
      setLoading(false);
      return true;
    } catch (err) {
      console.error("Login failed:", err);
      setLoading(false);
      return false;
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      await api.register(userData);
      setLoading(false);
      return true;
    } catch (err) {
      console.error("Registration failed:", err);
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
