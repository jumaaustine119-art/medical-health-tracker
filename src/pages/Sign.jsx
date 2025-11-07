// import { Link } from "react-router-dom";
// import image2 from "../assets/images/medical-clinic 1.svg";
// import { useState } from "react";

// function Sign() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [formErrors, setFormErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate fields
//     const errors = {};
//     if (!name.trim()) errors.name = "This field is required";
//     if (!email.trim()) errors.email = "This field is required";
//     if (!phone.trim()) errors.phone = "This field is required";
//     if (!address.trim()) errors.address = "This field is required";
//     if (!password) errors.password = "This field is required";
//     if (!confirmPassword) errors.confirmPassword = "This field is required";

//     if (password && confirmPassword && password !== confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     // If there are errors, show them and stop submission
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     // If no errors, clear errors and continue
//     setFormErrors({});

//     const payload = {
//       name: name.trim(),
//       email: email.trim(),
//       phone_number: phone.trim(),
//       address: address.trim(),
//       password,
//       // createdAt: new Date().toISOString(),
//     };

//     console.log("Sign-up form submitted:", payload);

//     // const url="http://127.0.0.1:8000/api/register/"
//     const options={
//        method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//     },
//     body:JSON.stringify(payload)

//   };
//   fetch (url,options).then((res)=>res.json()).then((data)=>{
//     console.log(data)
//   }).catch(console.error()
//   )


//     try {
//       localStorage.setItem("clozzet_signup", JSON.stringify(payload));
//       const raw = localStorage.getItem("clozzet_signups");
//       const signups = raw ? JSON.parse(raw) : [];
//       signups.push(payload);
//       localStorage.setItem("clozzet_signups", JSON.stringify(signups));
//     } catch (err) {
//       console.error("Failed to save sign-up to localStorage:", err);
//     }

//     // Clear password fields
//     setName("")
//     setEmail("")
//     setPhone("")
//     setAddress("")
//     setPassword("");
//     setConfirmPassword("");
    
//   };

//   // Common input style
//   const inputStyle =
//     "flex-1 border-0 py-1 px-4 outline-0 ml-4 ";

//   // Error text style
//   const errorStyle = "text-red-500 text-sm pl-6 mt-1";

//   return (
//     <div className="flex object-cover">
//       <div className="ml-20 flex-col">
//         <div className="text-4xl font-bold mt-8 pl-8 pb-4 ml-20">
//           <p>Create An Account</p>
//         </div>

//         <form onSubmit={handleSubmit} className="mr-6">
//           <div className="container flex items-center rounded-full border-1 mt-6 h-20 w-150">
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className={inputStyle}
//               type="text"
//               placeholder="Full Name"
//             />
//           </div>
//           {formErrors.name && <p className={errorStyle}>{formErrors.name}</p>}

//           <div className="container flex items-center rounded-full border-1 mt-6 h-20 w-150">
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={inputStyle}
              
//               type="email"
//               placeholder="Email Address"
//             />
//           </div>
//           {formErrors.email && <p className={errorStyle}>{formErrors.email}</p>}

//           <div className="container flex items-center rounded-full border-1 mt-6 h-20 w-150">
//             <input
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className={inputStyle}
//               type="tel"
//               placeholder="Phone Number"
//             />
//           </div>
//           {formErrors.phone && <p className={errorStyle}>{formErrors.phone}</p>}

//           <div className="container flex items-center rounded-full border-1 mt-6 h-20 w-150">
//             <input
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className={inputStyle}
//               type="text"
//               placeholder="Address"
//             />
//           </div>
//           {formErrors.address && <p className={errorStyle}>{formErrors.address}</p>}

//           <div className="container flex items-center rounded-full border-1 mt-6 h-20 w-150">
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={inputStyle}
//               type="password"
//               placeholder="Password"
//             />
//           </div>
//           {formErrors.password && <p className={errorStyle}>{formErrors.password}</p>}

//           <div className="container flex items-center rounded-full border-1 mt-6 h-20 w-150">
//             <input
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className={inputStyle}
//               type="password"
//               placeholder="Confirm Password"
//             />
//           </div>
//           {formErrors.confirmPassword && (
//             <p className={errorStyle}>{formErrors.confirmPassword}</p>
//           )}

//           <button
//             type="submit"
//             className="flex items-center justify-center rounded-full border-1 mt-12 h-24 w-170 bg-sky-500 text-white text-2xl font-bold"
//           >
//             Create Account
//           </button>
//         </form>

//         <hr className="mt-6" />
//         <button
//           type="button"
//           className="flex items-center justify-center rounded-full border-1 mt-12 h-20 w-160 text-sky-500 text-2xl font-bold"
//           onClick={() =>
//             console.log("Sign up with Google clicked (not implemented)")
//           }
//         >
//           Sign Up With Google
//         </button>

//         <div className="flex mt-8 ml-6 text-2xl gap-4">
//           <p>Already Have An Account?</p>
//           <Link to="/login" className="text-sky-400">
//             Log In
//           </Link>
//         </div>
//       </div>

//       <img src={image2} alt="sign" className="w-270 h-278 ml-4 object-cover" />
//     </div>
//   );
// }

// export default Sign;



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
