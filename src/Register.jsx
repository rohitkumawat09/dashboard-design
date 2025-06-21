// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("Registration successful! Please login.");
//       navigate("/"); 
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleRegister}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>

//         <input
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />

//         <input
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//         >
//           Register
//         </button>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <span
//             className="text-blue-600 cursor-pointer hover:underline"
//             onClick={() => navigate("/")}
//           >
//             Login
//           </span>

           
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { HiMail, HiLockClosed } from "react-icons/hi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful! Please login.");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 via-white to-green-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
            alt="Logo"
            className="mx-auto w-16 mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 text-sm">Start your journey with us</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="relative">
            <HiMail className="absolute left-3 top-3.5 text-gray-400 text-lg" />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
          </div>

          <div className="relative">
            <HiLockClosed className="absolute left-3 top-3.5 text-gray-400 text-lg" />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </p>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
