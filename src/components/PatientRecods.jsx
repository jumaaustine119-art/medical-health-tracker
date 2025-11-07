// src/components/doctor/PatientRecords.jsx
import React, { useEffect, useState } from "react";
import api from "../lib/api";
import RecordForm from "./RecordForm";

export default function PatientRecords({ patient, refreshPatients }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchRecords = () => {
    setLoading(true);
    api.getPatientRecords(patient.id).then((r) => {
      setRecords(r || []);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchRecords();
  }, [patient]);

  const handleDelete = async (recordId) => {
    if (!window.confirm("Delete this record?")) return;
    await api.deleteRecord(recordId);
    fetchRecords();
    refreshPatients();
  };

  const handleSave = async (payload) => {
    if (editingRecord) {
      await api.updateRecord(editingRecord.id, payload);
      setEditingRecord(null);
    } else {
      await api.createRecord({ ...payload, patient: patient.id });
    }
    setShowForm(false);
    fetchRecords();
    refreshPatients();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-semibold">{patient.full_name || `${patient.first_name} ${patient.last_name}`}</h3>
          <div className="text-sm text-gray-500">Patient ID: {patient.id}</div>
        </div>

        <div>
          <button
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
            onClick={() => {
              setEditingRecord(null);
              setShowForm((s) => !s);
            }}
          >
            + Add Record
          </button>
        </div>
      </div>

      {showForm && (
        <RecordForm
          initial={editingRecord}
          onCancel={() => { setShowForm(false); setEditingRecord(null); }}
          onSave={handleSave}
        />
      )}

      {loading ? (
        <div>Loading records...</div>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full text-left table-auto">
            <thead>
              <tr className="border-b">
                <th className="p-2">Date</th>
                <th className="p-2">Doctor</th>
                <th className="p-2">Diagnosis</th>
                <th className="p-2">Medications</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec) => (
                <tr key={rec.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{rec.date ? new Date(rec.date).toLocaleString() : ""}</td>
                  <td className="p-2">{rec.doctor_name || rec.doctor}</td>
                  <td className="p-2">{rec.diagnosis}</td>
                  <td className="p-2 whitespace-pre-wrap">{rec.medications}</td>
                  <td className="p-2">
                    <button
                      className="mr-2 text-sm"
                      onClick={() => {
                        setEditingRecord(rec);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                    <button className="text-sm text-red-600" onClick={() => handleDelete(rec.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {records.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-gray-500">No records yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
