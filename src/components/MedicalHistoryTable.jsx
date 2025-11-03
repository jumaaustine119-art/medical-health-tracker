
import React, { useState } from "react";

export default function MedicalHistoryTable({
  initialRecords = [],
  medicalHistory = [],
  onChange,
}) {
  // Accept either `initialRecords` or the older prop name `medicalHistory` for compatibility
  const [records, setRecords] = useState(
    initialRecords && initialRecords.length
      ? initialRecords
      : medicalHistory || []
  );

  function addRecord() {
    const newRec = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      doctor: "New Doctor",
      diagnosis: "",
      treatment: "",
    };
    const next = [newRec, ...records];
    setRecords(next);
    onChange?.(next);
  }

  function updateRecord(id, field, value) {
    const next = records.map((r) =>
      r.id === id ? { ...r, [field]: value } : r
    );
    setRecords(next);
    onChange?.(next);
  }

  function removeRecord(id) {
    const next = records.filter((r) => r.id !== id);
    setRecords(next);
    onChange?.(next);
  }

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Medical History</h3>
        <div>
          <button
            onClick={addRecord}
            className="px-3 py-2 rounded bg-sky-600 text-white"
          >
            + Add
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="table-header">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Doctor</th>
              <th className="p-3 text-left">Diagnosis</th>
              <th className="p-3 text-left">Treatment</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3">
                  <input
                    value={r.date}
                    onChange={(e) => updateRecord(r.id, "date", e.target.value)}
                    className="w-full bg-transparent"
                  />
                </td>
                <td className="p-3">
                  <input
                    value={r.doctor}
                    onChange={(e) =>
                      updateRecord(r.id, "doctor", e.target.value)
                    }
                    className="w-full bg-transparent"
                  />
                </td>
                <td className="p-3">
                  <input
                    value={r.diagnosis}
                    onChange={(e) =>
                      updateRecord(r.id, "diagnosis", e.target.value)
                    }
                    className="w-full bg-transparent"
                  />
                </td>
                <td className="p-3">
                  <input
                    value={r.treatment}
                    onChange={(e) =>
                      updateRecord(r.id, "treatment", e.target.value)
                    }
                    className="w-full bg-transparent"
                  />
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => removeRecord(r.id)}
                    className="px-2 py-1 rounded bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
