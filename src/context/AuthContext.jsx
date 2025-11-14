// // src/context/AuthContext.jsx
// import React, { createContext, useState, useEffect } from "react";
// import api  from "./../lib/api";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);
//   const [token, setToken] = useState(() => localStorage.getItem("token"));
//   const [loading, setLoading] = useState(false);

//   const login = async (username, password) => {
//     setLoading(true);
//     try {
//       const data = await api.login(username, password);
//       setToken(data.access);
//       localStorage.setItem("token", data.access);
//       setUser({ username });
//       localStorage.setItem("user", JSON.stringify({ username }));
//       setLoading(false);
//       return true;
//     } catch (err) {
//       console.error("Login failed:", err);
//       setLoading(false);
//       return false;
//     }
//   };

//   const register = async (userData) => {
//     setLoading(true);
//     try {
//       await api.register(userData);
//       setLoading(false);
//       return true;
//     } catch (err) {
//       console.error("Registration failed:", err);
//       setLoading(false);
//       return false;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.clear();
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout, register, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save user to localStorage on change
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const login = (email, password) => {
    // Simulate role-based login
    let loggedUser;
    if (email === "doctor@example.com" && password === "123456") {
      loggedUser = { name: "Dr. John", email, role: "doctor" };
    } else {
      loggedUser = { name: "Patient", email, role: "patient" };
    }
    setUser(loggedUser);
    return loggedUser;
  };

  const signup = (name, email, password, role) => {
    const newUser = { name, email, role };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
