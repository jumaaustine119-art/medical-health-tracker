// import React from "react";
// import { Stethoscope } from "lucide-react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-[#4682c3] p-4">
//       <div className="container mx-auto flex justify-between items-center max-w-7xl px-6">
//         <div className="flex items-center space-x-2">
//           <Stethoscope className="text-white" size={24} />
//           <span className="text-xl font-bold text-white">
//             HealthRecordTracker
//           </span>
//         </div>

//         <div className="flex items-center space-x-8">
//           <Link
//             to="/"
//             className="text-white hover:text-gray-100 text-sm font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/About"
//             className="text-white hover:text-gray-100 text-sm font-medium"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="text-white hover:text-gray-100 text-sm font-medium"
//           >
//             Contact
//           </Link>
//           <Link
//             to="/Login"
//             className="bg-white text-[#4682c3] px-5 py-2 rounded-lg hover:bg-gray-50 transition duration-200 text-sm font-medium"
//           >
//             Log in
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
return (
<header className="bg-sky-700 text-white px-8 py-6 flex items-center justify-between mt-2 pl-2 mr-2">
<div className="flex items-center gap-3">
<div className="text-2xl font-semibold flex items-center gap-2">
<span className="text-3xl">🩺</span>
HealthRecordTracker
</div>
</div>
<nav className="gap-6 flex items-center">
<Link to="/doctor" className="px-3 py-2">Doctor Dashboard</Link>
<Link to="/" className="hover:underline">Home</Link>
<Link to="/about" className="hover:underline">About</Link>
<Link to="/contact" className="hover:underline">Contact</Link>
<Link to="/login" className="ml-4 px-4 py-2 bg-sky-800 rounded-full">Log in</Link>
</nav>
</header>
)
}