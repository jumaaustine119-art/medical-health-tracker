import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-blue-50 to-white text-gray-800 px-6 text-center">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-blue-800 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to <span className="text-blue-600">Health Record Tracker</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Manage, store, and access your health data anytime, anywhere.  
          Our platform bridges patients and doctors securely —  
          empowering smarter healthcare decisions.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
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
        </motion.div>

        <motion.div
          className="mt-16 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p>© {new Date().getFullYear()} Health Record Tracker</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
