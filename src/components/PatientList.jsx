// src/components/doctor/PatientList.jsx
import React from "react";

export default function PatientList({ patients, onSelect, selectedPatient }) {
  return (
    <ul className="space-y-2 max-h-[60vh] overflow-auto">
      {patients.length === 0 && <li className="text-sm text-gray-500">No patients</li>}
      {patients.map((p) => (
        <li
          key={p.id}
          onClick={() => onSelect(p)}
          className={`p-3 rounded-lg cursor-pointer border ${
            selectedPatient?.id === p.id ? "border-indigo-500 bg-indigo-50" : "border-transparent hover:bg-gray-50"
          }`}
        >
          <div className="font-medium">{p.full_name || `${p.first_name} ${p.last_name}`}</div>
          <div className="text-sm text-gray-500">{p.dob ? new Date(p.dob).toLocaleDateString() : ""}</div>
        </li>
      ))}
    </ul>
  );
}
