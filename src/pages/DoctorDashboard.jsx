// src/pages/DoctorDashboard.jsx
import React, { useEffect, useState, useContext } from "react";
import  api  from "../lib/api";
import { AuthContext } from "../context/AuthContext";

export default function DoctorDashboard() {
  const { token, logout } = useContext(AuthContext);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await api.getPatients(token);
        setPatients(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPatients();
  }, [token]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Doctor Dashboard</h2>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md">
          Logout
        </button>
      </div>
      <table className="w-full border-collapse bg-white rounded-lg shadow">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Photo</th>
            <th className="p-3">Name</th>
            <th className="p-3">Age</th>
            <th className="p-3">Gender</th>
            <th className="p-3">History</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-3">
                {p.photo ? (
                  <img src={`http://127.0.0.1:8000${p.photo}`} alt="Patient" className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td className="p-3">{p.user.username}</td>
              <td className="p-3">{p.age}</td>
              <td className="p-3">{p.gender}</td>
              <td className="p-3">{p.medical_history}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
