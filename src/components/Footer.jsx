// import React from "react";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200 py-6">
//       <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center text-sm text-gray-600 px-6">
//         <p>© 2025 HealthRecordTracker Inc.</p>
//         <div className="flex gap-6">
//           <Link to="/terms" className="hover:text-[#2f6fb3] transition-colors">
//             Terms
//           </Link>
//           <Link
//             to="/privacy"
//             className="hover:text-[#2f6fb3] transition-colors"
//           >
//             Privacy Policy
//           </Link>
//           <Link
//             to="/contact"
//             className="hover:text-[#2f6fb3] transition-colors"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
return (
<footer className="px-8 py-6 flex items-center justify-between text-sm text-slate-500">
<div>© {new Date().getFullYear()} HealthRecordTracker Inc.</div>
<div className="space-x-4">
<Link to="/terms">Terms</Link>
<Link to="/privacy">Privacy Policy</Link>
<Link to="/contact">Contact Us</Link>
</div>
</footer>
)
}