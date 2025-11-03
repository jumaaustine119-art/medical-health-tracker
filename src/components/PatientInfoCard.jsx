// import React from "react";

// function PatientInfoCard({ patient }) {
//   const placeholder = "";

//   return (
//     <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center gap-8 w-full">
//       <img
//         src={patient.profilePicture || "https://placekitten.com/200/200"}
//         alt={patient.name}
//         className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
//       />
//       <div>
//         <h2 className="text-3xl font-bold text-gray-800 mb-2">
//           {patient.name}
//         </h2>
//         <p className="text-gray-700 text-lg mb-2">
//           Age: <span className="font-medium">{patient.age} years</span>
//         </p>
//         <p className="text-gray-700 text-lg">
//           Sex: <span className="font-medium">{patient.sex}</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default PatientInfoCard;

import React from 'react'


export default function PatientInfoCard({ patient }) {
return (
<div className="card flex items-center gap-6">
<img src={patient.avatar} alt="avatar" className="avatar" />
<div>
<h2 className="text-2xl font-bold">{patient.name}</h2>
<div className="text-sm text-slate-600">Age: {patient.age} years</div>
<div className="text-sm text-slate-600">Sex: {patient.sex}</div>
</div>
</div>
)
}
