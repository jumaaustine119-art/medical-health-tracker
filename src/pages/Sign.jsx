

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("⚠️ Passwords do not match!");
      return;
    }

    // Save user data to localStorage
    localStorage.setItem(
      "healthUser",
      JSON.stringify({ fullName, email, password })
    );

    console.log("✅ New User Registered:", { fullName, email });

    setMessage("🎉 Registration successful! Redirecting to Login...");

    // Redirect to Login after 2 seconds
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create an Account
        </h1>

        {message && (
          <p
            className={`text-center mb-4 font-medium ${
              message.includes("🎉") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {["fullName", "email", "password", "confirmPassword"].map((field) => (
            <div key={field}>
              <label className="block font-medium text-gray-700 mb-1 capitalize">
                {field === "confirmPassword"
                  ? "Confirm Password"
                  : field === "fullName"
                  ? "Full Name"
                  : field}
              </label>
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter your ${
                  field === "confirmPassword"
                    ? "password again"
                    : field.replace(/([A-Z])/g, " $1").toLowerCase()
                }`}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-700 font-medium cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sign;
