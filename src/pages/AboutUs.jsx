// import React from "react";

// function AboutUs() {
//   return (
//     <div className="p-8 min-h-[70vh]">
//       <h1 className="text-4xl font-bold mb-4">About Us</h1>
//       <p className="text-gray-700 mb-2">
//         Health Record Tracker helps clinics and patients manage medical
//         information easily. This demo app shows patient profiles, medical
//         history, and a simple routing/layout structure built with React and
//         Tailwind.
//       </p>
//       <p className="text-gray-700">Built for educational purposes.</p>
//     </div>
//   );
// }

// export default AboutUs;


// src/pages/AboutUs.jsx
import React from 'react';

function AboutUs() {
  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About the Health Record Tracker</h1>
      <p className="text-gray-600 leading-relaxed">
        This platform is dedicated to securely managing personal health records, empowering patients with easy access to their medical history, diagnoses, and treatment plans. Our goal is to bridge the gap between patients and healthcare providers through transparent and organized digital records.
      </p>
      <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Our Mission</h3>
      <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
        <li>To provide a secure and private platform for all users.</li>
        <li>To simplify health data management and sharing.</li>
        <li>To improve health outcomes through informed decision-making.</li>
      </ul>
    </div>
  );
}

export default AboutUs;