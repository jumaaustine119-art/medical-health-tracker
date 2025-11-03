import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PatientInfoCard from "./components/PatientInfoCard";
import MedicalHistoryTable from "./components/MedicalHistoryTable";

// mock patient data (in real app you'd fetch by id)
const MOCK_PATIENT = {
  id: "1",
  name: "Austine Kizito",
  age: 29,
  sex: "Male",
  avatar: "https://i.pravatar.cc/150?img=12",
  records: [
    {
      id: 1,
      date: "12 Mar 2025",
      doctor: "Dr. Smith",
      diagnosis: "Flu",
      treatment: "Antiviral medication",
    },
    {
      id: 2,
      date: "5 Sep 2024",
      doctor: "Dr. Lee",
      diagnosis: "Hypertension",
      treatment: "Lisinopril",
    },
    {
      id: 3,
      date: "16 Jul 2023",
      doctor: "Dr. Jones",
      diagnosis: "Allergy",
      treatment: "Antihistamines",
    },
  ],
};

function PatientProfilePage() {
  const { id } = useParams();

  // start with mock data so UI shows immediately while we try to fetch real data
  const [patient, setPatient] = useState(MOCK_PATIENT);
  const [records, setRecords] = useState(MOCK_PATIENT.records || []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if there's no id (e.g. navigating directly), keep mock
    if (!id) return;

    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    fetch(`http://127.0.0.1:8000/api/patients/${id}/`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPatient(data);
        setRecords(data.records || []);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error("Failed to fetch patient:", err);
        setError(err.message || "Failed to load patient");
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [id]);

  return (
    <div className="layout-grid grid gap-8">
      <div>
        <Sidebar patientId={patient?.id} />
      </div>

      <main className="space-y-6">
        <h1 className="text-3xl font-bold">Patient Profile</h1>

        {isLoading ? (
          <p className="text-gray-600">Loading patient...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <>
            <PatientInfoCard patient={patient} />
            <MedicalHistoryTable
              initialRecords={records}
              onChange={setRecords}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default PatientProfilePage;
