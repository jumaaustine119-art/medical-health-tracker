// src/lib/api.js

const BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000/api";


async function request(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    ...opts,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) return res.json();
  return null;
}

export default {
  // Patients
  getPatients: () => request("/patients/"),
  getPatient: (id) => request(`/patients/${id}/`),

  // Records
  getPatientRecords: (patientId) => request(`/patients/${patientId}/records/`),
  createRecord: (payload) => request("/records/", { method: "POST", body: JSON.stringify(payload) }),
  updateRecord: (id, payload) => request(`/records/${id}/`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteRecord: (id) => request(`/records/${id}/`, { method: "DELETE" }),
};



// // src/api.js
// const BASE_URL = "http://127.0.0.1:8000/api";

// async function request(endpoint, method = "GET", body = null, token = null, isForm = false) {
//   const headers = {};
//   if (!isForm) headers["Content-Type"] = "application/json";
//   if (token) headers["Authorization"] = `Bearer ${token}`;

//   const response = await fetch(`${BASE_URL}${endpoint}`, {
//     method,
//     headers,
//     body: body ? (isForm ? body : JSON.stringify(body)) : null,
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP Error: ${response.status}`);
//   }

//   return await response.json();
// }

// export const api = {
//   login: (username, password) =>
//     request("/token/", "POST", { username, password }),

//   register: (userData) =>
//     request("/register/", "POST", userData),

//   getPatients: (token) =>
//     request("/patients/", "GET", null, token),
// };
