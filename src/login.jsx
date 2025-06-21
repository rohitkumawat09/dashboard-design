// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("Login success");
//       navigate("/Dashboard"); 
//     } catch (error) {
//       alert("Login failed: " + error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

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
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Login
//         </button>

//         <button
//           type="button"
//           className="w-full bg-red-600 text-white py-2 mt-4 rounded hover:bg-green-700 transition"
//           onClick={() => navigate("/register")}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { HiMail, HiLockClosed } from "react-icons/hi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login success");
      navigate("/Dashboard");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-blue-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
            alt="Logo"
            className="mx-auto w-16 mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500">Login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <HiMail className="absolute left-3 top-3.5 text-gray-400 text-lg" />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div className="relative">
            <HiLockClosed className="absolute left-3 top-3.5 text-gray-400 text-lg" />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
