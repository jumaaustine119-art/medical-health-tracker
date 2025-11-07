

// // // src/pages/Login.jsx
// // import React from 'react';
// // import {Link} from 'react-router-dom'

// // function Login() {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
// //         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Log In</h2>
// //         <form className="space-y-4">
// //           <input
// //             type="email"
// //             placeholder="Email Address"
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
// //             required
// //           />
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
// //           >
// //             Sign In
// //           </button>
// //         </form>
// //         <p className="mt-4 text-center text-sm text-gray-600">
// //           New user? <Link to="/Sign"  className="text-blue-600 hover:underline">Create an account</Link>
// //         </p>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;



// import image from "../assets/images/medical-clinic 1.svg";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function Login() {
//   // form state
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);
  
//   // error states
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Reset error messages
//     setEmailError("");
//     setPasswordError("");

//     // Validate fields
//     let valid = true;
//     if (!email.trim()) {
//       setEmailError("This field is required");
//       valid = false;
//     }
//     if (!password.trim()) {
//       setPasswordError("This field is required");
//       valid = false;
//     }

//     // If any field is empty, stop submission
//     if (!valid) return;

//     const payload = {
//       email: email.trim(),
//       password,
//       remember,
//       submittedAt: new Date().toISOString(),
//     };

//     // 1) Log to console
//     // console.log("Login form submitted:", payload);
//       //  const url="http://127.0.0.1:8000/api/login/"
//     const options={
//        method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//     },
//     body:JSON.stringify(payload)

//   };
//   fetch (url,options).then((res)=>res.json()).then((data)=>{
//     console.log(data)

//   if (data.access_token){
  
// localStorage.setItem('user', JSON.stringify({
//   access_token:data.access_token,
//   refresh_token:data.access_token

// }))
   
  
// }

//   }).catch(console.error()
//   )

    
//     // 2 Save the latest single user object
//     // try {
//     //   localStorage.setItem("clozzet_user", JSON.stringify(payload));

//     //   // 3) Also append to an array of saved users (history)
//     //   const raw = localStorage.getItem("clozzet_users");
//     //   const users = raw ? JSON.parse(raw) : [];
//     //   users.push(payload);
//     //   localStorage.setItem("clozzet_users", JSON.stringify(users));
//     // } catch (err) {
//     //   console.error("Failed to save to localStorage:", err);
//     // }

//     // // optional: clear password field after submit for security
//     // setPassword("");
//   };

//   return (
//     <div className="flex object-cover">
//       <img src={image} alt="Login" className="w-270 h-200 ml-4 object-cover" />

//       <div className="flex-col ml-20">
//         <div className="text-4xl font-bold mt-4 pl-4 pb-4 ml-12">
//           <p>Login To Your Account</p>
//         </div>

//         <form onSubmit={handleSubmit} className="mr-8">
//           {/* Email input */}
//           <div className="container flex items-center rounded-full border-2 mt-6 h-20 w-150">
//             <div className="ml-6"></div>
//             <input
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
//               type="email"
//               placeholder="Email Address"
//             />
//           </div>
//           {/* Email error message */}
//           {emailError && (
//             <div className="text-red-500 mt-2 ml-6 text-xl">
//               {emailError}
//             </div>
//           )}

//           {/* Password input */}
//           <div className="container flex items-center rounded-full border-2 mt-12 h-20 w-150">
//             <div className="ml-6"></div>
//             <input
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
//               type="password"
//               placeholder="Password"
//             />
//           </div>
//           {/* Password error message */}
//           {passwordError && (
//             <div className="text-red-500 mt-2 ml-6 text-xl">
//               {passwordError}
//             </div>
//           )}

//           {/* Remember me checkbox */}
//           <div className="flex mt-8 ml-6 text-2xl">
//             <div className="flex mt-8 ml-6 items-center">
//               <input
//                 type="checkbox"
//                 id="remember"
//                 checked={remember}
//                 onChange={(e) => setRemember(e.target.checked)}
//                 className="w-4 h-4 mr-2"
//               />
//               <label htmlFor="remember" className="mr-8">
//                 Remember Me
//               </label>
//               <a href="#" className="ml-30 text-sky-400">
//                 Forgot Password?
//               </a>
//             </div>
//           </div>

//           {/* Submit button */}
//           <button
//             type="submit"
//             className="flex items-center justify-center rounded-full border-2 mt-12 h-20 w-150 bg-sky-400 text-white text-2xl font-bold"
//           >
//             Sign In
//           </button>
//         </form>

//         <hr className="mt-6" />

//         {/* Google login button */}
//         <button
//           type="button"
//           className="flex items-center justify-center rounded-full border-2 mt-12 h-20 w-150 text-blue-500 text-2xl font-bold"
//           onClick={() => console.log("Google login clicked (not implemented)")}
//         >
//           Log In With Google
//         </button>

//         {/* Sign-up link */}
//         <div className="flex mt-8 ml-6 text-2xl gap-4">
//           <p>Don't Have An Account Yet?</p>
//           <Link to="/sign" className="text-sky-400">
//             Sign Up Free
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login; 



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setMessage("⚠️ Please fill in both fields.");
      return;
    }

    // Retrieve stored user data
    const savedUser = JSON.parse(localStorage.getItem("healthUser"));

    if (!savedUser) {
      setMessage("⚠️ No user found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      console.log("✅ User Logged In:", savedUser);

      // Save login state
      localStorage.setItem("isLoggedIn", true);

      setMessage("🎉 Login successful! Redirecting to Home...");
      setTimeout(() => navigate("/"), 2000);
    } else {
      setMessage("❌ Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Welcome Back
        </h1>

        {message && (
          <p
            className={`text-center mb-4 font-medium ${
              message.includes("🎉")
                ? "text-green-600"
                : message.includes("⚠️")
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/sign")}
            className="text-blue-700 font-medium cursor-pointer hover:underline"
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
