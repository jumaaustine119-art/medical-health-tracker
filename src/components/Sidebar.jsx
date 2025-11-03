// import React from "react";
// import { Upload, Calendar, Search, PhoneCall } from "lucide-react"; // For icons
// import { Link } from "react-router-dom";

// function Sidebar() {
//   const sidebarItems = [
//     { to: "/upload", icon: <Upload size={20} />, text: "Upload New Record" },
//     {
//       to: "/appointments",
//       icon: <Calendar size={20} />,
//       text: "Book Appointment",
//     },
//     {
//       to: "/search",
//       icon: <Search size={20} />,
//       text: "Search Medical Facilities",
//     },
//     {
//       to: "/emergency",
//       icon: <PhoneCall size={20} />,
//       text: "Emergency Contact",
//     },
//   ];

//   return (
//     <div className="w-full max-w-[280px] flex flex-col space-y-4">
//       {sidebarItems.map((item, index) => (
//         <Link
//           key={index}
//           to={item.to}
//           className="flex items-center gap-4 bg-[#4682c3] text-white py-4 px-6 rounded-xl shadow hover:bg-[#3b71a5] transition-all duration-200"
//         >
//           <div className="bg-white/20 p-2.5 rounded-lg">
//             <span className="text-white">{item.icon}</span>
//           </div>
//           <span className="font-medium text-sm">{item.text}</span>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default Sidebar;


import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar({ patientId }) {
return (
<aside className="space-y-4">
<Link to={`/upload`} className="sidebar-btn block">📁 Upload New Record</Link>
<button className="sidebar-btn block">📅 Book Appointment</button>
<button className="sidebar-btn block">🔎 Search Medical Facilities</button>
<button className="sidebar-btn block">➕ Emergency Contact</button>
</aside>
)
}
