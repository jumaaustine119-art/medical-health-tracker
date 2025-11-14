// // src/pages/DoctorDashboard.jsx
// import React, { useEffect, useState, useContext } from "react";
// import  api  from "../lib/api";
// import { AuthContext } from "../context/AuthContext";

// export default function DoctorDashboard() {
//   const { token, logout } = useContext(AuthContext);
//   const [patients, setPatients] = useState([]);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const data = await api.getPatients(token);
//         setPatients(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchPatients();
//   }, [token]);

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Doctor Dashboard</h2>
//         <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md">
//           Logout
//         </button>
//       </div>
//       <table className="w-full border-collapse bg-white rounded-lg shadow">
//         <thead className="bg-gray-100 text-left">
//           <tr>
//             <th className="p-3">Photo</th>
//             <th className="p-3">Name</th>
//             <th className="p-3">Age</th>
//             <th className="p-3">Gender</th>
//             <th className="p-3">History</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((p) => (
//             <tr key={p.id} className="border-t">
//               <td className="p-3">
//                 {p.photo ? (
//                   <img src={`http://127.0.0.1:8000${p.photo}`} alt="Patient" className="w-12 h-12 rounded-full object-cover" />
//                 ) : (
//                   <span>No Image</span>
//                 )}
//               </td>
//               <td className="p-3">{p.user.username}</td>
//               <td className="p-3">{p.age}</td>
//               <td className="p-3">{p.gender}</td>
//               <td className="p-3">{p.medical_history}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// import React, { useState } from "react";

// const DoctorDashboard = () => {
//   const [patients, setPatients] = useState(JSON.parse(localStorage.getItem("users")) || []);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [record, setRecord] = useState({ title: "", description: "" });

//   const handleAddRecord = () => {
//     if (!selectedPatient || !record.title || !record.description) {
//       alert("Please fill all fields");
//       return;
//     }

//     const newRecord = {
//       ...record,
//       date: new Date().toLocaleDateString(),
//       patient: selectedPatient,
//     };

//     const existing = JSON.parse(localStorage.getItem("medicalRecords")) || [];
//     localStorage.setItem("medicalRecords", JSON.stringify([...existing, newRecord]));

//     alert("Record added successfully!");
//     setRecord({ title: "", description: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-8">
//         <h1 className="text-4xl font-bold text-blue-800 mb-8">Doctor Dashboard 🩺</h1>

//         {/* Patient List */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">Select a Patient</h2>
//           <select
//             value={selectedPatient || ""}
//             onChange={(e) => setSelectedPatient(e.target.value)}
//             className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="">-- Choose Patient --</option>
//             {patients.map((p, i) => (
//               <option key={i} value={p.fullName}>
//                 {p.fullName} ({p.email})
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Add Record Form */}
//         <div className="bg-blue-50 p-6 rounded-xl">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">Add Medical Record</h2>

//           <input
//             type="text"
//             placeholder="Record Title"
//             value={record.title}
//             onChange={(e) => setRecord({ ...record, title: e.target.value })}
//             className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />

//           <textarea
//             placeholder="Record Description"
//             value={record.description}
//             onChange={(e) => setRecord({ ...record, description: e.target.value })}
//             rows="4"
//             className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           ></textarea>

//           <button
//             onClick={handleAddRecord}
//             className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
//           >
//             Add Record
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorDashboard;


import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DoctorDashboard = () => {
  const { user } = useContext(AuthContext);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [records, setRecords] = useState({});
  const [formData, setFormData] = useState({
    diagnosis: "",
    medication: "",
    instructions: "",
  });

  // ✅ Load all patients (role === "patient") and existing records
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedRecords = JSON.parse(localStorage.getItem("patientRecords")) || {};
    setPatients(storedUsers.filter((u) => u.role === "patient"));
    setRecords(storedRecords);
  }, []);

  // ✅ Save updated records to localStorage when they change
  useEffect(() => {
    localStorage.setItem("patientRecords", JSON.stringify(records));
  }, [records]);

  const handleSelectPatient = (email) => {
    setSelectedPatient(email);
    const patientRecord = records[email] || {
      diagnosis: "",
      medication: "",
      instructions: "",
    };
    setFormData(patientRecord);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    if (!selectedPatient) return alert("Select a patient first!");
    const updatedRecords = {
      ...records,
      [selectedPatient]: { ...formData, updatedBy: user.name },
    };
    setRecords(updatedRecords);
    alert("✅ Record saved successfully!");
  };

  const handleDelete = () => {
    if (!selectedPatient) return alert("Select a patient first!");
    const updatedRecords = { ...records };
    delete updatedRecords[selectedPatient];
    setRecords(updatedRecords);
    setFormData({ diagnosis: "", medication: "", instructions: "" });
    alert("🗑️ Record deleted.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          👩‍⚕️ Doctor Dashboard
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Welcome, <span className="font-semibold">{user?.name}</span>  
          <br />Manage patient diagnoses and prescriptions here.
        </p>

        {/* Patient selection */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              Registered Patients
            </h2>
            <ul className="border rounded-lg divide-y divide-gray-200 bg-gray-50">
              {patients.length === 0 ? (
                <li className="p-3 text-gray-500 text-center">No patients registered yet.</li>
              ) : (
                patients.map((p) => (
                  <li
                    key={p.email}
                    className={`p-3 cursor-pointer hover:bg-blue-100 ${
                      selectedPatient === p.email ? "bg-blue-200 font-semibold" : ""
                    }`}
                    onClick={() => handleSelectPatient(p.email)}
                  >
                    {p.name} ({p.email})
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Record form */}
          <div className="md:w-2/3 bg-gray-50 rounded-lg p-6 shadow-inner">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              {selectedPatient
                ? `Patient: ${patients.find((p) => p.email === selectedPatient)?.name}`
                : "Select a patient to view or edit records"}
            </h2>

            {selectedPatient && (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Diagnosis
                    </label>
                    <textarea
                      name="diagnosis"
                      value={formData.diagnosis}
                      onChange={handleChange}
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      rows="2"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Medication
                    </label>
                    <textarea
                      name="medication"
                      value={formData.medication}
                      onChange={handleChange}
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      rows="2"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Instructions
                    </label>
                    <textarea
                      name="instructions"
                      value={formData.instructions}
                      onChange={handleChange}
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      rows="3"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={handleSave}
                    className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
                  >
                    💾 Save
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
