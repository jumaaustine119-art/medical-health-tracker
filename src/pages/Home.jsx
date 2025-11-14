// import React from "react";
// import Sidebar from "../components/Sidebar";
// import PatientInfoCard from "../components/PatientInfoCard";
// import MedicalHistoryTable from "../components/MedicalHistoryTable";

// const patientData = {
//   name: "Austine Kizito",
//   age: 29,
//   sex: "Male",
// };

// const medicalHistoryData = [
//   {
//     date: "12 Mar 2025",
//     doctor: "Dr. Smith",
//     diagnosis: "Flu",
//     treatment: "Antiviral medication",
//   },
//   {
//     date: "5 Sep 2024",
//     doctor: "Dr. Lee",
//     diagnosis: "Hypertension",
//     treatment: "Lisinopril",
//   },
//   {
//     date: "16 Jul 2023",
//     doctor: "Dr. Jones",
//     diagnosis: "Allergy",
//     treatment: "Antihistamines",
//   },
// ];

// function Home() {
//   return (
//     <div className="min-h-[90vh] flex items-center justify-center bg-[#f6fafd]">
//       <div className="w-full max-w-[1200px] bg-white rounded-2xl shadow p-8 flex gap-8">
        
//         <aside className="w-[320px]">
//           <Sidebar />
//         </aside>

//         <main className="flex-1 flex flex-col">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">
//             Patient Profile
//           </h2>
//           <div className="mb-8">
//             <PatientInfoCard patient={patientData} />
//           </div>
//           <div className="flex-1">
//             <MedicalHistoryTable medicalHistory={medicalHistoryData} />
//           </div>
//           <footer className="flex justify-end mt-8 text-sm text-gray-500 space-x-6">
//             <span>&copy; 2025 HealthRecordTracker Inc.</span>
//             <a href="/terms" className="hover:underline">
//               Terms
//             </a>
//             <a href="/privacy" className="hover:underline">
//               Privacy Policy
//             </a>
//             <a href="/contact" className="hover:underline">
//               Contact Us
//             </a>
//           </footer>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("healthUser"));
  const records = JSON.parse(localStorage.getItem("medicalRecords")) || [];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("healthUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-8 mt-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Welcome, {user?.fullName || "Guest"} 👋
        </h1>
        <p className="text-gray-600 mb-8">
          This is your personalized dashboard — view your latest medical records and updates.
        </p>

        {/* Medical Records Section */}
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Your Medical Records</h2>
          {records.length > 0 ? (
            <ul className="space-y-3">
              {records.map((rec, i) => (
                <li key={i} className="bg-white shadow p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold">{rec.title}</p>
                  <p className="text-sm text-gray-600">{rec.date}</p>
                  <p className="text-gray-700 mt-2">{rec.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No medical records available yet.</p>
          )}
        </div>

        <div className="mt-10 text-right">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

