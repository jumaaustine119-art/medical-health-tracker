// src/components/doctor/DoctorDashboard.jsx
import React, { useEffect, useState } from "react";
import PatientList from "../components/PatientList";
import PatientRecords from "../components/PatientRecods";
import api from "../lib/api";

export default function DoctorDashboard() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getPatients().then((p) => {
      setPatients(p || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Patients</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PatientList
              patients={patients}
              onSelect={(p) => setSelectedPatient(p)}
              selectedPatient={selectedPatient}
            />
          )}
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="bg-white rounded-2xl shadow p-4">
          {!selectedPatient ? (
            <div className="text-gray-500">Select a patient to view records</div>
          ) : (
            <PatientRecords
              patient={selectedPatient}
              refreshPatients={() =>
                api.getPatients().then((p) => setPatients(p || []))
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
