// // src/components/ProtectedRoute.jsx
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const { token } = useContext(AuthContext);
//   return token ? children : <Navigate to="/login" />;
// }
// /src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
