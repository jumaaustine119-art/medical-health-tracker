// src/components/doctor/RecordForm.jsx
import React, { useEffect, useState } from "react";

export default function RecordForm({ initial = null, onSave, onCancel }) {
  const [form, setForm] = useState({
    date: "",
    doctor_name: "",
    diagnosis: "",
    medications: "",
    notes: "",
  });

  useEffect(() => {
    if (initial) {
      setForm({
        date: initial.date ? new Date(initial.date).toISOString().slice(0, 16) : "",
        doctor_name: initial.doctor_name || "",
        diagnosis: initial.diagnosis || "",
        medications: initial.medications || "",
        notes: initial.notes || "",
      });
    } else {
      setForm((f) => ({ ...f, date: new Date().toISOString().slice(0, 16) }));
    }
  }, [initial]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const payload = { ...form, date: form.date ? new Date(form.date).toISOString() : null };
    onSave(payload);
  };

  return (
    <form onSubmit={submit} className="mb-4 p-4 border rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="flex flex-col">
          Date
          <input name="date" type="datetime-local" value={form.date} onChange={handleChange} className="mt-1 p-2 border rounded" />
        </label>

        <label className="flex flex-col">
          Doctor name
          <input name="doctor_name" value={form.doctor_name} onChange={handleChange} className="mt-1 p-2 border rounded" />
        </label>

        <label className="flex flex-col md:col-span-2">
          Diagnosis
          <input name="diagnosis" value={form.diagnosis} onChange={handleChange} className="mt-1 p-2 border rounded" />
        </label>

        <label className="flex flex-col md:col-span-2">
          Medications (one per line)
          <textarea name="medications" value={form.medications} onChange={handleChange} className="mt-1 p-2 border rounded" rows={3} />
        </label>

        <label className="flex flex-col md:col-span-2">
          Notes
          <textarea name="notes" value={form.notes} onChange={handleChange} className="mt-1 p-2 border rounded" rows={2} />
        </label>
      </div>

      <div className="mt-3 flex gap-2">
        <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white">Save</button>
        <button type="button" className="px-4 py-2 rounded border" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
