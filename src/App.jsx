
import React from 'react'
import Router from './components/Router'


export default function App() {
return <Router />
}




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import DoctorDashboard from "./pages/DoctorDashboard";
// import ProtectedRoute from "./components/ProtectedRoute";

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
        //   <Route path="/login" element={<LoginPage />} />
        //   <Route path="/register" element={<RegisterPage />} />
        //   <Route
        //     path="/dashboard"
        //     element={
        //       <ProtectedRoute>
        //         <DoctorDashboard />
        //       </ProtectedRoute>
        //     }
        //   />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }
