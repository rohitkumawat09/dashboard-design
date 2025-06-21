
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import "./App.css"; 

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const [delayDone, setDelayDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayDone(true);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  if (!delayDone) {
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

