
import React, { useState } from "react";

const DoctorDashboard = () => {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [record, setRecord] = useState({ title: "", description: "" });

  const handleAddRecord = () => {
    if (!selectedPatient || !record.title || !record.description) {
      alert("Please fill all fields");
      return;
    }

    const newRecord = {
      ...record,
      date: new Date().toLocaleDateString(),
      patient: selectedPatient,
    };

    const existing = JSON.parse(localStorage.getItem("medicalRecords")) || [];
    localStorage.setItem("medicalRecords", JSON.stringify([...existing, newRecord]));

    alert("Record added successfully!");
    setRecord({ title: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Doctor Dashboard 🩺</h1>

        {/* Patient List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Select a Patient</h2>
          <select
            value={selectedPatient || ""}
            onChange={(e) => setSelectedPatient(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Choose Patient --</option>
            {patients.map((p, i) => (
              <option key={i} value={p.fullName}>
                {p.fullName} ({p.email})
              </option>
            ))}
          </select>
        </div>

        {/* Add Record Form */}
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Add Medical Record</h2>

          <input
            type="text"
            placeholder="Record Title"
            value={record.title}
            onChange={(e) => setRecord({ ...record, title: e.target.value })}
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Record Description"
            value={record.description}
            onChange={(e) => setRecord({ ...record, description: e.target.value })}
            rows="4"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            onClick={handleAddRecord}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Add Record
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
