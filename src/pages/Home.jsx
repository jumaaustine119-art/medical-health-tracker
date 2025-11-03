import React from "react";
import Sidebar from "../components/Sidebar";
import PatientInfoCard from "../components/PatientInfoCard";
import MedicalHistoryTable from "../components/MedicalHistoryTable";

const patientData = {
  name: "Austine Kizito",
  age: 29,
  sex: "Male",
};

const medicalHistoryData = [
  {
    date: "12 Mar 2025",
    doctor: "Dr. Smith",
    diagnosis: "Flu",
    treatment: "Antiviral medication",
  },
  {
    date: "5 Sep 2024",
    doctor: "Dr. Lee",
    diagnosis: "Hypertension",
    treatment: "Lisinopril",
  },
  {
    date: "16 Jul 2023",
    doctor: "Dr. Jones",
    diagnosis: "Allergy",
    treatment: "Antihistamines",
  },
];

function Home() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#f6fafd]">
      <div className="w-full max-w-[1200px] bg-white rounded-2xl shadow p-8 flex gap-8">
        
        <aside className="w-[320px]">
          <Sidebar />
        </aside>

        <main className="flex-1 flex flex-col">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Patient Profile
          </h2>
          <div className="mb-8">
            <PatientInfoCard patient={patientData} />
          </div>
          <div className="flex-1">
            <MedicalHistoryTable medicalHistory={medicalHistoryData} />
          </div>
          <footer className="flex justify-end mt-8 text-sm text-gray-500 space-x-6">
            <span>&copy; 2025 HealthRecordTracker Inc.</span>
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Home;
