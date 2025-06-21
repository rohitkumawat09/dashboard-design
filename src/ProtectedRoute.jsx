
// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./Firebase";
// import "./App.css"; 

// const ProtectedRoute = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [checking, setChecking] = useState(true);
//   const [delayDone, setDelayDone] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDelayDone(true);
//     }, 2500); 

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       setUser(firebaseUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (!delayDone) {
//     return (
//       <div className="loader-wrapper">
//         <div className="loader-rocket"></div>
//       </div>
//     );
//   }

//   if (!user) return <Navigate to="/" replace />;
//   return children;
// };

// export default ProtectedRoute;

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import "./App.css";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // अगर पहले से login किया हुआ है (refresh पर) तो loader ना दिखाओ
        const isFirstLogin = sessionStorage.getItem("firstLoginShown");

        if (!isFirstLogin) {
          // पहली बार login पर loader दिखाओ
          setShowLoader(true);
          sessionStorage.setItem("firstLoginShown", "true");

          setTimeout(() => {
            setUser(firebaseUser);
            setShowLoader(false);
            setChecking(false);
          }, 2000); // Loader Duration
        } else {
          // पहले से logged-in है
          setUser(firebaseUser);
          setChecking(false);
        }
      } else {
        // User not logged in
        setUser(null);
        setChecking(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (checking || showLoader) {
    return (
      <div className="loader-wrapper">
        <div className="loader-rocket"></div>
      </div>
    );
  }

  if (!user) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;
