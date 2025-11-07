
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Layout() {
return (
<div className="app-shell">
<Navbar />
<div className="p-8">
<Outlet />
</div>
<Footer />
</div>
)
}