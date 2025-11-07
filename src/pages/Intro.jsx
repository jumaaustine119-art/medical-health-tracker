import React from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 px-6 text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
          Welcome to Health Record Tracker
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Manage, store, and access your health data anytime, anywhere.  
          Our platform empowers patients and doctors to collaborate securely —  
          because your health deserves smart technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/about")}
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold border border-blue-700 hover:bg-blue-50 transition"
          >
            Learn More
          </button>
        </div>

        <div className="mt-16 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Health Record Tracker</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
