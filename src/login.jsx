// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./Firebase";
// import { useNavigate } from "react-router-dom";
// import {
//   HiMail,
//   HiLockClosed,
//   HiEye,
//   HiEyeOff,
// } from "react-icons/hi";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("Login success");
//       navigate("/Dashboard");
//     } catch (error) {
//       alert("Login failed: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-blue-200">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
//         <div className="text-center mb-8">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
//             alt="Logo"
//             className="mx-auto w-16 mb-4"
//           />
//           <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
//           <p className="text-gray-500">Login to your account</p>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-5">
//           {/* Email Input */}
//           <div className="relative">
//             <HiMail className="absolute left-3 top-3.5 text-gray-400 text-lg" />
//             <input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               required
//             />
//           </div>

//           {/* Password Input with Show/Hide */}
//           <div className="relative">
//             <HiLockClosed className="absolute left-3 top-3.5 text-gray-400 text-lg" />
//             <input
//               type={showPassword ? "text" : "password"}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               required
//             />
//             <div
//               className="absolute right-3 top-3.5 text-gray-400 text-lg cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <HiEyeOff /> : <HiEye />}
//             </div>
//           </div>

//           {/* Login Button with Loader */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded-lg transition font-semibold ${
//               loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
//             }`}
//           >
//             {loading ? (
//               <span className="loader border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
//             ) : (
//               "Login"
//             )}
//           </button>

//           {/* Register Redirect Button */}
//           <button
//             type="button"
//             onClick={() => navigate("/register")}
//             className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
//           >
//             Create Account
//           </button>
//         </form>

//         <p className="text-center text-xs text-gray-400 mt-6">
//           &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import {
  HiMail,
  HiLockClosed,
  HiEye,
  HiEyeOff,
} from "react-icons/hi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      setTimeout(() => navigate("/Dashboard"), 2000);
    } catch (error) {
      toast.error(`Login Failed: ${error.message}`, {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-blue-200">
      <ToastContainer />
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
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <div
              className="absolute right-3 top-3.5 text-gray-400 text-lg cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded-lg transition font-semibold ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <span className="loader border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
            ) : (
              "Login"
            )}
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
