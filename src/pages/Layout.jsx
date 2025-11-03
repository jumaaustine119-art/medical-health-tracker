// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// function Layout({ children }) {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header>
//         <Navbar />
//       </header>
//       <main className="flex-1">{children}</main>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default Layout;


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