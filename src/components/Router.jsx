import React from 'react'
import DoctorDashboard from "./DoctorDashborad"
import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/Contact-Us'
import Login from '../pages/Login'
import PatientProfilePage from '../PatientProfilePage'
import RecordUploadPage from './RecordUploadPage'
import NotFoundPage from './NotFoundPage'
import Terms from '../pages/Terms'
import Privacy from '../pages/Privacy'
import Sign from '../pages/Sign'

export default function Router() {
return (
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Home />} />
<Route path="about" element={<AboutUs />} />
<Route path="contact" element={<ContactUs />} />
<Route path="login" element={<Login />} />
<Route path="patient/:id" element={<PatientProfilePage />} />
<Route path="upload" element={<RecordUploadPage />} />
<Route path="terms" element={<Terms />} />
<Route path="privacy" element={<Privacy />} />
<Route path="*" element={<NotFoundPage />} />
<Route path="sign" element={<Sign />} />
<Route path="/doctor" element={<DoctorDashboard />} />

</Route>
</Routes>
)
}



// import React from "react";
// // import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "../context/AuthContext";

// // Layout pages
// import Layout from "../pages/Layout";
// import Home from "../pages/Home";
// import AboutUs from "../pages/AboutUs";
// import ContactUs from "../pages/Contact-Us";
// import Terms from "../pages/Terms";
// import Privacy from "../pages/Privacy";
// import NotFoundPage from "./NotFoundPage";

// // Auth pages
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";
// import ProtectedRoute from "./ProtectedRoute";

// // Dashboard & other features
// import DoctorDashboard from "../pages/DoctorDashboard";
// import PatientProfilePage from "../PatientProfilePage";
// import RecordUploadPage from "./RecordUploadPage";
// import Sign from "../pages/Sign";

// export default function AppRouter() {
//   return (
//     <AuthProvider>
//       {/* <BrowserRouter> */}
//         <Routes>
//           {/* Public Layout Routes */}
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<AboutUs />} />
//             <Route path="contact" element={<ContactUs />} />
//             <Route path="terms" element={<Terms />} />
//             <Route path="privacy" element={<Privacy />} />
//             <Route path="sign" element={<Sign />} />
//             <Route path="patient/:id" element={<PatientProfilePage />} />
//             <Route path="upload" element={<RecordUploadPage />} />
//           </Route>

//           {/* Authentication Routes */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />

//           {/* Protected Doctor Dashboard */}
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <DoctorDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* 404 fallback */}
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       {/* </BrowserRouter> */}
//     </AuthProvider>
//   );
// }
