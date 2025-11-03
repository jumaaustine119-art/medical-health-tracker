import React from 'react'
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
</Route>
</Routes>
)
}